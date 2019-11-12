const {
  Client,
  Attachment,
  RichEmbed
} = require('discord.js');
const TwichtBot = require('./BOTS/twitchAPI/twitch')
// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');

  //console.log(client.guilds);
  const twichtBot = new TwichtBot(client);
  twichtBot.getTopGames();
  twichtBot.getUsers();
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
client.login('NjA0NzU2MjA1MzM2MDAyNjEz.XamDDA.0BBxi7u4YW9U1WC7cyW_Tr5TeWs');