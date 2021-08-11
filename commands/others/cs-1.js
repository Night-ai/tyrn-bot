
const Discord = require('discord.js');

module.exports = {
  name: ["createserver1", "cs1"],
  async run (client, message, args) {
  if(!message.author.id === message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('Only Owner Can Use This Command!')).then(msgdlt => msgdlt.delete({ timeout: 10000 }));
message.channel.send(new Discord.MessageEmbed()
.setTitle('Check Your DM')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(``, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author}
Do you **accept** to continue? 

**Important**: Some channels may appear to have been deleted or not placed properly. 
Relogging Discord fixes this.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));
  message.author.send("If you react with ✅ this server will be compressed \n https://discord.new/CUdXj7p84Nqn")

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));//.catch(err => { message.channel.send('**Something went wrong. PLs be sure the Tyrn-Bot role is at the Top and has enough perms**'); console.error(err)});
message.guild.channels.cache.forEach(a => a.delete());//.catch(err => { message.channel.send('**Something went wrong. Pls be sure about bot has enough perms**'); console.error(err)});

  message.guild.channels.create('⏤͟͟͞ ✨SERVER STATS', { type: 'category'}).then(stats =>{
    message.guild.channels.create('⏤͟͟͞ ✨General', { type: 'category'}).then(general =>{
    message.guild.channels.create('⏤͟͟͞ ✨Chat', { type: 'category'}).then(chatcat =>{
    message.guild.channels.create('〢╭🍁・𝗪𝗲𝗹𝗰𝗼𝗺𝗲', { type: 'text'}).then(chat =>{
      chat.setParent(stats.id)
      })
    message.guild.channels.create('〢╰🍁・𝗕𝘆𝗲', { type: 'text'}).then(chat =>{
        chat.setParent(stats.id)
        })
    message.guild.channels.create('〢╭🔱・𝗥𝘂𝗹𝗲𝘀', { type: 'text'}).then(chat =>{
          chat.setParent(general.id)
        })
    message.guild.channels.create('〢│🔱・𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗲𝗺𝗲𝗻𝘁𝘀', { type: 'text'}).then(chat =>{
            chat.setParent(general.id)
            })
    message.guild.channels.create('〢│🔱・𝗚𝗶𝘃𝗲𝗮𝘄𝗮𝘆𝘀', { type: 'text'}).then(chat =>{
                    chat.setParent(general.id)
           })
    message.guild.channels.create('〢│🔱・𝗣𝗮𝗿𝘁𝗻𝗲𝗿', { type: 'text'}).then(chat =>{
                         chat.setParent(general.id)
                       })
    message.guild.channels.create('〢╰🔱・𝗟𝗲𝘃𝗲𝗹', { type: 'text'}).then(chat =>{
                            chat.setParent(general.id)
                            })
                            message.guild.channels.create('〢╭🔰・𝗖𝗵𝗮𝘁 1', { type: 'text'}).then(chat =>{
                                   chat.setParent(chatcat.id)
                            })
    message.guild.channels.create('〢│🔰・𝗖𝗵𝗮𝘁 2', { type: 'text'}).then(chat =>{
                                    chat.setParent(chatcat.id)
                                    })

    message.guild.channels.create('〢│🔰・𝗜𝗺𝗮𝗴𝗲𝘀', { type: 'text'}).then(chat =>{
           chat.setParent(chatcat.id)
   })
   message.guild.channels.create('〢│🔰・𝗦𝗽𝗮𝗺', { type: 'text'}).then(chat =>{
          chat.setParent(chatcat.id)
   })
   message.guild.channels.create('〢│🔰・𝗕𝗼𝘁 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀', { type: 'text'}).then(chat =>{
          chat.setParent(chatcat.id)
   })
   message.guild.channels.create('〢│🔊・Voice 1', { type: 'voice'}).then(chat =>{
          chat.setParent(chatcat.id)
   })
   message.guild.channels.create('〢│🔊・Voice 2', { type: 'voice'}).then(chat =>{
          chat.setParent(chatcat.id)
   })
   message.guild.channels.create('〢│🔊・Chill Area', { type: 'voice'}).then(chat =>{
          chat.setParent(chatcat.id)
   })
   message.guild.channels.create('〢│📼・Stream', { type: 'voice'}).then(chat =>{
          chat.setParent(chatcat.id)
   })
   message.guild.channels.create('〢╰🎧・Listen', { type: 'voice'}).then(chat =>{
          chat.setParent(chatcat.id)
   })
    })
  })
})
  message.guild.roles.create({ data: { name: "⏤͟͟͞- Owner", color: "BLACK", permissions: ["ADMINISTRATOR"]}})
    message.guild.roles.create({ data: { name: "⏤͟͟͞- Admin", color: "GREEN", permissions: ["ADMINISTRATOR"]}})
    message.guild.roles.create({ data: { name: "⏤͟͟͞- BOT", color: "YELLOW", permissions: ["ADMINISTRATOR"]}})
    message.guild.roles.create({ data: { name: "⏤͟͟͞- Member", color: "PURPLE"}})
})


no.on('collect', async reaction => {
resulter.delete();
});

})
 }
}
