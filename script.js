const btnContainer = document.querySelector('.btn-container')
const button = document.querySelector('.myBtn');
const textContainer = document.querySelector('.title');
const titleText = document.getElementById('title-text')
const gPlay = document.querySelector('.game-arena');
const rResultContainer = document.querySelector('.round-result');

const options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let numberOfDraw = 0;

function computerSelect() {
    return options[Math.floor(Math.random() * options.length)];
};

function playerSelect() {
    let input = prompt("Input Rock, Paper, and Scissors. Press Enter or click OK.").toLowerCase();
    let check = validateInput(input);

    while (check == false) {
        input = prompt("Check your spelling! Input Rock, Paper, and Scissors. Press Enter or click OK.").toLowerCase();
        check = validateInput(input);
    }
    check;
    return input;
};

//Validate player input according to options array.
function validateInput(option) {
    return options.includes(option)
};

function play() {
    const playerSelection = playerSelect();
    const computerSelection = computerSelect();

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
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("You: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log("Number of Draw: " + numberOfDraw);
};

function logWins() {
    function gameWinner() {
        if (playerScore > computerScore) {
            return "You win the game!";
        } else if (playerScore < computerScore) {
            return "You lose the game!";
        } else {
            return "It's a draw game!"
        }
    };
    console.log("Game Over!\n" + gameWinner());
};

function game() {
    for (let i = 1; i <= 5; i++) {
        play();
    };
    logWins();
};

game();