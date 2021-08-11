const Discord = require('discord.js')
const db = require('../../database')
const moment = require('moment')
require('moment-duration-format')
module.exports = {
  name:["user", "kullanıcı"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    
    if(lang === "english") {
    let member = message.mentions.users.first() || message.author
    if (member){
      message.channel.send(new Discord.MessageEmbed()
      .setColor("GOLD")
      .setTitle(`${member.tag}'s Profile`)
      .setThumbnail(member.displayAvatarURL({ dynamic: true }))
      .setDescription(`
**Username:** \`${member.username}\`

**Tag:** \`${member.discriminator}\`

**ID:** \`${member.id}\`

**Bot:** \`${member.bot ? 'Yes' : 'No'}\`

**Account Created At:** \`${moment(member.createdAt).format('DD')}/${moment(member.createdAt).format('MM')}/${moment(member.createdAt).format('YY HH:mm:ss')}\`

**Roles:** ${message.guild.members.cache.get(member.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join('  |  ')}
      `))
    } 
    } 
    if(lang === "turkish"){
          let member = message.mentions.users.first() || message.author
    if (member){
      message.channel.send(new Discord.MessageEmbed()
      .setColor("GOLD")
      .setTitle(`${member.tag} Profili`)
      .setThumbnail(member.displayAvatarURL({ dynamic: true }))
      .setDescription(`
**Kullanıcı Adı:** \`${member.username}\`

**Kullanıcı Etiketi:** \`${member.discriminator}\`

**ID:** \`${member.id}\`

**Bot:** \`${member.bot ? 'Evet' : 'Hayır'}\`

**Şu Tarihte Kuruldu:** \`${moment(member.createdAt).format('DD')}/${moment(member.createdAt).format('MM')}/${moment(member.createdAt).format('YY HH:mm:ss')}\`

**Rolleri:** ${message.guild.members.cache.get(member.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join('  |  ')}
      `))
    } 
    }
    }
}