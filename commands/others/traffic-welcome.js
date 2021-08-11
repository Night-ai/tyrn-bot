const db = require("../../database")
const Discord = require('discord.js')

module.exports = {
  name: ["jchannel","jch","joinchannel","gelen-kanalı"],
  async run (client, message, args) {
    const prefix = db.get("prefix" + message.guild.id) ? db.get("prefix" + message.guild.id) : "*"

if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('`Only Admins Can Use This Command!`')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));
if (!args[0]) return message.reply(`To set Welcome Msg Channel type ${prefix}lch set <#channel>`)
let setting = args[0].toLowerCase()
if (setting === "set"){
let channel = message.mentions.channels.first() || message.channel
  db.set("wlog" + message.guild.id, channel.id)
    const embed = new Discord.MessageEmbed()
    .setTitle("Join Channel Set!")
    .setDescription("Join Channel is <#" + channel.id + ">")
    .setColor("YELLOW")
    message.channel.send(embed)

} else if (setting === "reset") {
  if (!db.get("wlog" + message.guild.id)) return message.reply("Welcome Channel didnt setup before")
  db.delete("wlog" + message.guild.id)

  const embed = new Discord.MessageEmbed()
    .setTitle("Welcome channel Reseted!")
    .setDescription("To set it again type `wch set <#channel>`")
    .setColor("YELLOW")

  message.channel.send(embed)

} else {
  message.reply("Pls type `set <#channel>` or `reset`")
}

  }
}
