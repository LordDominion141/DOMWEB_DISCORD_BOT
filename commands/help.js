import { SlashCommandBuilder } from "discord.js";
import { helpMessage } from "../components/helpMessage.js";

export const helpCmd = {
    data: new SlashCommandBuilder().setName('help').setDescription('See what this app is about and get help using it.'),
    async execute(interaction) {
        try {
            await interaction.reply({
                embeds: [helpMessage]
            })
        } catch (error) {
            console.error('Problem in helpCmd: ', error);
        }
    }
}