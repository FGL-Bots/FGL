// eslint-disable-next-line no-unused-vars
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports.run = async (client, message, args, level) => {
  // Sets the role to the Muted role
  const role = message.guild.roles.cache.find((r) => r.name === 'Muted');
  const role_community = message.guild.roles.cache.find((r) => r.name === 'Community');
  if(args[1].includes('s')) {
    args[1] = args[1].slice(0, -1);
    var multiplier = 1000; // Seconds
    var t = 'seconds';
  };
  if(args[1].includes('m')) {
    args[1] = args[1].slice(0, -1);
    var multiplier = 1000*60; // Minutes
    var t = 'minutes';
  }
  if(args[1].includes('h')) {
    args[1] = args[1].slice(0, -1);
    var multiplier = 1000*60*60; // Hours
    var t = 'hours';
  }
  if(args[1].includes('d')) {
    args[1] = args[1].slice(0, -1);
    var multiplier = 1000*60*60*24; // Days
    var t = 'days';
  }
  const mute_time = parseInt(args[1], 10);
  if(isNaN(mute_time)) {
    return client.error(message.channel, 'Member Not Muted!', 'Invalid amount of time!');
  }
  // if mute time is 1, then print out one second/minute/hour instead of seconds/minutes/hours
  if(mute_time == 1) {
    t = t.slice(0, -1);
  }
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

  // If no user mentioned, display this
  if (!member) {
    return client.error(message.channel, 'Invalid Member!', 'Please mention a valid member of this server!');
  }

  // Kick member if in voice
  if (member.voice.channel) {
    member.voice.kick();
  }
  // If the user is an admin, don't let them be muted
  if(member.hasPermission('ADMINISTRATOR')) {
    return client.error(message.channel, 'Invalid Member!', 'The member in question is an admin, you may not mute them!');
  }
  // Adds the role to the member, removes the community role and deletes the message that initiated the command, wait, then unmute
  member.roles.add(role).catch((err) => console.error(err));
  member.roles.remove(role_community).catch((err) => console.error(err)); 
  message.delete().catch((err) => console.error(err));
  message.channel.send(`Successfully muted ${member}! for ${args[1]} ${t}`).catch((err) => console.error(err));
  await sleep(mute_time*multiplier);
  member.roles.remove(role).catch((err) => console.error(err));
  member.roles.add(role_community).catch((err) => console.error(err));
  message.channel.send('Done');
};

module.exports.conf = {
  guildOnly: true,
  aliases: [''],
  permLevel: 'Junior Moderator',
  args: 2,
};

module.exports.help = {
  name: 'tempmute',
  category: 'moderation',
  description: 'Gives the mentioned user the Muted role for set amount of time',
  usage: 'tempmute <@user> time',
  details: '<@user> => Any valid member of the server, time => amount of time',
};
