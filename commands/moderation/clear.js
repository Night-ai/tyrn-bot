const Discord = require('discord.js')
const db = require("../../database")
const sendError = require("../../util/error");
const gold = require("../../util/gold");

module.exports = {
  name:["sil", "clear"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    
    if(lang === "english") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)){
    return sendError(client.config.permError,message)}

    if(!args[0]) return sendError("Usage:\nFor delete 100 messages type `clear all`\nOr type `clear <2-100>` to delete as much as you want",message) 
    let x = args[0]
    if(x > 2 || x < 101) {
    message.channel.bulkDelete(Number(x))
    gold(x + " Messages has been deleted",message)
    } 
    else if (x === "all") {
    message.channel.bulkDelete(Number(100))
    gold("100 Messages has been deleted",message)
    } else {
      return sendError(":x: Usage:\nFor delete 100 messages type `clear all`\nOr type `clear <2-100>` to delete as much as you want",message) 
    }
    }
    
    if(lang === "turkish") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)){
    return sendError(client.config.permHata,message)}

    if(!args[0]) return sendError("Kullanımı:\n100 mesaj silmek için `sil hepsi` yaz\nYada istediğin miktarda silmek için  `sil <2-100>` yaz",message) 
    let x = args[0]
    if(x > 2 || x < 101) {
    message.channel.bulkDelete(Number(x))
    gold(x + " Mesaj silindi",message)
    } 
    else if (x === "hepsi") {
    message.channel.bulkDelete(Number(100))
    gold("100 Mesaj silindi",message)
    } else {
      return sendError(":x: Kullanım:\n100 mesaj silmek için `sil hepsi` yaz\nYada istediğin miktarda silmek için  `sil <2-100>` yaz",message) 
    }
    }
    }
}