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

let humanScore = 0;
let computerScore = 0;

// randomly pick computer choice from an array of options
function getComputerChoice() {
    const validGameChoices = ["rock", "paper", "scissors"];
    const computerChoice = validGameChoices[Math.floor(Math.random() * validGameChoices.length)];
    return computerChoice;
}

// logic to play one round
function playRound(humanSelection, computerSelection) {
    const roundInfo = document.querySelector(".current-round-result");
    const announceRoundWinner = document.createElement("p");
    roundInfo.appendChild(announceRoundWinner);    
    // console.log("Human:", humanSelection);
    // console.log("Computer:", computerSelection);

    // play the game
    switch (true) {
        // if the round's a tie, do nothing
        case (humanSelection === computerSelection):
            announceRoundWinner.textContent = `It's a tie! Both players chose ${humanSelection}`;
            break;
        // increment human player score if human wins
        case (humanSelection === "rock" && computerSelection === "scissors"):
        case (humanSelection === "paper" && computerSelection === "rock"):
        case (humanSelection === "scissors" && computerSelection === "paper"):
            announceRoundWinner.textContent = `Bravo! ${humanSelection} beats ${computerSelection}. Human wins`;
            humanScore++;  
            break;
        // increment computer score if computer wins
        case (computerSelection === "rock" && humanSelection === "scissors"):
        case (computerSelection === "paper" && humanSelection === "rock"):
        case (computerSelection === "scissors" && humanSelection === "paper"):
            announceRoundWinner.textContent = `Bravo! ${computerSelection} beats ${humanSelection}. Computer wins`;
            computerScore++;  
            break;
        // if the code block below runs, it means there's a flaw in the game logic above. DEBUG!!!
        default:
            announceRoundWinner.textContent = "Something's wrong. This line isn't supposed to execute.";
    }

    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
}