// dont change nothin unless told by comments u can
// made by wrldmap, the discord.js guide, and Under Ctrl :)

const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
	console.log(`now time to exist for all eternity!!!`)
	client.user.setActivity({
		name: 'the Vanguard Run', // you can change this
		type: ActivityType.watching, // change "watching" to "listening", "playing", "watching", or "streaming" (uncomment url line)
		// url: 'https://twitch.tv/(yourchannel)' <- UNCOMMENT THIS FOR STREAMING
	})
});

client.login(token);
