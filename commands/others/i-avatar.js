module.exports = {
  name: "avatar",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first() || message.author
    if(user) {
      const embed = new MessageEmbed()
      .setTitle('User Avatar')
      .setImage(user.displayAvatarURL({ dynamic: true, size:2048 }))
      message.channel.send(embed)
    }
  }
}
