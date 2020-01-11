const Commando = require('discord.js-commando');

const client = new Commando.CommandoClient({
  commandPrefix: "!"
});

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

const path = require('path');

client.registry
  // Registers your custom command groups
  .registerGroups([
    ['fun', 'Fun commands'],
    ['pm', 'PM'],
    ['math', 'Math'],
    ['other', 'Some other group']
  ])

  // Registers all built-in groups, commands, and argument types
  .registerDefaults()

  // Registers all of your commands in the ./commands/ directory
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.login('NjA0NzU2MjA1MzM2MDAyNjEz.XamDDA.0BBxi7u4YW9U1WC7cyW_Tr5TeWs');