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
        gameResult.innerText = "It's a tie! ";
        showChoice(humanChoice, computerChoice);
    } else if ((human === "scissor" && computer === "paper") || (human === "rock" && computer === "scissor") || (human === "paper" && computer === "rock")){
        humanScore++;
        gameResult.innerText = "You won this round! ";
        showChoice(humanChoice, computerChoice);
        updateScore();
        gameOver();
    } else { computerScore++;
        gameResult.innerText = "You lose this round! ";
        showChoice(humanChoice, computerChoice);
        updateScore();
        gameOver();
    }
}

function gameOver(){
    if (humanScore === 5){
        gameResult.innerText = "Game Over! You won."
        resetScore();
    }else if (computerScore === 5){
        gameResult.innerText = "Game Over! You lose."
        resetScore();
    }
}

function resetScore(){
    humanScore = 0;
    computerScore = 0;
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

const displayHumanScore = document.querySelector("#human-score");
const displayComputerScore = document.querySelector("#computer-score");

function updateScore(){
    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
}

const playAgain = document.querySelector(".play-again");

playAgain.addEventListener("click", () => {
    resetScore();
    updateScore();
});


const humanChoiceEmoji = document.querySelector("#user-emoji");
const computerChoiceEmoji = document.querySelector("#computer-emoji")

const choiceEmojis = {
    "Rock": "🪨",
    "Paper": "📄",
    "Scissor": "✂️"
};

function showChoice(humanChoice,computerChoice){
    humanChoiceEmoji.textContent = choiceEmojis[humanChoice];
    computerChoiceEmoji.textContent = choiceEmojis[computerChoice];
}
