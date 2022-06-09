//work in progress


const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const  axios  = require('axios');


const dotenv = require('dotenv');
dotenv.config();



module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Shows weather in a specified location')
        .addStringOption(option =>{
            return option,
            option.setName('input')
            .setDescription('user input')
            .setRequired(true)
        }),
        async execute(interaction){
            const input = interaction.options.getString('input');
            await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+process.env.WEATHER_APPID+"&units=metric").then(response =>{
                console.log(response.data);
            }).catch(err =>{(console.log(err))
            });
        },
};
