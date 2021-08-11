console.log(process.version)
const Discord = require('discord.js');
const Intents = Discord.Intents
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS,
                                              Intents.FLAGS.GUILD_MEMBERS,
                                              Intents.FLAGS.GUILD_BANS,
                                              Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
                                              Intents.FLAGS.GUILD_INTEGRATIONS,
                                              Intents.FLAGS.GUILD_WEBHOOKS,
                                              Intents.FLAGS.GUILD_INVITES,
                                              Intents.FLAGS.GUILD_VOICE_STATES,
                                              Intents.FLAGS.GUILD_PRESENCES,
                                              Intents.FLAGS.GUILD_MESSAGES,
                                              Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                                              Intents.FLAGS.GUILD_MESSAGE_TYPING,
                                              Intents.FLAGS.DIRECT_MESSAGES,
                                              Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
                                              Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
client.login(process.env.token);
const fs = require("fs");
const { join } = require('path');
const db = require('quick.db')
client.commands = new Discord.Collection;
client.on("error", console.error);
client.queue = new Map();
client.config = {
  "prefix": "!",
  "ownerId": "551120440584699904",
  "permError": "Only Admins can use this Command!",
  "permHata": "Bu Komutu kullanmak için Yönetici olmalısın!"
}
//-----------------------------------------------\\
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}
//-----------------------------------------------\\
const cmdF = ["moderation", "giveaways", "others"]
cmdF.forEach(x => {
const commands = fs.readdirSync(join(__dirname, `commands/${x}`)).filter(file =>
  file.endsWith(".js")
); 
for (const file of commands) {
  const command = require(join(__dirname, `commands/${x}`, `${file}`));
  if (typeof command.name === "object") {
    command.name.forEach(x => {
      client.commands.set(x, command);
    });
  } else {
    client.commands.set(command.name, command);
  }
}
});
//-----------------------------------------------\\
client.on("messageCreate", message => {
let prefix = db.get("prefix" + message.guild.id) || client.config.prefix
if(message.content.toLowerCase().includes(`${client.user.id}`)) {
let embed = new Discord.MessageEmbed()
.setTitle(`My prefix is "**${client.config.prefix}**" `)
.setColor("RANDOM")
message.channel.send({ embeds: [embed] })
  }
});
//-----------------------------------------------\\
client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) return;
  if (!db.get("linkBlocker" + message.guild.id)) return;
      const reklam = [
      ".com",  
      "http",
      "discord.gg",
      "youtube.com"
    ];
  if (reklam.some(word => message.content.toLowerCase().includes(word))) {
    message.delete();
    let embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**<@${message.author.id}> Dont Do Ads!**`)
    message.channel.send({ embeds: [embed] }).then(msg => { setTimeout(() => msg.delete(), 3000); })
  }
});
client.on("messageUpdate", (old, message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) return;
  if (!db.get("linkBlocker" + message.guild.id)) return;
      const reklam = [
      ".com",  
      "http",
      "discord.gg",
      "youtube.com"
    ];
  if (reklam.some(word => message.content.toLowerCase().includes(word))) {
    message.delete();
    let embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**<@${message.author.id}> Dont Do Ads!**`)
    message.channel.send({ embeds: [embed] }).then(msg => { setTimeout(() => msg.delete(), 3000); })
  }
});
//-----------------------------------------------\\
client.on("guildMemberAdd", member => {
  const arole = member.guild.roles.cache.find(r => r.id === db.get("autorole" + member.guild.id));
  if(!arole) return;
  member.roles.add(arole);
})
//-----------------------------------------------\\
client.on("guildMemberAdd", member => {
  let memberLog = member.guild.channels.cache.get(db.get("wlog" + member.guild.id));
  if(!memberLog) return;
  let x = (member.createdAt <= 432000000) ? "Danger" : "Safe"
  let embed = new Discord.MessageEmbed()
    .setTitle(`💠 ${member.user.tag}`)
    .setThumbnail(member.user.displayAvatarURL())
    .setColor("#6DFF00")
    .setFooter(`${member.guild.name}`)
    .setTimestamp()
    .setDescription(`
**🔥 ${member} Joined to ${member.guild.name}!
\n🔥 Now We are \`${member.guild.memberCount}\` Member With You!
\n🔥 Account Security: ${x}**
    `)
  memberLog.send({ embeds: [embed] })
});
client.on("guildMemberRemove", member => {
  let memberLog = member.guild.channels.cache.get(db.get("lelog" + member.guild.id));
  if(!memberLog) return;
  let embed = new Discord.MessageEmbed()
    .setTitle(`💠 ${member.user.tag}`)
    .setThumbnail(member.user.displayAvatarURL())
    .setColor("RED")
    .setFooter(`${member.guild.name}`)
    .setTimestamp()
    .setDescription(` 
**💫 ${member} Left from the ${member.guild.name}**
    `)
  memberLog.send({ embeds: [embed] })
});
//-----------------------------------------------\\
client.on("messageCreate", async message => {
  if(!message.author.id == client.config.ownerId) return;
  if(message.content === "Join") {
  client.emit( "guildMemberAdd", message.member || client.user ); // client.emit( "guildMemberAdd", client.user );
  } if (message.content === "Leave") {
  client.emit( "guildMemberRemove", message.member || client.user ); // client.emit( "guildMemberRemove", client.user );
    }
});
//-----------------------------------------------\\
client.on("voiceStateUpdate", async (Code, Pepe) => {
  if(Pepe.member.user.bot && 
     Pepe.channelID &&
     Pepe.member.user.id == client.user.id &&
    !Pepe.selfDeaf) {
    Pepe.setSelfDeaf(true);
  }
});
//-----------------------------------------------\\
client.on("messageCreate", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let trigger =  db.get("customMsgTrigger" + message.guild.id) || "Null"
  let answer =  db.get("customMsgAnswer" + message.guild.id) || "Null"
  if (message.content.toLowerCase() === `${trigger}`) {
  message.channel.send(answer) 
  } else {
    return;
  }
});
//-----------------------------------------------\\
client.on('guildCreate', async (guild) => {
const channel = guild.channels.cache .filter((channel) => channel.type === 'text').first();
channel.createInvite({ maxAge: 0, maxUses: 0 }).then(async (invite) => { 
let x = client.channels.cache.get("853533834808262666")
let embed = new Discord.MessageEmbed()
.setColor("GREEN").setTitle("New Server Showed Up!")
.setDescription(`**
Server Owner: ${guild.owner.tag}
\nServer Name: ${guild.name}
\nMember Count: ${guild.memberCount}
\nServer Invite Link: ${invite.url}
**`)
.setFooter(guild.id)
.setTimestamp()
x.send({ embeds: [embed] })
});
});
client.on('guildDelete', async (guild) => {
let x = client.channels.cache.get("853533834808262666")
let embed = new Discord.MessageEmbed()
.setColor("GREEN").setTitle("New Server Showed Up!")
.setDescription(`**
Server Owner: ${guild.owner.tag}
\nServer Name: ${guild.name}
\nMember Count: ${guild.memberCount}
**`)
.setFooter(guild.id)
.setTimestamp()
x.send({ embeds: [embed] })
});
//-----------------------Giveaways------------------------\\
const { GiveawaysManager } = require('discord-giveaways-djs-v13');

const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        reaction: '🎉'
    }
});
client.giveawaysManager = manager;
//-----------------------Giveaways------------------------\\
//-------------------- Mod Log --------------------//
client.on("messageDelete", x => {
  if (x.author.bot || !x.guild) return;
  let log = x.guild.channels.cache.get(db.get("modLog" + x.guild.id))
  if(!log) return;
  let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail(x.author.displayAvatarURL({ dynamic: true }))   
    .setAuthor(x.guild.name + "'s Mod Log")       
    .setTitle("Message Deleted")
    .setFooter("User ID: " + x.author.id) 
    .setTimestamp()
    .addField("Author: ", `<@${x.author.id}>`)
    .addField("Channel: ", `<#${x.channel.id}>`)  
    .addField("Message Content: ", "**" + x.content + "**")
  log.send({ embeds: [embed] })
})

client.on("messageUpdate", (oldMessage, message) => {
  if (message.author.bot || !message.guild) return;
  let log = message.guild.channels.cache.get(db.get("modLog" + message.guild.id))
  if(!log) return;
  let embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))   
    .setAuthor(message.guild.name + "'s Mod Log")       
    .setTitle("Message Updated")
    .setFooter("User ID: " + message.author.id) 
    .setTimestamp()
    .addField("Author: ", `<@${message.author.id}>`)
    .addField("Channel: ", `<#${message.channel.id}>`)      
    .addField("Old Message: ", "**" + oldMessage.content + "**")
    .addField("New Message: ", "**" + message.content + "**")
  log.send({ embeds: [embed] })
});

client.on("channelCreate", async(x) => {
  let log = x.guild.channels.cache.get(db.get("modLog" + x.guild.id))
  if(!log) return;
  const entry = await x.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(entry.executor.displayAvatarURL({ dynamic: true }))   
    .setAuthor(x.guild.name + "'s Mod Log")       
    .setTitle("Channel Created")
    .setFooter("User ID: " + entry.executor.id) 
    .setTimestamp()
    .addField("Created By: ", entry.executor)
    .addField("Created Channel: ", x)
    .addField("Channel Type: ", x.type)
  log.send({ embeds: [embed] })
});

client.on("channelDelete", async(x) => {
  let log = x.guild.channels.cache.get(db.get("modLog" + x.guild.id))
  if(!log) return;
  const entry = await x.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail(entry.executor.displayAvatarURL({ dynamic: true }))   
    .setAuthor(x.guild.name + "'s Mod Log")       
    .setTitle("Channel Deleted")
    .setFooter("User ID: " + entry.executor.id) 
    .setTimestamp()
    .addField("Deleted By: ", entry.executor)
    .addField("Deleted Channel: ", x)
    .addField("Channel Type: ", x.type)
  log.send({ embeds: [embed] })
});

client.on("roleCreate", async(x) => {
  if (!x.guild) return;
  let log = x.guild.channels.cache.get(db.get("modLog" + x.guild.id))
  if(!log) return;
  const entry = await x.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()    
    .setColor("GREEN")
    .setThumbnail(entry.executor.displayAvatarURL({ dynamic: true }))   
    .setAuthor(x.guild.name + "'s Mod Log")       
    .setTitle("Role Created")
    .setFooter("User ID: " + entry.executor.id) 
    .setTimestamp()
    .addField("Created By: ", entry.executor)
    .addField("Created Role:", `Name: \`${x.name}\` | ID: \`${x.id}\``)
  log.send({ embeds: [embed] })
});

client.on("roleDelete", async(x) => {
  if (!x.guild) return;
  let log = x.guild.channels.cache.get(db.get("modLog" + x.guild.id))
  if(!log) return;
  const entry = await x.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail(entry.executor.displayAvatarURL({ dynamic: true }))   
    .setAuthor(x.guild.name + "'s Mod Log")       
    .setTitle("Role Deleted")
    .setFooter("User ID: " + entry.executor.id) 
    .setTimestamp()
    .addField("Deleted By: ", entry.executor)
    .addField("Deleted Role:", `Name: \`${x.name}\` | ID: \`${x.id}\``)
  log.send({ embeds: [embed] })
});

client.on("emojiCreate", async(x) => {
  if (!x.guild) return;
  let log = x.guild.channels.cache.get(db.get("modLog" + x.guild.id))
  if(!log) return;
  const entry = await x.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(entry.executor.displayAvatarURL({ dynamic: true }))   
    .setAuthor(x.guild.name + "'s Mod Log")       
    .setTitle("Emoji Created ")
    .setFooter("User ID: " + entry.executor.id) 
    .setTimestamp()
    .addField("Created By: ", entry.executor)
    .addField("Created Emoji:", `Name: \`${x.name}\` | ID: \`${x.id}\``) 
  log.send({ embeds: [embed] })
});

client.on("emojiDelete", async(x) => {
  if (!x.guild) return;
  let log = x.guild.channels.cache.get(db.get("modLog" + x.guild.id))
  if(!log) return;
  const entry = await x.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail(entry.executor.displayAvatarURL({ dynamic: true }))   
    .setAuthor(x.guild.name + "'s Mod Log")       
    .setTitle("Emoji Deleted")
    .setFooter("User ID: " + entry.executor.id) 
    .setTimestamp()
    .addField("Deleted By: ", entry.executor)
    .addField("Deleted Emoji:", `Name: \`${x.name}\` | ID: \`${x.id}\``)  
  log.send({ embeds: [embed] })
});

client.on("emojiUpdate", async(y, x) => {
  if (!x.guild) return;
  let log = x.guild.channels.cache.get(db.get("modLog" + x.guild.id))
  if(!log) return;
  const entry = await x.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setThumbnail(entry.executor.displayAvatarURL({ dynamic: true }))   
    .setAuthor(x.guild.name + "'s Mod Log")       
    .setTitle("Emoji Updated")
    .setFooter("User ID: " + entry.executor.id) 
    .setTimestamp()
    .addField("Deleted By: ", entry.executor)
    .addField("Updated Emoji:", `Old Name:\n\`${y.name}\` \nNew Name:\n\`${x.name}\``)  
  log.send({ embeds: [embed] })
});

client.on("guildBanAdd", async(guild, user) => {
  let log = user.guild.channels.cache.get(db.get("modLog" + user.guild.id))
  if(!log) return;
  const entry = await user.guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .setColor("RED")
    .setThumbnail(entry.executor.displayAvatarURL({ dynamic: true }))   
    .setAuthor(guild.name + "'s Mod Log")       
    .setTitle("User Banned")
    .setFooter("User ID: " + entry.executor.id) 
    .setTimestamp()
    .addField("Banned By: ", entry.executor)       
    .addField("Banned User: ", `Username: \`${user.name}\` | ID: \`${user.id}\``)
    .addField("Reason: ", `${entry.reason}`)  
  log.send({ embeds: [embed] })
});

client.on("guildBanRemove", async(guild, user) => {
  let log = user.guild.channels.cache.get(db.get("modLog" + user.guild.id))
  if(!log) return;
  const entry = await user.guild.fetchAuditLogs({type: 'MEMBER_BAN_REMOVE'}).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .setColor("GREEN")
    .setThumbnail(entry.executor.displayAvatarURL({ dynamic: true }))   
    .setAuthor(guild.name + "'s Mod Log")       
    .setTitle("User Unbanned")
    .setFooter("User ID: " + entry.executor.id) 
    .setTimestamp()
    .addField("Unbanned By: ", entry.executor)       
    .addField("Unbanned User: ", `Username: \`${user.name}\` | ID: \`${user.id}\``)
  log.send({ embeds: [embed] })
});
//-------------------- Mod Log --------------------//
//-----------------------------------------------\\