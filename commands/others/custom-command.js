const db = require('../../database.js')
const Discord = require('discord.js')

module.exports = {
  name: ["cm","customMessage"],
  async run (client, message, args) {
    const prefix = db.get("prefix" + message.guild.id) ? db.get("prefix" + message.guild.id) : "*"
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setColor('#D32F2F')
    .setTitle('Only Admins Can Use This Command!')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));

 if (!args[0]) return message.channel.send('Pls type a `cm set <trigger> <answer>`')

let setting = args[0].toLowerCase();

let tr = db.get("customMsgTrigger" + message.guild.id) || "Null"
let ar = db.get("customMsgAnswer" + message.guild.id) || "Null"

let trigger = args.slice(1).join(' ');
let answer = args.slice(1).join(' ');

if (setting === "trigger"){
    db.set("customMsgTrigger" + message.guild.id, trigger)
    const embed = new Discord.MessageEmbed()
     .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setColor("GOLD")
    .setTitle("customMsg Trigger sucsesfully changed")
    .setDescription(`
Trigger = \`${trigger}\`

Answer = \`${ar}\`
    `)
    .setTimestamp()
    message.channel.send(embed)

} if (setting === "answer") {
     db.set("customMsgAnswer" + message.guild.id, answer)
 message.channel.send( new Discord.MessageEmbed()
     .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setColor("GOLD")
    .setTitle("CustomMsg Answer sucsesfully changed")
    .setDescription(`
Trigger = \`${tr}\`

Answer = \`${answer}\`
    `)
    .setTimestamp())

    } if (setting === "reset") {
      let wtr = db.get("customMsgTrigger" + message.guild.id)
      let war = db.get("customMsgAnswer" + message.guild.id)
      if(!wtr){db.set("customMsgTrigger" + message.guild.id, 1)}
      if(!war){db.set("customMsgAnswer" + message.guild.id, 1)}
      db.delete("customMsgTrigger" + message.guild.id)
      db.delete("customMsgAnswer" + message.guild.id)

      
     
 message.channel.send( new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Custom Message sucsesfully Reseted")
    .setTimestamp())
    }
  }
}
