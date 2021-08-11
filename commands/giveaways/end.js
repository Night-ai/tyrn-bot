const Discord = require("discord.js")
const ms = require('ms')
module.exports = {
  name: "gend",
  async run (client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setColor('#D32F2F')
    .setTitle('Only Admins Can Use This Command!')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));
        const messageID = args[0];
        if(!messageID) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle("Specify a Giveaway Message ID"));
        client.giveawaysManager.end(messageID).then(() => {
        message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle('Success! Giveaway will end in 5 seconds!'));
        }).catch((err) => {
        message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('No giveaway found for ' + messageID + ', please check and try again'));
        });
  }
}