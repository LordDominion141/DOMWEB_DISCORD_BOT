import { Client, Events, GatewayIntentBits, MessageFlags, Collection, ActionRowBuilder } from 'discord.js';
import { pingCmd } from './commands/ping.js';
import { startCmd } from './commands/start.js';
import { stopCmd } from './commands/stop.js';
import { switchCmd } from './commands/switch.js';
import { answerCmd } from './commands/answer.js';
import { sourceCmd } from './commands/source.js';
import { beginnerQuestions } from './db/beginner.js';
import { intermediateQuestions } from './db/intermediate.js';
import { advancedQuestions } from './db/advanced.js'
import { sendMessage } from './operations/sendMessage.js';
import { activeSessions } from './states/activeSessions.js';
import cron from 'node-cron';
import 'dotenv/config';


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsArray = [pingCmd, startCmd, stopCmd, switchCmd, answerCmd, sourceCmd];

for (const cmd of commandsArray) {
    client.commands.set(cmd.data.name, cmd);
}

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});






// CORE FUNCTION
    const sendNextQuestion = (userId) => {
        const session = activeSessions.get(userId);
        if (!session) return;
        if (session.awaitingAnswer) return;
        if (session.sentToday >= session.dailyLimit) return;

        const questions = levelMap[session.level];

        if (session.currentIndex >= questions.length) {
            sendMessage('YOU HAVE COMPLETED THIS LEVEL', client, userId);
            activeSessions.delete(userId);
            return;
        }
        const q = questions[session.currentIndex]

        if (questions[session.currentIndex]) {
            sendMessage(`**Q ${session.currentIndex + 1}:** ${q.question}\n\nUse /answer to respond, or /sources for references.`, client, userId);
            session.awaitingAnswer = true;
        }
    };

     const levelMap = {
        beginner: beginnerQuestions,
        intermediate: intermediateQuestions,
        advanced: advancedQuestions
    };

    







client.on(Events.InteractionCreate, async (interaction) => {
    const userId = interaction.user.id;
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

            const session = {
                level: selectedValue,
                currentIndex: 0,
                awaitingAnswer: false,
                sentToday: 0,
                dailyLimit: 10,
                lastResetDate: Date.now()
            };

           

            const questions = levelMap[selectedValue];
            if (!questions) {
                return await interaction.editReply({ content: "❌ Invalid level array configuration found." });
            }

            await interaction.editReply({ 
                content: `Your JavaScript subject submission of **${selectedValue}** was received successfully!` 
            });



            activeSessions.set(userId, session);
            sendNextQuestion(userId);

        } catch (error) {
            console.error("Error handling select menu:", error);
        }
        return;
    }


    



    // 3. Handle Modal Submissions
    if (interaction.isModalSubmit() && interaction.customId === 'answer-modal') {
        const session = activeSessions.get(userId);
        if (!session || !session.awaitingAnswer) { 
            await interaction.reply('No open question right now'); 
            return; 
        }
        try {
            const question = levelMap[session.level];
            const q = question[session.currentIndex];
            const userAnswer = interaction.fields.getTextInputValue('answerInput');
            await interaction.reply({
                content: `**Your answer:** ${userAnswer}\n\n**Model answer:** ${q.answer}`,
                flags: MessageFlags.Ephemeral
            });

            session.currentIndex++
            session.awaitingAnswer = false
            session.sentToday++

            sendNextQuestion(userId);
        } catch (error) {
            console.error("Error processing modal submission:", error);
        }
    }




    // 4. HANDLE SOURCE COMMAND
    /* 
    ON /sources command:
    session = activeSessions.get(userId)
    IF no session OR NOT session.awaitingAnswer:
        REPLY "No open question to show sources for."
        RETURN

    questions = levelMap[session.level]
    q = questions[session.currentIndex]

    IF q.sources is empty:
        REPLY "No sources tagged for this one."
    ELSE:
        list = FORMAT q.sources as "- {title}: {url}" joined by newlines
        REPLY (ephemeral): list
    // note: does NOT touch awaitingAnswer — they can check sources,
    // then still submit /answer afterward
    */
});



cron.schedule('0 8 * * *', () => {
    for ( const [userId, session] of activeSessions) {
        session.sentToday = 0;
        session.lastResetDate = Date.now();
        sendNextQuestion(userId);
    }
});

client.login(process.env.DISCORD_TOKEN);