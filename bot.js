const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("588703491971612674")
setInterval(function() {
channel.send(`#daily`);
}, 30)
})

client.login(process.env.BOT_TOKEN);