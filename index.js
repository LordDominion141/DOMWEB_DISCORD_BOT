import { Client, Events, GatewayIntentBits, MessageFlags, Collection, ActionRowBuilder } from 'discord.js';
import { pingCmd } from './commands/ping.js';
import { startCmd } from './commands/start.js';
import { stopCmd } from './commands/stop.js';
import { switchCmd } from './commands/switch.js';
import { answerCmd } from './commands/answer.js';
import { beginnerMessages, intermediateMessages, advancedMessages } from './db/messages.js';
import { sendMessage } from './operations/sendMessage.js';
import { activeSessions } from './states/activeSessions.js';
import 'dotenv/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsArray = [pingCmd, startCmd, stopCmd, switchCmd, answerCmd];

for (const cmd of commandsArray) {
    client.commands.set(cmd.data.name, cmd);
}

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
    // 1. Handle Slash Commands
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName === 'start' && activeSessions.has(interaction.user.id)) {
            return await interaction.reply({ 
                content: '⚠️ The daily questioning system is already running. If you want to change your level, use /switch. To stop, use /stop.',
                flags: MessageFlags.Ephemeral 
            }).catch(err => console.error("Interaction reply error:", err.message));
        }

        const command = client.commands.get(interaction.commandName);
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(`Error executing ${interaction.commandName}:`, error);
            const responseOptions = {
                content: "There was an error while executing this command!",
                flags: MessageFlags.Ephemeral
            };
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp(responseOptions);
            } else {
                await interaction.reply(responseOptions);
            }
        }
        return;
    }

    // 2. Handle String Select Menus
    if (interaction.isStringSelectMenu() && interaction.customId === 'starter') {
        try {
            await interaction.deferReply({ flags: MessageFlags.Ephemeral });

            // Disable select menu component to prevent double submissions
            const row = ActionRowBuilder.from(interaction.message.components[0]);
            row.components[0].setDisabled(true);
            await interaction.message.edit({ components: [row] });

            const selectedValue = interaction.values[0].toLowerCase();
            const levelMap = {
                beginner: beginnerMessages,
                intermediate: intermediateMessages,
                advanced: advancedMessages
            };

            const messages = levelMap[selectedValue];
            if (!messages) {
                return await interaction.editReply({ content: "❌ Invalid level array configuration found." });
            }

            await interaction.editReply({ 
                content: `Your JavaScript subject submission of **${selectedValue}** was received successfully!` 
            });

            const userId = interaction.user.id;

            // Clear active session if user restarted without running /stop
            if (activeSessions.has(userId)) {
                clearInterval(activeSessions.get(userId).intervalId);
            }

            const session = {
                intervalId: null,
                level: selectedValue,
                index: 0
            };

            const sendNextMessage = () => {
                if (messages[session.index]) {
                    sendMessage(messages[session.index], client, userId);
                    session.index++;
                } else {
                    console.log(`Completed all messages for user ${userId}`);
                    clearInterval(session.intervalId);
                    activeSessions.delete(userId);
                }
            };

            sendNextMessage();
            session.intervalId = setInterval(sendNextMessage, 1 * 60 * 1000);
            activeSessions.set(userId, session);

        } catch (error) {
            console.error("Error handling select menu:", error);
        }
        return;
    }

    // 3. Handle Modal Submissions
    if (interaction.isModalSubmit() && interaction.customId === 'answer-modal') {
        try {
            const answer = interaction.fields.getTextInputValue('answerInput');
            await interaction.reply({
                content: `Your answer has been received:\n> ${answer}`,
                flags: MessageFlags.Ephemeral
            });
        } catch (error) {
            console.error("Error processing modal submission:", error);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);