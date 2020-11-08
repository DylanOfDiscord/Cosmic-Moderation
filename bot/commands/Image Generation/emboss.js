const Jimp = require("jimp")
module.exports = {
    name: 'emboss',
    category: 'img',
    description: '',
    run: async (message, args, client) => {
        let attachments = message.attachments.array()
        if (attachments.length === 0) return message.reply("Please upload an image, the caption should be this command.")
        if (attachments.length > 1) return message.reply("One image please!")
        console.log(attachments[0].url)

        Jimp.read(`${attachments[0].url}`, (err, lenna) => {
            if (err) throw err

            lenna.convolute([
                [-2, -1, 0],
                [-1, 1, 1],
                [0, 1, 2]
            ]).write("./image cache/emboss/modifiedIMG.png")

            message.channel.send(``, {
                files: ["./image cache/emboss/modifiedIMG.png"]
            })
        })
    }
}