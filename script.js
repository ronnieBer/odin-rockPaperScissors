const options = ['Rock', 'Paper', 'Scissors'];

function computerSelect() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playerSelect() {
    return input("Options: rock, paper, and scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() && computerSelection.toLowerCase() == "rock") {
        return "Its a Draw!!";
    } else if (playerSelection.toLowerCase() && computerSelection.toLowerCase() == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() && computerSelection.toLowerCase() == "scissors") {
        return "You Win! Rock beats Scissors";
    }
}

const playerSelection = "rock";
const computerSelection = computerSelect();
console.log(playRound(playerSelection, computerSelection));