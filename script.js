let humanScore = 0;
let computerScore = 0;
let round = 0;

let scoreCounter = document.querySelector("#score")
let playInfo = document.querySelector("#playerInfo");

function updateGame(){

    scoreCounter.textContent = `Player: ${humanScore} || Computer: ${computerScore}. Next round!`;

    //updates round counter until the game is over
    if (round < 5) {
        round++;
    } else if (humanScore === computerScore){ //if the round is over evaluate who won
        playInfo.textContent = "It's a tie, better luck next time.";
        resetGame();
    } else if (humanScore > computerScore) {
        playInfo.textContent = "You win! Congratulations";
        resetGame();
    } else {
        playInfo.textContent = "you lose. womp.";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    scoreCounter.textContent = `Player: ${humanScore} || Computer: ${computerScore}`;
}


// assigns each choice a numerical value
function getChoiceVal(choice) {
    switch (choice) {
        case "rock":
            return 1;
            break;
        case "paper":
            return 2;
            break;
        case "skizzors":
            return 3;
            break;
        default:
            return 3;
    }
}

// contains RPS logic
function playRound(humanChoice, computerChoice) {
    const humanVal = getChoiceVal(humanChoice);
    const computerVal = getChoiceVal(computerChoice);

    // switch case on full set of game states
    switch (humanVal - computerVal) {
        // tie case
        case 0:
            playInfo.textContent = "It's a tie! You'll get em\' next time.";
            updateGame();
            break;
        
        // win cases
        case 1:
        case -2:
            playInfo.textContent = `you win! ${humanChoice} beats ${computerChoice}!`;
            humanScore++;
            updateGame();
            break;
        
        // lose cases
        case 2:
        case -1:
            playInfo.textContent = `you lose! ${computerChoice} beats ${humanChoice}. Better luck next time.`;
            computerScore++;
            updateGame();
            break;

        default:
            playInfo.textContent = "It's a tie! You'll get em\' next time.";
            updateGame();
    }
}

// use Event Delegation to get user choice from buttons
let choices = document.querySelector('ul');

choices.addEventListener("click", (e) => {
    let choice = e.target;

    switch (choice.id) {
        case 'rock':
            playRound('rock', getComputerChoice())
            break;
        case 'paper':
            playRound('paper', getComputerChoice())
            break;
        case 'skizzors':
            playRound('skizzors', getComputerChoice())
            break;
    }

});


// Gets R, P, or S at random
function getComputerChoice() {
    // gets a random number between 0-3
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "skizzors";
            break;
        default:
            return "skizzors";
    }

}