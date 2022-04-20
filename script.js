const options = ['rock', 'paper', 'scissors'];

function computerSelect() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playerSelect() {
    return prompt("Options: rock, paper, and scissors").toLowerCase();
}

function play() {

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "Its a Draw!";
        } else {
            //Validate player selection Rock.
            if (playerSelection == "rock" && computerSelection == "paper") {
                return "You Lose! Paper beats Rock";
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                return "You Win! Rock beats Scissors";
            }
            //Validate player selection Paper.
            if (playerSelection == "paper" && computerSelection == "scissors") {
                return "You Lose! Scissors beats Paper";
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                return "You Win! Paper beats Rock";
            }
            //Validate player selection Scissors.
            if (playerSelection == "scissors" && computerSelection == "rock") {
                return "You Lose! Rock beats Scissors";
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                return "You Win! Scissors beats Paper";
            }
        }
    }
}


const playerSelection = playerSelect();
const computerSelection = computerSelect();

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(playerSelection, computerSelection);
    }
}

console.log(game());

game();