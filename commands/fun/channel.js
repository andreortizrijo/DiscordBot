const commando = require('discord.js-commando');

module.exports = class CreateChannel extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'create-channel',
			aliases: ['create-chan', 'add-channel', 'add-chan'],
			group: 'fun',
			memberName: 'create-channel',
			description: 'Creates a channel.',
			examples: ['create-channel Testchannel'],
			guildOnly: true,
			clientPermissions: ['MANAGE_CHANNELS'],
			userPermissions: ['MANAGE_CHANNELS'],

			args: [
				{
					key: 'name',
					label: 'channel name',
					prompt: 'What would you like the channel to be called?',
					type: 'string'
				},
				{
					key: 'type',
					label: 'channel type',
					prompt: 'What would you like the channel to be called?',
					type: 'string'
				}
			]
		});
	}

	async run(msg, { name , type }) {
		const channel = await msg.guild.createChannel(name, { type: type });
		msg.guild.setChannelPosition(channel);
		return msg.reply(`Created ${channel} (${channel.id})`);
	}
};

module.exports = class RemoveChannel extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'remove-channel',
			aliases: ['remove-chan', 'remove-channel', 'delete'],
			group: 'fun',
			memberName: 'remove-channel',
			description: 'Removes a channel.',
			examples: ['Remove-channel Testchannel'],
			guildOnly: true,
			clientPermissions: ['MANAGE_CHANNELS'],
			userPermissions: ['MANAGE_CHANNELS'],

			args: [
				{
					key: 'name',
					label: 'channel name',
					prompt: 'What channel would you like the channel to remove?',
					type: 'string'
				}
			]
		});
	}


	/*Em processo....*/
	async run(msg, { name }) {
		var a = this.client.guilds.first();

		console.log(a);
		
		Guild.channel.find(name);
		return msg.reply(`Deleted ${name} channel`);
	}
};