const options = ["Rock", "Paper", "Scissor"];


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


    let humanScore = 0;
    let computerScore = 0;

// play 1 round and increment score depending on who win
function playRound(humanChoice , computerChoice){
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    if (human === computer){
        gameResult.textContent = "It's a tie! both chosed " + computerChoice + ".";
    } else if ((human === "scissor" && computer === "paper") || (human === "rock" && computer === "scissor") || (human === "paper" && computer === "rock")){
        gameResult.textContent = "You won! " + humanChoice + " beats " + computerChoice + ".";
        humanScore++;
    } else { gameResult.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        computerScore++;
        }
}

const selectedRock = document.querySelector(".rock");
const selectedPaper = document.querySelector(".paper");
const selectedScissor = document.querySelector(".scissor");

const gameResult= document.querySelector(".game-result")


selectedRock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

selectedPaper.addEventListener("click", ()=> {
    playRound("Paper", getComputerChoice());
});

selectedScissor.addEventListener("click", () => {
    playRound("Scissor", getComputerChoice());
});


