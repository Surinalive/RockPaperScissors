console.log("Hello World");

const tie = "tie";
const humanWin = "humanWin";
const computerWin = "computerWin";
const youScoreP = document.querySelector("#youScore");
const computerScoreP = document.querySelector("#computerScore");
const roundsP = document.querySelector("#rounds");
const logs = document.querySelector("#logs");


// score for both players -> moved up here for RPS with UI elements
let humanScore = 0;
let computerScore = 0;
let rounds = 0;


//get computer choice
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);

    //return rock, paper, or scissors
    return num === 1 ? "rock" : 
        num === 2 ? "paper" : 
        "scissors";
}

function playGame(humanChoice, computerChoice){

    let result = playRound(humanChoice, computerChoice);
    rounds++;
    
    result == humanWin ? humanScore++ : result == computerWin ? computerScore++ : null;

    youScoreP.textContent = "You: " + humanScore;
    computerScoreP.textContent = "Computer: " + computerScore;
    roundsP.textContent = "Rounds: " + rounds;

    let playAgain = " Pick a selection to play again!";

    if(rounds == 5){
        humanScore > computerScore ? logs.textContent = "You won with " + humanScore + "pts." + playAgain 
         : computerScore > humanScore ? logs.textContent = "Computer won with " + computerScore + "pts." + playAgain
         : logs.textContent = "It's a tie! You both have " + humanScore + "pts." + playAgain;
        rounds = 0;
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let win = "You won this round! Your " + humanChoice + " beats computer's " + computerChoice;
    let lose = "You lost this round! Computer's " + computerChoice + " beats your " + humanChoice;

    if(humanChoice === computerChoice) {
        logs.textContent = "This round is a tie! You both picked " + computerChoice;
        return tie;
    } 

    if(humanChoice === "rock") {
        if(computerChoice === "scissors") {
            logs.textContent = win;
            return humanWin;
        } else {
            // computer equals paper
            logs.textContent = lose;
            return computerWin;
        }
    } 

    if(humanChoice === "scissors") {
        if(computerChoice === "paper") {
            logs.textContent = win;
            return humanWin;
        } else {
            // computer equals rock
            logs.textContent = lose;
            return computerWin;
        }
    }

    if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            logs.textContent = win;
            return humanWin;
        } else {
            // computer equals scissors
            logs.textContent = lose;
            return computerWin;
        }
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function(event) {
    console.log(event, " rock button");
    playGame("rock", getComputerChoice());
});

paperButton.addEventListener("click", function(event) {
    console.log(event, " paper button");
    playGame("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", function(event) {
    console.log(event, " scissors button");
    playGame("scissors", getComputerChoice());
});

// commented out for RPS with UI elements
// get human choice
// function getHumanChoice(){
//     let choice = prompt("Pick rock, paper, or scissors");

//     //verify human choice
//     while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "scissors" && choice.toLowerCase() !== "paper"){
//         choice = prompt("Please choose a valid choice : rock, paper, or scissors EXACTLY AS WRITTEN");
//     }

//     return choice;
// }


// commented out for RPS with UI elements
// // play the game 5 times
// function playGame() {

//     // score for both players
//     let humanScore = 0;
//     let computerScore = 0;
//     for(let round = 1; round < 6; round++){
//         let winner = playRound(getHumanChoice(), getComputerChoice());

//         winner === humanWin ? humanScore += 1 
//             : winner === computerWin ? computerScore += 1 
//             : null
//     }
    
//     humanScore > computerScore ? console.log("You won with " + humanScore + "pts") 
//         : computerScore > humanScore ? console.log("Computer won with " + computerScore + "pts")
//         : console.log("It's a tie! You both have " + humanScore + "pts")

// }

//playGame();
//playRound(getHumanChoice(), getComputerChoice());
