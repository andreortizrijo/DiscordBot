const commando = require('discord.js-commando');
const discord = require('discord.js');

module.exports = class CreateChannelCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'create-channel',
			aliases: ['create-chan', 'add-channel', 'add-chan'],
			group: 'fun',
			memberName: 'create-channel',
			description: 'Creates a channel.',
			examples: ['create-channel Test channel'],
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