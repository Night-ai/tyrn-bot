const db = require('../../database')
const Discord = require('discord.js')
const sendError = require("../../util/error");

module.exports = {
  name: ["modlog"],
  async run (client, message, args) {
  let prefix = db.get("prefix" + message.guild.id) || client.config.prefix
  var channel = message.mentions.channels.first() || message.channel
  
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)){
    return sendError(client.config.permError,message)}
    if (!args[0]) return sendError("Usage:\nFor set Modlog chanel type `"+prefix+"modlog enable #channel`\nFor reset mod logs type `"+prefix+"modlog disable`",message)
    let setting = args[0].toLowerCase()
    
    if (setting === "enable"){
    db.set("modLog" + message.guild.id, channel.id)
      
     message.channel.send({ embeds: [new Discord.MessageEmbed()
    .setTitle("Mod Logs Enabled!")
    .setDescription("Mod Log Channel is <#" + channel.id + ">")
    .setColor("YELLOW")] })
      
    } else if (setting === "disable") {
    if (!db.get("modLog" + message.guild.id)) return sendError("Mod Log Channel didnt setup before")
    db.delete("modLog" + message.guild.id)

    message.channel.send({ embeds: [new Discord.MessageEmbed()
    .setTitle("Mod Logs Disabled!")
    .setColor("RED")] })
} else {
  return sendError(":x: Usage:\nFor set Modlog chanel type `"+prefix+"modlog enable #channel`\nFor reset mod logs type `"+prefix+"modlog disable`",message)
}
  }
}
