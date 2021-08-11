const db = require('quick.db')
module.exports = {
	name: 'messageCreate',
	execute(message, client) {
  var prefix = db.get("prefix" + message.guild.id) || client.config.prefix
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return; 
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);

    const command = args.shift().toLowerCase();
    if (!client.commands.has(command))
      return message.channel.send(
        `There is no command named as **${command}**.`
      );

    try {
      client.commands.get(command).run(client, message, args);
      if(!db.get("tyrnPoints" + message.author.id)) { db.set("tyrnPoints" + message.author.id, 1)}
      db.add("tyrnPoints" + message.author.id, 1)
    } catch (error) {
      console.error(error);
    }
    	},
};