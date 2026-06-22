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


function playGame(){

    let humanScore = 0;
    let computerScore = 0;


    // play 1 round and increment score depending on who win
    function playRound(humanChoice , computerChoice){
        const human = humanChoice.toLowerCase();
        const computer = computerChoice.toLowerCase();
        if (human === computer){
            console.log("It's a tie! both chosed " + computerChoice + ".")
        }
        else if ((human === "scissor" && computer === "paper") || (human === "rock" && computer === "scissor") || (human === "paper" && computer === "rock")){
            console.log("You won! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        } else { console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++;
        }
    }

    // run loop 5 time and call playRound, getHumanChoice and getComputerChoice each time
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        
        console.log("Your score " + humanScore + ", Computer score " + computerScore);
    }
}

playGame();