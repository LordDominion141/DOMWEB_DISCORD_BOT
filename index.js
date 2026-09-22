import { Client, Events, GatewayIntentBits, MessageFlags, Collection, ActionRowBuilder, Partials } from 'discord.js';
import { startCmd } from './commands/start.js';
import { stopCmd } from './commands/stop.js';
import { switchCmd } from './commands/switch.js';
import { answerCmd } from './commands/answer.js';
import { sourceCmd } from './commands/source.js';
import { helpCmd } from './commands/help.js';
import { beginnerQuestions } from './db/beginner.js';
import { intermediateQuestions } from './db/intermediate.js';
import { advancedQuestions } from './db/advanced.js'
import { sendMessage } from './operations/sendMessage.js';
import { activeSessions } from './states/activeSessions.js';
import cron from 'node-cron';
import 'dotenv/config';
import { helpMessage } from './components/helpMessage.js';
import express from 'express';


const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages
  ],
  partials: [Partials.Channel] // Required to receive and route DM events without caching issues
});


client.commands = new Collection();
const commandsArray = [startCmd, stopCmd, switchCmd, answerCmd, sourceCmd, helpCmd];

for (const cmd of commandsArray) {
    client.commands.set(cmd.data.name, cmd);
}

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});






// CORE FUNCTION
const sendNextQuestion = async (userId) => {
    const session = activeSessions.get(userId);
    if (!session) return;
    if (session.awaitingAnswer) return;

    const questions = levelMap[session.level];
    if (!questions) return;

    // 1. Check completion FIRST (runs even if daily limit is reached)
    if (session.currentIndex >= questions.length) {
        try {
            await sendMessage('🎉 YOU HAVE COMPLETED THIS LEVEL!', client, userId);
        } catch (err) {
            console.error("Failed to send completion message:", err);
        }
        activeSessions.delete(userId);
        return;
    }

    // 2. Check daily limit SECOND (stops sending new questions for the day)
    if (session.sentToday >= session.dailyLimit) {
         try {
            await sendMessage("🎉 YOU HAVE COMPLETED TODAY'S SET OF QUESTIONS!", client, userId);
        } catch (err) {
            console.error("Failed to send completion message:", err);
        }
        return;
    }

    // 3. Send the next question
    const q = questions[session.currentIndex];
    if (q) {
        try {
            await sendMessage(`**Q ${session.currentIndex + 1}:** ${q.question}\n\nUse /answer to respond, or /sources for references.`, client, userId);
            session.awaitingAnswer = true;
        } catch (err) {
            console.error("Failed to send question message:", err);
        }
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
        const selectedValue = interaction.values[0].toLowerCase();
        const questions = levelMap[selectedValue];

        if (!questions) {
            return await interaction.reply({ 
                content: "❌ Invalid level array configuration found.",
                flags: MessageFlags.Ephemeral 
            });
        }

        // Disable the select menu component directly via interaction.update()
        const row = ActionRowBuilder.from(interaction.message.components[0]);
        row.components[0].setDisabled(true);

        // Update original message to disable menu AND reply ephemerally to user
        await interaction.update({ components: [row] });
        
        await interaction.followUp({ 
            content: `Your JavaScript subject submission of **${selectedValue}** was received successfully!`,
            flags: MessageFlags.Ephemeral
        });

        const session = {
            level: selectedValue,
            currentIndex: 0,
            awaitingAnswer: false,
            sentToday: 0,
            dailyLimit: 5,
            lastResetDate: Date.now()
        };

        const user = await client.users.fetch(userId);
        const welcomeMessage = await user.send({
            embeds: [helpMessage]
        });

        await welcomeMessage.pin();

        activeSessions.set(userId, session);
        await sendNextQuestion(userId);

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

            await sendNextQuestion(userId);
        } catch (error) {
            console.error("Error processing modal submission:", error);
        }
    }


});



cron.schedule('0 8 * * *', () => {
    for ( const [userId, session] of activeSessions) {
        session.sentToday = 0;
        session.lastResetDate = Date.now();
        sendNextQuestion(userId);
    }
});






// CREATE EXPRESS SERVER

const app = express();
const PORT = process.env.PORT || 3000;

// Simple health check endpoint for Render
app.get('/', (req, res) => res.send('Bot is alive!'));

app.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`);
});



const RENDER_URL = 'https://domweb-discord-bot.onrender.com'; 

setInterval(() => {
    fetch(RENDER_URL)
        .then(() => console.log('Self-ping successful: Keeping bot awake.'))
        .catch((err) => console.error('Self-ping failed:', err.message));
}, 10 * 60 * 1000); // 10 minutes


// LOGIN TO DISCORD
client.login(process.env.DISCORD_TOKEN);