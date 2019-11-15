const { Client, Attachment,RichEmbed  } = require('discord.js');
const PMBot = require('./BOTS/pm/sendPM.js');
const BandAndKick = require('./BOTS/Ban&Kick/band_kick.js');

// Create an instance of a Discord client
const client = new Client();

let pmBot = null;
let bandandkickBot = null;

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

client.on('message', message => {
    if (message.content.startsWith('!create invite')){
        pmBot.sendPrivateMessage(message);
    }

    if(message.content.startsWith('!kick')){
        bandandkickBot.memberKick(message);
    }

    if(message.content.startsWith('!ban')){
        bandandkickBot.memberBan(message);
    }
});

client.login('NjA0NzU2MjA1MzM2MDAyNjEz.XamDDA.0BBxi7u4YW9U1WC7cyW_Tr5TeWs');