const { MessageActionRow, MessageEmbed, MessageSelectMenu}  = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BeliefRole extends BaseCommand {
    constructor() {
        super('blrfgr1011', 'moderation', []);
    };
    
    async run(client, message, args) {
        const arrow = client.emojis.cache.get("890970184628703262");

        const row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId('religion')
            .setMaxValues(1)
            .setPlaceholder(`Select your religion`)
            .addOptions([
                {
                  label: `Christian`,
                  description: 'Select this option to get the Christian role',
                  value: 'christian',
                },
                {
                  label: `Jew`,
                  description: 'Select this option to get the Jews role',
                  value: 'jew',
                },
                {
                  label: `Muslim`,
                  description: 'Select this option to get the Muslim role',
                  value: 'muslim',
                },
                {
                  label: `Mormon`,
                  description: 'Select this option to get the Mormon role',
                  value: 'mormon',
                },
                {
                  label: `Black Hebrew Israelite`,
                  description: 'Select this option to get the Black Hebrew Israelite role',
                  value: 'hebrew',
                },
                {
                  label: `Atheist/Agnostic`,
                  description: 'Select this option to get the Muslim role',
                  value: 'atheist',
                },
                {
                  label: `Hindu`,
                  description: 'Select this option to get the Hindu role',
                  value: 'hindu',
                },
                {
                  label: `Buddhist`,
                  description: 'Select this option to get the Buddhist role',
                  value: 'buddhist',
                },
                {
                  label: `Pagan`,
                  description: 'Select this option to get the Pagan role',
                  value: 'pagan',
                },
                {
                  label: "Unaffliated",
                  description: 'Select this option to get the Unaffiliated role',
                  value: 'unaffliated',
                },
            ])
            
        )

        const embedMessage = new MessageEmbed()
        .setAuthor("Religion Roles - Belief Roles")
        .setColor("#67ff21")
        .setDescription(`If you are a Christian, please select "Christian" if not select the other religious roles!`)
        .setFooter(`Fishers of Men`, message.guild.iconURL());

        const m1 = await message.channel.send({embeds: [embedMessage], components: [row]});

        const embedMessage1 = new MessageEmbed()
        .setAuthor("Christian Denominations - Belief Roles")
        .setColor("#67ff21")
        .setDescription(`Have any denomination? Choose your denomination below, if you do not have one, choose non-denomination! You can also choose other religion denomination aswell!`)
        .setFooter(`Fishers of Men`, message.guild.iconURL());

        const row1 = new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId('denomination')
            .setMaxValues(1)
            .setPlaceholder(`Choose your primary denomination`)
            .addOptions([
                {
                  label: `Oriental Orthodox`,
                  description: 'Select this option to get the Oriental Orthodoxc role.',
                  value: 'oorthodox',
                },
                {
                  label: `Eastern Orthodox`,
                  description: 'Select this option to get the Eastern Orthodox role.',
                  value: 'eorthodox',
                },
                {
                  label: `Roman Catholic`,
                  description: 'Select this option to get the Roman Catholic role.',
                  value: 'catholic',
                },
                {
                  label: `Protestant`,
                  description: 'Select this option to get the Protestant role.',
                  value: 'protestant',
                },
                {
                  label: `Non Denominational`,
                  description: 'Select this option to get the Non-Denominational role.',
                  value: 'non',
                },
                {
                  label: `Baptist`,
                  description: 'Select this option to get the Baptist role.',
                  value: 'baptist',
                },
                {
                  label: `Unitarian`,
                  description: 'Select this option to get the Unitarian role.',
                  value: 'unitarian',
                },
                {
                  label: `Sunni`,
                  description: 'Select this option to get the Sunni role.',
                  value: 'sunni',
                },
                {
                  label: `Shia`,
                  description: 'Select this option to get the Shia role.',
                  value: 'shia',
                },
                {
                  label: `Ahmaddi`,
                  description: 'Select this option to get the Ahmadd role.',
                  value: 'ahmaddi',
                },
            ])
        )
        const m2 = await message.channel.send({embeds: [embedMessage1], components: [row1]});

        const row3 = new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId('gender')
            .setMaxValues(1)
            .setPlaceholder(`Select your gender`)
            .addOptions([
                {
                    label: `Male`,
                    description: 'You are man or son of God? Select this option now!',
                    value: 'male',
                    emoji: `♂️`
                },
                {
                    label: `Female`,
                    description: 'You are woman or daughter of God? Select this option now!',
                    value: 'female',
                    emoji: `♀️`
                },
            ])
            
        )

        const embedMessage3 = new MessageEmbed()
        .setAuthor(`Gender Roles - Personal Roles`)
        .setColor("#67ff21")
        .setDescription(`Choose your gender now! Please be honest about this, don't accidentally select the wrong one!`)
        .setFooter(`Fishers of Men`, message.guild.iconURL());
        message.channel.send({embeds: [embedMessage3], components: [row3]});

        const row4 = new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId('age')
            .setMaxValues(1)
            .setPlaceholder(`Select your age`)
            .addOptions([
                {
                    label: `13-15`,
                    description: 'Please select this option if you are 13-15!',
                    value: 'baby',
                },
                {
                    label: `16-18`,
                    description: 'Please select this option if you are 16-19!',
                    value: 'teen',
                },
                {
                    label: `19+`,
                    description: 'Please select this option if you are 20+!',
                    value: 'adult',
                }
            ])
        )

        const embedMessage4 = new MessageEmbed()
        .setAuthor(`Age Roles - Personal Roles`)
        .setColor("#67ff21")
        .setDescription(`Hey, how old are you? Please select an age so people will know your age! 19+ are respected!`)
        .setFooter(`Global Fellowship`, message.guild.iconURL());
        message.channel.send({embeds: [embedMessage4], components: [row4]});

        const row5 = new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId('region')
            .setMaxValues(1)
            .setPlaceholder(`Select your regions`)
            .addOptions([
                {
                    label: `South America`,
                    description: 'Please select this option if you live in South America',
                    value: 'samerica',
                },
                {
                    label: `North America`,
                    description: 'Please select this option if you live in South America',
                    value: 'namerica',
                },
                {
                    label: `Europe`,
                    description: 'Please select this option if you live in Europe',
                    value: 'europe',
                },
                {
                    label: `Asia`,
                    description: 'Please select this option if you live in Asia!',
                    value: 'asia',
                },
                {
                    label: `Africa`,
                    description: 'Please select this option if you live in Africa',
                    value: 'africa',
                },
                {
                    label: `Oceania`,
                    description: 'Please select this option if you live in Oceania',
                    value: 'oceania',
                }
            ])
        )

        const embedMessage5 = new MessageEmbed()
        .setAuthor(`Regions - Personal Roles`)
        .setColor("#67ff21")
        .setDescription(`Please select your continent or current place of residence! Have multiple residences? Feel free to select multiple regions!`)
        .setFooter(`Global Fellowship`, message.guild.iconURL())

        message.channel.send({embeds: [embedMessage5], components: [row5]});

        const row6 = new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId('ping')
            .setMaxValues(5)
            .setPlaceholder(`Select your notification roles`)
            .addOptions([
                {
                    label: `Sermon Ping`,
                    description: 'Pick this role to get notifications about worships!',
                    value: 'sermon',
                },
                {
                    label: `Bible Study Ping`,
                    description: 'Pick this role to get notifications about bible studies!',
                    value: 'study',
                },
                {
                    label: `Event Ping`,
                    description: 'Pick this role to get notifications about events!',
                    value: 'event',
                },
                {
                    label: `Prayer Ping`,
                    description: 'Pick this role to get notifications about praying events!',
                    value: 'prayer',
                },
                {
                    label: `Debate Ping`,
                    description: 'Pick this role to get notifications about debates!',
                    value: 'debate',
                },
            ])
        )

        const embedMessage6 = new MessageEmbed()
        .setAuthor(`Ping Roles - Settings`)
        .setColor("#67ff21")
        .setDescription(`Here you can select some roles to receive notifications about events, news, etc...`)
        .setFooter(`Global Fellowship`, message.guild.iconURL());

        message.channel.send({embeds: [embedMessage6], components: [row6]});

    }
}