const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json')
const mongoose = require('./database/mongoose');
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
});


Client.prefix = "*";
Client.commands = new Discord.Collection;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	Client.commands.set(command.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		Client.once(event.name, (...args) => event.execute(...args, Client));
	} else {
		Client.on(event.name, (...args) => event.execute(...args, Client));
	}
}

mongoose.init();

Client.login(config.TOKEN);
