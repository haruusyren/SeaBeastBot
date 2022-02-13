module.exports = {
    name: 'ready',
    once: true,
    execute() {
        console.log("Ready !")

        Client.user.setPresence(
            {
                activities: [
                    {
                        name: ` : Créé par 𝕯𝖊𝖛'𝕽𝖚#0992`,
                        type: 'STREAMING',
                        url: 'https://twitch.tv/syren_off/'
                    }
                ],
                status: 'dnd'
            }
        );
    },
}
