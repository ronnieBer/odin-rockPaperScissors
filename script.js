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


function playBtnSound() {
    const buttonPress = document.getElementById("button-sound");
    buttonPress.play();
};

function playWinSound() {
    const winSound = document.getElementById("winner-sound");
    winSound.play();
};

function playLoseSound() {
    const loseSound = document.getElementById("loser-sound");
    loseSound.play();
};

function playDrawSound() {
    const drawSound = document.getElementById("draw-sound");
    drawSound.play();
};


function gameStart() {
    textContainer.style.top = '0';
    btnContainer.style.opacity = '0';
    btnContainer.style.top = '75vh';
    btnContainer.style.zIndex = '-1';
    gPlay.style.opacity = '100';
    rResultContainer.style.opacity = '100';
    sBoard.style.opacity = '100';
    pMoves.style.opacity = '100';
};

function gameFinish() {
    textContainer.style.top = '8vh';
    textContainer.style.opacity = '100';
    gPlay.style.opacity = '0';
    gPlay.style.zIndex = '-1';
    rResultContainer.style.opacity = '0';
    rResultContainer.style.zIndex = '-1';
    pMoves.style.opacity = '0';
    pMoves.style.zIndex = '-1';
    eMassageContainer.style.opacity = '100';
    btnContainer.style.opacity = '100';
    btnContainer.style.top = '75vh';
    btnContainer.style.zIndex = '1';
};

button.textContent = "START GAME";

button.addEventListener("click", function () {
    playBtnSound();
    setTimeout(() => {
        gameStart();
    }, 200);
});


const pOptions = document.querySelectorAll(".pOptions");
const options = ['Rock', 'Paper', 'Scissors'];

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

        playBtnSound();
        playRound(playerSelection, computerSelection);
        updateMoves(playerSelection, computerSelection);
        updateScore();
        updateRound();
        winner();
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

function updateMoves(playerSelection, computerSelection) {
    document.getElementById("p-move").src = `./assets/images/${"p" + playerSelection}.svg`;
    document.getElementById("c-move").src = `./assets/images/${"c" + computerSelection}.svg`;
};

function updateScore() {
    document.getElementById("p_score").textContent = playerScore;
    document.getElementById("c_score").textContent = computerScore;
};

function updateRound() {
    document.getElementById("round-count").textContent = gameRound;
};

function winner() {
    if (gameRound === 5) {
        if (playerScore > computerScore) {
            gameWinner.textContent = "Yes! You win the game!";
        } else if (playerScore < computerScore) {
            gameWinner.textContent = "Sorry! You lose the game!";
        } else {
            gameWinner.textContent = "It's a draw game!";
        };
    
        gameFinish();

        titleText.textContent = "GAME OVER!";

        button.textContent = "PLAY AGAIN";
        button.addEventListener('click', function() {
            playBtnSound();
            gameFinish();
            document.location.reload(true);
        });
    };
};