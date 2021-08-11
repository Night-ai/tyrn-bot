const Discord = require("discord.js")
const db = require("../../database")
module.exports = {
  name: "tpoints",
  async run (client, message, args) {
    if(!args[0]) {
    let x = db.get("tyrnPoints" + message.author.id)
    message.channel.send(new Discord.MessageEmbed()
    .setColor("RED").setTitle("You have `" + x + "` Tyrn Points")) }
    if(args[0] === "add") {
    if(!message.author.id === "551120440584699904") return;
     db.add("tyrnPoints" + message.author.id, 100)
    }
  }
}