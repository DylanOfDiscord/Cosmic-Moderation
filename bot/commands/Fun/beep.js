const Discord = require("discord.js")
module.exports = {
    name: 'beep',
    minArgs: 0,
    maxArgs: 0,
    syntaxError: "You provided invalid syntax. Valid syntax for this command is `{PREFIX}{COMMAND}`",
    description: 'Imitate a robot :)',
    run: async (message, args, text, client, prefix, instance) => {
        //🤖
        message.channel.send('Boop 🤖')
    }
}