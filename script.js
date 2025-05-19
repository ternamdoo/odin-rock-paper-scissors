const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");

// get player choices and play a single round
const humanOptions = document.querySelectorAll("button");
humanOptions.forEach((option) => {
    option.addEventListener("click", () => {
        let humanSelection = option.textContent.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })
});

// randomly pick computer choice from an array of options
function getComputerChoice() {
    const validGameChoices = ["rock", "paper", "scissors"];
    const computerChoice = validGameChoices[Math.floor(Math.random() * validGameChoices.length)];
    return computerChoice;
}

// logic to play one round
function playRound(humanSelection, computerSelection) {
    const roundInfo = document.querySelector(".game-log");
    const announceRoundWinner = document.createElement("p");

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
            humanScore.textContent = Number(humanScore.textContent) + 1;
            break;
        // increment computer score if computer wins
        case (computerSelection === "rock" && humanSelection === "scissors"):
        case (computerSelection === "paper" && humanSelection === "rock"):
        case (computerSelection === "scissors" && humanSelection === "paper"):
            announceRoundWinner.textContent = `Bravo! ${computerSelection} beats ${humanSelection}. Computer wins`;
            computerScore.textContent = Number(computerScore.textContent) + 1;
                break;
        // if the code block below runs, it means there's a flaw in the game logic above. DEBUG!!!
        default:
            announceRoundWinner.textContent = "Something's wrong. This line isn't supposed to execute.";
    }
    roundInfo.appendChild(announceRoundWinner);
    checkWinner();
}

// define the winning score
const WINNING_SCORE = 5;

// function to check for a winner after each round
function checkWinner() {
    const currentHumanScore = Number(humanScore.textContent);
    const currentComputerScore = Number(computerScore.textContent);

    if (currentHumanScore === WINNING_SCORE) {
        endGame("Human");
    } else if (currentComputerScore === WINNING_SCORE) {
        endGame("Computer");
    }
}

// function to handle game end
function endGame(winner) {
    // create a container for game end messages if it doesn't exist
    let gameEndMessageArea = document.querySelector("#game-end-area");
    if (!gameEndMessageArea) {
        gameEndMessageArea = document.createElement("div");
        gameEndMessageArea.setAttribute("id", "game-end-area");
        document.body.appendChild(gameEndMessageArea);
    }
    // announce the winner
    const winnerMessage = document.createElement("h2");
    winnerMessage.textContent = `${winner} wins the game! Final Score - Human: ${humanScore.textContent}, Computer: ${computerScore.textContent}`;
    gameEndMessageArea.appendChild(winnerMessage);

    // disable Rock, Paper, Scissors buttons
    humanOptions.forEach(button => {
        button.disabled = true;
    });

    // add a restart button
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Game";
    restartButton.setAttribute("id", "restart-button"); // Added an ID for potential styling/selection
    restartButton.addEventListener("click", restartGame);
    gameEndMessageArea.appendChild(restartButton);
}