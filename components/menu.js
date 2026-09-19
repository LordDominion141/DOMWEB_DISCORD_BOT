import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } from 'discord.js';

const levelStarterSelect = new StringSelectMenuBuilder()
              .setCustomId("starter")
              .setPlaceholder('Select your current JavaScript level')
              .addOptions(
        // STRING SELECT MENU OPTIONS
            // 1. BEGINNER
                new StringSelectMenuOptionBuilder()
                    .setLabel('Beginner')
                    .setDescription('Start with the basics of javascript.')
                    // THE VALUE RETURNED IN THE SELECT MENU INTERACTION
                    .setValue('beginner'),
            // 2. INTERMEDIATE
                new StringSelectMenuOptionBuilder()
                    .setLabel('Intermediate')
                    .setDescription('Start with higher levels of javascript.')
                    // THE VALUE RETURNED IN THE SELECT MENU INTERACTION
                    .setValue('intermediate'),
            // 3. ADVANCED
                new StringSelectMenuOptionBuilder()
                    .setLabel('Advanced')
                    .setDescription('Start with more complex javascripts.')
                    // THE VALUE RETURNED IN THE SELECT MENU INTERACTION
                    .setValue('advanced'),
              );
        // ADDING A STRING SELECT MENU TO AN ACTION ROW
        const row = new ActionRowBuilder().addComponents(levelStarterSelect);

export default row;