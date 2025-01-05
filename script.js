console.log("Hello World")

// Function to generate a random integer between 0 and any given number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

// Generate a random integer between 0,1, and 2 and return a choice depending on the returned valuw
function getComputerChoice () {
    let randomNumber = getRandomInt(3);
    console.log(randomNumber);
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else if (randomNumber === 2) {
        return "scissors"
    } else {
        alert("The code logic is broken!")
    }
};

// Get choice from human user
function getHumanChoice () {
    let choice = prompt("Enter either: 'rock', 'paper', or 'scissors' ");
    switch (choice.toLowerCase()) {
        case "rock":
        case "paper":
        case "scissors":
            return choice;
            break;
        default:
            alert("Your entry doesn't match any of the valid game keyword.")
            alert("Try again using a valid keyword.")
    }
};
// console.log(getHumanChoice());

// Keep track of players score
let computerScore = 0;
let humanScore = 0;

// Logic to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Play again.");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    } else {
        console.log("There was an eror in one or more player choices!");
        console.log(`Computer choice: ${computerChoice}`);
        console.log(`Human choice: ${humanChoice}`);
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);