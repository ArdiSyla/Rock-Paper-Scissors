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




function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        return "human";
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return "computer";
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        const humanChoice = getHumanChoice();
        if(humanChoice) {
            const computerChoice = getComputerChoice();
            const roundWinner = playRound(humanChoice, computerChoice);

            if (roundWinner === "human") {
                humanScore++;
            } else if (roundWinner === "computer") {
                computerScore++;
            }
        } else {
            console.log("Invalid chice, round skipped.")
        }
        console.log("Current Score - Human: " + humanScore + ", Computer: " +computerScore);
    }




console.log("Final Score - Human: " + humanScore + ",Computer: " +computerScore);
if (humanScore > computerScore) {
    console.log("Congratulations! You are the winner!");
} else if (humanScore < computerScore) {
    console.log("Sorry! The computer is the winner.");
} else {
    console.log("It's a tie overall!");
}

}


 playGame();