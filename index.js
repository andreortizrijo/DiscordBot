const { Client, Attachment,RichEmbed  } = require('discord.js');
const PMBot = require('./BOTS/pm/sendPM.js');
const BandAndKick = require('./BOTS/Ban&Kick/band_kick.js');

// Create an instance of a Discord client
const client = new Client();

let regex = /( \d+)/
let match = '';

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
    // Create a new Invitation
    if (message.content.startsWith('!create invite')){
        pmBot.sendPrivateMessage(message);
    }

    // Punishment Commands
    if(message.content.startsWith('!kick')){
        bandandkickBot.memberKick(message);
    }

    if(message.content.startsWith('!ban')){
        let matches = message.content.match(regex);
        
        if (matches) { 
            match = matches[0];
            match = match.replace(/\s/g, "");
        }else{
            match = 0;
        }
        
        bandandkickBot.memberBan(message, match);
    }
});

client.login('NjA0NzU2MjA1MzM2MDAyNjEz.XamDDA.0BBxi7u4YW9U1WC7cyW_Tr5TeWs');