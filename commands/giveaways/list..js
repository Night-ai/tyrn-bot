const Discord = require("discord.js")
const ms = require('ms')
module.exports = {
  name: "glist",
  async run (client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setColor('#D32F2F')
    .setTitle('Only Admins Can Use This Command!')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));
    let activeGiveaways = client.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id);
    let giveaways = activeGiveaways.filter((g) => !g.ended);
    
    if (giveaways.length === 0) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('#D32F2F')
    .setTitle('This Server doesnt has any active Giveaway!\nStart Giveaway by typing `gstart`'))
      return;
    }

  return message.channel.send(new Discord.MessageEmbed()
  .setColor("GOLD")
  .setTitle("" + message.guild.name + " | Giveaway List")
  .setDescription(`${giveaways.map((g) => `**Prize**: ${g.data.prize}
**Winner Count**: ${g.data.winnerCount}
**ID**: ${g.messageID}
**Channel**: <#${g.channelID}>`).join("\n\n")}`)
  .setFooter(client.user.username, client.user.displayAvatarURL()));
  }
}