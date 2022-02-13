module.exports = {
    name: 'guildMemberRemove',
    execute (member, Client) {
        if (member.bot) return;

        Client.guild.channels.cache.find(channel => channel.id === "935817307257712650").send(`<@${member.id}> (${member.name}) est parti _:(_... Dommage ! On espère te revoir bientôt ||(sauf si t'as été ban lol)||`)
    },
}
