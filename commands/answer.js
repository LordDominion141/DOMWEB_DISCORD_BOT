import { SlashCommandBuilder } from "discord.js";
import answerModal from "../components/answerModal.js";

export const answerCmd = {
    data: new SlashCommandBuilder().setName('answer').setDescription('Type your answer here'),
    async execute(interaction) {
        try {
             await interaction.showModal(answerModal);
        } catch (error) {
            console.error(error);
        }
       
    }
}