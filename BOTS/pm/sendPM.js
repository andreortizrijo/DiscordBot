const { Client, Attachment,RichEmbed,DMChannel  } = require('discord.js');

module.exports = class PmBot{

  constructor(client){
    this.client = client;
  }

  async sendPrivateMessage(message) {
    const embed = new RichEmbed()
      .setTitle('A slick little embed')
      .setColor(0xFF0000)
      .setDescription('Hello, this is a slick embed!' + message.author);

    for (var [key] of message.mentions.users) {
      message.mentions.users.get(key).send(embed);
    }
  }

};