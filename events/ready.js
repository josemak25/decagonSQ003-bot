const { NODE_ENV } = require('../config');

/**
 * EVENT::::: (ready)
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */

module.exports = client => {
  if (NODE_ENV === 'development') {
    console.log(`Connect successfully and Logged in as ${client.user.tag}!`);
  }
};
