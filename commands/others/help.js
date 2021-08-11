const Discord = require('discord.js')
const db = require("../../database")

module.exports = {
    name: ["help", "yardım", "tyrn"],
    async run(client, message, args) {
        let prefix = db.get("prefix" + message.guild.id) || "*"
        const lang = db.get("botLang" + message.guild.id) || "english"

        if (lang === "turkish") {
            const filter = (reaction, user) => {
                return ["🧾", "⚙️", "ℹ️", "🥳", "🎧", "📦", "🎁"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id).catch(err => {
                    message.channel.send('**Something went wrong \n Type \`*commands\` to see command list**');
                    console.error(err)
                });
            };

            const Help = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}  Komutları`)
                 .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                .setDescription(`
**Moderasyon Komutları ⚙️** 

**Bilgi Komutları ℹ️**

**Eğlence Komutları 🥳**

**Müzik Komutları 🎧**

**Çekiliş Komutları 🎁**

**Oto Sunucu Kurma Komudu Menüsü📦**
 
**Yapılındırma Komutları 🛠️**
\`prefix, dil\`

**Custom Message Command**
\`customMessage Trigger <someThing>\`
\`customMessage Answer <someThing>\`

**Emoji Ekleme Komudu 🔥**
\`${prefix}ekle-emoji <emojiler>\`
      `)
                .addField('Bizi Destekle', `[Invite ${client.user.username}](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) | [Upvote ${client.user.username}](https://top.gg/bot/${client.user.id})`)
                .setColor("#6DFF00")
                .setTimestamp()
                .setFooter(`Total Commands: ${client.commands.size + 10}`)
            var menü = await message.channel.send(Help)
            const collector = menü.createReactionCollector(filter, { time: 99999 });
            let emojiler = ["🧾", "⚙️", "ℹ️", "🥳", "🎧", "📦", "🎁"]
            await menü.react(emojiler[0])
            await menü.react(emojiler[1])
            await menü.react(emojiler[2])
            await menü.react(emojiler[3])
            await menü.react(emojiler[4])
            await menü.react(emojiler[5])
            await menü.react(emojiler[6])

            collector.on('collect', (reaction, user) => {
                if (reaction.emoji.name == "🧾") {
                    menü.edit(Help)
                }

                if (reaction.emoji.name == "⚙️") {
                    const moderation = new Discord.MessageEmbed()
                         .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                        .setTitle(`${client.user.username} Moderation Commands`).setColor("#00ff00").setTimestamp()
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
\`muterole - muterole @role\`

**OtoMod**
\`otorol @rol\`
\`reklam-engel\`
\`gelen-kanalı\` 
\`giden-kanalı\` 
      `)
                    menü.edit(moderation)
                }

                if (reaction.emoji.name == "ℹ️") {
                    const info = new Discord.MessageEmbed()
                        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                        .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                        .setDescription(`
**Bilgi Komutları ℹ️**

\`kullanıcı\` 
\`sunucu\`
\`bot\`
\`avatar\`
      `)
                    menü.edit(info)
                }

                if (reaction.emoji.name == "🥳") {
                    const fun = new Discord.MessageEmbed()
                        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                        .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                        .setDescription(`
**Eğlence Komutları 🥳**

\`rus-ruleti\` 
\`mayın-tarlası\`
      `)
                    menü.edit(fun)
                }

                if (reaction.emoji.name == "🎧") {
                    const music = new Discord.MessageEmbed()
                        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                        .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                        .setDescription(`
**Music Commands 🎧**

\`mplay\` 
\`mskip\`
\`mnp\`
\`mqueue\`
\`mloop\`
\`mlyrics\`
\`mvolume\` <0/150>
      `)
                    menü.edit(music)
                }

                if (reaction.emoji.name == "🎁") {
                    const giveaway = new Discord.MessageEmbed()
                        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                        .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                        .setDescription(`
**Giveaway Commands 🎁**

\`gstart\` 
\`gend\`
\`glist\`
\`reroll\`
\`mdelete\`
      `)
                    menü.edit(giveaway)
                }

                if (reaction.emoji.name == "📦") {
                    const cs = new Discord.MessageEmbed()
                        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                        .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                        .setDescription(`
**TyrnBot Sunucu Kurma Komudu📦**

1- ÖNEMLİ Sadece sunucu Sahipleri kullanabilir

2- Tüm Rol ve Kanallar silinecektir

3- Komudu kullandıktan sonra kanal izinlerini kendiniz ayarlamalısınız

Başlamaya Hazır mısın?
Sunucu Şablonları;
\`cs1\`
      `)
                    menü.edit(cs)
                }

            });

            collector.on('end', collected => {
                console.log(`Collected ${collected.size} items`);
            });
        }
        if (lang === "english") {
            const filter = (reaction, user) => {
                return ["🧾", "⚙️", "ℹ️", "🥳", "🎧", "📦", "🎁"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id).catch(err => {
                    message.channel.send('**Something went wrong \n Type \`*commands\` to see command list**');
                    console.error(err)
                });
            };
            let prefix = "*"
            const Help = new Discord.MessageEmbed()
               .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
               .setTitle(`${client.user.username} Commands`)
               .setDescription(`
**Moderation Commands ⚙️**

**Infortmation Commands ℹ️**

**Fun Commands 🥳**

**Music Commands 🎧**

**Giveaway Commands 🎁**

**Auto Server Creator Menu 📦**

**Config Commands 🛠️**
\`prefix, language\`

**Custom Message Command**
\`customMessage Trigger <someThing>\`
\`customMessage Answer <someThing>\`

**Add Emoji Command 🔥**
\`${prefix}adde\` <emojis>
      `)
                .addField('Support Us', `[Invite ${client.user.username}](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) | [Upvote ${client.user.username}](https://top.gg/bot/${client.user.id})`)
                .setColor("#6DFF00")
                .setTimestamp()
                .setFooter(`Total Commands: ${client.commands.size + 10}`)
            var menü = await message.channel.send(Help)
            const collector = menü.createReactionCollector(filter, { time: 99999 });
            let emojiler = ["🧾", "⚙️", "ℹ️", "🥳", "🎧", "🎁", "📦"]
        await menü.react(emojiler[0])
        await menü.react(emojiler[1])
        await menü.react(emojiler[2])
        await menü.react(emojiler[3])
        await menü.react(emojiler[4])
        await menü.react(emojiler[5])
        await menü.react(emojiler[6])

        collector.on('collect', (reaction, user) => {
            if (reaction.emoji.name == "🧾") {
                menü.edit(Help)
            }

            if (reaction.emoji.name == "⚙️") {
                const moderation = new Discord.MessageEmbed()
                    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                    .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
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
\`muterole - muterole @role\`

**AutoMod**
\`autorole\`
\`linkblocker\`
\`joinchannel\` 
\`leavechannel\` 
      `)
                menü.edit(moderation)
            }

            if (reaction.emoji.name == "ℹ️") {
                const info = new Discord.MessageEmbed()
                    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                    .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                    .setDescription(`
**Information Commands ℹ️**

\`user\` 
\`server\`
\`bot\`
\`avatar\`
      `)
                menü.edit(info)
            }

            if (reaction.emoji.name == "🥳") {
                const fun = new Discord.MessageEmbed()
                    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                    .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                    .setDescription(`
**Fun Commands 🥳**

\`russianroulette\` 
\`minefield\`
      `)
                menü.edit(fun)
            }

            if (reaction.emoji.name == "🎧") {
                const music = new Discord.MessageEmbed()
                    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                    .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                    .setDescription(`
**Music Commands 🎧**

\`mplay\` <song name>
\`mskip\`
\`mnp\`
\`mqueue\`
\`mlyrics\`
\`mvolume\` <0/150>
      `)
                menü.edit(music)
            }

            if (reaction.emoji.name == "🎁") {
                const giveaway = new Discord.MessageEmbed()
                    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                    .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                    .setDescription(`
**Giveaway Commands 🎁**

\`gstart\` 
\`gend\`
\`glist\`
\`reroll\`
\`mdelete\`
      `)
                menü.edit(giveaway)
            }
          
            if (reaction.emoji.name == "🎁") {
                    const giveaway = new Discord.MessageEmbed()
                        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                        .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                        .setDescription(`
**Giveaway Commands 🎁**

\`gstart\` 
\`gend\`
\`glist\`
\`reroll\`
\`mdelete\`
      `)
                    menü.edit(giveaway)
                }

            if (reaction.emoji.name == "📦") {
                const cs = new Discord.MessageEmbed()
                    
                
                    .setTitle(`${client.user.username} Commands`).setColor("#00ff00").setTimestamp()
                    .setDescription(`
**TyrnBot CreateServer Commands 📦**

1- IMPORTANT Only Server Owner Can Use This Command

2- All Roles and Channels will be Permanently Deleted

3- You have to set the channel permissions yourself after using the command

Are you ready to Start?
Server Templates;
\`cs1\`
      `)
                menü.edit(cs)
            }

        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
    }
}
}