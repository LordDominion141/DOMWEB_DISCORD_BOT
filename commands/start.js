import { SlashCommandBuilder } from "discord.js";
import row from "../components/menu.js";

export const startCmd = {
    data: new SlashCommandBuilder().setName('start').setDescription('Initializes application'),
    async execute(interaction){ 
        // REPLYING
        await interaction.reply({
            content: 'Choose your level in javascript',
            components: [row],
        });

   },
};