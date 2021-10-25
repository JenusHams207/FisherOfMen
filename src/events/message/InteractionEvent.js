const {   MessageEmbed, ButtonInteraction, MessageActionRow, MessageButton, MessageCollector, Message } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class InteractionEvent extends BaseEvent {
    constructor() {
        super('interactionCreate');
    };
     /**
     * @param {Client} client
     * @param {Interaction} interaction
     */
    async run(client, interaction) {
        if (interaction.isSelectMenu()) {
            if (interaction.customId === 'religion') {
                const role = [
                { name: 'christian', id: '900499547585937408'},
                { name: 'muslim', id: '900768072779042826'},
                { name: 'jew', id: '900767246647971910'},
                { name: 'hindu', id: '900768124868108338'},
                { name: 'pagan', id: '900769077939818537'},
                { name: 'buddhist', id: '900705331565428777'},
                { name: 'atheist', id: '900769195237732443'},
                { name: 'unaffliated', id: '900847668123824169'},
                { name: 'mormon', id: '900768913057542205'},
                { name: 'hebrew', id: '900769946215272468'},
                ];
                const role1 = role.find((item) => {
                    return item.name === `${interaction.values[0]}`
                });
                if(interaction.values.length === 1) {
                    if (interaction.values[0].includes(role1.name)) {
                        role.filter((item) => {
                            interaction.member.roles.remove(item.id);
                        });
                        interaction.member.roles.add(role1.id);
                        interaction.deferUpdate();
                    }
                interaction.values = [];
                }
            } else if(interaction.customId === "denomination") {
                const denorole = [
                    { name: 'oorthodox', id: '901408689083285534'},
                    { name: 'eorthodox', id: '901408751855218739'},
                    { name: 'catholic', id: '901408809401081877'},
                    { name: 'non', id: '901408891085156433'},
                    { name: 'protestant', id: '901408845409173524'},
                    { name: 'baptist', id: '901408919166009415'},
                    { name: 'sunni', id: '901409540082376735'},
                    { name: 'shia', id: '901409588098785290'},
                    { name: 'unitarian', id: '901408949037854761'},
                    { name: 'ahmaddi', id: '901410317031047208'},
                ];
                const role1 = denorole.find((item) => {
                    return item.name === `${interaction.values[0]}`
                });
                if(interaction.values.length === 1) {
                    if (interaction.values[0].includes(role1.name)) {
                        denorole.filter(item => {
                            interaction.member.roles.remove(item.id);
                        })
                        interaction.member.roles.add(role1.id);
                        interaction.deferUpdate();
                    }
                }
                interaction.values = [];
            } else if(interaction.customId === 'gender') {
                const role = [
                    { name: 'male', id: '900720140180660224'},
                    { name: 'female', id: '900720484197494854'},
                ];
                const role1 = role.find((item) => {
                    return item.name === `${interaction.values[0]}`
                });

                if(interaction.values.length === 1) {
                    if (interaction.values[0].includes(role1.name)) {
                        role.filter((item) => {
                            interaction.member.roles.remove(item.id);
                        });
                        interaction.member.roles.add(role1.id);
                        interaction.deferUpdate();
                    }
                } 
                interaction.values = [];
            } else if(interaction.customId === "age") {
                
                const role = [
                    { name: 'baby', id: '900780670719242250'},
                    { name: 'teen', id: '901010632265043968'},
                    { name: 'adult', id: '900780708342157363'},
                ];
                const role1 = role.find((item) => {
                    return item.name === `${interaction.values[0]}`
                });

                if(interaction.values.length === 1) {
                    if (interaction.values[0].includes(role1.name)) {
                        role.filter((item) => {
                            interaction.member.roles.remove(item.id);
                        });
                        interaction.member.roles.add(role1.id);
                        interaction.deferUpdate();
                    }
                }
                interaction.values = [];
            } else if(interaction.customId === 'region') {
                const role = [
                    { name: 'samerica', id: '901437168751378442'},
                    { name: 'namerica', id: '901437137713500201'},
                    { name: 'europe', id: '901437204105142334'},
                    { name: 'asia', id: '901437097053921370'},
                    { name: 'africa', id: '901437070055211028'},
                    { name: 'oceania', id: '902115804282249267'},
                ];
                const role1 = role.find((item) => {
                    return item.name === `${interaction.values[0]}`
                });
                if(interaction.values.length === 1) {
                    if (interaction.values[0].includes(role1.name)) {
                        role.filter((item) => {
                            interaction.member.roles.remove(item.id);
                        })
                        interaction.member.roles.add(role1.id);
                        interaction.deferUpdate();
                    }
                }
            } else if(interaction.customId === 'ping') {
                const role = [
                    {name: 'debate', id: '901436877700210728'},
                    {name: 'prayer', id: '901437041944969267'},
                    {name: 'study', id: '901436714067828777'},
                    {name: 'event', id: '901436915117596732'},
                    {name: 'sermon', id: '901436837514604595'},
                ];

                const role1 = role.find((item) => {
                    return item.name === `${interaction.values[0]}`
                });
                const role2 = role.find((item) => {
                    return item.name === `${interaction.values[1]}`
                });
                const role3 = role.find((item) => {
                    return item.name === `${interaction.values[2]}`
                });
                const role4 = role.find((item) => {
                    return item.name === `${interaction.values[3]}`
                });
                const role5 = role.find((item) => {
                    return item.name === `${interaction.values[4]}`
                });

                if(interaction.values.length === 1) {
                    if (interaction.values[0].includes(role1.name)) {
                        role.filter((item) => {
                            interaction.member.roles.remove(item.id);
                        })
                        interaction.member.roles.add(role1.id);
                        interaction.deferUpdate();
                    }
                } else if(interaction.values.length === 2) {
                    if (interaction.values[0].includes(role1.name) || interaction.values[1].includes(role2.name)) {
                        role.filter((item) => {
                            interaction.member.roles.remove(item.id);
                        })
                        interaction.member.roles.add(role1.id);
                        interaction.member.roles.add(role2.id);
                        interaction.deferUpdate();
                    }
            
                } else if(interaction.values.length === 3) {
                    if (interaction.values[0].includes(role1.name) || interaction.values[1].includes(role2.name) || interaction.values[2].includes(role3.name)) {
                        role.filter((item) => {
                            interaction.member.roles.remove(item.id);
                        })
                        interaction.member.roles.add(role1.id);
                        interaction.member.roles.add(role2.id);
                        interaction.member.roles.add(role3.id);
                        interaction.deferUpdate();
                    }
                } else if(interaction.values.length === 4){
                    if (interaction.values[0].includes(role1.name) || interaction.values[1].includes(role2.name) || interaction.values[2].includes(role3.name) || interaction.values[3].includes(role4.name)) {
                        role.filter((item) => {
                            interaction.member.roles.remove(item.id);
                        })
                        interaction.member.roles.add(role1.id);
                        interaction.member.roles.add(role2.id);
                        interaction.member.roles.add(role3.id);
                        interaction.member.roles.add(role4.id);
                        interaction.deferUpdate();
                    }
                } else if(interaction.values.length === 5) {
                    if (interaction.values[0].includes(role1.name) || interaction.values[1].includes(role2.name) || interaction.values[2].includes(role3.name) || interaction.values[3].includes(role4.name) || interaction.values[4].includes(role5.name)) {
                        role.filter((item) => {
                            interaction.member.roles.remove(item.id);
                        })
                        interaction.member.roles.add(role1.id);
                        interaction.member.roles.add(role2.id);
                        interaction.member.roles.add(role3.id);
                        interaction.member.roles.add(role4.id);
                        interaction.member.roles.add(role5.id);
                        interaction.deferUpdate();
                    }
                }
                interaction.values = [];
            }
        }
    }
}
