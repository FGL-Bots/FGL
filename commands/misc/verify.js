// eslint-disable-next-line no-unused-vars
module.exports.run = (client, message, args, level) => {
  const role = message.guild.roles.cache.find((r) => r.name === "Community");
  if (!role) {
    return client.error(message.channel, 'Invalid Role!', 'Please provide a valid role!');
  }

  if (message.member.roles.cache.has(role.id)) {
    return client.error(message.channel, 'You Already Have This Role!', `You already have the \`${roleName}\` role!`);
  }
  return message.member.roles.add(role).then(() => {
    client.success(message.channel, 'Success!', `I've successfully added the \`${roleName}\` to you!`);
  }).catch((err) => {
    client.error(message.channel, 'Error!', 'There appears to be an error! DM FGL Mod Mail for assistance');
    console.error(err);
  });
};

module.exports.conf = {
  guildOnly: true,
  aliases: [],
  permLevel: 'User',
};

module.exports.help = {
  name: 'veriy',
  category: 'misc',
  description: 'Verifies user',
  usage: 'verify',
  details: '',
};
