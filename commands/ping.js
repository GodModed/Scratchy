module.exports = {
  name: 'ping',
  execute(bot, message, args) {
    message.channel.send(`Pong **(${Date.now() - message.createdTimestamp}ms)**`);
    console.log("------------------------")
    console.log(`Command: Ping`)
    console.log(`Server: ${message.guild.name}`)
    console.log(`Channel: ${message.channel.name}`)
    console.log(`Ping: ${Date.now() - message.createdTimestamp} ms`)
    console.log(`User: ${message.member.user.tag}`)
    console.log("------------------------")
    console.log(" ")
  },
};