const Discord = require("discord.js");
const {
    loadImage,
    createCanvas
} = require("canvas");
const request = require("node-superfetch");

module.exports = {
    name: "fisheye",
    minArgs: 0,
    maxArgs: 0,
    description: "bulge an image's center",
    run: async (message, args, text, client, prefix, instance) => {
        message.channel.startTyping(true)
        let attachments = message.attachments.array();

        var level = 50

        try {
            const {
                body
            } = await request.get(attachments[0].url);
            const data = await loadImage(body)
            const canvas = createCanvas(data.width, data.height);
            const ctx = canvas.getContext("2d")

            await ctx.drawImage(data, 0, 0)
            await fishEye(ctx, level, 0, 0, data.width, data.height)

            const attachment = canvas.toBuffer()
            if (Buffer.byteLength(attachment) > 8e+6) return message.channel.send("After adding the effects, the file was too large to send.")

            message.channel.stopTyping(true)
            return message.channel.send({
                files: [{
                    attachment: attachment,
                    name: "fishEye.jpeg"
                }]
            })
        } catch (error) {
            console.log(error);
            message.channel.send("An error occurred whilst performing the changes: " + error.message);
        }

        function fishEye(ctx, level, x, y, width, height) {
            const frame = ctx.getImageData(x, y, width, height);
            const source = new Uint8Array(frame.data);

            for (let i = 0; i < frame.data.length; i += 4) {
                const sx = (i / 4) % frame.width
                const sy = Math.floor(i / 4 / frame.width)

                const dx = Math.floor(frame.width / 2) - sx
                const dy = Math.floor(frame.height / 2) - sy

                const dist = Math.sqrt((dx * dx) + (dy * dy))

                const x2 = Math.round((frame.width / 2) - (dx * Math.sin(dist / (level * Math.PI) / 2)))
                const y2 = Math.round((frame.height / 2) - (dy * Math.sin(dist / (level * Math.PI) / 2)))

                const i2 = ((y2 * frame.width) + x2) * 4;

                frame.data[i] = source[i2]
                frame.data[i + 1] = source[i2 + 1]
                frame.data[i + 2] = source[i2 + 2]
                frame.data[i + 3] = source[i2]
            }

            ctx.putImageData(frame, x, y)
            return ctx
        }
    }
}