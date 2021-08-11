const Discord = require("discord.js")
module.exports = {
  name: "adddiscordjs",
  async run (client, message, args) {
    
    const arg = message.content.split(' ').slice(1)
    const code = arg.join(" ")
                  const embed = new Discord.MessageEmbed()
                  .setColor("GOLD")
                  .setTitle(`${message.author.username}#${message.author.discriminator} Added New Code!`)
                  .setDescription(code)
                  .setFooter(message.author.id)
                  .setTimestamp()
                  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      client.channels.cache.get('860929863732822016').send(embed);
  }
}