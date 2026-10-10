console.log("Hello World");

const tie = "tie";
const humanWin = "humanWin";
const computerWin = "computerWin";

//get computer choice
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);

    //return rock, paper, or scissors
    return num === 1 ? "rock" : 
        num === 2 ? "paper" : 
        "scissors";
}

// get human choice
function getHumanChoice(){
    let choice = prompt("Pick rock, paper, or scissors");

    //verify human choice
    while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "scissors" && choice.toLowerCase() !== "paper"){
        choice = prompt("Please choose a valid choice : rock, paper, or scissors EXACTLY AS WRITTEN");
    }

    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let win = "You won this round! " + humanChoice + " beats " + computerChoice;
    let lose = "You lost this round! " + computerChoice + " beats " + humanChoice;

    if(humanChoice === computerChoice) {
        console.log("This round is a tie! You both picked " + computerChoice);
        return tie;
    } 

    if(humanChoice === "rock") {
        if(computerChoice === "scissors") {
            console.log(win);
            return humanWin;
        } else {
            // computer equals paper
            console.log(lose);
            return computerWin;
        }
    } 

    if(humanChoice === "scissors") {
        if(computerChoice === "paper") {
            console.log(win);
            return humanWin;
        } else {
            // computer equals rock
            console.log(lose);
            return computerWin;
        }
    }

    if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            console.log(win);
            return humanWin;
        } else {
            // computer equals scissors
            console.log(lose);
            return computerWin;
        }
    }
}

// play the game 5 times
function playGame() {

    // score for both players
    let humanScore = 0;
    let computerScore = 0;
    for(let round = 1; round < 6; round++){
        let winner = playRound(getHumanChoice(), getComputerChoice())

        winner === humanWin ? humanScore += 1 
            : winner === computerWin ? computerScore += 1 
            : null
    }
    
    humanScore > computerScore ? console.log("You won with " + humanScore + "pts") 
        : computerScore > humanScore ? console.log("Computer won with " + computerScore + "pts")
        : console.log("It's a tie! You both have " + humanScore + "pts")

}

playGame();