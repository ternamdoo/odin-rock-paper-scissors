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
    return choice;
};
console.log(getHumanChoice());