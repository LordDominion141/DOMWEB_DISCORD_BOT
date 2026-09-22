import { REST, Routes } from 'discord.js';
import { startCmd } from './commands/start.js';
import { stopCmd } from './commands/stop.js';
import { switchCmd } from './commands/switch.js';
import { answerCmd } from './commands/answer.js';
import { sourceCmd } from './commands/source.js';
import { helpCmd } from './commands/help.js';
import 'dotenv/config';





// OUR COMMANDS ARRAY
const commands = [];

// START PUSHING ALL OF THEM INTO THE ARRAY
commands.push(startCmd.data.toJSON());
commands.push(stopCmd.data.toJSON());
commands.push(switchCmd.data.toJSON());
commands.push(answerCmd.data.toJSON());
commands.push(sourceCmd.data.toJSON());
commands.push(helpCmd.data.toJSON());


// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env.DISCORD_TOKEN);

// DEPLOY OUR COMMANDS
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), { body: commands });

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();