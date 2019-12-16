const {
  Client,
  Attachment,
  RichEmbed
} = require('discord.js');
const Commando = require('discord.js-commando');
const client = new Commando.CommandoClient({
  commandPrefix: "!"
});
// Create an instance of a Discord client
//const client = new Client();
const PMBot = require('./BOTS/pm/sendPM.js');

let pmBot = null;

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
  pmBot = new PMBot(client);
});

const path = require('path');



client.registry
  // Registers your custom command groups
  .registerGroups([
    ['fun', 'Fun commands'],
    ['math', 'Math'],
    ['other', 'Some other group']
  ])

  // Registers all built-in groups, commands, and argument types
  .registerDefaults()

  // Registers all of your commands in the ./commands/ directory
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('message', message => {
  if (message.content.startsWith('!create invite')) {
    pmBot.sendPrivateMessage(message);
  }

});
client.login('NjA0NzU2MjA1MzM2MDAyNjEz.XamDDA.0BBxi7u4YW9U1WC7cyW_Tr5TeWs');