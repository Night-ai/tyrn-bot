const db = require("../../database")
const Discord = require('discord.js')

module.exports = {
  name: ["prem+","premium+"],
  async run (client, message, args) {
    if (message.author.id !== "551120440584699904") {
      message.channel.send("You are not <@551120440584699904> ")
      
    } else {
  const user = message.mentions.users.first();
      
    db.set("premium" + user.id, 1)
    const embed = new Discord.MessageEmbed()
    .setTitle("Enjoy Your Premium!")
    .setDescription(`User <@${user.id}> Promoted to **PREMIUM** Tyrn User`)
    .setColor("YELLOW")
    message.channel.send(embed)
    }
    

  }
}

 /**
const db = require('quick.db')

module.exports = {
  name: "7/24",
  async run (client, message, args) {
    const Discord = require('discord.js');
    
  
  if (!message.guild) return;
    let asd = await db.get("premium" + message.author.id)
      if(asd === null) {
        return message.reply('Sorry, This Command For Only **Premium Users**')
      } else {  
      }
  }

  }
  */