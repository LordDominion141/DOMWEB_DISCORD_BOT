import {  SlashCommandBuilder, StringSelectMenuBuilder,
	StringSelectMenuOptionBuilder, ActionRowBuilder } from "discord.js";

export const pingCmd = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Replies with pong'),
    async execute(interaction) {
		const favoriteStarterSelect = new StringSelectMenuBuilder()
			.setCustomId('ping')
			.setPlaceholder('Make a selection!')
			.addOptions(
				// String select menu options
				new StringSelectMenuOptionBuilder()
					// Label displayed to user
					.setLabel('Bulbasaur')
					// Description of option
					.setDescription('The dual-type Grass/Poison Seed Pokémon.')
					// Value returned in select menu interaction
					.setValue('bulbasaur'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Charmander')
					.setDescription('The Fire-type Lizard Pokémon.')
					.setValue('charmander'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Squirtle')
					.setDescription('The Water-type Tiny Turtle Pokémon.')
					.setValue('squirtle'),
			);
		// Adding a string select menu to an action row
		const row = new ActionRowBuilder().addComponents(favoriteStarterSelect);
		// Reply with the action row
		await interaction.reply({
			content: 'Choose your starter!',
			components: [row],
		});
	},

};




// TO-DO:
// RE-READ THE STRING SELECT MENU SECTION IN THE DOCS. MAKE SURE YOU UNDERSTAND EBRYTHING.