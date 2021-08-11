const db = require('../../database')
const Discord = require('discord.js')

module.exports = {
  name: "prefix",
  async run (client, message, args) {
    const prefix = db.get("prefix" + message.guild.id) ? db.get("prefix" + message.guild.id) : "*"

 if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Only **Admins** can use this commmand`);
 if (!args[0]) return message.channel.send('Pls type a `prefix set <new prefix>`')

 const oldprefix = db.get("prefix" + message.guild.id) ? db.get("prefix" + message.guild.id) : "*"
 if (oldprefix == args[1]) return message.channel.send("Alr this is my prefix")

let setting = args[0].toLowerCase()
if (setting === "set"){

    db.set("prefix" + message.guild.id, args[1])
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("Prefix sucsesfully changed")
    .setDescription("New **prefix** is **" + args[1] + "**")
    .addField("Old prefix was", oldprefix)
    .addField("For reset prefix type", args.join(" ") + "resetprefix")
    .setTimestamp()
    message.channel.send(embed)

} else if (setting === "reset") {

    db.delete("prefix" + message.guild.id,)
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("Prefix sucsesfully **Reseted**")
    .setDescription("New **Prefix** is *****")
    .setFooter(`For set prefix type ${prefix}prefix set <new prefix>`)
    .setTimestamp()
    message.channel.send(embed)
}
  }
}
