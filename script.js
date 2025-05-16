console.log("Hello World");
console.log("Call the playGame() function here to play the game.")

// get player choices and play a single round
const humanOptions = document.querySelectorAll("button");
humanOptions.forEach((option) => {
    option.addEventListener("click", () => {
        let humanSelection = option.textContent.toLowerCase();
        console.log(humanSelection);
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        // playRound();
    })
})

// randomly generate computer choice
function getComputerChoice() {
    const validGameChoices = ["rock", "paper", "scissors"];
    const computerChoice = validGameChoices[Math.floor(Math.random() * validGameChoices.length)];
    return computerChoice;
}

// // Get human choice
// function getHumanChoice() {
//     // const humanOptions = document.querySelectorAll("button");
//     humanOptions.forEach((option) => {
//         option.addEventListener("click", () => {
//             return option.textContent
//         })
//     })


    // let humanInput = prompt("Enter a valid choice between 'rock', 'paper, or 'scissors': ")
    // let humanInputLowercase = humanInput.toLowerCase().trim()
    // switch (humanInputLowercase) {
    //     case "rock":
    //     case "paper":
    //     case "scissors":
    //         return humanInputLowercase;
    //     default:
    //         console.log("You did not enter a valid game keyword. The next round won't be played successfully");
    //         return "";
    // }
// }

// logic to play one round
function playRound() {
    const humanSelection = getHumanChoice();
    const computerChoice = getComputerChoice();

    // play the game
    console.log("Rock, Paper, Scissors, shoot!");
    console.log("Human:", humanSelection);
    console.log("Computer:", computerChoice);
    switch (true) {
        // if the round's a tie, do nothing
        case (humanSelection === computerChoice):
            console.log(`It's a tie! Both players chose ${humanSelection}`);
            break;
        // increment human player score if human wins
        case (humanSelection === "rock" && computerChoice === "scissors"):
        case (humanSelection === "paper" && computerChoice === "rock"):
        case (humanSelection === "scissors" && computerChoice === "paper"):
            console.log(`Bravo! ${humanSelection} beats ${computerChoice}. Human wins`);
            humanScore++;  
            break;
        // increment computer score if computer wins
        case (computerChoice === "rock" && humanSelection === "scissors"):
        case (computerChoice === "paper" && humanSelection === "rock"):
        case (computerChoice === "scissors" && humanSelection === "paper"):
            console.log(`Bravo! ${computerChoice} beats ${humanSelection}. Computer wins`);
            computerScore++;  
            break;
        // if the code block below runs, it means there's a flaw in the game logic above. DEBUG!!!
        default:
            console.log("Something's wrong. This line isn't supposed to execute.");
    }

    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
}