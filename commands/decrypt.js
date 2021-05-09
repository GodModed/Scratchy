module.exports = {
  name: 'decrypt',
  execute(bot, message, args) {
       if (!args.length) {
          return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
      var key = 'adfonasdfvomosmodfmosdf';
      var encryptor = require('simple-encryptor')(key);
      var decrypted = encryptor.decrypt(`${args}`)
      message.channel.send(`${message.author} has decrypted: ${decrypted}`)
      console.log("------------------------")
      console.log(`Command: Decrypt`)
      console.log(`Server: ${message.guild.name}`)
      console.log(`Channel: ${message.channel.name}`)
      console.log(`Decrypted: ${decrypted}`)
      console.log("------------------------")
      console.log(" ")
  }
}