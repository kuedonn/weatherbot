const Discord = require('discord.js');
const dotenv  = require('dotenv');
dotenv.config();

const client = new Discord.Client({
	intents: [
		Discord.Intents.FLAGS.GUILDS,
		Discord.Intents.FLAGS.GUILD_MESSAGES
	]
});
client.commands = new Discord.Collection();
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction =>{
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping'){
		await interaction.reply('Pong');
	}else if(commandName ==='server'){
		await interaction.reply('Server Info.')
	}else if(commandName === 'user'){
		await interaction.reply('User Info.')
	}
});

client.login(process.env.DISCORD_TOKEN);