const { Client, Attachment,RichEmbed,GuildMember  } = require('discord.js');

let memberList = [];

module.exports = class BandAndKick{

    constructor(client){
        this.client = client;
    }
  
    async memberKick(message) {
        message.mentions.members.forEach(function(value, key) {
            console.log(key + ' = ' + value);
        });

        console.log('First Member Mentioned: ' + message.mentions.members.first());

        for (let i = 0; i < memberList.length; i++) {
            memberList[i].kick().then(() => message.reply(`Kicked ${member.displayName}`)).catch(console.error);     
        }
    }
  };    