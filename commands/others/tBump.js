const Discord = require("discord.js")
const db = require("../../database")
module.exports = {
  name: ["grow", "bump"],
  async run (client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('Only Admins Can Use This Command!')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));
    let x = db.get("tyrnPoints" + message.author.id)
    if(x < 100) return message.channel.send(new Discord.MessageEmbed()
    .setColor("RED").setTitle("You dont have enough Tyrn Points use " + client.user.tag + " Commands to gain some")
    .setDescription(`**You need \`${100 - x}\` Tyrn Points\n\nYou can check your points by typing \`tpoints\`**`))                                       
    let gg = client.guilds.cache.get("819932711665401856");
    if(!gg) return;
    if(!gg.member(message.author).roles.cache.has("871417011685720174")) return message.channel.send(new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("**You Have to Join Support Server First and Get Ads Role from <#871743245904928828>\n\n[Click to join Server](https://discord.gg/falls )**"))
    if(gg.member(message.author).roles.cache.has("871417011685720174")){
    db.remove("tyrnPoints" + message.author.id, 100)
    const ch = message.channel
    let comment = message.content.split(" ").slice(1).join(" ") || "Dont forget to leave a comment nex time!"
    ch.createInvite({ maxAge: 0, maxUses: 0 }).then(async (invite) => { 
    client.channels.cache.get("871422344063766549").send("<@&871417011685720174>", new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("GOLD").setTitle("New Server Showed Up!")
    .setDescription(`**
Server Owner: ${message.guild.owner}
\nServer Name: ${message.guild.name}
\nMember Count: ${message.guild.memberCount}
\nServer Comment: ${comment}
\nServer Invite Link: ${invite.url}**`))
});
    message.channel.send(new Discord.MessageEmbed()
    .setColor("GOLD").setTitle("Sucsesfully Shared Your Server"))
    }
  }
}