const Discord = require('discord.js')
const db = require('../../database')
const sendError = require("../../util/error");

module.exports = {
  name:["linkblocker", "lb", "reklam-engel"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english";
      
    let prefix = db.get("prefix" + message.guild.id) || client.config.prefix
    
    if(lang === "english") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)){
    return sendError(client.config.permError,message)}
    if (!args[0]) return sendError("Usage:\nFor enable type `"+prefix+"linkblocker enable`\nFor disable type `"+prefix+"linblocker disable`",message);
    let setting = args[0].toLowerCase()
    if (setting === "enable"){
      db.set("linkBlocker" + message.guild.id, "active")
      
      message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setTitle('Link Blocker Enabled')
      .setColor("GOLD")] })

    } if (setting === "disable") {
      if (!db.get("linkBlocker" + message.guild.id)) return sendError("link blocker didnt enable before")
      db.delete("linkBlocker" + message.guild.id)
      
      message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setTitle('Link Blocker Disabled')
      .setColor("RED")] })

    } else {
      return sendError(":x: Usage:\nFor enable type `"+prefix+"linkblocker enable`\nFor disable type `"+prefix+"linblocker disable`",message);
    }
    }   
      
    if(lang === "turkish") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)){
    return sendError(client.config.permHata,message)}
    if (!args[0]) return sendError("Kullanımı:\nAktifleştirmek için `"+prefix+"reklam-engel aç` yaz\nKapatmak  için `"+prefix+"reklam-engel kapat` yaz",message);
    let setting = args[0].toLowerCase()
    if (setting === "aç"){
      db.set("linkBlocker" + message.guild.id, "active")
      
      message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setTitle('Reklam Engel Açıldı')
      .setColor("GOLD")] })

    } if (setting === "disable") {
      if (!db.get("linkBlocker" + message.guild.id)) return sendError("Link blocker didnt enable before")
      db.delete("linkBlocker" + message.guild.id)
      
      message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setTitle('Reklam Engel Kapatıldı')
      .setColor("RED")] })

    } else {
      return sendError(":x: Kullanımı:\nAktifleştirmek için `"+prefix+"reklam-engel aç` yaz\nKapatmak  için `"+prefix+"reklam-engel kapat` yaz",message);
    }
    }     
    }
}