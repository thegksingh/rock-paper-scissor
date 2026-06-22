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


// play 1 round and increament score depending on who win
function playRound(humanChoice , computerChoice){
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    if (human === computer){
        console.log("It's a tie! both chossed " + computerChoice + ".")
    }
    else if ((human === "scissor" && computer === "paper") || (human === "rock" && computer === "scissor") || (human === "paper" && computer === "rock")){
        console.log("You won! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    } else { console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    }
}