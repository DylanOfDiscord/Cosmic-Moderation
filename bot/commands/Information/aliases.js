const ascii = require("ascii-table")
module.exports = {
    name: "aliases",
    minArgs: 0,
    maxArgs: 0,
    description: "Command aliases",
    category: "Help",
    run: async (message, args, text, client, prefix, instance) => {
        let commands = ["cleverbot", "coolkid", "dankmeme", "guineapig", "image", "sarcastic", "wholesomememe", "connect4", "guessnum", "hangman", "minesweeper", "banfilth", "deepfry", "addlevel", "addxp", "createuserxp", "deleteuserxp", "leaderboard", "rank", "removelevel", "removexp", "required", "chatmute", "deafen", "removewarn", "setnick", "unchatmute", "undeafen", "unvoicemute", "voicemute", "warnings", "connect", "disconnect", "lyrics", "nowplaying", "play", "playlist", "queue", "volume", "createtextchannel", "createvoicechannel", "deletevoicechannel", "deletetextchannel", "avatar", "google", "randomnumber", "randomnumberrange", "temporary", "clear", "technicalindicator", "sectorperformance"]
        let aliases = ["clever", "cool", "dm", "pig", "i", "sarc", "wm", "c4", "guess", "hang", "sweeper", "filth", "fry", "+lvl", "+xp", "cuxp", "duxp", "lb", "level", "-lvl", "-xp", "req", "cm", "deaf", "-warn", "nick", "ucm", "undeaf", "uvm", "vm", "warns", "join", "dc", "ly", "np", "p", "pl", "q", "v", "ctc", "cvc", "dvc", "dtc", "pfp", "ggl", "rn", "rnr", "temp", "purge", "technical", "sector"]
        let str = ""

        for (let i = 0; i < commands.length; i++) {
            str += `${commands[i]} - ${aliases[i]}\n`
        }
        
        message.channel.send(`\`\`\`\n${str}\n\`\`\``)
    }
}