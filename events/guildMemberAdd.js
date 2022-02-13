module.exports = {
    name: 'guildMemberAdd',
    execute (member) {
        if (member.bot) return;

        member.createDM().then(channel => {
            channel.send(`Bravo ! Vous avez rejoins le serveur !`);
        });
    },
}
