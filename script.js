function computerPlay() {
    const handGesture = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * handGesture.length);
    return handGesture[random];
}

function playRound(playerSelection, computerSelection) {
    
}

const playerSelection = "rock";
const computerSelection = computerPlay();