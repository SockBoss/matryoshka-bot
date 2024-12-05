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

if (config.modules.twitch.enabled) {
    // poll twitch 
} 

if (config.modules.youtube.enabled) {
    // poll youtube 
}

client.login(process.env.DISCORD_TOKEN);