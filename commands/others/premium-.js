const db = require("../../database")
const Discord = require('discord.js')

module.exports = {
  name: ["prem-","premium-"],
  async run (client, message, args) {
    if (message.author.id !== "551120440584699904") {
      
      message.channel.send("You are not <@551120440584699904> ")
      
    } else {
  const user = message.mentions.users.first();
      
  db.delete("premium" + user.id, 1)
    const embed = new Discord.MessageEmbed()
    .setTitle("NO WAY!")
    .setDescription(`**PREMIUM** Tyrn User <@${user.id}> Lowered to Tyrn User`)
    .setColor("RED")
    message.channel.send(embed)
    }
    

  }
}
