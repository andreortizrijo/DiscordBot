const { Client, Attachment,RichEmbed,GuildMember  } = require('discord.js');

let memberList = [];

module.exports = class BandAndKick{

    constructor(client){
        this.client = client;
    }

    async memberKick(message) {
        await message.mentions.members.forEach(function(value) {
            memberList.push(value);
        });

        for (let i = 0; i < memberList.length; i++) {
            message.reply(`Kicked ${memberList[i].displayName}`).catch(console.error);
            await message.guild.member(memberList[i]).kick();
        }

        memberList = [];
    }

    async memberBan(message, xdays){
        await message.mentions.members.forEach(function(value) {
            memberList.push(value);
        });

        for (let i = 0; i < memberList.length; i++) {
            message.reply(`Banned ${memberList[i].displayName}  ${(xdays != 0) ? "by " + xdays + " day(s)!" : "Forever!"}`).catch(console.error);
            await message.guild.member(memberList[i]).ban(memberList[i],{ days: xdays, reason: 'He desrespected the community' });
        }

        memberList = [];
    }
};