console.log("Hello World");
console.log("Call the playGame() function here to play the game.")

// get player choices and play a single round
const humanOptions = document.querySelectorAll("button");
humanOptions.forEach((option) => {
    option.addEventListener("click", () => {
        let humanSelection = option.textContent.toLowerCase();
        // console.log(humanSelection);
        let computerSelection = getComputerChoice();
        // console.log(computerSelection);
        playRound(humanSelection, computerSelection);
    })
});

// randomly generate computer choice
function getComputerChoice() {
    const validGameChoices = ["rock", "paper", "scissors"];
    const computerChoice = validGameChoices[Math.floor(Math.random() * validGameChoices.length)];
    return computerChoice;
}

// logic to play one round
function playRound(humanSelection, computerSelection) {
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
            console.log("Something's wrong. This line isn't supposed to execute.");
    }

    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
}