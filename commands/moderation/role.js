const Discord = require('discord.js')
const db = require('../../database');

module.exports = {
  name: "role",
  async run (client, message, args) {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed()
    .setColor('#D32F2F')
    .setTitle('Only Admins Can Use This Command!')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));
    if (!db.get("premium" + message.author.id)) return message.reply("Sorry This Command For Only **Premium Users**");

  message.guild.members.cache.forEach(member => { 
  const role = message.mentions.roles.first();
  member.roles.add(role);
    message.channel.send("KKK")
})
  }}
