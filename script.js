function computerPlay() {
    const handGesture = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * handGesture.length);
    return handGesture[random];
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
const computerSelection = computerPlay();