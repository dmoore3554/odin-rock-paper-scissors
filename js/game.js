function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Invalid option! Try again.");
        choice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    }
    return choice.at(0).toUpperCase() + choice.slice(1);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === humanChoice) {
            console.log("It's a tie!");
            return "tie";
        } else if (
            (computerChoice === "Rock" && humanChoice === "Paper") ||
            (computerChoice === "Paper" && humanChoice === "Scissors") ||
            (computerChoice === "Scissors" && humanChoice === "Rock")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            return "win";
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            return "loss";
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

    console.log(
        `You won ${humanScore} round(s), and the computer won ${computerScore} round(s).`
    );
    if (humanScore > computerScore) {
        console.log("You win overall!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins overall. :'(");
    } else {
        console.log("It's a tie overall.");
    }
}

playGame();
