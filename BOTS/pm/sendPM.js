const { Client, Attachment,RichEmbed,DMChannel  } = require('discord.js');
const InviteBot = require('../invite/createInvite.js');

let inviteBot = null;
let user = null;

module.exports = class PmBot{

  constructor(client){
    this.client = client;
    inviteBot = new InviteBot(client);
  }

  async sendPrivateMessage(message) {
    for (var [key] of message.mentions.users) {
      user = message.mentions.users.get(key);
      await inviteBot.replyWithInvite(message, user);
    }
  }
};