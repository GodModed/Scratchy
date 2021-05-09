module.exports = {
  name: 'add',
  execute(bot, message, args) {
    if (!message.member.hasPermission('MANAGE_ROLES'))
            return message.channel.send("Insufficient permissions (Requires permission `Manage roles`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const add = args.slice(1).join(" ")
        if (!add)
            return message.channel.send("You have not specified a role").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const roleAdd = message.guild.roles.cache.find(role => role.name === add)
        if (!roleAdd)
            return message.channel.send("This role does not exist").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (member.roles.cache.get(roleAdd.id))
            return message.channel.send(`This user already has the ${add} role`).then(msg => {
        msg.delete({ timeout: 30000 })
    })
        member.roles.add(roleAdd.id).then((member) => {
            message.channel.send(`${add} added to ${member.displayName}`)
        })
    console.log("------------------------")
    console.log(`Command: add`)
    console.log(`Server: ${message.guild.name}`)
    console.log(`Channel: ${message.channel.name}`)
    console.log(`User: ${message.member.user.tag}`)
    console.log("------------------------")
    console.log(" ")
  },
};