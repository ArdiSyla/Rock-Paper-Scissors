function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.30) {
        return "rock";
    } else if (randomNum < 0.60) {
        return "paper";
    }else {
        return "scissors";
    }
    
}

const ComputerChoice = getComputerChoice();
console.log("Computer chose:", ComputerChoice);


function getHumanChoice() {
    const userChoice = prompt("Enter your choice(rock, paper or scissors):");
    if  (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    }else {
        console.log("Invalid choice. {Please enter rock, paper or scissors.");
        return null;
    }   
}

const humanChoice = getHumanChoice();
if(humanChoice) {
    console.log("You chose:", humanChoice);

}