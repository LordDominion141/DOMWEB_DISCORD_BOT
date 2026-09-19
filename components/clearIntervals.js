import { activeSessions } from "../states/activeSessions.js";

export const clearIntervals = async (interaction) => {
    const session = activeSessions.get(interaction.user.id);
     if (!session) {
            return;
    }
    try {
        
    clearInterval(session.intervalId);
        
    activeSessions.delete(interaction.user.id);
    } catch (error) {
        console.error(error);
    }

}

