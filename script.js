function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    }else {
        return "scsissors";
    }
    
}

const ComputerChoice = getComputerChoice();
console.log("Computer chose:", ComputerChoice);