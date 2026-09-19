import { REST, Routes } from 'discord.js';
import { pingCmd } from './commands/ping.js';
import { startCmd } from './commands/start.js';
import { stopCmd } from './commands/stop.js';
import { switchCmd } from './commands/switch.js';
// THE OTHERS WILL BE HERE SOON...
import 'dotenv/config';


// OUR COMMANDS ARRAY
const commands = [];

// START PUSHING ALL OF THEM INTO THE ARRAY
commands.push(pingCmd.data.toJSON());
commands.push(startCmd.data.toJSON());
commands.push(stopCmd.data.toJSON());
commands.push(switchCmd.data.toJSON());
// THE OTHERS WILL BE HERE SOON...


// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env.DISCORD_TOKEN);

// DEPLOY OUR COMMANDS
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID), { body: commands });

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();