const db = require("../../database")
const Discord = require('discord.js')

module.exports = {
  name: ["lchannel","lch","leavechannel","giden-kanalı"],
  async run (client, message, args) {
    const prefix = db.get("prefix" + message.guild.id) ? db.get("prefix" + message.guild.id) : "*"

if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('`Only Admins Can Use This Command!`')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));
if (!args[0]) return message.lineReplyNoMention(`To set Welcome Msg Channel type ${prefix}wch set <#channel>`)
let setting = args[0].toLowerCase()
if (setting === "set"){

  var channel = message.mentions.channels.first() || message.channel
  db.set("lelog" + message.guild.id, channel.id)
     message.channel.send(new Discord.MessageEmbed()
    .setTitle("Leave Channel set!")
    .setDescription("Leave Channel is <#" + channel.id + ">")
    .setColor("YELLOW"))
} else if (setting === "reset") {
  if (!db.get("lelog" + message.guild.id)) return message.reply("Welcome Channel didnt setup before")
  db.delete("lelog" + message.guild.id)

    message.channel.send(new Discord.MessageEmbed()
    .setTitle("Leave channel Reseted!")
    .setDescription("To set it again type `lch set <#channel>`")
    .setColor("YELLOW"))
} else {
  message.reply("Pls type `set <#channel>` or `reset`")
}
  }
}
