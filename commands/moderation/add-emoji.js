const Discord = require('discord.js')
const db = require("../../database")
const sendError = require("../../util/error");

module.exports = {
  name:["ae", "adde", "addemoji","emoji-ekle","ekle-emoji"],
    async run(client, message, args) {
  
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS)){
    return sendError(client.config.permError,message)}

    if(!args[0])
     return sendError("Provide a emoji")

    for (const emojis of args) {
      const getEmoji = Discord.Util.parseEmoji(emojis);

      if (getEmoji.id){
        const emojiExt = getEmoji.animated ? '.gif' : '.png';
        const emojiURL = `https://cdn.discordapp.com/emojis/${getEmoji.id + emojiExt}`;
        message.guild.emojis
        .create(emojiURL, getEmoji.name).catch(err => { message.channel.send('**Something went wrong**'); console.error(err)})
        .then((emoji) =>
         message.channel.send(`Added |png| <:${emoji.name}:${emoji.id}>  |gif| <a:${emoji.name}:${emoji.id}> to the server`));
        //<a${emoji.name} + ${emoji.url}

      }
    }
    }
}