const Discord = require("discord.js")
const config = require("./config.json")
module.exports = {
  name: 'help',
  execute(bot, message, args) {
    const helpEmbed = new Discord.MessageEmbed()
            .setTitle(`Scratchy's commands`)
            .setDescription(`**Prefix:** ${config.prefix}`)
            .addField(`\`xp\``, `Check your level`)
            .addField(`\`level\``, `Check your level`)
            .addField(`\`ping\``, `Check the bot's ping`)
            .addField(`\`kick\``, `Usage: **${config.prefix}kick [@User]**\n**${config.prefix}kick [@User][Reason]**`)
            .addField(`\`ban\``, `Usage: **${config.prefix}ban [@User]**\n**${config.prefix}ban [@User][Reason]**`)
            .addField(`\`add\``, `Adds a role to a user \nUsage: **${config.prefix}add [@User] [Role]**`)
            .addField(`\`remove\``, `Removes a role from a user \nUsage: **${config.prefix}remove [@User] [Role]**`)
            .addField(`\`purge\``, `Clears a number of messages between 2 or 100 \nUsage: **${config.prefix}purge [number]**`)
            .addField(`\`rps\``, `Play rock paper scissors`)
            .addField(`\`say\``, `Have the bot say something`)
            .addField(`\`encrypt\``, `Encrypts an message`)
            .addField(`\`decrypt\``, `Decrypts an encrypted message`)
            .addField(`\`choppymaster\``, `This bot is mostly taken from choppymaster on github. It is a open source project on github so I would like to say thanks to him.`)
            message.channel.send(helpEmbed)
  },
};