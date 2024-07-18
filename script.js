const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.35) {
        return "rock";
    } else if (randomNum < 0.65) {
        return "paper";
    }else {
        return "scissors";
    } 
}


function getHumanChoice(choice) {
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }else {
        resultsDiv.textContent ="Invalid choice";
        return null;
    }   
}




function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = "It's a tie! Both chose " + humanChoice;
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
          resultsDiv.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        return "human"
    } else {
        resultsDiv.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        return "computer";

    }
}


// function playGame() {


//     for (let round = 1; round <= 5; round++) {
//         console.log(`Round ${round}:`);
//         const humanChoice = getHumanChoice();
//         if(humanChoice) {
//             const computerChoice = getComputerChoice();
//             const roundWinner = playRound(humanChoice, computerChoice);

//             if (roundWinner === "human") {
//                 humanScore++;
//             } else if (roundWinner === "computer") {
//                 computerScore++;
//             }
//         } else {
//             console.log("Invalid chice, round skipped.")
//         }
//         console.log("Current Score - Human: " + humanScore + ", Computer: " +computerScore);
//     }




// console.log("Final Score - Human: " + humanScore + ",Computer: " +computerScore);
// if (humanScore > computerScore) {
//     console.log("Congratulations! You are the winner!");
// } else if (humanScore < computerScore) {
//     console.log("Sorry! The computer is the winner.");
// } else {
//     console.log("It's a tie overall!");
// }

// }


//  playGame();