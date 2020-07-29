// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level, Discord) => {
  const dmChannel = await message.member.createDM();
  const questions = [
    "Just for confirmation, please retype your tag.", 
    "What is your timezone?",
    "How old are you right now?",                  
    "Why do you want to be a moderator?", 
    "If someone is being bullied, what do you do?",
    "If someone is abusing their role, what do you do?",
    "What do you do during a staff disagreement?",
    "What do you do in an uncomfortable situation?",
    "Have you moderated any servers before? If yes, please type them here."            
  ];                                     
  const filter = m => m.channel.type === 'dm' || m.author.bot === 0;
  const collector = dmChannel.createMessageCollector(filter, { });
  var pane;
  pane = 0;
  var ans = [];
  var stopped = 0;
  dmChannel.send("Hello, to begin the application, please type tag (username#descriminator). If you wish to stop the application at any time, please type stop.");
  collector.on('collect', m => {
    if(m.author.bot) {
      return;
    }
    if(pane === questions.length) {
      dmChannel.send("Are you ready to submit your application? If not, please type stop and reapply. Otherwise, type submit.");
      pane++;
      return;
    }
    if(m.content.toLowerCase() === 'stop') {
      dmChannel.send("Stopped your application. Thank you and have a good day!");
      stopped = 1;
      collector.stop();
      return;
    }
    if(pane === questions.length + 1) {
      if(m.content === "submit") {
        dmChannel.send("Submitted your application. Thank you and have a good day");
        collector.stop();
        return;
      }
      else {
        dmChannel.send("Invalid response. Closing application...");
        collector.stop();
        return;
      }
    }
    ans[pane] = m.content;
    dmChannel.send(questions[pane]);
    pane++;
  });

  collector.on('end', collected => {
    var msg = `__**Staff application for ${message.author.tag}**__\n`;
    var channel = client.channels.cache.get(client.config.applyChannel);
    for(var i = 0; i < questions.length; i++) {
      msg += `**${questions[i]}**: ${ans[i]}\n`;
    }
    if(stopped === 0) {
      channel.send(msg);
    }
  });
};

module.exports.conf = {
  guildOnly: true,
  aliases: [],
  permLevel: 'Verified',
};

module.exports.help = {
  name: 'apply',
  category: 'misc',
  description: 'Apply for staff',
  usage: 'apply',
  details: '',
};
