const { Client, Attachment,RichEmbed,GuildMember  } = require('discord.js');

let memberList = [];

module.exports = class BandAndKick{

    constructor(client){
        this.client = client;
    }

    async memberKick(message) {
        await message.mentions.members.forEach(function(value) {
            //Só precisa de receber o valeu, pois contem o(s) member(s) que vão ser banidos
            memberList.push(value);
        });

        for (let i = 0; i < memberList.length; i++) {
            message.guild.member(memberList[i]).kick().then(() => message.reply(`Kicked ${memberList[i].displayName}`)).catch(console.error);
        }

        memberList = [];
    }
};