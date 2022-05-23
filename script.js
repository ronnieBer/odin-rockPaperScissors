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
let gameRound = 0;

function computerSelect() {
    return options[Math.floor(Math.random() * options.length)];
};

pOptions.forEach((pOption) => {
    pOption.addEventListener("click", function () {
        const playerSelection = this.value;
        const computerSelection = computerSelect();


    });
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameRound++;
        return rResultText.textContent = "Its a Draw!";
    } else {
        //Validate player selection Rock.
        if (playerSelection == "Rock" && computerSelection == "Paper") {
            computerScore++;
            gameRound++;
            return rResultText.textContent = "You Lose!";
        } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            playerScore++;
            gameRound++;
            return rResultText.textContent = "You Win!";
        }
        //Validate player selection Paper.
        if (playerSelection == "Paper" && computerSelection == "Scissors") {
            computerScore++;
            gameRound++;
            return rResultText.textContent = "You Lose!";
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            playerScore++;
            gameRound++;
            return rResultText.textContent = "You Win!";
        }
        //Validate player selection Scissors.
        if (playerSelection == "Scissors" && computerSelection == "Rock") {
            computerScore++;
            gameRound++;
            return rResultText.textContent = "You Lose!";
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            playerScore++;
            gameRound++;
            return rResultText.textContent = "You Win!";
        };
    };
};