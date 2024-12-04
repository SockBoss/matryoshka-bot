import config from "../config.json" assert { type: "json" };
import * as Discord from "discord.js";

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
    ]
});

client.once(Discord.Events.ClientReady, (client) => {
    console.log(`${client.user.tag} ready.`);
});

if (config.twitchAlerts) {
    // poll twitch 
} 

if (config.youtubeAlerts) {
    // poll youtube 
}

client.login(process.env.DISCORD_TOKEN);