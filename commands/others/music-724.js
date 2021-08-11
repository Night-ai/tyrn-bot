const Discord = require('discord.js');
const db = require('../../database')

module.exports = {
  name: "24/7",
  async run (client, message, args) {
    
    if (!db.get("premium" + message.author.id)) return message.reply("Sorry This Command For Only **Premium Users**");
    if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    db.set("voice", message.member.voice.channel.id)
    message.channel.send("I joined Voice Channel Sucsesfully!")
    } else {
      message.reply('You need to join a voice channel first!');
    }
      
  }
}
