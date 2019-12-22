const axios = require('axios').default;
const discord = require('discord.js');

const url = 'https://api.twitch.tv/helix/';

axios.defaults.headers.common['client-ID'] = '8e6fsz2mnoy60vh1frz7ac12bg2rr4';

module.exports = class TwichtBot {
    /**
     * @param {discord} client 
     */

    //Discord Commands need
    constructor(client) {
        this.client = client;
    }
    async addStremer(channel, Nome) {
        let ResolvedNames = BuilderNames(Nome);
        let twitchResponse;
        try {
            twitchResponse = await axios.get(url + 'streams?user_login=' + ResolvedNames);
        } catch (error) {
            console.log(error);
            twitchResponse.data = "ERRO"
        }
        console.log(twitchResponse.data);
        await channel.send(setEmbed(setstringsTostreams, twitchResponse, "My Streamers"));
    }
    async getTopUsers(channel) {

        let twitchResponse = await axios.get(url + 'streams');

        var gamesList = []
        for (let index = 0; index < Object.keys(twitchResponse.data.data).length; index++) {
            gamesList.push(twitchResponse.data.data[index].game_id);
        }

        var gamesID = 'id=' + gamesList[0];
        for (let index = 1; index < gamesList.length; index++) {
            gamesID = gamesID + '&id=' + gamesList[index]
        }

        await channel.send(setEmbed(setstringsTostreams, twitchResponse, "Top Streams on Twitch"));

    };

    async getTopGames(channel) {
        const gg = await axios.get(url + 'games/top');

        await channel.send(setEmbed(setstringsTogames, gg, "Top Games on Twitch"))
    }
}
setEmbed = function (srtingFunction, response, title) {
    var embed = new discord.RichEmbed();
    embed.setTitle(title)
        // Set the color of the embed
        .setColor(0x6441a5);

    embed.setDescription("***" + srtingFunction(response) + "***")


    return embed;
}



BuilderNames = function (Nome) {
    var Bluidednames = "";
    for (let index = 0; index < Nome.length; index++) {
        const element = Nome[index];
        Bluidednames = Bluidednames + element + "&user_login=";
    }
    let ResolvedNames = Bluidednames.substr(0, Bluidednames.length - 12);
    console.log("> Resolved Names =" + ResolvedNames);

    return ResolvedNames;
}
/**
 * @param {AxiosResponse} games 
 */
setstringsTogames = function (games) {
    var fullstringOfGames = games.data.data[0].name + "\n";
    for (let index = 1; index < games.data.data.length; index++) {
        var element = games.data.data[index].name;
        fullstringOfGames = fullstringOfGames + element + "\n";
    }
    return fullstringOfGames;
}
setstringsTostreams = function (streams) {
    var fullstringOfGames = streams.data.data[0].user_name + "\n";
    for (let index = 1; index < streams.data.data.length; index++) {
        var element = streams.data.data[index].user_name;
        fullstringOfGames = fullstringOfGames + element + "\n";
    }
    return fullstringOfGames;
}