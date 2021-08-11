const Discord = require('discord.js')
const db = require("../../database")
const sendError = require("../../util/error");

module.exports = {
  name:["yasak-kaldır", "unban"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    let id = args[0]
    if(lang === "english") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)){
    return sendError(client.config.permError,message)}  
    
    if (isNaN(id)) return sendError('Please type User ID to Unban',message);
    message.guild.bans.fetch().then(ban => {
    if (ban.size === 0) return sendError('There is no User Banned in this Server',message)
    const banned = ban.find(b => b.user.id === id)
    if (!banned) return message.reply('This user is not Banned',message)
    message.guild.members.unban(banned.user)
    message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor("#6DFF00")
      .setTitle("User Unbanned from the Server")
            .setDescription(`
Unbanned User: <@${id}>\n\`${id}\`
\nUnbanned By: <@${message.author.id}>\n\`${message.author.id}\`
`)    
      .setTimestamp()] }).catch(err => {
                                return sendError("Check my Perms",message)
                                })
      })
    } 
    if(lang === "turkish"){
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)){
    return sendError(client.config.permHata,message)}  
    
    if (isNaN(id)) return sendError('Kullanıcının Yasağını kaldırmak için ID sini yazmalısın',message);
    let x = message.guild.bans.fetch()
    if (x.size === 0) return sendError('Bu sunucuda kimse Yasaklanmamış',message)
    const banned = x.find(b => b.user.id === id)
    if (!banned) return message.reply('Bu kullanıcı Yasaklı değil',message)
    message.guild.members.unban(banned.user)
    message.channel.send({ embeds: [new Discord.MessageEmbed()
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor("#6DFF00")
      .setTitle("Kullanıcının Yasağı Kaldırıldı")
      .addField('Unbanned User:', `<@${id}>`)
      .addField('Unbanned by:', `<@${message.author.id}>`)
      .setTimestamp()] }).catch(err => {
                                return sendError("Check my Perms",message)
      console.error(err)
                                })
    }
    }
}