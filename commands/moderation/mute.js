const Discord = require('discord.js')
const db = require("../../database")
const sendError = require("../../util/error");

module.exports = {
  name:["mute", "sustur"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    let prefix = db.get("prefix" + message.guild.id) || client.config.prefix
    
    let member = message.mentions.members.first() || message.guild.members.cache.find(x => x.id === args[0])
    let role = message.guild.roles.cache.find(role => role.name === "Muted");
      
    if(lang === "english") {
      
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)){
    return sendError(client.config.permError,message)}
    
    let reason = message.content.split(" ").slice(2).join(" ") || "No Reason Specified!"
    if(!member) return sendError("Pls Tag a User to Mute!",message);
    if(!role) return sendError("This Server Doesnt has a Muted Role!\nYou can create one by typing `"+prefix+"mr create`",message);
    if (member.roles.cache.has(role.id)) return sendError("This User Already Muted!",message)
    member.roles.add(role).then(() => {
    message.channel.send({ embeds: [new Discord.MessageEmbed()
           .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
           .setColor("#FF1F1F")
           .setTitle("User Muted From the Text!")
            .setDescription(`
Muted User: <@${member.id}>\n\`${member.id}\`
\nMuteded By: <@${message.author.id}>\n\`${message.author.id}\`
\nReason: ${reason}
`)                              
            ] })
            }).catch(err => {
                  sendError('**Check my permissions or role position**',message);
                  // Log the error
                  console.error(err);
                });
    } 
    if(lang === "turkish"){
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MUTE_MEMBERS)){
    return sendError(client.config.permHata,message)}
      
    let reason = message.content.split(" ").slice(2).join(" ") || "Sebep Belirtilmedi!"
    if(!member) return sendError("Susturmak i??in bir Kullan??c??y?? etiketle!",message);
    if(!role) return sendError("Bu sunucuda Muted adl?? Rol yok\n`"+prefix+"muterole olu??tur` yazarak olu??turabilirsin!",message);
    if (member.roles.cache.has(role.id)) return sendError("Kullan??c?? zaten susturulmu??!",message)
    member.roles.add(role).then(() => {
    message.channel.send({ embeds: [new Discord.MessageEmbed()
           .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
           .setColor("#FF1F1F")
           .setTitle("Kullan??c?? Metinden Susturudu!")
            .setDescription(`
Susturulan Kullan??c??: <@${member.id}>\n\`${member.id}\`
\nSusturan Kullan??c??: <@${message.author.id}>\n\`${message.author.id}\`
\nSebep: ${reason}
`)                              
            ] })
            }).catch(err => {
                  sendError('**??zinlerimi yada Rol pozisyonumu kontrol et**',message);
                  // Log the error
                  console.error(err);
                });
    }
    }
}