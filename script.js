const btnContainer = document.querySelector('.btn-container')
const button = document.querySelector('.myBtn');
const textContainer = document.querySelector('.title');
const titleText = document.getElementById('title-text')
const gPlay = document.querySelector('.game-arena');
const rResultContainer = document.querySelector('.round-result');
const rResultText = document.getElementById('round-winner');
const sBoard = document.querySelector('.score-board');
const pMoves = document.querySelector('.player-moves');
const gameWinner = document.getElementById('game-winner');
const eMassageContainer = document.querySelector('.end-message');


function gameStart() {
    textContainer.style.top = '0';
    btnContainer.style.opacity = '0';
    btnContainer.style.top = '75vh';
    btnContainer.style.zIndex = '-1';
    gPlay.style.opacity = '100';
    rResultContainer.style.opacity = '100';
    sBoard.style.opacity = '100';
    pMoves.style.opacity = '100';
}

button.textContent = "START GAME";

button.addEventListener("click", function () {
    gameStart()
});


const pOptions = document.querySelectorAll(".pOptions");
const options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let numberOfDraw = 0;

function computerSelect() {
    return options[Math.floor(Math.random() * options.length)];
};


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        numberOfDraw++;
        return "Its a Draw!";
    } else {
        //Validate player selection Rock.
        if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
        //Validate player selection Paper.
        if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        }
        //Validate player selection Scissors.
        if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper";
        }
    }
};