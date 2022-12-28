const container = document.querySelector(".container");
const headContent = document.querySelector(".head-content");
const middleContent = document.querySelector(".middle-content");
const bottomContent = document.querySelector(".bottom-content");
const modalContent = document.querySelector(".modal-content");
const popContent = document.querySelector(".pop-content");
const modal = document.getElementById("pop-up");

// head content - heading (rock, paper, scissors)
const heading = document.createElement('h1');
heading.classList.add('heading')
heading.innerHTML = `<span>rock.</span>paper.<span>scissors</span>`
headContent.appendChild(heading)


// Middle Content Images (rock, paper, scissors)
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

// Bottom Content div (Score boxes and Status bars)
const playerScore = document.createElement("div");
playerScore.classList.add("score");
bottomContent.appendChild(playerScore);

const boxContainer = document.createElement("div");
boxContainer.classList.add("box-container");
bottomContent.appendChild(boxContainer);

const computerScore = document.createElement("div");
computerScore.classList.add("score");
bottomContent.appendChild(computerScore);

// Bar Div (Bottom center bars)
const statusBar = document.createElement("div");
statusBar.classList.add("bar");
boxContainer.appendChild(statusBar);

const scoreBar = document.createElement("div");
scoreBar.classList.add("bar");
boxContainer.appendChild(scoreBar);

// Bar Texts
const statusTextBar = document.createElement("div");
statusTextBar.textContent = "Player VS Computer"
statusTextBar.classList.add("bar-text");
statusBar.appendChild(statusTextBar);

const scoreTextBar = document.createElement("div");
scoreTextBar.textContent = "⚔️ Let's fight ⚔️"
scoreTextBar.classList.add("bar-text");
scoreBar.appendChild(scoreTextBar);

// Score box Header
const playerName = document.createElement("div");
playerName.classList.add("score-header");
playerName.textContent = "Player";
playerScore.appendChild(playerName);

const computerName = document.createElement("div");
computerName.classList.add("score-header");
computerName.textContent = "Computer";
computerScore.appendChild(computerName);

// Score box Text
const playerScoreText = document.createElement("div");
playerScoreText.classList.add("score-text");
playerScoreText.textContent = "0";
playerScore.appendChild(playerScoreText);

const computerScoreText = document.createElement("div");
computerScoreText.classList.add("score-text");
computerScoreText.textContent = "0";
computerScore.appendChild(computerScoreText);

// pop-up container
const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score-container");
popContent.appendChild(scoreContainer);

const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");
popContent.appendChild(btnContainer);

const tryButton = document.createElement("button");
tryButton.classList.add("try-button");
tryButton.textContent = "Try Again";
btnContainer.appendChild(tryButton);

const popText = document.createElement("div");
popText.classList.add("pop-text");
scoreContainer.appendChild(popText);

// Functions
let choices = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player) {
  let result = "";
  let playerChoice = player.toLowerCase();
  const computerSelection = getComputerChoice();

  if (player === computerSelection) {
    statusTextBar.textContent = "its a tie :(";
    scoreTextBar.textContent = "-  -";
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    playerScoreText.textContent = playerPoints += 1;
    result = playerChoice + " beats " + computerSelection;
    statusTextBar.textContent = result;
    scoreTextBar.textContent = "Player Scores!!";

    // pop-up text (Player won)
    if (playerPoints === 5) {
      popText.textContent = "You Won The Battle⚔️";
      document.getElementById("pop-up").style.display = "block";
    }
  } else {
    computerScoreText.textContent = computerPoints += 1;
    result = computerSelection + " beats " + playerChoice;
    statusTextBar.textContent = result;
    scoreTextBar.textContent = "Computer Scores!!";

    // pop-up text (Computer won)
    if (computerPoints === 5) {
      popText.textContent = "You Have Been Defeated💀";
      document.getElementById("pop-up").style.display = "block";
    }
  }
}

// Function for buttons
rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});

tryButton.addEventListener("click", () => {
  document.location.reload();
});
