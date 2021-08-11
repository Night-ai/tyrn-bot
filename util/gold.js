const { MessageEmbed } = require("discord.js")
module.exports = async (text, msg) => {
    let embed = new MessageEmbed()
    .setColor("GOLD")
    .setDescription("**" + text + "**")
    await msg.channel.send({ embeds: [embed] }).then(msg => { setTimeout(() => msg.delete(), 10000); })
}
