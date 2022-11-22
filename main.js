const prompt = require('prompt-sync')();

let choices = ['rock', 'paper', 'scissors'];


function  getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
};



const computerSelection = getComputerChoice();
