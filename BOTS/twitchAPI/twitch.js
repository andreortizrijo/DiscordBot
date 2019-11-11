const axios = require('axios').default;
const discord = require('discord.js');

const url = 'https://api.twitch.tv/helix/';

axios.defaults.headers.common['client-ID'] = '8e6fsz2mnoy60vh1frz7ac12bg2rr4';

module.exports = class TwichtBot {
    /**
     * @param {discord} client 
     */
    constructor(client) {
        this.client = client;
    }

    async getUsers() {
        let twitchResponse = await axios.get(url + 'streams');

        var gamesList = []
        for (let index = 0; index < Object.keys(twitchResponse.data.data).length; index++) {
            gamesList.push(twitchResponse.data.data[index].game_id);
        }

        var gamesID = 'id=' + gamesList[0];
        for (let index = 1; index < gamesList.length; index++) {
            gamesID = gamesID + '&id=' + gamesList[index]
        }
        var gg = await axios.get(url + 'games?' + gamesID);
        console.log(gg.data.data);
        // Set the title of the field
        var embed = new discord.RichEmbed();
        embed.setTitle('The Most Streams views')
            // Set the color of the embed
            .setColor(0x6441a5)

        embed.setDescription("***" + setstringsTogames(gg) + "***")
        var channel = this.client.guilds.get("567029802155114529").channels.find(channel => channel.name === "testes"); //Remover Hard Code VARS
        await channel.send(embed)

    };

    async getTopGames() {
        const gg = await axios.get(url + 'games/top');
        console.log(gg.data.data);
        // Set the title of the field
        var embed = new discord.RichEmbed();
        embed.setTitle('Most Played Games in twicht')
            // Set the color of the embed
            .setColor(0x6441a5)
        var channel = this.client.guilds.get("567029802155114529").channels.find(channel => channel.name === "testes");

        embed.setDescription("***" + setstringsTogames(gg) + "***")
        await channel.send(embed)
    }
}
/**
 * @param {AxiosResponse} games 
 */
setstringsTogames = function (games) {
    var fullstringOfGames = games.data.data[0].name + "\n";
    for (let index = 1; index < games.data.data.length; index++) {
        var element = games.data.data[index].name;
        fullstringOfGames = fullstringOfGames + element + "\n"
    }
    return fullstringOfGames;
}