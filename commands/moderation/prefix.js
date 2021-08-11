const Discord = require('discord.js');
const db = require('../../database');
const sendError = require("../../util/error");

module.exports = {
  name:["prefix", "ön-ek"],
    async run(client, message, args) {
    const lang = db.get("botLang" + message.guild.id) || "english"
    const prefix = db.get("prefix" + message.guild.id) || client.config.prefix
    if(lang === "english") {
    const prefix = db.get("prefix" + message.guild.id) ? db.get("prefix" + message.guild.id) : "*"

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setColor('#D32F2F')
    .setTitle('Only Admins Can Use This Command!')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));
 if (!args[0]) return message.channel.send('Pls type a `prefix set <new prefix>`')
 if (prefix == args[1]) return message.channel.send("Alr this is my prefix")
let setting = args[0].toLowerCase()
if (setting === "set"){
     if(!args[1]) return message.channel.send("Specify new Prefix")
    db.set("prefix" + message.guild.id, args[1])
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("Prefix sucsesfully changed")
    .setDescription("New **prefix** is **" + args[1] + "**")
    .setFooter(`Type prefix reset For reset prefix`)
    .setTimestamp()
    message.channel.send(embed)
    } if (setting === "reset") {
    db.delete("prefix" + message.guild.id,)
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("Prefix sucsesfully **Reseted**")
    .setDescription("New **Prefix** is *****")
    .setFooter(`For set prefix type prefix set <new prefix>`)
    .setTimestamp()
    message.channel.send(embed)} 
    } 
    if(lang === "turkish"){
         const prefix = db.get("prefix" + message.guild.id) ? db.get("prefix" + message.guild.id) : "*"

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
    .setColor('#D32F2F')
    .setTitle('Bu komutu kullanmak için yetkin yok!')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));
 if (!args[0]) return message.channel.send('`prefix ayarla <yeni prefix>` şeklinde kullanmalısın')
 if (prefix == args[1]) return message.channel.send("Bu zaten benim prefixim")
let setting = args[0].toLowerCase()
if (setting === "ayarla"){
     if(!args[1]) return message.channel.send("Bir prefix belirtmelisin")
    db.set("prefix" + message.guild.id, args[1])
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("Prefix başarıyla değiştirildi")
    .setDescription("Yeni **prefix** **" + args[1] + "** oldu")
    .setFooter(`Sıfırlamak için prefix sıfırla yazabilirsin`)
    .setTimestamp()
    message.channel.send(embed)
    } if (setting === "sıfırla") {
    db.delete("prefix" + message.guild.id,)
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("Prefix başarıyla **Sıfırlandı**")
    .setDescription("Yeni prefix ***** oldu")
    .setFooter(`Tekrar ayarlamak için prefix ayarla <yeni prefix> yaz`)
    .setTimestamp()
    message.channel.send(embed)} 
    }
    }
}