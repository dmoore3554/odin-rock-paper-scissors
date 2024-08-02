function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Invalid option! Try again.");
        choice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    }
    return choice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(computerChoice, humanChoice) {
        if (computerChoice === humanChoice) {
            console.log("It's a tie!");
            return "tie";
        } else if (computerChoice === "rock") {
            if (humanChoice === "paper") {
                console.log("You win! Paper beats Rock!");
                return "win";
            } else {
                console.log("You lose! Rock beats Scissors!");
                return "loss";
            }
        } else if (computerChoice === "paper") {
            if (humanChoice === "scissors") {
                console.log("You win! Scissors beat Paper!");
                return "win";
            } else {
                console.log("You lose! Paper beats Rock!");
                return "loss";
            }
        } else if (computerChoice === "scissors") {
            if (humanChoice === "rock") {
                console.log("You win! Rock beat Scissors!");
                return "win";
            } else {
                console.log("You lose! Scissors beats Paper!");
                return "loss";
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        let result = playRound(computerChoice, humanChoice);

        if (result === "win") {
            humanScore++;
        } else if (result === "loss") {
            computerScore++;
        }
    }

    console.log(`You won ${humanScore} round(s), and the computer won ${computerScore} round(s).`);
    if (humanScore > computerScore) {
        console.log("You win overall!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins overall. :'(")
    } else {
        console.log("It's a tie overall.");
    }
}

playGame();
