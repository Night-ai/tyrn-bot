const { MessageEmbed } = require("discord.js")
module.exports = async (text, msg) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription("**" + text + "**")
    await msg.reply({ embeds: [embed] }).then(msg => { setTimeout(() => msg.delete(), 15000); })
}
