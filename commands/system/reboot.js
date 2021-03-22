// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {
  await message.channel.send('Rebooting bot! Please allow at least 10 seconds for the bot to fully reboot!');
  console.log('Bot rebooting...');
console.log("This is pid " + process.pid);
setTimeout(function () {
	process.on("exit", function () {
		require("child_process").spawn(process.argv.shift(), process.argv, {
			cwd: process.cwd(),
			detached : true,
			stdio: "inherit"
		});
	});
	process.exit();
	}, 5000);
};

module.exports.conf = {
  guildOnly: false,
  aliases: [],
  permLevel: 'Bot Admin',
};

module.exports.help = {
  name: 'reboot',
  category: 'system',
  description: 'Reboots the bot',
  usage: 'reboot',
};
