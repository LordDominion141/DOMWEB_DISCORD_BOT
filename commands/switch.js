import { SlashCommandBuilder } from 'discord.js';
import { activeSessions } from '../states/activeSessions.js';
import row from '../components/menu.js';

export const switchCmd = {
    data: new SlashCommandBuilder().setName('switch').setDescription('Switch to a different level'),
    async execute(interaction) {
        // 1. Clear any active session and capture the result status
        const wasCleared = activeSessions.delete(interaction.user.id);


        // 2. Set the text content dynamically based on the session status
        const responseContent = wasCleared 
            ? '💡 Session reset. Choose your new level below:' 
            : 'You did not have an active session, but you can start one now! 👍';

        // 3. Send a single unified reply that ALWAYS attaches your selection dropdown row
        await interaction.reply({
            content: responseContent,
            components: [row],
        }).catch(console.error);
    }
};
