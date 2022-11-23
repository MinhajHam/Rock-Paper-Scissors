

let choices = ['rock', 'paper', 'scissors'];


function  getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
};

function playRound(player, computer) {
    let result = "";
    let playerChoice = player.toLowerCase();

    if (player === computer) {
        console.log("its a draw :(");
    }
    else if(playerChoice === 'rock' && computer === 'scissors' || 
            playerChoice === 'paper' && computer === 'rock' ||
            playerChoice === 'scissors' && computer === 'paper') {
                result = "Well... you Won!!" + playerChoice + " beats " + computer;
                console.log(result);
            }
    else {
        result = "Hey... Loser!!" + computer + " beats " + playerChoice;
        console.log(result);
    }        
}


let playerSelection = prompt('pick one tool : ',"you won't stand a change in front of computer");

const computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection));
