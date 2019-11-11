const { Client, Attachment,RichEmbed,Invite  } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

const prefix = "!";

// ASSUMPTIONS:
// message is the message that triggered the command
// the channel of the invite will be the channel where the message has been sent

async function replyWithInvite(message) {
    let invite = await message.channel.createInvite({
      maxAge: 0, //maximum time for the invite, in milliseconds
      maxUses: 0, //maximum times it can be used. 0 will set to an infinite number of times used
      unique: true //true force the creation of a new link every time the comand runs
    }, `Requested with command by ${message.author.tag}`).catch(console.log);
  
    message.reply(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
  }

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Call the function to create an Invite
client.on('message', message => {
    if (message.content.startsWith(prefix + 'invite')) {
        replyWithInvite(message);
    };
});

client.login('NjA0NzU2MjA1MzM2MDAyNjEz.XamDDA.0BBxi7u4YW9U1WC7cyW_Tr5TeWs');