const commando = require('discord.js-commando');
const TwichtBot = require('./../../BOTS/twitchAPI/twitch');

module.exports = class CreateChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'Add-Streamer',
            aliases: ['Add-Streamer', 'AS'],
            group: 'fun',
            memberName: 'create-channel',
            description: 'Creates a channel.',
            examples: ['create-channel Test channel'],
            guildOnly: true,
            clientPermissions: ['MANAGE_CHANNELS'],
            userPermissions: ['MANAGE_CHANNELS'],

            args: [{
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

    async run(msg, {
        name,
        type
    }) {

        TwichtBot = new TwichtBot(this.client);
        TwichtBot.getTopGames();
    }
};