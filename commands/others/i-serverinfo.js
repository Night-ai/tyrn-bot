const Discord = require('discord.js')
const db = require('../../database')

module.exports = {
  name:["server", "sunucu"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    
    if(lang === "english") {
    var guild = message.guild
    var channel = guild.channels.cache
    var member = guild.members.cache
    var emoji = guild.emojis.cache
    var role = guild.roles.cache
  message.channel.send( new Discord.MessageEmbed()
  .setColor("GOLD")
        .setTitle(`${guild.name} Server's Infos`)
        .setThumbnail(guild.iconURL({dynamic: true}))
        .addField('Server ID;',`${guild.id}`)
        .addField('Server Region', `${guild.region}`)
        .addField('**Server Name;**', `${guild.name}`)
        .addField('**Server Owner;**', `<@${guild.owner.id}>`)
        .addField('Member Count',`${guild.memberCount}`)
        .addField('Channel Count',`${channel.size}`)
        .addField('Role Count', `${role.size}`)
        .addField('Emoji Count',`${emoji.size}`)
        .setTimestamp(guild.createdTimestamp))
    } 
    if(lang === "turkish"){
          var guild = message.guild
    var channel = guild.channels.cache
    var member = guild.members.cache
    var emoji = guild.emojis.cache
    var role = guild.roles.cache
  message.channel.send( new Discord.MessageEmbed()
  .setColor("GOLD")
        .setTitle(`${guild.name} Sunucusunun Bilgileri`)
        .setThumbnail(guild.iconURL({dynamic: true}))
        .addField('Sunucu ID;',`${guild.id}`)
        .addField('Sunucu Bölgesi', `${guild.region}`)
        .addField('**Sunucu İsmi**', `${guild.name}`)
        .addField('**Sunucu Sahibi**', `<@${guild.owner.id}>`)
        .addField('Üye Sayısı',`${guild.memberCount}`)
        .addField('Kanal Sayısı',`${channel.size}`)
        .addField('Rol Sayısı', `${role.size}`)
        .addField('Emoji Sayısı',`${emoji.size}`)
        .setTimestamp(guild.createdTimestamp))
    }
    }
}
