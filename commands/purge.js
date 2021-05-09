module.exports = {
  name: 'purge',
  execute(bot, message, args) {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Insufficient permissions (requires permission `Manage messages`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
    const number = args.join(" ")
    if(!number) return message.channel.send("You haven't specified a number to purge").then(msg => {
        msg.delete({ timeout: 30000 })
    })
   message.channel.bulkDelete(number).catch(console.error)
    console.log("------------------------")
    console.log(`Command: Purge`)
    console.log(`Server: ${message.guild.name}`)
    console.log(`Channel: ${message.channel.name}`)
    console.log(`Bulk Delete: ${number}`)
    console.log("------------------------")
    console.log(" ")
  },
};