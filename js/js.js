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


function playRound(hChoice, cChoice) {

    if (hChoice == "Invalid") {
        console.log("Invalid choice!");                      // Invalid promt input

    } else if (hChoice == "Rock" && cChoice == "Scissors") { // Human wins
        console.log(`You pick: ${hChoice}`);
        console.log(`PC picks: ${cChoice}`);
        console.log("Rock beats scissors, you win.");
        humanScore += 1;

    } else if (hChoice == "Paper" && cChoice == "Rock") {
        console.log(`You pick: ${hChoice}`);
        console.log(`PC picks: ${cChoice}`);
        console.log("Paper beats Rock, you win.");
        humanScore += 1;

    } else if (hChoice == "Scissors" && cChoice == "Paper") {
        console.log(`You pick: ${hChoice}`);
        console.log(`PC picks: ${cChoice}`);
        console.log("Scissors beats paper, you win.");
        humanScore += 1;
 
    } else if (cChoice == "Rock" && hChoice == "Scissors") { // PC Wins
        console.log(`You pick: ${hChoice}`);
        console.log(`PC picks: ${cChoice}`);
        console.log("Rock beats scissors, PC wins.");
        computerScore += 1;

    } else if (cChoice == "Paper" && hChoice == "Rock") {
        console.log(`You pick: ${hChoice}`);
        console.log(`PC picks: ${cChoice}`);
        console.log("Paper beats Rock, PC wins.");
        computerScore += 1;

    } else if (cChoice == "Scissors" && hChoice == "Paper") {
        console.log(`You pick: ${hChoice}`);
        console.log(`PC picks: ${cChoice}`);
        console.log("Scissors beats paper, PC wins.");
        computerScore += 1;

    } else if (hChoice == cChoice) {                         // Tie
        console.log(`You pick: ${hChoice}`);
        console.log(`PC picks: ${cChoice}`);
        console.log("Tie.");
 
    }
    
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`PC score: ${computerScore}`);

    if (humanScore > computerScore) {        // Human wins
        console.log("You win!");
    } else if (humanScore < computerScore) { // PC wins
        console.log("PC wins!");
    } else {                                 // Tie
        console.log("Tie!");
    }

}

playGame()