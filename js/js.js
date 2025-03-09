// Global variables
let humanScore = 0;
let computerScore = 0;

// Determine and return computer's choice.
function getComputerChoice() {

    let percentage = Math.random();

    if (percentage < 1/3) {
        return "Rock";
    } else if (percentage < 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

// Prompt and return human choice.
function getHumanChoice() {
    
    let humanChoice = prompt("Choice: ", "");

    if (humanChoice.toUpperCase() == "ROCK") {
        return "Rock";
    } else if (humanChoice.toUpperCase() == "PAPER") {
        return "Paper";
    } else if (humanChoice.toUpperCase() == "SCISSORS") {
        return "Scissors";
    } else {
        return "Invalid"; // Brug denne til at gøre runden uafgjort og propmte igen i playRound funktion
    }

}

function updatescore() {
    
    const scoreText = document.querySelector("#scores");
    scoreText.textContent = `Player score: ${humanScore} | PC score: ${computerScore}`;

}

function playRound(hChoice, cChoice) {

    const text = document.querySelector("#round");

    if (hChoice == "Rock" && cChoice == "Scissors") { // Human wins

        text.textContent = "You picked rock | PC picked scissors | You win!";
        humanScore++

    } else if (hChoice == "Paper" && cChoice == "Rock") {

        text.textContent = "You picked paper | PC picked rock | You win!";
        humanScore++

    } else if (hChoice == "Scissors" && cChoice == "Paper") {

        text.textContent = "You picked scissors | PC picked paper | You win!";
        humanScore++
 
    } else if (cChoice == "Rock" && hChoice == "Scissors") { // PC Wins

        text.textContent = "You picked scissors | PC picked rock | PC wins!";
        computerScore++

    } else if (cChoice == "Paper" && hChoice == "Rock") {

        text.textContent = "You picked rock | PC picked paper | PC wins!";
        computerScore++

    } else if (cChoice == "Scissors" && hChoice == "Paper") {

        text.textContent = "You picked paper | PC picked scissors | PC wins!";
        computerScore++

    } else if (hChoice == cChoice) {                         // Tie

        text.textContent = `You picked ${hChoice} | PC picked ${cChoice} | Tie!`;
 
    }

    updatescore();

    if (humanScore === 5) {
        const winnerText = document.querySelector("#winner");
        winnerText.textContent = "You win! Reload page to play again.";
    }

    if (computerScore === 5) {
        const winnerText = document.querySelector("#winner");
        winnerText.textContent = "PC wins! Reload page to play again.";
    }
    
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound( "Rock", getComputerChoice() );
});

paper.addEventListener("click", () => {
    playRound( "Paper", getComputerChoice() );
});

scissors.addEventListener("click", () => {
    playRound( "Scissors", getComputerChoice() );
});
