const Discord = require("discord.js");
const bot = new Discord.Client()

bot.login('NDE0ODIyNjc1ODY5OTkwOTIy.DWs9XQ.9pLI-l_lXtCg_2bhCYrEoh0m0lw')

bot.on('message', function(message){
    if(message.content === 'help') {
        message.reply('als er een probleem is vraag het aan uw owner @I LOVE CATS of uw admine @Kazuto ')
    
    }
})
bot.on('message', function(message){
    if(message.content === 'ik heb een vraag') {
        message.reply('wat is uw vraag')
    
    }
})
bot.on('message', function(message){
    if(message.content === 'hoe word je van slecht naar goed') {
        message.reply('door respect te tonen aan jouw camaraden')
    
    }
})
bot.on('message', function(message){
    if(message.content === 'hoe word je mini mod') {
        message.reply('door poll: wie stemt voor nieuwe mod')
    
    }
})
