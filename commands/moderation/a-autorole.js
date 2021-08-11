const Discord = require('discord.js')
const db = require('../../database')
const sendError = require("../../util/error");

module.exports = {
  name:["autorole", "ar", "otorol"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    let prefix = db.get("prefix" + message.guild.id) || client.config.prefix
    if(lang === "english"){
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)){
    return sendError(client.config.permError,message)}
    
    if (!args[0]) return sendError("Usage:\nFor enable type `"+prefix+"autorole enable @role`\nFor disable type `"+prefix+"autorole disable`",message);
    let role = message.mentions.roles.first()
    let setting = args[0].toLowerCase()
    if (setting === "enable"){
      if (!role) return sendError("Tag a Role",message)
      db.set("autorole" + message.guild.id, role.id)
      message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setTitle('AutoRole is **Enabled** ')
      .setDescription(`Autorole is <@&${role.id}>`)
      .setColor("BLUE")] })

    } else if (setting === "disable") {

      if (!db.get("autorole" + message.guild.id)) return sendError('Autorole has not set before in this Server',message)
      db.delete("autorole" + message.guild.id)
      message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setTitle('AutoRole is **Disabled** ')
      .setColor("RED")] })
      
    } else {
      return sendError(":x: Usage:\nFor enable type `"+prefix+"autorole enable @role`\nFor disable type `"+prefix+"autorole disable`",message);
    }
    }     
      
    if(lang === "turkish"){
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)){
    return sendError(client.config.permHata,message)}
    
    if (!args[0]) return sendError("Type `"+prefix+"autorole set @role` for set / `"+prefix+"autorole reset` for reset",message);
    let role = message.mentions.roles.first()
    let setting = args[0].toLowerCase()
    if (setting === "set"){
      if (!role) return sendError("Tag a Role",message)
      db.set("autorole" + message.guild.id, role.id)
      message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setTitle('AutoRole is **Enabled** ')
      .setDescription(`Autorole is <@&${role.id}>`)
      .setFooter('To reset Autorole type `autorolereset`')
      .setColor("BLUE")] })

    } else if (setting === "reset") {

      if (!db.get("autorole" + message.guild.id)) return sendError('Autorole has not set before in this Server',message)
      db.delete("autorole" + message.guild.id)
      message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setTitle('AutoRole is **Disabled** ')
      .setDescription("If you wanna set it again type `autorole set <role>`")
      .setColor("RED")] })
      
    } else {
      return sendError(":x: Usage:\nFor enable type `"+prefix+"autorole enable @role`\nFor disable type `"+prefix+"autorole disable`",message);
    }
    }  
    }
}