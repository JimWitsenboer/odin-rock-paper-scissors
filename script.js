const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
  // get random index value
  const randomIndex = Math.floor(Math.random() * 3);

  // get random item
  const item = choices[randomIndex];

  return item;
}

gameChoice = getComputerChoice();
console.log(gameChoice);

function playRound(playerSelection, computerSelection) {
  let computerScore = 0;
  let playerScore = 0;
  if (playerSelection == computerSelection) {
   message = "Same choice! Draw!"
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    message = `You lose! ${computerSelection} beats ${playerSelection}!`
  } else {
    message = `You Win! ${playerSelection} beats ${computerSelection}!`
  }
  return message;
}


function game() {
  let incrementPlayerScore = 0;
  let incrementComputerScore = 0;

  for (let amountOfGames = 0; amountOfGames < 5; amountOfGames++) {
    const playerSelection = prompt("What is your choice?");
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes("Win")) {
      incrementPlayerScore++;
    } else if (roundResult.includes("lose")) {
      incrementComputerScore++;
    }

    console.log(roundResult);
  }

  return `Player score = ${incrementPlayerScore} and computer score = ${incrementComputerScore}`;
}

console.log(game());
