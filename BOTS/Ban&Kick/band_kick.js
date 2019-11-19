const { Client, Attachment,RichEmbed,GuildMember,Guild  } = require('discord.js');

let memberList = [];
let blackList = [];
let match = [];

let unbanregex = /( \w+)/g

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
            blackList.push(value);
        });

        // for (let i = 0; i < memberList.length; i++) {
        //     message.reply(`Banned ${memberList[i].displayName} ${(xdays != 0) ? "by " + xdays + " day(s)!" : "Forever!"}`).catch(console.error);
        //     await message.guild.member(memberList[i]).ban(memberList[i],{ days: xdays, reason: 'He desrespected the community' });
        // }

        memberList = [];
    }

    async memberUnban(message){
        let membersfound = message.content.match(unbanregex);
       
        console.log(membersfound);
        
        // Remove the Whitespace at the beginning of each name
        for (let i = 0; i < membersfound.length; i++) {
            if (membersfound[i]) { 
                match.push(membersfound[i].replace(/\s/g, ""));
            }else{
                match = [];
            }
        }        

        console.log(match);

        for (let i = 0; i < match.length; i++) {
            for (let x = 0; x < blackList.length; x++) {
                if(blackList[x].displayName == match[i]){
                    if(match[i] != match[match.length-1]){
                        // Unban a user by ID
                        //message.guild.unban(blackList[x].id).then(user => message.reply(message.author + ` Unbanned ${user.username} from ${message.guild}`)).catch(console.error);
                        //blackList[x].remove();
                        x = 0;
                        console.log("nailded");
                    }else{
                        // Unban the last user by ID
                        //message.guild.unban(blackList[x].id).then(user => message.reply(message.author + ` Unbanned ${user.username} from ${message.guild}`)).catch(console.error);
                        console.log("lats nailded");
                        break;
                    }
                }
            }
            message.reply('User not found!')
        }
    }
};


// for (let i = 0; i < match.length; i++) {
        //     for (let x = 0; x < blackList.length; x++) {
        //         if(x != blackList.length - 1 & blackList[x].displayName == match[i] | x == blackList.length - 1 & blackList[x].displayName == match[i]){
        //             // Unban a user by ID
        //             //message.guild.unban(blackList[x].id).then(user => message.reply(message.author + ` Unbanned ${user.username} from ${message.guild}`)).catch(console.error);
        //             console.log("nailded");
        //         }else{
        //             x = 0;
        //         }
        //     }
        //     //message.reply('User not found!')
        // }