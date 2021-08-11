const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
  name:["x","nsfw"],
  async run(client, message, args) {
if(message.channel.nsfw == false) return message.channel.send(new Discord.MessageEmbed().setTitle('Error!').setImage('https://support.discord.com/hc/article_attachments/360007795191/2_.jpg').setDescription(`${message.author} **you horny boy set first this channel to NSFW**`).setColor('#00001'))
let options = args[0]
if(!args[0]) return message.channel.send("What you want")
let x = ["anal","nude","ass","pussy","porn","boobs","thigh","hentai","hass","nekopussy","wallpaper"]
if(!x.includes(args[0].toLowerCase())) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`
Ok boy choose one of these
\`nsfw anal, nude, ass, pussy, porn, boobs, thigh, hentai, hass, nekopussy, wallpaper\`
`))
    if (options.toLowerCase() === "anal") {
const image = await nsfw.anal();
message.channel.send(new Discord.MessageEmbed().setTitle(`Anal Image`).setColor("#ff00ff").setImage(image))}
    
    if (options.toLowerCase() === "nude") {
const image = await nsfw.fourk();
message.channel.send(new Discord.MessageEmbed().setTitle(`4k Image`).setColor("#ff00ff").setImage(image))}
    
    if (options.toLowerCase() === "ass") {
const image = await nsfw.ass();
message.channel.send(new Discord.MessageEmbed().setTitle(`Ass Image`).setColor("#ff00ff").setImage(image))}
    
    if (options.toLowerCase() === "pussy") {
const image = await nsfw.pussy();
message.channel.send(new Discord.MessageEmbed().setTitle(`Pussy Image`).setColor("#ff00ff").setImage(image))}
    
    if (options.toLowerCase() === "porn") {
const image = await nsfw.pgif();
message.channel.send(new Discord.MessageEmbed().setTitle(`Porn Gif`).setColor("#ff00ff").setImage(image))}
    
    if (options.toLowerCase() === "thigh") {
const image = await nsfw.thigh();
message.channel.send(new Discord.MessageEmbed().setTitle(`Thigh Image`).setColor("#ff00ff").setImage(image))}
    
    if (options.toLowerCase() === "boobs") {
const image = await nsfw.boobs();
message.channel.send(new Discord.MessageEmbed().setTitle(`Boobs Image`).setColor("#ff00ff").setImage(image))}
    
    if (options.toLowerCase() === "hentai") {
const image = await nsfw.hentai();
message.channel.send(new Discord.MessageEmbed().setTitle(`Hentai Image`).setColor("#ff00ff").setImage(image))}
        
    if (options.toLowerCase() === "hass") {
const image = await nsfw.hentaiass();
message.channel.send(new Discord.MessageEmbed().setTitle(`Ass Image`).setColor("#ff00ff").setImage(image))}
        
    if (options.toLowerCase() === "hmidriff") {
const image = await nsfw.hmidriff();
message.channel.send(new Discord.MessageEmbed().setTitle(`Hentai Image`).setColor("#ff00ff").setImage(image))}
        
    if (options.toLowerCase() === "hthigh") {
const image = await nsfw.hentaithigh();
message.channel.send(new Discord.MessageEmbed().setTitle(`Hentai Image`).setColor("#ff00ff").setImage(image))}
        
    if (options.toLowerCase() === "wallpaper") {
const image = await nsfw.wallpaper();
message.channel.send(new Discord.MessageEmbed().setTitle(`Wallpaper`).setColor("#ff00ff").setImage(image))}
        
    if (options.toLowerCase() === "nekopussy") {
const image = await nsfw.nekopussy();
message.channel.send(new Discord.MessageEmbed().setTitle(`Hentai Image`).setColor("#ff00ff").setImage(image))}
            
    if (options.toLowerCase() === "nekofeet") {
const image = await nsfw.nekofeet();
message.channel.send(new Discord.MessageEmbed().setTitle(`Hentai Image`).setColor("#ff00ff").setImage(image))}
            
    if (options.toLowerCase() === "nekotits") {
const image = await nsfw.nekotits();
message.channel.send(new Discord.MessageEmbed().setTitle(`Hentai Image`).setColor("#ff00ff").setImage(image))}
        
    if (options.toLowerCase() === "solo") {
const image = await nsfw.solo();
message.channel.send(new Discord.MessageEmbed().setTitle(`Solo Image`).setColor("#ff00ff").setImage(image))}
    
    
    }
}