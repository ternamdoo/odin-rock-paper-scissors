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