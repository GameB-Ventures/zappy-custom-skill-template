// MAKE SURE ENVIRONMENT VARIABLES ARE AVAILABLE before you require sdk 
require('dotenv').config()
const { createSkill } = require('zapdroid-sdk');

// define required parameters
let functionName = 'random_number_generator'
let description = 'This tool is used to generate random number'
let parameters = {
    type: "object",
    properties: {
        min: {
            type: "integer",
            description: "Min number to generate",
        },
        max: {
            type: "integer",
            description: "Max number to generate",
        },
    },
    required: ["min", "max"],
};

// Use Zapdroid SDK to plug it in with main LLM engiine
createSkill(functionName, description, parameters, async (message, reply) => {
    console.log('random_number_generator skill called')
    const { min, max } = message.data.args;

    // generate a random number between min and max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    await reply(`Your random number is ${randomNumber}`)
})