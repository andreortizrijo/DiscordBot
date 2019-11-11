const axios = require('axios').default;

const url = 'https://api.twitch.tv/helix/';

axios.defaults.headers.common['client-ID'] = '8e6fsz2mnoy60vh1frz7ac12bg2rr4';

getUsers = async () => {
    let twitchResponse = await axios.get(url + 'streams');

    // console.log(twitchResponse.data.datac);
    var gamesList = []
    for (let index = 0; index < Object.keys(twitchResponse.data.data).length; index++) {
        gamesList.push(twitchResponse.data.data[index].game_id);
        // console.log(gamesList);   
    }

    // console.log(gamesList.length);
    var gamesID = 'id=' + gamesList[0];
    for (let index = 1; index < gamesList.length; index++) {
        gamesID = gamesID + '&id=' + gamesList[index]
    }

    gg = await axios.get(url + 'games?' + gamesID)
    // console.log(gg.data.data);
    
};

getUsers();