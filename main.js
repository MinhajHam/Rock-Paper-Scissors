const container = document.querySelector(".container");
const headContent = document.querySelector(".head-content");
const middleContent = document.querySelector(".middle-content");
const bottomContent = document.querySelector(".bottom-content");


// Middle Content Images
const rock = document.createElement("img");
rock.setAttribute("src", "images/rock.png");
rock.classList.add("image");
middleContent.appendChild(rock);

const paper = document.createElement("img");
paper.setAttribute("src", "images/paper.png");
paper.classList.add("image");
middleContent.appendChild(paper);

const scissors = document.createElement("img");
scissors.setAttribute("src", "images/scissors.png");
scissors.classList.add("image");
middleContent.appendChild(scissors);


// Bottom Content
const playerScore = document.createElement("div");
playerScore.classList.add("score");
bottomContent.appendChild(playerScore);

const boxContainer = document.createElement("div");
boxContainer.classList.add("box-container");
bottomContent.appendChild(boxContainer);

const computerScore = document.createElement("div");
computerScore.classList.add("score");
bottomContent.appendChild(computerScore);


// Bar Div
const statusBar = document.createElement("div");
statusBar.classList.add("status-bar");
boxContainer.appendChild(statusBar);

const scoreBar = document.createElement("div");
scoreBar.classList.add("score-bar");
boxContainer.appendChild(scoreBar);


// Bar Text Div 
const statusTextBar = document.createElement("div");
statusTextBar.classList.add("bar-text");
statusBar.appendChild(statusTextBar);

const scoreTextBar = document.createElement("div");
scoreTextBar.classList.add("bar-text");
scoreBar.appendChild(scoreTextBar);

// Score Header Div 
const playerName = document.createElement("div");
playerName.classList.add("score-header");
playerScore.appendChild(playerName);

const computerName = document.createElement("div");
computerName.classList.add("score-header");
computerScore.appendChild(computerName);


// Score Text Div 
const playerScoreText = document.createElement("div");
playerScoreText.classList.add("score-text");
playerScore.appendChild(playerScoreText);

const computerScoreText = document.createElement("div");
computerScoreText.classList.add("score-text");
computerScore.appendChild(computerScoreText);










let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player) {
  let result = "";
  let playerChoice = player.toLowerCase();
 const computerSelection = getComputerChoice();

  if (player === computerSelection) {
    console.log("its a draw :(");
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    statusBar.textContent = result =
      "Well... you Won!! " + playerChoice + " beats " + computerSelection;
    console.log(result);
  } else {
    statusBar.textContent = result =
      "Hey... Loser!! " + computerSelection + " beats " + playerChoice;
    console.log(result);
  }};


