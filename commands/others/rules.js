const Discord = require('discord.js')

module.exports = {
  name: "rules",

  async run (client, message, args) {
    message.delete()

    const embed = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle("Server Rules")
      .setDescription(
        "1- **Dont be agressive to other peoples - Be honest to anothers**\n\n2- **Don't unnecessarily ping Mods / Admins**\n\n3- **Don't advertise Even in other people's DMs**\n\n4- **Dont send NSfW to normal chats**\n\n5-**Dont Spam**\n\n6- **Dont abuse your Roles**"
      )
      .setThumbnail('https://cdn.discordapp.com/avatars/840654203881521154/d3096b29e39acaf670d49f8341d9afd9.png')
      .setImage('https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif')
      .setTimestamp()
    return message.channel.send(embed);
  }
}
