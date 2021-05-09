module.exports = {
  name: 'encrypt',
  execute(bot, message, args) {
    if (!args.length) {
			    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	  	  }
    var key = 'adfonasdfvomosmodfmosdf';
    var encryptor = require('simple-encryptor')(key);
    var encrypted = encryptor.encrypt(`${args}`);
    message.channel.send(encrypted)
    console.log("------------------------")
    console.log(`Command: Encrypt`)
    console.log(`Server: ${message.guild.name}`)
    console.log(`Channel: ${message.channel.name}`)
    console.log(`Encrypted: ${args}`)
    console.log("------------------------")
    console.log(" ")
  }
}