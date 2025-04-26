console.log("Hello World");
console.log("Call the playGame() function here to play the game.")

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
    let humanInputLowercase = humanInput.toLowerCase().trim()
    switch (humanInputLowercase) {
        case "rock":
        case "paper":
        case "scissors":
            return humanInputLowercase;
        default:
            console.log("You did not enter a valid game keyword. The next round won't be played successfully");
            return "";
    }
}

// play 5 rounds and announce the winner if there's any
function playGame() {
    // logic to play one round
    function playRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // play the game
        console.log("Rock, Paper, Scissors, shoot!");
        console.log("Human:", humanSelection);
        console.log("Computer:", computerSelection);
        switch (true) {
            // if the round's a tie, do nothing
            case (humanSelection === computerSelection):
                console.log(`It's a tie! Both players chose ${humanSelection}`);
                break;
            // increment human player score if human wins
            case (humanSelection === "rock" && computerSelection === "scissors"):
            case (humanSelection === "paper" && computerSelection === "rock"):
            case (humanSelection === "scissors" && computerSelection === "paper"):
                console.log(`Bravo! ${humanSelection} beats ${computerSelection}. Human wins`);
                humanScore++;  
                break;
            // increment computer score if computer wins
            case (computerSelection === "rock" && humanSelection === "scissors"):
            case (computerSelection === "paper" && humanSelection === "rock"):
            case (computerSelection === "scissors" && humanSelection === "paper"):
                console.log(`Bravo! ${computerSelection} beats ${humanSelection}. Computer wins`);
                computerScore++;  
                break;
            // if the code block below runs, it means there's a flaw in the game logic above. DEBUG!!!
            default:
                console.log("Something's wrong. This line isn't supposed to execute.")
        }

        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }

    // record game scores
    let humanScore = 0;
    let computerScore = 0;

    // play 5 rounds
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    // Declare a winner
    if (humanScore === computerScore) {
        console.log("The game ended in a tie after 5 rounds");
    } else if (humanScore > computerScore) {
        console.log(`After 5 game rounds, human beat computer ${humanScore} - ${computerScore}`);
    } else {
        console.log(`After 5 game rounds, computer beat human ${computerScore} - ${humanScore}`);
    }
}