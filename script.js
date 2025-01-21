console.log("Hello World");

// randomly generate computer choice
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    switch (randomInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Get human choice
function getHumanChoice() {
    let humanInput = prompt("Enter a valid choice between 'rock', 'paper, or 'scissors': ")
    let humanInputLowercase = humanInput.toLowerCase()
    switch (humanInputLowercase) {
        case "rock":
        case "paper":
        case "scissors":
            return humanInputLowercase;
        default:
            console.log("You did not enter a valid game keyword. The next round wont be played successfully");
            return "";
    }
}

// Track game scores
let humanScore = 0;
let computerScore = 0;


// Play one round
function playRound(humanChoice, computerChoice) {
    console.log("Rock, Paper, Scissors, shoot!");
    console.log("Human:", humanChoice);
    console.log("Computer:", computerChoice);
    switch (true) {
        // if the round's a tie, do nothing
        case (humanChoice === computerChoice):
            console.log(`It's a tie! Both players chose ${humanChoice}`);
            break;
        // increment human player score if human wins
        case (humanChoice === "rock" && computerChoice === "scissors"):
        case (humanChoice === "paper" && computerChoice === "rock"):
        case (humanChoice === "scissors" && computerChoice === "paper"):
            console.log(`Bravo! ${humanChoice} beats ${computerChoice}. Human wins`);
            humanScore++;  
            break;
        // increment computer score if computer wins
        case (computerChoice === "rock" && humanChoice === "scissors"):
        case (computerChoice === "paper" && humanChoice === "rock"):
        case (computerChoice === "scissors" && humanChoice === "paper"):
            console.log(`Bravo! ${computerChoice} beats ${humanChoice}. Computer wins`);
            computerScore++;  
            break;
        // if the code block below runs, it means there's a flaw in the game logic above. DEBUG!!!
        default:
            console.log("Something's wrong. This live isn't supposed to execute.")
    }

    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
}

// store players choices for a single game round
const humanSelection = getComputerChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);