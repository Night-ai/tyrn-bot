const Discord = require("discord.js")
const ms = require('ms')
const db = require('../../database')
const sendError = require("../../util/error");
module.exports = {
  name: "gstart",
  async run (client, message, args) {
    let prefix = db.get("prefix" + message.guild.id) || client.config.prefix
    
    if(!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)){
    return sendError(client.config.permError,message)}
    
    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return sendError(`Error, You did not mention Giveaway Channel \n\nExample usage is ${prefix}gstart #channel 1h 1 Nitro`,message);
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return sendError(`Error, You did not specify Giveaway Duration \n\nExample usage is ${prefix}gstart #channel 1h 1 Nitro`,message);
    }

    let giveawayWinners = args[2];
    if(isNaN(giveawayWinners)){
        return sendError(`Error, You did not specify Giveaway Winner Count \n\nExample usage is ${prefix}gstart #channel 1h 1 Nitro`,message);
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return sendError(`Error, You did not specify Giveaway Prize \n\nExample usage is ${prefix}gstart #channel 1h 1 Nitro`,message);
    }
     client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: `🎁 ${giveawayPrize} 🎁`,
            winnerCount: parseInt(giveawayWinners),
            hostedBy: message.author,
            messages: {
        giveaway: '🎉 **GIVEAWAY** 🎉',
        giveawayEnded: '🎉🎉 **GIVEAWAY ENDED** 🎉🎉',
        inviteToParticipate: '\n🔸React with 🎉 to join Giveaway!',
        winMessage: 'Congratulations, {winners}! You won **{prize}**!',
        timeRemaining: '\n🔸Time remaining: **{duration}**',
        embedFooter: 'Giveaways by TyrnBot',
        embedTitle: "Giveaway",
        noWinner: 'Giveaway cancelled, no valid participations.',
        hostedBy: '\n🔸Hosted by: {user}',
        winners: 'winner(s)',
        endedAt: 'Ended at',
        units: {
            seconds: 'seconds',
            minutes: 'minutes',
            hours: 'hours',
            days: 'days',
            pluralS: false
                }
            }
        });
    message.channel.send({ embeds:[new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`🎉 **Giveaway Started in** ${giveawayChannel}!`)] }).then(a => {setTimeout(() => a.delete, 10000)})

  }
}