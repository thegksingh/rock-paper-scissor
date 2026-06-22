const options = ["Rock", "Paper", "Scissor"];


let humanScore = 0;

let computerScore = 0;


// return random choice for computer from option array
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    return computerChoice;
}  


// prompt user for input and return it
function getHumanChoice(){
    const humanChoice = prompt("Whats your choice ?");
    return humanChoice;
}
