import { EmbedBuilder } from "discord.js";

export const helpMessage = new EmbedBuilder()
       .setColor('Aqua')
       .setTitle('WELCOME TO DOMWEB USER ASSISTANCE')
       .setAuthor({ name: 'Dominion Okori', iconURL: 'https://avatars.githubusercontent.com/u/235669238?s=400&u=f958abddbda2dd3e73d420513611aabdb1736b5c&v=4', url: 'https://github.com/LordDominion141' })
       .setDescription("If you're new to DomWeb, this guide is just what you need to get started 👍")
       .addFields(
        { 
        name: '📚 How it works', 
        value: 'I\'ll send you a JavaScript question. Reply with `/answer` to submit your answer — I\'ll then reveal the correct one so you can check yourself. Use `/sources` anytime a question is open for reference links on that topic.' 
        },
        { 
        name: '📅 Pacing', 
        value: 'You\'ll receive up to 5 questions a day. Answer at your own pace — the next one only sends once you\'ve responded.' 
        },
        { 
        name: '🎯 Commands', 
        value: '`/start` — pick your level and begin\n`/switch` — change your level\n`/stop` — pause the daily questions\n`/answer` — submit your answer to the current question\n`/sources` — get reference links for the current question' 
        }
)       
        .setFooter({ text: 'DomWeb • Built by Lord Dominion'})
        .setTimestamp()
        .setThumbnail('https://github.com/LordDominion141/DOMWEB_DISCORD_BOT/blob/main/assets/ChatGPT%20Image%20Sep%2018,%202026,%2009_56_13%20AM.png');
      