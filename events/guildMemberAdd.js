/**
 * EVENT::::: (guildMemberAdd)
 * The guildMemberAdd event is important, when it is you want to send or track any newly added user to the server
 *
 */

module.exports = (client, member) => {
  member.send(
    `Hey ${member.user.username} Welcome to the server! Please be aware that we won't tolerate troll, spam or harassment, and make sure to read rules and enjoy your stay, Have fun 😀
    `
  );
};
