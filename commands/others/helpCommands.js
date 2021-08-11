const Discord = require('discord.js')
const db = require("../../database")

module.exports = {
  name:["commands", "komutlar"],
    async run(client, message, args) {
    let prefix = db.get("prefix" + message.guild.id) || "*"
    const lang = db.get("botLang" + message.guild.id) || "english"
    
    if(lang === "turkish") {
   const Help = new Discord.MessageEmbed()
    .setAuthor('TyrnBot  Komutları')
    .setThumbnail('https://cdn.discordapp.com/avatars/840654203881521154/d3096b29e39acaf670d49f8341d9afd9.png')
    .setDescription(`
**Moderasyon Komutları ⚙️** 

\`at - at @üye\`
\`yasakla - yasakla @üye\` 
\`yasak-kaldır - yasak-kaldır <kullanıcıID>\` 
\`kilitle - kilitle\` 
\`kilit-kaldır - kilit-kaldır\` 
\`sil - sil <miktar/hepsi>\` 
\`nuke - nuke\`
\`mute - sustur @üye\` 
\`unmute - unmute @üye\`

**OtoMod**
\`otorol @rol\`
\`reklam-engel\`
\`gelen-kanalı\` 
\`giden-kanalı\` 

**Bilgi Komutları ℹ️**

\`kullanıcı\` 
\`sunucu\`
\`bot\`
\`avatar\`

**Eğlence Komutları 🥳**

\`rus-ruleti\` 
\`mayın-tarlası\`

**Müzik Komutları 🎧**

\`mplay\` 
\`mskip\`
\`mnp\`
\`mqueue\`
\`mlyrics\`
\`mvolume\` <0/150>

**Giveaway Commands 🎁**

\`gstart\` 
\`gend\`
\`glist\`
\`reroll\`
\`mdelete\`

**Oto Sunucu Kurma Komudu Menüsü📦**
 
1- ÖNEMLİ Sadece sunucu Sahipleri kullanabilir

2- Tüm Rol ve Kanallar silinecektir

3- Komudu kullandıktan sonra kanal izinlerini kendiniz ayarlamalısınız

Başlamaya Hazır mısın?
Sunucu Şablonları;
\`cs1\`

**Yapılındırma Komutları 🛠️**
\`prefix, dil\`

**Custom Message Command**
\`customMessage Trigger <someThing>\`
\`customMessage Answer <someThing>\`

**Emoji Ekleme Komudu 🔥**
\`${prefix}ekle-emoji <emojiler>\`
      `)
    .addField('Bizi Destekle','[Invite TyrnBot](https://discordapp.com/oauth2/authorize?client_id=843505868275449866&scope=bot&permissions=8) | [Upvote TyrnBot](https://top.gg/bot/840654203881521154)')
    .setColor("#6DFF00")
    .setTimestamp()
    .setFooter(`Total Commands: ${client.commands.size + 10}`)
   message.channel.send(Help)
   }
    if(lang === "english"){
          const filter = (reaction, user) => {
  return ["🧾","⚙️","ℹ️","🥳","🎧","📦"].includes(reaction.emoji.name)  && user.id === message.author.id && reaction.users.remove(message.author.id).catch(err => { message.channel.send('**Something went wrong this c**'); console.error(err)});
};
let prefix = "*"
   const Help = new Discord.MessageEmbed()
    .setAuthor('TyrnBot  Commands')
    .setThumbnail('https://cdn.discordapp.com/avatars/840654203881521154/d3096b29e39acaf670d49f8341d9afd9.png')
    .setDescription(`
**Moderation Commands ⚙️**

\`kick - kick @member\`
\`ban - ban @member\` 
\`unban - unban <userID>\` 
\`lock - lock\` 
\`unlock - unlock\` 
\`clear - clear <count/all>\` 
\`nuke - nuke\`
\`mute mute @member\` 
\`unmute unmute @member\`

**AutoMod**
\`autorole\`
\`linkblocker\`
\`joinchannel\` 
\`leavechannel\`

**Infortmation Commands ℹ️**

\`user\` 
\`server\`
\`bot\`
\`avatar\`

**Fun Commands 🥳**

\`russianroulette\` 
\`minefield\`

**Music Commands 🎧**

\`mplay\` <song name>
\`mskip\`
\`mnp\`
\`mqueue\`
\`mlyrics\`
\`mvolume\` <0/150>

**Giveaway Commands 🎁**

\`gstart\` 
\`gend\`
\`glist\`
\`reroll\`
\`mdelete\`

**Auto Server Creator Menu 📦**

1- IMPORTANT Only Server Owner Can Use This Command

2- All Roles and Channels will be Permanently Deleted

3- You have to set the channel permissions yourself after using the command

Are you ready to Start?
Server Templates;
\`cs1\`

**Config Comands 🛠️**
\`prefix, language\`

**Custom Message Command**
\`customMessage Trigger <someThing>\`
\`customMessage Answer <someThing>\`

**Add Emoji Command 🔥**
\`${prefix}adde\` <emojis>
      `)
    .addField('Support Us','[Invite TyrnBot](https://discordapp.com/oauth2/authorize?client_id=843505868275449866&scope=bot&permissions=8) | [Upvote TyrnBot](https://top.gg/bot/840654203881521154)')
    .setColor("#6DFF00")
    .setTimestamp()
    .setFooter(`Total Commands: ${client.commands.size + 10}`)
   message.channel.send(Help)
    }    
    }
}