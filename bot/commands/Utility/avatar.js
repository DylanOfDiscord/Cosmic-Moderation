const Discord = require("discord.js")
module.exports = {
    name: 'avatar',
    aliases: [ 'pfp' ],
    minArgs: 0,
    maxArgs: 0,
    syntaxError: "You provided invalid syntax. Valid syntax for this command is `{PREFIX}{COMMAND}`",
    description: "dc",
    run: async (message, args, text, client, prefix, instance) => {
        let webp16 = message.author.displayAvatarURL({
            format: "webp",
            size: 16
        })
        let webp32 = message.author.displayAvatarURL({
            format: "webp",
            size: 32
        })
        let webp64 = message.author.displayAvatarURL({
            format: "webp",
            size: 64
        })
        let webp128 = message.author.displayAvatarURL({
            format: "webp",
            size: 128
        })
        let webp256 = message.author.displayAvatarURL({
            format: "webp",
            size: 256
        })
        let webp512 = message.author.displayAvatarURL({
            format: "webp",
            size: 512
        })
        let webp1024 = message.author.displayAvatarURL({
            format: "webp",
            size: 1024
        })
        let webp2048 = message.author.displayAvatarURL({
            format: "webp",
            size: 2048
        })
        let webp4096 = message.author.displayAvatarURL({
            format: "webp",
            size: 4096
        })

        let png16 = message.author.displayAvatarURL({
            format: "png",
            size: 16
        })
        let png32 = message.author.displayAvatarURL({
            format: "png",
            size: 32
        })
        let png64 = message.author.displayAvatarURL({
            format: "png",
            size: 64
        })
        let png128 = message.author.displayAvatarURL({
            format: "png",
            size: 128
        })
        let png256 = message.author.displayAvatarURL({
            format: "png",
            size: 256
        })
        let png512 = message.author.displayAvatarURL({
            format: "png",
            size: 512
        })
        let png1024 = message.author.displayAvatarURL({
            format: "png",
            size: 1024
        })
        let png2048 = message.author.displayAvatarURL({
            format: "png",
            size: 2048
        })
        let png4096 = message.author.displayAvatarURL({
            format: "png",
            size: 4096
        })

        let jpeg16 = message.author.displayAvatarURL({
            format: "jpeg",
            size: 16
        })
        let jpeg32 = message.author.displayAvatarURL({
            format: "jpeg",
            size: 32
        })
        let jpeg64 = message.author.displayAvatarURL({
            format: "jpeg",
            size: 64
        })
        let jpeg128 = message.author.displayAvatarURL({
            format: "jpeg",
            size: 128
        })
        let jpeg256 = message.author.displayAvatarURL({
            format: "jpeg",
            size: 256
        })
        let jpeg512 = message.author.displayAvatarURL({
            format: "jpeg",
            size: 512
        })
        let jpeg1024 = message.author.displayAvatarURL({
            format: "jpeg",
            size: 1024
        })
        let jpeg2048 = message.author.displayAvatarURL({
            format: "jpeg",
            size: 2048
        })
        let jpeg4096 = message.author.displayAvatarURL({
            format: "jpeg",
            size: 4096
        })

        let jpg16 = message.author.displayAvatarURL({
            format: "jpg",
            size: 16
        })
        let jpg32 = message.author.displayAvatarURL({
            format: "jpg",
            size: 32
        })
        let jpg64 = message.author.displayAvatarURL({
            format: "jpg",
            size: 64
        })
        let jpg128 = message.author.displayAvatarURL({
            format: "jpg",
            size: 128
        })
        let jpg256 = message.author.displayAvatarURL({
            format: "jpg",
            size: 256
        })
        let jpg512 = message.author.displayAvatarURL({
            format: "jpg",
            size: 512
        })
        let jpg1024 = message.author.displayAvatarURL({
            format: "jpg",
            size: 1024
        })
        let jpg2048 = message.author.displayAvatarURL({
            format: "jpg",
            size: 2048
        })
        let jpg4096 = message.author.displayAvatarURL({
            format: "jpg",
            size: 4096
        })

        let gif16 = message.author.displayAvatarURL({
            format: "gif",
            dynamic: true,
            size: 16
        })
        let gif32 = message.author.displayAvatarURL({
            format: "gif",
            dynamic: true,
            size: 32
        })
        let gif64 = message.author.displayAvatarURL({
            format: "gif",
            dynamic: true,
            size: 64
        })
        let gif128 = message.author.displayAvatarURL({
            format: "gif",
            dynamic: true,
            size: 128
        })
        let gif256 = message.author.displayAvatarURL({
            format: "gif",
            dynamic: true,
            size: 256
        })
        let gif512 = message.author.displayAvatarURL({
            format: "gif",
            dynamic: true,
            size: 512
        })
        let gif1024 = message.author.displayAvatarURL({
            format: "gif",
            dynamic: true,
            size: 1024
        })
        let gif2048 = message.author.displayAvatarURL({
            format: "gif",
            dynamic: true,
            size: 2048
        })
        let gif4096 = message.author.displayAvatarURL({
            format: "gif",
            dynamic: true,
            size: 4096
        })

        const embed = new Discord.MessageEmbed()
            .setColor('#9f5000')
            .setTitle(`Profile picture for ${message.author.tag}`)
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setDescription("Choose your desired file format and size:")
            .addFields({
                name: "WebP:",
                value: `[16](${webp16}) | [32](${webp32}) | [64](${webp64}) | [128](${webp128}) | [256](${webp256}) | [512](${webp512}) | [1024](${webp1024}) | [2048](${webp2048}) | [4096](${webp4096})`,
            }, {
                name: "PNG:",
                value: `[16](${png16}) | [32](${png32}) | [64](${png64}) | [128](${png128}) | [256](${png256}) | [512](${png512}) | [1024](${png1024}) | [2048](${png2048}) | [4096](${png4096})`,
            }, {
                name: "Jpeg:",
                value: `[16](${jpeg16}) | [32](${jpeg32}) | [64](${jpeg64}) | [128](${jpeg128}) | [256](${jpeg256}) | [512](${jpeg512}) | [1024](${jpeg1024}) | [2048](${jpeg2048}) | [4096](${jpeg4096})`,
            }, {
                name: "JPG",
                value: `[16](${jpg16}) | [32](${jpg32}) | [64](${jpg64}) | [128](${jpg128}) | [256](${jpg256}) | [512](${jpg512}) | [1024](${jpg1024}) | [2048](${jpg2048}) | [4096](${jpg4096})`,
            }, {
                name: "GIF",
                value: `[16](${gif16}) | [32](${gif32}) | [64](${gif64}) | [128](${gif128}) | [256](${gif256}) | [512](${gif512}) | [1024](${gif1024}) | [2048](${gif2048}) | [4096](${gif4096})`,
            }, )
            .setThumbnail(message.client.user.avatarURL())
            .setTimestamp()
            .setFooter('Thank you for using GuineaBot!')

        message.channel.send(embed)

    }
}