const { Client, Attachment,RichEmbed,GuildMember  } = require('discord.js');

let memberList = [];
let kickLog = null;

module.exports = class BandAndKick{

    constructor(client){
        this.client = client;
    }

    async memberKick(message) {
        await message.mentions.members.forEach(function(value, key) {
            memberList.push(key,value);
        });

        console.log(memberList.length);

        for (let i = 1; i < memberList.length; i++) {
            //Kick member
            message.guild.member(memberList[i]).kick().then(() => message.reply(`Kicked ${memberList[i].displayName}`)).catch(console.error);
        }
    }
};