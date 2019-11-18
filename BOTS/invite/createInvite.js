const { Client, Attachment,RichEmbed,Invite  } = require('discord.js');

module.exports = class InviteBot{

  constructor(client){
    this.client = client;
  }

  async replyWithInvite(message, user) {
    let invite = await message.channel.createInvite({
      maxAge: 0, //maximum time for the invite, in milliseconds
      maxUses: 0, //maximum times it can be used. 0 will set to an infinite number of times used
      unique: true //true force the creation of a new link every time the comand runs
    }).catch(console.log);
  
    user.send(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
  }
}