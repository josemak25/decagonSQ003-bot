require('dotenv').config();

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  DISCORD_BOT_TOKEN,
  NODE_ENV
};
