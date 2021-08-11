const Discord = require('discord.js')
const db = require('../../database')
const sendError = require("../../util/error");

module.exports = {
  name: ["dil","language", "lang"],
    async run(client, message, args) {
    const prefix = db.get("prefix" + message.guild.id) ? db.get("prefix" + message.guild.id) : "*"
    
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)){
    return sendError(client.config.permError,message)}

       let settings = args[0]
      if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED").setDescription(`:warning: Error Invalid Option \n\nOptions \`${prefix}language english,turkish,reset\``))
     
      let languages = ['turkish', 'english', "reset"];
      if(!languages.includes(args[0].toLowerCase())) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED").setDescription(`:warning: Error Invalid Option \n\nOptions \`${prefix}language english,turkish,reset\``))
      
      if (settings.toLowerCase() === "turkish") {
        db.set("botLang" + message.guild.id, "turkish")
        message.channel.send(new Discord.MessageEmbed()
.setColor("PURPLE").setTitle("Bot dili değiştirildi").setDescription(`Botun dili başarıyla **Türkçe** olarak değiştirildi`))
      } if (settings === "english"){
        db.set("botLang" + message.guild.id, "english")
        message.channel.send(new Discord.MessageEmbed()
.setColor("PURPLE").setTitle("Bot lang changed").setDescription(`The language of the bot has been successfully changed to **English**`))
      }
      if (settings === "reset"){
        if(!db.get("botLang" + message.guild.id)) return message.reply("Already Using Default Language")
        db.delete("botLang" + message.guild.id,)
        message.channel.send(new Discord.MessageEmbed()
.setColor("PURPLE").setTitle("Bot language reset").setDescription(`The language of the bot has been successfully changed to **English**`))

      }
    }
}