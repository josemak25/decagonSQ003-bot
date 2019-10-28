const Discord = require('discord.js');
const client = new Discord.Client();

const { DISCORD_BOT_TOKEN } = require('./config');

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.on('guildMemberAdd', member => {
  member.send(
    `Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment. Have fun 😀`
  );
});

client.login(DISCORD_BOT_TOKEN);
