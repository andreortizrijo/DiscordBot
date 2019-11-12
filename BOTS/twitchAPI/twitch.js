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
        //console.log(getServers(client));
        var channel = this.client.guilds.get("567029802155114529").channels.find(channel => channel.name === "twicht_test");
        console.log(channel);

        if (channel == null) {
            client.guilds.get("567029802155114529").createChannel("Twicht_Test", "text")
        }
        this.channel = channel;

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
        //console.log(gg.data.data);
        // Set the title of the field


        var channel = this.client.guilds.get("567029802155114529").channels.find(channel => channel.name === "testes"); //Remover Hard Code VARS
        //console.log(channel);

        await channel.send(setEmbed(setstringsTostreams, twitchResponse, "Top Streams on Twitch"));

    };

    async getTopGames() {
        const gg = await axios.get(url + 'games/top');
        //console.log(gg.data.data);
        // Set the title of the field

        let list = getServers(this.client);
        //console.log(list["Streamz"]);

        var channel = this.client.guilds.get(list["Streamz"]).channels.find(channel => channel.name === "testes");

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

/**
 * @param {discord} client
 * @returns {discord.guild}
 */
getServers = function (client) {
    let ListOfServes = [];
    for (var [key, value] of client.guilds) {
        ListOfServes[value] = key;
    }
    return ListOfServes;
}

/**
 * @param {discord} client
 * @returns {int}
 */
getServersLenght = function (client) {
    var index = 0;
    for (var key of client.guilds) {
        index++;
    }
    return index;
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