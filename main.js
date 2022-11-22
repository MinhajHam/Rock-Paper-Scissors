const prompt = require('prompt-sync')();

let choices = ['rock', 'paper', 'scissors'];


function  getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
};




const playerSelection = prompt('pick one tool : ','ROCK or PAPER or SCISSORS');

const computerSelection = getComputerChoice();
