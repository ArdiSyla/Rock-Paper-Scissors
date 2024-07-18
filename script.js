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

// Function to update the score on the page
function updateScore() {
    scoreDiv.textContent= "Human: " + humanScore + ", Computer: " + computerScore;
}


function handleButtonClick(choice) {
    const humanChoice = getHumanChoice(choice);
    if(humanChoice) {
        const computerChoice = getComputerChoice();
        const roundWinner = playRound(humanChoice, computerChoice);

        if(roundWinner === "human") {
            humanScore++;
        } else if (roundWinner === "computer"); {
            computerScore++;
        }

        updateScore();

        if (humanScore >= 5) {
            resultsDiv.textContent = "Congratulations! You are the winner!";
            // Disable buttons after the game ends
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        } else if (computerScore >= 5) {
            resultsDiv.textContent = "Sorry! The computer is the winner.";
            // Disable buttons after the game ends
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }

    }
}