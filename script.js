let playerScore = 0;
let computerScore = 0;

const playerScoreCounter = document.querySelector("#playerScoreCounter");
const computerScoreCounter = document.querySelector("#computerScoreCounter");

const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");

const computerAnnounce = document.querySelector(".computerAnnounce");


rockButton.onclick = () => playRound("rock", getComputerChoice());
paperButton.onclick = () => playRound("paper", getComputerChoice());
scissorsButton.onclick = () => playRound("scissors", getComputerChoice());

function updateScores() {
    playerScoreCounter.textContent = playerScore;
    computerScoreCounter.textContent = computerScore;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function checkWinCondition() {
    if (playerScore == 5 || computerScore == 5) {
        announceWinner();
    }
}

function changeComputerAnnounceColor(color) {
    computerAnnounce.style.color = color;
    computerAnnounce.style.fontSize = "30px";
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    
    if (playerChoice == computerChoice) {
        computerAnnounce.textContent = 'It\'s a tie!';
        changeComputerAnnounceColor('aliceblue');
    } else if (playerChoice == 'Rock') {
        if (computerChoice == 'Paper') {
            computerAnnounce.textContent = 'You lost! Paper beats Rock.';
            changeComputerAnnounceColor('red');
            computerScore++;
        } else {
            computerAnnounce.textContent = 'You won! Rock beats Scissors.';
            changeComputerAnnounceColor('green');
            playerScore++;
        }
    } else if (playerChoice == 'Paper') {
        if (computerChoice == 'Scissors') {
            computerAnnounce.textContent = 'You lost! Scissors beat Rock.';
            changeComputerAnnounceColor('red');
            computerScore++;
        } else {
            computerAnnounce.textContent = 'You won! Paper beats Rock.';
            changeComputerAnnounceColor('green');
            playerScore++;
        }
    } else if (playerChoice == 'Scissors') {
        if (computerChoice == 'Rock') {
            computerAnnounce.textContent = 'You lost! Rock beats Scissors.';
            changeComputerAnnounceColor('red');
            computerScore++;
        } else {
            computerAnnounce.textContent = 'You won! Siccors beat Paper.';
            changeComputerAnnounceColor('green');
            playerScore++;
        }
    }

    updateScores();
    checkWinCondition();
}

function announceWinner() {
    if (playerScore > computerScore) {
        computerAnnounce.textContent = 'Congratulations, you won!';
        changeComputerAnnounceColor('green');
        computerAnnounce.style.fontSize = '60px';
    } else {
        computerAnnounce.textContent = 'Computer won, better luck next time!';
        changeComputerAnnounceColor('red');
        computerAnnounce.style.fontSize = '60px';
    }
    resetScores();
}