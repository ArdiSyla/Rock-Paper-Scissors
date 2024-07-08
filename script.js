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


function getHumanChoice() {
    const userChoice = prompt("Enter your choice(rock, paper or scissors):");
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" ||
        userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissors") {
        return userChoice.toLowerCase();
    }else {
        console.log("Invalid choice. {Please enter rock, paper or scissors.");
        return null;
    }   
}




let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    }  else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }

   
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
