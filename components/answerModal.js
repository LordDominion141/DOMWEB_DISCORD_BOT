import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from "discord.js";

const answerModal = new ModalBuilder()
    .setCustomId('answer-modal')
    .setTitle('Submit Answer');

const answerInput = new TextInputBuilder()
    .setCustomId('answerInput')
    .setLabel('Your Answer')
    .setStyle(TextInputStyle.Paragraph)
    .setPlaceholder('MY ANSWER IS... EXPLANATION...');

const actionRow = new ActionRowBuilder().addComponents(answerInput);
answerModal.addComponents(actionRow);

export default answerModal;