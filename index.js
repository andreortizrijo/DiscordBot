const {
  Client,
  Attachment,
  RichEmbed
} = require('discord.js');
const Commando = require('discord.js-commando');
const PMBot = require('./BOTS/pm/sendPM.js');
const BandAndKick = require('./BOTS/Ban&Kick/band_kick.js');
let regex = /( \d+)/
let match = '';

let pmBot = null;
let bandandkickBot = null;

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
  //Bots Initialization
  pmBot = new PMBot(client);
  bandandkickBot = new BandAndKick(client);
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
  if (message.content.startsWith('!create invite')) {
    pmBot.sendPrivateMessage(message);
  }

  // Punishment Commands
  if (message.content.startsWith('!kick')) {
    bandandkickBot.memberKick(message);
  }

  if (message.content.startsWith('!ban')) {
    let matches = message.content.match(regex);

    if (matches) {
      match = matches[0];
      match = match.replace(/\s/g, "");
    } else {
      match = 0;
    }

    bandandkickBot.memberBan(message, match);
  }
});


client.login('TOKEN');
