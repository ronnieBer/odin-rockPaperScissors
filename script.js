const options = ['Rock', 'Paper', 'Scissors'];

function computerSelect() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playerSelect() {
    return input("Options: rock, paper, and scissors").toLowerCase();
}

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
        
    }
}

const playerSelection = playerSelect();
const computerSelection = computerSelect();
console.log(playRound(playerSelection, computerSelection));