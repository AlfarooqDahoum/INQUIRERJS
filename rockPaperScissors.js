import inquirer from "inquirer";

// Function to get the user's choice

function getUserChoice() {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Choose Rock, Paper, or Scissors:',
        choices: ['Rock', 'Paper', 'Scissors'],
      },
    ])
    .then((answers) => answers.choice);
}


// Function to get the computer's choice

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


// Function to determine the winner

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }

  if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}


// Main game function

async function playGame() {
  let playAgain = true;

  while (playAgain) {
    const userChoice = await getUserChoice();
    const computerChoice = getComputerChoice();

    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const result = determineWinner(userChoice, computerChoice);
    console.log(result);

    // Ask if the player wants to play again
    const { playAgainAnswer } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'playAgainAnswer',
        message: 'Do you want to play again?',
        default: true,
      },
    ]);

    playAgain = playAgainAnswer;
  }

  console.log('Thanks for playing!');
}

// Start the game
playGame();