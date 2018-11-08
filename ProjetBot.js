const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Working'}});
    console.log("Bot Ready !");
});

bot.login('NTA5NzM3ODk1MTkyNTU5NjQ3.DsShRg.32wRml4SABI3fH0WdUgY_NFQA7A');

bot.on('message', message => {
    if(message.content === "!Postithere?"){
        message.reply("Yup!");
        console.log('!Postithere?')
    }

    if(message.content === "!Helpostit"){
        var Helpostit_embed = new Discord.RichEmbed()
            .setColor('#046380')
            .addField("Commands :", "  -!Helpostit")
            .addField("Interact :", "  -!Postithere?, !Postit")
            .setFooter("You can chat with me !")
        message.channel.sendEmbed(Helpostit_embed);
        //message.channel.sendMessage("Available commands : /Postit, /Helpostit")
        console.log('!Helpostit');
    }

    if (message.content === "!Postit"){
        random();

        if (randnum == 1){
            message.reply("“Our memory is a more perfect world than the universe: it gives back life to those who no longer exist.”  ― Guy de Maupassant");
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("Postit is nothing else than a bot.");
            console.log(randnum);
        }

        if (randnum == 3){
            message.reply("I'm working.");
            console.log(randnum);
        }

        if (randnum == 4){
            message.reply(":)");
            console.log(randnum);
        }

        if (randnum == 5){
            message.reply("Stop.");
            console.log(randnum);
        }
    
    }

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5);
    randnum = Math.floor(Math.random() * (max - min +1) + min);

}

bot.on('guildMemberAdd', member => {
    bot.channels.get('493343619944677377').send(`Welcome ${member}`);
});