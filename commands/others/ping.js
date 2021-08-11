module.exports = {
  name: "ping",
  async run(client, message, args) {

    const discordPing = message.client.ws.ping;
    message.channel.send("Ping is Calculating...").then(msg =>{
      const ping = msg.createdTimestamp - message.createdTimestamp;
      setTimeout(function () {
        msg.edit(`Discord Ping; ${discordPing} ms\nBot Ping;  ${ping} ms`);
      }, 3000);

    })
  }
}
