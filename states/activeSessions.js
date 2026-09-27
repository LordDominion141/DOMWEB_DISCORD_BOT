import { MongoClient } from 'mongodb';

// Initialize MongoDB Client
// Provide a fake fallback string so local scripts like deploy-commands.js don't crash
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/dummy";
const client = new MongoClient(mongoUri);

let db;
let collection;
const isConnected = false; // Track connection status

// Cache object to mimic standard synchronous Map lookups for index.js
const sessionCache = {};

const initMongo = async () => {
    // If it's the dummy local fallback, don't try to connect
    if (mongoUri.includes("localhost")) {
        console.log("⚠️ Running in local command deployment mode. Skipping MongoDB connection.");
        return;
    }

    try {
        await client.connect();
        db = client.db('domweb_bot');
        collection = db.collection('sessions');
        console.log("🍃 MongoDB database connected successfully.");

        const cursor = collection.find({});
        const allSessions = await cursor.toArray();
        
        for (const doc of allSessions) {
            sessionCache[doc.user_id] = doc.session_data;
        }
        console.log(`Synced ${allSessions.length} user sessions from MongoDB.`);
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
};

initMongo();

// Helper to prevent crashes if DB isn't ready yet
const ensureConnected = () => {
    if (!isConnected || !collection) {
        throw new Error("MongoDB client is not connected yet. Please wait for initMongo to complete.");
    }
};

export const activeSessions = {
    has: (userId) => Object.prototype.hasOwnProperty.call(sessionCache, userId),
    
    get: (userId) => {
        const session = sessionCache[userId];
        if (!session) return null;

        // Proxy intercepts direct updates (like session.sentToday++) and autosaves to MongoDB
        return new Proxy(session, {
            set(target, prop, value) {
                target[prop] = value;
                
                try {
                    ensureConnected();
                    // Fixed: Removed the backslash before \$set
                    collection.updateOne(
                        { user_id: userId },
                        { $set: { session_data: sessionCache[userId] } },
                        { upsert: true }
                    ).catch(err => console.error("Async MongoDB update failed:", err));
                } catch (err) {
                    console.error("Proxy update blocked:", err.message);
                }

                return true;
            }
        });
    },
    
    set: async (userId, sessionData) => {
        sessionCache[userId] = sessionData;
        try {
            ensureConnected();
            // Fixed: Removed the backslash before \$set
            await collection.updateOne(
                { user_id: userId },
                { $set: { session_data: sessionData } },
                { upsert: true }
            );
        } catch (err) {
            console.error(`Failed to save session for user ${userId} to MongoDB:`, err);
        }
    },
    
    delete: async (userId) => {
        if (sessionCache[userId]) {
            delete sessionCache[userId];
            try {
                ensureConnected();
                await collection.deleteOne({ user_id: userId });
                return true;
            } catch (err) {
                console.error(`Failed to delete session for user ${userId} from MongoDB:`, err);
            }
        }
        return false;
    },
    
    // Keeps your node-cron schedule block iteration fully functional
    [Symbol.iterator]: function* () {
        for (const userId of Object.keys(sessionCache)) {
            yield [userId, this.get(userId)];
        }
    }
};
