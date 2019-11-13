const { Client, Attachment,RichEmbed  } = require('discord.js');
const InviteBot = require('./BOTS/invite/createInvite.js')
const PMBot = require('./BOTS/pm/sendPM.js')

// Create an instance of a Discord client
const client = new Client();
let inviteBot = null;
let pmBot = null;

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
  inviteBot = new InviteBot(client);
  pmBot = new PMBot(client);
});

client.on('message', message => {
  if (message.content === '!create invite'){
    inviteBot.replyWithInvite(message);
  }
  
  if (message.content.startsWith('!pm')) {
    pmBot.sendPrivateMessage(message);
  }
});

client.login('NjA0NzU2MjA1MzM2MDAyNjEz.XamDDA.0BBxi7u4YW9U1WC7cyW_Tr5TeWs');