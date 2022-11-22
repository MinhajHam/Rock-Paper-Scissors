

let choices = ['rock', 'paper', 'scissors'];


function  getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
};

function playRound(player, computer) {
    let result = "";

    if (player === computer) {
        console.log("its a draw :(");
    }
    else if(player === 'rock' && computer === 'scissors' || 
            player === 'paper' && computer === 'rock' ||
            player === 'scissors' && computer === 'paper') {
                result = player + " beats " + computer;
            }
    else {
        result = computer + " beats " + player;
    }        
}


const playerSelection = prompt('pick one tool : ','ROCK or PAPER or SCISSORS');

const computerSelection = getComputerChoice();
