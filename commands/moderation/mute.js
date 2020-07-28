// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
  // Sets the role to the Muted role
  const role = message.guild.roles.cache.find((r) => r.name === 'Muted');

  // Sets the member to the user mentioned
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  if (!member) {
    if (parseInt(args[0], 10)) {
      try {
        member = await message.guild.members.fetch(args[0]);
      } catch (err) {
        // Don't need to send a message here
      }
    }
  }

  if (!member) {
    const searchedMember = client.searchMember(args[0]);
    if (searchedMember) {
      const decision = await client.reactPrompt(message, `Would you like to mute \`${searchedMember.user.tag}\`?`);
      if (decision) {
        member = searchedMember;
      } else {
        message.delete().catch((err) => console.error(err));
        return client.error(message.channel, 'Member Not Muted!', 'The prompt timed out, or you selected no.');
      }
    }
  }

  // If no user mentioned, display this
  if (!member) {
    return client.error(message.channel, 'Invalid Member!', 'Please mention a valid member of this server!');
  }
  // Check if user is mutable
  tgt_user = args[0].replace(/[\\<>@#&!]/g, "");
  tgt_pos = message.guild.members.cache.get(tgt_user).roles.highest.position;
  cur_pos = message.member.roles.highest.position;
  console.log(tgt_pos, cur_pos);
  if(tgt_pos >= cur_pos) {
    return client.error(message.channel, "You do not have permission to mute this member", "You cannot mute this user as they have a higher role than you");
  }

  // Kick member if in voice
  if (member.voice.channel) {
    member.voice.kick();
  }

  // Adds the role to the member and deletes the message that initiated the command
  member.roles.add(role).catch((err) => console.error(err));
  message.delete().catch((err) => console.error(err));
  return message.channel.send(`Successfully muted ${member}!`).catch((err) => console.error(err));
};

module.exports.conf = {
  guildOnly: true,
  aliases: ['m'],
  permLevel: 'Moderator',
  args: 1,
};

module.exports.help = {
  name: 'mute',
  category: 'moderation',
  description: 'Gives the mentioned user the Muted role',
  usage: 'mute <@user>',
  details: '<@user> => Any valid member of the server',
};
