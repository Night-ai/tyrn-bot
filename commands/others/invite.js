const Discord = require('discord.js')

module.exports = {
  name: "invite",

  async run (client, message, args) {

    const embed = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setAuthor(`INVITE ${client.user.username}`)
      .setDescription(
        `
        [🔱Invite ${client.user.username}🔱](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`
      )
      .setThumbnail(client.user.displayAvatarURL({dynamic: true}))

    return message.reply(embed);
  }
}
