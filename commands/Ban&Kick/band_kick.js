const commando = require('discord.js-commando');

module.exports = class BanCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'ban-member',
			aliases: ['ban'],
			group: 'fun',
			memberName: 'ban-user',
			description: 'Ban an User from the server.',
			guildOnly: true,
			clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
            args:[
                {
                    key: 'xdays',
                    type: 'integer',
                    prompt: 'Set the number of days the user will be banned'
                },
                {
                    key: 'members',
                    type: 'user',
                    prompt: 'List of banned users',
                    infinite: true
                }
            ]  
    	});
	}

	async run(message, {xdays, members}) {
        for (let i = 0; i < members.length; i++) {
            message.reply(`Banned ${members[i].displayName}  ${(xdays != 0) ? "by " + xdays + " day(s)!" : "Forever!"}`).catch(console.error);
            await message.guild.member(members[i]).ban(members[i],{ days: xdays, reason: 'He desrespected the community' });
        }
    }
};

module.exports = class KickCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'kick-member',
			aliases: ['kick'],
			group: 'fun',
			memberName: 'kick-user',
			description: 'Kick a member from server.',
			guildOnly: true,
			clientPermissions: ['KICK_MEMBERS'],
            userPermissions: ['KICK_MEMBERS'],
            args:[
                {
                    key: 'members',
                    type: 'user',
                    prompt: 'List of banned users',
                    infinite: true
                }
            ]  
    	});
    }
    
	async run(message, {members}) {
        for (let i = 0; i < members.length; i++) {
            message.reply(`Kicked ${members[i].displayName}`).catch(console.error);
            await message.guild.members(members[i]).kick();
        }
    }
};