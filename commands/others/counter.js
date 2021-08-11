const Discord = require('discord.js')
const db = require("../../database")
module.exports = {
  name: ["counters", "serverstats"],
    async run(client, message, args) {
      let every = message.guild.roles.cache.find(r => r.name === "@everyone");
      let x = args[0];
      if(!x) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`
**Usage is \`serverstats set voice/text, reset\`**
`))
      let x1 = ["set", "reset"]
      if(!x1.includes(x)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`
**Invalid Usage**
**Usage is \`serverstats set voice/text, reset\`**
`))
      if(x == "set"){
      let y = args[1]
      if(!y) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`
**Wrong Usage**
**Usage is \`serverstats set voice/text\`**
`))
      let y1 = ["voice", "text"]
      if(!y1.includes(y)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`
**Wrong Usage**
**Usage is \`serverstats set voice/text\`**
`))
      if(db.get("serverStats" + message.guild.id)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`
**Already set before\nYou can type \`serverstats reset\` for reset**
`))
        
      message.guild.channels.create('Server Stats', { type: 'category'}).then(serverStats =>{
      serverStats.createOverwrite(every, {
      SEND_MESSAGES: false,
      CONNECT: false
      });
      serverStats.edit ({
        position: "0"
      })
      message.guild.channels.create(`Server Stats By ${client.user.username}`, { type: `${y}`}).then(member =>{
      member.setParent(serverStats.id) 
      db.set("sMember" + message.guild.id, member.id) })
        
      message.guild.channels.create(`Server Stats By ${client.user.username}`, { type: `${y}`}).then(bot =>{
      bot.setParent(serverStats.id) 
      db.set("sBot" + message.guild.id, bot.id) })
        
      message.guild.channels.create(`Server Stats By ${client.user.username}`, { type: `${y}`}).then(all =>{
      all.setParent(serverStats.id)
      db.set("sAll" + message.guild.id, all.id)})
        
      });
      db.set("serverStats" + message.guild.id, "active")
      message.channel.send(new Discord.MessageEmbed().setColor("GOLD").setDescription(`
**Counters setup finished\n\nCounter will auto update every 10mins**
`))
      }
      
      if(x == "reset"){
      if(!db.get("serverStats" + message.guild.id)) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`
**You have to setup before**
`))
      db.delete("serverStats" + message.guild.id)    
      message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`
**Counters reset has been compeleted\nIf you wanna setup again type \`serverstats set\`**
`))  
      }
      
    }
    }