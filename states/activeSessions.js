import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./sessions.json');

// Helper to load sessions from the JSON file safely
const loadSessions = () => {
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data || '{}');
        }
    } catch (error) {
        console.error("Failed to load sessions from file, starting fresh:", error);
    }
    return {};
};

// Helper to save sessions to the JSON file safely
const saveSessions = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("Failed to save sessions to file:", error);
    }
};

// Initial load
const sessionsStore = loadSessions();

export const activeSessions = {
    has: (userId) => Object.prototype.hasOwnProperty.call(sessionsStore, userId),
    
    get: (userId) => {
        const session = sessionsStore[userId];
        if (!session) return null;

        // Wrap the session object in a Proxy.
        // This intercepts changes (like session.sentToday = 0) and autosaves them!
        return new Proxy(session, {
            set(target, prop, value) {
                target[prop] = value;
                saveSessions(sessionsStore);
                return true;
            }
        });
    },
    
    set: (userId, sessionData) => {
        sessionsStore[userId] = sessionData;
        saveSessions(sessionsStore);
    },
    
    delete: (userId) => {
        if (sessionsStore[userId]) {
            delete sessionsStore[userId];
            saveSessions(sessionsStore);
            return true;
        }
        return false;
    },
    
    // Mimics the entries iterator used for my node-cron schedule block
    [Symbol.iterator]: function* () {
        for (const userId of Object.keys(sessionsStore)) {
            // Re-use the get method so the cron loop elements are also proxy-wrapped and autosaved
            yield [userId, this.get(userId)];
        }
    }
};
