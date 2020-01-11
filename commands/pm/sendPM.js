const commando = require('discord.js-commando');
const InviteBot = require('./../invite/createInvite.js');

let inviteBot = null;
let user = null;

module.exports = class SendAndCreateInviteCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'create-invite',
			aliases: ['invite', 'invite-user', 'new-user'],
			group: 'fun',
			memberName: 'invite-user',
			description: 'Creates an invite.',
			guildOnly: true,
			clientPermissions: ['CREATE_INSTANT_INVITE'],
      		userPermissions: ['CREATE_INSTANT_INVITE'],
    	});    
	}

	async run(message) {
    inviteBot = new InviteBot(this.client);
      for (var [key] of message.mentions.users) {
        user = message.mentions.users.get(key);
        await inviteBot.replyWithInvite(message, user);
      }
    }
};