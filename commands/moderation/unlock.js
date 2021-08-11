const Discord = require('discord.js')
const db = require("../../database")
const sendError = require("../../util/error");
const gold = require("../../util/gold");

module.exports = {
  name:["kilit-aç", "unlock"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    let channel = message.channel || message.mentions.channels.first()
    let every = message.guild.roles.cache.find(r => r.id === message.guild.id);
      
    if(lang === "english") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)){
    return sendError(client.config.permError,message)}
      
    try {  
    channel.permissionOverwrites.create(every, {
    SEND_MESSAGES: true,
    });
    message.channel.send({ embeds: [new Discord.MessageEmbed()
                                    .setColor("GOLD")
                                    .setDescription("<#" + channel.id + "> Sucsesfully Unlocked 🔓")] })
      } catch {
        return sendError(":x: Something went wrong!")
      }
    } 
    if(lang === "turkish"){
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)){
    return sendError(client.config.permError,message)}
    try {
    channel.permissionOverwrites.create(every, {
    SEND_MESSAGES: true,
    });
    message.channel.send({ embeds: [new Discord.MessageEmbed()
                                    .setColor("GOLD")
                                    .setDescription("<#" + channel.id + "> Başarıyla Kilidi Açıldı 🔓")] })
      } catch {
        return sendError(":x: Something went wrong!")
      }
    } 
    }
}