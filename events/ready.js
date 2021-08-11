module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
  console.log(`Logged in as ${client.user.tag}!`); // By Tyrone#5693
  const activities = [
    "*help",
    "discord.gg/falls"
  ]
  setInterval(function() {
    let activite = activities[Math.floor(Math.random() * activities.length)]
    client.user.setActivity(activite)
  }, 5000);
	},
};