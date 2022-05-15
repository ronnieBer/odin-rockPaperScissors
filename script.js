const options = ['rock', 'paper', 'scissors'];

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
    };
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
};

function game() {
    for (let i = 1; i <= 5; i++) {
        play();
    };
};

game();