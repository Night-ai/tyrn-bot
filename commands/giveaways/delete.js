const Discord = require("discord.js")
const ms = require('ms')
const sendError = require("../../util/error");

module.exports = {
  name: "gdelete",
  async run (client, message, args) {
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)){
    return sendError("Only Admins Can Use This Command!",message)}
        const messageID = args[0];
        if(!messageID) return message.channel.send({ embeds: [new Discord.MessageEmbed()
                                                              .setColor("RED")
                                                              .setTitle("Specify a Giveaway Message ID")] })
        client.giveawaysManager.delete(messageID).then(() => {
        message.channel.send({ embeds: [new Discord.MessageEmbed()
                                        .setColor("GREEN")
                                        .setTitle('Success! Giveaway deleted!')] })
        }).catch((err) => {
        message.channel.send({ embeds: [new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setTitle('No giveaway found for ' + messageID + ', please check and try again')] })
        });
  }
}