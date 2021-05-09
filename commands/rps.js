module.exports = {
  name: 'rps',
  execute(bot, message, args) {
    const options = [
            "rock :shell: ",
            "paper :newspaper2:",
            "scissors :scissors: "
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`You got ${option}`)
    console.log("------------------------")
    console.log(`Command: Rps`)
    console.log(`Server: ${message.guild.name}`)
    console.log(`Channel: ${message.channel.name}`)
    console.log(`Option: ${option}`)
    console.log(`User: ${message.member.user.tag}`)
    console.log("------------------------")
    console.log(" ")
  },
};