const { Client, Attachment,RichEmbed  } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

const path = require('path');
const Commando = require('discord.js-commando');

const client1 = new Commando.Client({
  commandPrefix:"!"
});
client1.registry
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
    // If the message is "how to embed"
    if (message.content === 'how to embed') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('A slick little embed')
        // Set the color of the embed
        .setColor(0xFF0000)
        // Set the main content of the embed
        .setDescription('Hello, this is a slick embed!' + message.author);
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });
client.login('NjA0NzU2MjA1MzM2MDAyNjEz.XamDDA.0BBxi7u4YW9U1WC7cyW_Tr5TeWs');
client1.login('NjA0NzU2MjA1MzM2MDAyNjEz.XamDDA.0BBxi7u4YW9U1WC7cyW_Tr5TeWs');