module.exports = {
    name: 'message',
    execute (message, Client) {
        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
        if (!message.content.startsWith(Client.prefix));

        const args = message.content.slice(Client.prefix.lenght).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!Client.commands.has(commandName)) return;

        const command = Client.commands.get(commandName)

        try {
            command.execute(message, args, Client);
        } catch (err) {
            console.log(err)
        }
    },
}
