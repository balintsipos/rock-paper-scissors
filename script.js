let playerScore = 0;
let computerScore = 0;

const playerScoreCounter = document.querySelector("#playerScoreCounter");
const computerScoreCounter = document.querySelector("#computerScoreCounter");

const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");


rockButton.onclick = () => playRound("rock", getComputerChoice());
paperButton.onclick = () => playRound("paper", getComputerChoice());
scissorsButton.onclick = () => playRound("scissors", getComputerChoice());

function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    choice = choices[Math.floor(Math.random()*3)];
    console.log(choice);
    return choice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    
    if (playerChoice == computerChoice) {
        console.log('It\'s a tie!')
    }

    if (playerChoice == 'Rock') {
        if (computerChoice == 'Paper') {
            console.log('You lost! Paper beats Rock.');
            computerScore++;
        } else {
            console.log('You won! Rock beats Scissors.');
            playerScore++;
        }
    }

    if (playerChoice == 'Paper') {
        if (computerChoice == 'Scissors') {
            console.log('You lost! Scissors beat Rock.');
            computerScore++;
        } else {
            console.log('You won! Paper beats Rock.');
            playerScore++;
        }
    }

    if (playerChoice == 'Scissors') {
        if (computerChoice == 'Rock') {
            console.log('You lost! Rock beats Scissors.');
            computerScore++;
        } else {
            console.log('You won! Siccors beat Paper.');
            playerScore++;
        }
    }
}

function announceWinner() {
    if (playerScore == computerScore) {
        console.log('Bummer, it\'s a tie.');
    } else if (playerScore > computerScore) {
        console.log('Congratulations, you won!')
    } else {
        console.log('Computer won, better luck next time!');
    }
}

function main() {
    announceWinner();
    playerScoreCounter.textContent = "xd";
}

main();