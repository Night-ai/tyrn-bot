const Discord = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
module.exports = {
  name: "bot",
  async run (client, message, args) {
  message.channel.send( new Discord.MessageEmbed()
  .setColor("GOLD")
       .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
      .setTitle(`${client.user.username} Informations`)
      .setDescription(`
User Count
\`${client.users.cache.size}\`

Server Count
\`${client.guilds.cache.size}\`

Ping
\`${client.ws.ping} ms\`

Discord.js
\`v${Discord.version}\` 

Node.js
\`${process.version}\`

Coded By
<@551120440584699904>
      `))
}}
