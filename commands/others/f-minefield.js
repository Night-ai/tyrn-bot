const Discord = require('discord.js')



module.exports = {
  name: "minefield",
  async run (client, message, args) {



    const embed = new Discord.MessageEmbed()
    .setAuthor("Try to Find All Trees Without Touch Bombs")
    .setTitle('A tip here for you! Whats my name?')
    .setDescription(
      `
      Good                                        Luck
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴||
      ||🌴|| ||💣|| ||💣|| ||💣|| ||💣|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴|| ||🌴||
      ||🌴|| ||💣|| ||💣|| ||💣|| ||🌴|| ||🌴|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴||
      ||🌴|| ||💣|| ||💣|| ||💣|| ||💣|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||💣|| ||💣|| ||💣|| ||💣|| ||🌴||
      ||🌴|| ||💣|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴||
      ||🌴|| ||💣|| ||💣|| ||💣|| ||💣|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||💣|| ||🌴|| ||🌴|| ||🌴||
      ||🌴|| ||🌴|| ||💣|| ||🌴|| ||🌴|| ||🌴|| ||🌴||
      ||🌴|| ||💣|| ||💣|| ||💣|| ||💣|| ||💣|| ||🌴||
      ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴|| ||🌴||

`)
    .setColor("#6DFF00")
    message.channel.send(embed)

  }
}