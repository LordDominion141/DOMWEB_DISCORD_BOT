import { SlashCommandBuilder, MessageFlags } from 'discord.js';
import { activeSessions } from '../states/activeSessions.js';
import { beginnerQuestions } from '../db/beginner.js';
import { intermediateQuestions } from '../db/intermediate.js';
import { advancedQuestions } from '../db/advanced.js'

const levelMap = {
        beginner: beginnerQuestions,
        intermediate: intermediateQuestions,
        advanced: advancedQuestions
    };

export const sourceCmd = {
    data: new SlashCommandBuilder().setName('source').setDescription('Get reference links to sites that explain this concept'),
    async execute(interaction) {
        const session = activeSessions.get(interaction.user.id);
        if (!session || !session.awaitingAnswer) {
            await interaction.reply('No open questions to provide sources for');
            return;
        }
        const questions = levelMap[session.level];
        const q = questions[session.currentIndex];

        if (q.sources === null) {
            await interaction.reply('No sources tagged for this one');
        } else {
            const list = q.sources.map(source => `- ${source.title}: ${source.url}`).join('\n');
            await interaction.reply({
                content: list,
                flags: MessageFlags.Ephemeral
            })
        }

    }
}