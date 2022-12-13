const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`);

const prefix = '>';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready" , () => {
    console.log("bot is online")

    client.user.setActivity(`fakerdev` , { type: "WATCHING" });
})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commnad = args.shift().toLowerCase();


    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];


    if (commnad === 'hi') {
        message.channel.send("Know thy neighbour")
    }

})



client.login("inputyourDiscordTOKENhere");
