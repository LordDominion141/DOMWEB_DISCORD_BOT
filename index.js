import { Client, Events, GatewayIntentBits, MessageFlags, Collection, ActionRowBuilder } from 'discord.js';
import { pingCmd } from './commands/ping.js';
import { startCmd } from './commands/start.js';
import { stopCmd } from './commands/stop.js';
import { switchCmd } from './commands/switch.js';
// THE OTHERS WILL BE HERE SOON...
import { beginnerMessages, intermediateMessages, advancedMessages} from './db/messages.js';
import { sendMessage } from './operations/sendMessage.js';
import { activeSessions } from './states/activeSessions.js';
import 'dotenv/config';


// CREATE NEW CLIENT INSTANCE

const client = new Client(
    {intents: [GatewayIntentBits.Guilds]}
);

// WHEN THE CLIENT IS READY RUN THIS ONCE

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// INITIALIZE NEW COMMAND COLLECTION INSTANCE, AS AN OBJECT IN CLIENT.

client.commands = new Collection();

// MAP THE COMMANDS INTO CLIENT
client.commands.set(pingCmd.data.name, pingCmd);
client.commands.set(startCmd.data.name, startCmd);
client.commands.set(stopCmd.data.name, stopCmd);
client.commands.set(switchCmd.data.name, switchCmd);
// THE OTHERS WILL BE HERE SOON...



// LISTENING TO COMMAND INTERACTIONS
client.on(Events.InteractionCreate, async (interaction) => {
        if (!interaction.isChatInputCommand()) return;

         if (interaction.commandName === 'start' && activeSessions.has(interaction.user.id)) {
               return await interaction.reply({ 
                content: '⚠️ The daily questioning system is already running. If you want to change your level, use the /switch command. To stop the system, use the /stop command',
                flags: MessageFlags.Ephemeral }).catch(err => {
            console.error("Could not send warning message because the interaction timed out:", err.message);
        });;
        }

        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found`);
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
		console.error(error);
		if(interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: "There was an error while executing this command!",
                flags: MessageFlags.Ephemeral,
            })
        } else {
            await interaction.reply({
                content: "There was an error while executing this command!",
                flags: MessageFlags.Ephemeral,
            })
        }
	}
});




// LISTENING TO THE START INTERACTION EVENT (START COMMAND)

client.on(Events.InteractionCreate, async (interaction) => {
    // FILTER THINGS WE DON'T NEED
    if (!interaction.isStringSelectMenu()) return;
    if (interaction.customId !== 'starter') return;

    try {
        // DELAY IT A BIT
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });

        const row = ActionRowBuilder.from(interaction.message.components[0]);
        row.components[0].setDisabled(true);
        await interaction.message.edit({components: [row]});
        
        const selectedValue = interaction.values[0].toLowerCase();
	    
        // ASSIGN THE VALUES OF MESSAGES DYNAMICALLY TO THE CORRESPONDING MESSAGE ARRAY
        let messages;
        if (selectedValue === 'beginner') messages = beginnerMessages;
        if (selectedValue === 'intermediate') messages = intermediateMessages;
        if (selectedValue === 'advanced') messages = advancedMessages;

        // NO MESSAGES?
        if (!messages) {
            return await interaction.editReply({ content: "❌ Invalid level array configuration found." });
        }

        
		await interaction.editReply({ content: `Your Javascript subject submission of ${selectedValue} was received successfully!` });
        
        let index = 0;
        const userId = interaction.user.id;

        // HELPER FUNCTION
        const sendNextMessage = () => {
            if (messages[index]) {
            sendMessage(messages[index], client, userId);
            index = index + 1;

            console.log("Sent message to this user")
            } else {
                console.log("All messages sent for this level tier!");
            }
    };

        // CALL THE FUNCTION FIRST ONCE
        sendNextMessage();

        // THEN CALL IT REPEATEDLY AFTER THE INTERVAL
        const intervalId = setInterval(sendNextMessage,   1 * 60 * 1000);

        activeSessions.set(userId, { intervalId, level: selectedValue, index});
	
    } catch (error) {
            console.error(error);
    }
	    
});


// LOGIN TO DISCORD WITH TOKEN

client.login(process.env.DISCORD_TOKEN);
