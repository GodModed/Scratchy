module.exports = {
  name: 'say',
  execute(bot, message, args) {
    const text = args.join(" ")
    if(!text) return message.channel.send("You have not specified something to say").then(msg => {
        msg.delete({ timeout: 30000 })
    })
    message.channel.send(text)
    console.log("------------------------")
    console.log(`Command: Say`)
    console.log(`Server: ${message.guild.name}`)
    console.log(`Channel: ${message.channel.name}`)
    console.log(`Text: ${text}`)
    console.log(`User: ${message.member.user.tag}`)
    console.log("------------------------")
    console.log(" ")
  },
};