# All the archives of the old code :)

Client.on("messageCreate", async message => {
    
    // module.exports = async(Client, Discord, member) => {
    //     let profile = await profileSchema.create({
    //         memberID: member.id,
    //         guildID: member.guild.id,
    //         coins: 1000,
    //         bank: 0,
    //     });
    //     profile.save();
    // }

    if (message.content.startsWith(Client.prefix)){
        
        
        if (message.content.startsWith(Client.prefix + "help")){

        }

        // else if (message.content.startsWith(Client.prefix + "work")){

        // }
        
        else if (message.content.startsWith(`${Client.prefix}bal`)){
            let profileData;
            try {
                profileData = await profileSchema.findOne({ userID: message.author.id})
                if (!profileData) {
                    let profileData = await profileSchema.create({
                        memberID: message.author.id,
                        guildID: message.guild.id,
                        coins: 1000,
                        bank: 0,
                    });
                }
            }catch(err) {
                console.error();
            }
            message.channel.send(`<@${message.author.id}>, vous avez sur vous : ${profileData.coins} pièce(s) et dans votre banque : ${profileData.bank} pièce(s) !`)
        }

        else if (message.content.startsWith(`${Client.prefix}work`)){
            // var cooldown = Date.now() * 6000
            // if (cooldown < cooldown + 30){
            //     message.reply("non")
            // }
            // else {
            //     message.reply("ok")
            // }
            
        }

        else if (message.content.startsWith(`${Client.prefix}jackpot`)){
            // 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟
            let args = message.content.split(" ")

            if (args[1] === undefined){
                message.reply("Veuillez rentrer une valur à miser !")
            }
            else if (args[1] !== undefined){
                const time = Date.now();
                const timeCooldown = Client.commands.memberCooldown;

                const timeRestant = time + timeCooldown;

                let proba1 = getRandomInt(1000)

                if (proba1 === 0){
                    var result1 = "0️⃣";
                }
                if (proba1 > 0 && proba1 < 100){
                    var result1 = "1️⃣";
                }
                if (proba1 > 100 && proba1 < 200){
                    var result1 = "2️⃣";
                }
                if (proba1 > 200 && proba1 < 300){
                    var result1 = "3️⃣";
                }
                if (proba1 > 300 && proba1 < 400){
                    var result1 = "4️⃣";
                }
                if (proba1 > 400 && proba1 < 500){
                    var result1 = "5️⃣";
                }
                if (proba1 > 500 && proba1 < 600){
                    var result1 = "6️⃣";
                }
                if (proba1 > 600 && proba1 < 700){
                    var result1 = "7️⃣";
                }
                if (proba1 > 700 && proba1 < 800){
                    var result1 = "8️⃣";
                }
                if (proba1 > 800 && proba1 < 900){
                    var result1 = "9️⃣";
                }
                if (proba1 > 900 && proba1 < 1000){
                    var result1 = "🔟";
                }

                let proba2 = getRandomInt(1000)

                if (proba2 === 0){
                    var result2 = "0️⃣";
                }
                if (proba2 > 0 && proba2 < 100){
                    var result2 = "1️⃣";
                }
                if (proba2 > 100 && proba2 < 200){
                    var result2 = "2️⃣";
                }
                if (proba2 > 200 && proba2 < 300){
                    var result2 = "3️⃣";
                }
                if (proba2 > 300 && proba2 < 400){
                    var result2 = "4️⃣";
                }
                if (proba2 > 400 && proba2 < 500){
                    var result2 = "5️⃣";
                }
                if (proba2 > 500 && proba2 < 600){
                    var result2 = "6️⃣";
                }
                if (proba2 > 600 && proba2 < 700){
                    var result2 = "7️⃣";
                }
                if (proba2 > 700 && proba2 < 800){
                    var result2 = "8️⃣";
                }
                if (proba2 > 800 && proba2 < 900){
                    var result2 = "9️⃣";
                }
                if (proba2 > 900 && proba2 < 1000){
                    var result2 = "🔟";
                }
                
                let proba3 = getRandomInt(1000)

                if (proba3 === 0){
                    var result3 = "0️⃣";
                }
                if (proba3 > 0 && proba3 < 100){
                    var result3 = "1️⃣";
                }
                if (proba3 > 100 && proba3 < 200){
                    var result3 = "2️⃣";
                }
                if (proba3 > 200 && proba3 < 300){
                    var result3 = "3️⃣";
                }
                if (proba3 > 300 && proba3 < 400){
                    var result3 = "4️⃣";
                }
                if (proba3 > 400 && proba3 < 500){
                    var result3 = "5️⃣";
                }
                if (proba3 > 500 && proba3 < 600){
                    var result3 = "6️⃣";
                }
                if (proba3 > 600 && proba3 < 700){
                    var result3 = "7️⃣";
                }
                if (proba3 > 700 && proba3 < 800){
                    var result3 = "8️⃣";
                }
                if (proba3 > 800 && proba3 < 900){
                    var result3 = "9️⃣";
                }
                if (proba3 > 900 && proba3 < 1000){
                    var result3 = "🔟";
                }

                let embed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("🎰 Machine à sous 🎰")
                    .setDescription(`\`${Client.prefix}jackpot\` pour jouer à la machine à sous !`)
                    .addField("Voici votre récompense :", `${result1} | ${result2} | ${result3}`)
                    .setTimestamp()
                    .setFooter({text: "Créé par 𝕯𝖊𝖛'𝕽𝖚#0992"});

                message.reply({embeds: [embed]})

                if (result1 === result2 === result3 === 1){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 2} pièces !`)
                }
                if (result1 === result2 === result3 === 2){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 2} pièces !`)
                }
                if (result1 === result2 === result3 === 3){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 2} pièces !`)
                }
                if (result1 === result2 === result3 === 4){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 2} pièces !`)
                }
                if (result1 === result2 === result3 === 5){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 2} pièces !`)
                }
                if (result1 === result2 === result3 === 6){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 2} pièces !`)
                }
                if (result1 === result2 === result3 === 7){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 3} pièces !`)
                }
                if (result1 === result2 === result3 === 8){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 2} pièces !`)
                }
                if (result1 === result2 === result3 === 9){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 2} pièces !`)
                }
                if (result1 === result2 === result3 === 10){
                    message.reply(`Bravo <@${message.author.id}> ! Tu as gagné ${args[1] * 2} pièces !`)
                }
            }
        }

        else if (message.content.startsWith(Client.prefix + "give")){
            if (message.member.permissions.has("ADMINISTRATOR")){
                let mention = message.mentions.members.first()
                let args = message.content.split(" ")

                const wheretoPutMoney = 'wallet';
                let result = await cs.addMoney({
                    user: mention.id,
                    guild: message.author.id,
                    amount: args[2],
                    wheretoPutMoney: wheretoPutMoney
                });
                if (result.error) return message.reply("You cant add negitive money");
                else message.reply(`Successfully added $${args[2]} to ${mention.username}.`)
            }
        }
    }
});
