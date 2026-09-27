import { MongoClient } from 'mongodb';

// Check if MONGODB_URI exists in the production environment
const mongoUri = process.env.MONGODB_URI;

let client;
let db;
let collection;
let isConnected = false; // Will properly change to true once connected

// Cache object to mimic standard synchronous Map lookups for index.js
const sessionCache = {};

const initMongo = async () => {
    // If the variable is missing completely, skip to protect local deployment scripts
    if (!mongoUri) {
        console.log("⚠️ MONGODB_URI environment variable is missing. Running in offline fallback mode.");
        return;
    }

    try {
        client = new MongoClient(mongoUri);
        await client.connect();
        
        db = client.db('domweb_bot');
        collection = db.collection('sessions');
        isConnected = true; // CRITICAL FIX: Update connection status flag
        
        console.log("🍃 MongoDB database connected successfully.");

        // Pull current states from cloud database into local memory on boot
        const cursor = collection.find({});
        const allSessions = await cursor.toArray();
        
        for (const doc of allSessions) {
            sessionCache[doc.user_id] = doc.session_data;
        }
        console.log(`Synced ${allSessions.length} user sessions from MongoDB.`);
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        isConnected = false;
    }
};

initMongo();

// Helper to check connection readiness
const ensureConnected = () => {
    if (!isConnected || !collection) {
        throw new Error("MongoDB client is not connected to the cloud cluster yet.");
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
