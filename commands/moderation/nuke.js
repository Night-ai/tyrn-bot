const Discord = require('discord.js')
const db = require("../../database")
const sendError = require("../../util/error");

module.exports = {
  name: "nuke",
  async run (client, message, args) {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_CHANNELS)){
    return sendError(client.config.permError,message)}
    let channel = message.mentions.channels.first() || message.channel;
    const uyg = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription("Processing...")
    message.channel.send({ embeds: [uyg] });
  
     const nuke = new Discord.MessageEmbed()
    .setAuthor(`Sucsesfully Nuked Channel ✅`)
    .setColor('BLUE')
    .setTimestamp()
    let position = channel.position;
    setTimeout(() => {
    channel.delete();
    channel.clone().then(msg => {
    msg.setPosition(position);
    msg.send({ embeds: [nuke] });
});
}, 1000)


    

  }

  }

