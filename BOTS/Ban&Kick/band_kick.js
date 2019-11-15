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
        
        console.log("Member name: " + memberList[0].displayName);

        for (let i = 0; i < memberList.length; i++) {
            message.reply(`Kicked ${memberList[i].displayName}`).catch(console.error);
            await message.guild.member(memberList[i]).kick();
        }

        memberList = [];
    }

    async memberBan(message){
        await message.mentions.members.forEach(function(value) {
            //Só precisa de receber o valeu, pois contem o(s) member(s) que vão ser banidos
            memberList.push(value);
        });

        console.log("Member name: " + memberList[0].displayName);
        message.reply(`Banned ${memberList[0].displayName}`).catch(console.error);

        for (let i = 0; i < memberList.length; i++) {
            message.reply(`Banned ${memberList[i].displayName}`).catch(console.error);
            await message.guild.member(memberList[i]).ban(memberList[i],{ days: 7, reason: 'He needed to go' });
        }

        memberList = [];
    }
};