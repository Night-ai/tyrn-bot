const Discord = require('discord.js')
const db = require("../../database")
const sendError = require("../../util/error");
const gold = require("../../util/gold");

module.exports = {
  name:["mutedrole", "mr", "muterole"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    const role = message.mentions.roles.first();
//-----------------------------------------------\\
    if(lang === "english") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)){
    return sendError(client.config.permError,message)}
    let settings = args[0]
    if(!settings) return sendError("Usage:\nFor turn a role to Muted role type `muterole @role`\nFor create new one type `muterole create`",message)
//-----------------------------------------------\\      
    if(role){
      role.edit({
      color: "BLACK",
      name: "Muted"
        })
     message.guild.channels.cache.forEach(a => a.permissionOverwrites.create(role, {
     SEND_MESSAGES: false
     }));
     message.channel.send({ embeds: [new Discord.MessageEmbed()
                                     .setColor("RANDOM")
                                     .setDescription("**Muted Role set as <@&" + role.id + ">\nPls check Role perms**")] });
    }
//-----------------------------------------------\\      
    if(settings = "create") {
      message.guild.roles.create({ data: { name: "Muted" }}).then(create => {
          create.edit({
      color: "RANDOM",
      name: "Muted"
        })
     let role = message.guild.roles.cache.find(r => r.name === "Muted");
     if(!role) return;
     message.guild.channels.cache.forEach(a => a.permissionOverwrites.create(role, {
     SEND_MESSAGES: false
     }));
     message.channel.send({ embeds: [new Discord.MessageEmbed()
                                     .setColor("RANDOM")
                                     .setDescription("**Muted Role set as <@&" + role.id + ">\nPls check Role perms**")] });
        })
    }
    }
//-----------------------------------------------\\
    if(lang === "turkish") {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES)){
    return sendError(client.config.permError,message)}
    let settings = args[0]
    if(!settings) return sendError("Kullanımı:\nBir rolü Muted rolü yapmak için `muterole @role` yaz\nFor create new one `muterole create`",message)
//-----------------------------------------------\\      
    if(role){
      role.edit({
      color: "BLACK",
      name: "Muted"
        })
     message.guild.channels.cache.forEach(a => a.permissionOverwrites.create(role, {
     SEND_MESSAGES: false
     }));
     message.channel.send({ embeds: [new Discord.MessageEmbed()
                                     .setColor("RANDOM")
                                     .setDescription("**Muted Role set a <@&" + role.id + ">\nPls check Role perms**")] });
    }
//-----------------------------------------------\\      
    if(settings = "oluştur") {
      message.guild.roles.create({ data: { name: "Muted" }}).then(create => {
          create.edit({
      color: "RANDOM",
      name: "Muted"
        })
     let role = message.guild.roles.cache.find(r => r.name === "Muted");
     if(!role) return;
     message.guild.channels.cache.forEach(a => a.permissionOverwrites.create(role, {
     SEND_MESSAGES: false
     }));
     message.channel.send({ embeds: [new Discord.MessageEmbed()
                                     .setColor("RANDOM")
                                     .setDescription("**Muted Role set as <@&" + role.id + ">\nPls check Role perms**")] });
        })
    }
    }
    }
}
