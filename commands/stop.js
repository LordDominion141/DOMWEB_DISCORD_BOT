import { SlashCommandBuilder } from 'discord.js';
import { clearIntervals } from '../components/clearIntervals.js';

export const stopCmd = {
    data: new SlashCommandBuilder().setName('stop').setDescription('Stops the application'),
    async execute(interaction) {
        
        await clearIntervals(interaction);

        try {
            await interaction.reply('Stopped. Run /start to begin again');
            console.log(`Successfully cleared timer session for user: ${interaction.user.id}`);
        } catch (error) {
            console.error("The timer was stopped locally, but the Discord response failed due to network issues:", error.message);
        }
    }
}