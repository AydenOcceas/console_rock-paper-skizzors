let humanScore = 0;
let computerScore = 0;

// playGame();

function playGame(){

    for (let i = 0; i < 5; i++){
        playRound(getUserChoice(), getComputerChoice());
        console.log(`Player: ${humanScore} Computer: ${computerScore}. Next round!`);
    }

    if (humanScore === computerScore){
        console.log("It's a tie, better luck next time.");
    } else if (humanScore > computerScore) {
        console.log("You win! Congratulations");
    } else {
        console.log("you lose. womp.");
    }

    console.log(`Player: ${humanScore} Computer: ${computerScore}`);
}


function playRound(humanChoice, computerChoice) {
    const humanVal = getChoiceVal(humanChoice);
    const computerVal = getChoiceVal(computerChoice);

    // switch case on full set of game states
    switch (humanVal - computerVal) {
        // tie case
        case 0:
            console.log("It's a tie! You'll get em\' next time.");
            break;
        
        // win cases
        case 1:
        case -2:
            console.log(`you win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
            break;
        
        // lose cases
        case 2:
        case -1:
            console.log(`you lose! ${computerChoice} beats ${humanChoice}. Better luck next time.`);
            computerScore++;
            break;

        default:
            console.log("It's a tie! You'll get em\' next time.");
    }
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