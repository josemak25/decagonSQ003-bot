const { DISCORD_BOT_TOKEN } = require('./config');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

fs.readdir('./events', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const [eventName] = file.split('.');
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

client.login(DISCORD_BOT_TOKEN);
