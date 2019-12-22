const commando = require('discord.js-commando');
let TwichtBot = require('./../../BOTS/twitchAPI/twitch');

module.exports = class StreamCommand extends commando.Command {
    /**
     * 
     * @param {commando} client 
     */
    constructor(client) {
        super(client, {
            name: 'add-streamer',
            aliases: ['add-streamer', 'as'],
            group: 'fun',
            memberName: 'add-streamer',
            description: 'add-streamers',
            examples: ['add-streamer as as'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user do you want to send the DM to?',
                    infinite: true,
                    type: 'string'
                }
            ]
        });
        TwichtBot = new TwichtBot(client);
    }
    /**
     * 
     * @param {client.Message} msg 
     * @param {user} Nome 
     */
    async run(msg, { user }) {


        console.log(user)

        TwichtBot.addStremer(msg.channel, user);
    }
};
