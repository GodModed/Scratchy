module.exports = {
  name: 'kick',
  execute(bot, message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS'))
          return message.channel.send("Insufficient permissions (Requires permission `Kick members`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (!member.kickable)
            return message.channel.send("This user is unkickable").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked, no reason was provided`);
            })

            if (reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked for ${reason}`);
            })
        }
        console.log("------------------------")
        console.log(`Command: Kick`)
        console.log(`Server: ${message.guild.name}`)
        console.log(`Channel: ${message.channel.name}`)
        console.log("------------------------")
        console.log(" ")
  },
};