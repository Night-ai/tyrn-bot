const Discord = require('discord.js')
const db = require("../../database")
const sendError = require("../../util/error");

module.exports = {
  name:["ban","yasakla","b"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    let member = message.mentions.members.first() || message.guild.members.cache.find(x => x.id === args[0])
    
    if(lang === "english") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)){
    return sendError(client.config.permError,message)}
    if(!member) return sendError("Tag a member to Ban", message)
    let reason = message.content.split(" ").slice(2).join(" ") || "No Reason Specified"
    if (member) {
    if(member.bannable == false) return sendError('Check my Perms or Role position', message);  
        member.ban({ reason: reason + " | By " + message.author.id }).then(() => {
            message.channel.send({ embeds: [new Discord.MessageEmbed()
            .setTimestamp()                                 
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#FF1F1F")
            .setTitle("User Banned from the Server")
            .setDescription(`
Banned User: <@${member.id}>\n\`${member.id}\`
\nBanned By: <@${message.author.id}>\n\`${message.author.id}\`
\nReason: ${reason}
`)                              
            ] })
          }).catch(err => {sendError('Check my Perms or Role position', message);
            console.error(err);});
      } 
    } 
    
    if(lang === "turkish") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)){
    return sendError(client.config.permError,message)}
    if(!member) return sendError("Yasaklamak için kullanıcı etiketle", message)
    let reason = message.content.split(" ").slice(2).join(" ") || "Sebep Belirtilmedi"
    if (member) {
    if(member.kickable == false) return sendError('İzinlerimi yada rol pozisyonumu kontrol et!', message);  
        member.ban({ reason: message.author.id + reason }).then(() => {
            message.channel.send({ embeds: [new Discord.MessageEmbed()
            .setTimestamp()                                 
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#FF1F1F")
            .setTitle("Kullanıcı Sunucudan Yasaklandı")
            .setDescription(`
Yasaklanan Kullanıcı: <@${member.id}>\n\`${member.id}\`
\nYasaklayan Kullanıcı: <@${message.author.id}>\n\`${message.author.id}\`
\nSebep: ${reason}
`)                              
            ] })
          }).catch(err => {sendError('İzinlerimi yada rol pozisyonumu kontrol et!', message);
            console.error(err);});
      } 
    } 
    }
}