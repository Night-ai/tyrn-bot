const Discord = require('discord.js')

module.exports = {
  name: ["rr", "russianroulette"],
  async run (client, message, args) {

    var Result = [
      'Lucky, You are still alive',
      'Lucky, You are still alive',
      'Lucky, You are still alive',
      ':gun: Pew, You are dead!...'
    ];

    var rrResult = Math.floor(Math.random()*Result.length);

    const embed = new Discord.MessageEmbed()

    .setTitle('Russian Roulette')
    .setDescription("You have 1 ammo in your revolver,spined the cylinder and fired to your head")
    .addField('Result',`${Result[rrResult]}`)
    .setColor("#6DFF00")
    message.channel.send(embed)

  }
}
