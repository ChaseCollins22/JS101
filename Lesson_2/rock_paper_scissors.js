const readline = require('readline-sync');
const messages = require('./rps_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'sc', 'l', 'sp'];
const VALID_CHOICES_DISPLAY = ['rock (r)', 'paper (p)', 'scissors (sc)', 'lizard (l)', 'spock (sp)'];
const ROCK_WINS = ['scissors', 'lizard'];
const PAPER_WINS = ['rock', 'spock'];
const SCISSORS_WINS = ['paper', 'lizard'];
const LIZARD_WINS = ['spock', 'paper'];
const SPOCK_WINS = ['rock', 'scissors'];
const NUM_GAMES_TO_WIN = 3;
let userScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayChampion () {
  console.log();
  if (userScore === NUM_GAMES_TO_WIN) {
    prompt(messages['userIsChampion']);
  } else {
    prompt(messages['computerIsChampion']);
  }
  prompt(`Final Score: User [${userScore}] Computer [${computerScore}]`);
}

function displayWinner (choice, computerChoice, winner) {
  console.log('....................................................');
  console.log();
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (winner === 'User') {
    prompt(messages['userWins']);
  } else if (winner === 'Computer') {
    prompt(messages['computerWins']);
  } else {
    prompt(messages['tie']);
  }
}

function getWinner(choice, computerChoice) {
  switch (true) {
    case choice === ('rock' || 'r') && ROCK_WINS.includes(computerChoice):
    case choice === ('paper' || 'p') && PAPER_WINS.includes(computerChoice):
    case choice === ('scissors' || 'sc') && SCISSORS_WINS.includes(computerChoice):
    case choice === ('lizard' || 'l') && LIZARD_WINS.includes(computerChoice):
    case choice === ('spock' || 'sp') && SPOCK_WINS.includes(computerChoice):
      return 'User';
    case choice === computerChoice:
      return 'Tie';
    default:
      return 'Computer';
  }
}

function incrementScore (winner) {
  if (winner === 'User') {
    userScore += 1;
  } else if (winner === 'Computer') {
    computerScore += 1;
  }
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
}

while (true) {
  console.clear();
  prompt(`Choose one: ${VALID_CHOICES_DISPLAY.join(', ')}          Score: User [${userScore}] Computer [${computerScore}]`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(messages['userChoiceInvalid']);
    choice = readline.question();
  }

  let computerChoice = getComputerChoice();
  let winner = getWinner(choice, computerChoice);
  displayWinner(choice, computerChoice, winner);
  incrementScore(winner);

  if (userScore === NUM_GAMES_TO_WIN || computerScore === NUM_GAMES_TO_WIN) {
    displayChampion();
    break;
  }

  console.log();
  prompt(messages['playAgain']);
  let playAgain = readline.question().toLowerCase();

  while (playAgain[0] !== 'n' && playAgain[0] !== 'y') {
    prompt(messages['playAgainInvalid']);
    playAgain = readline.question().toLowerCase();
  }
}




let playAgain = 'y';

while (playAgain === 'y' && userScore < 3 && computerScore < 3) {
  console.clear();
  prompt(`Choose one: ${VALID_CHOICES_DISPLAY.join(', ')}          Score: User [${userScore}] Computer [${computerScore}]`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(messages['userChoiceInvalid']);
    choice = readline.question();
  }

  let computerChoice = getComputerChoice();
  let winner = getWinner(choice, computerChoice);
  displayWinner(choice, computerChoice, winner);
  incrementScore(winner);

  if (userScore < NUM_GAMES_TO_WIN && computerScore < NUM_GAMES_TO_WIN) {
    console.log();
    prompt(messages['playAgain']);
    let playAgain = readline.question().toLowerCase();

    while (playAgain[0] !== 'n' && playAgain[0] !== 'y') {
      prompt(messages['playAgainInvalid']);
      playAgain = readline.question().toLowerCase();
    }
  } else {
    displayChampion();
  }
}


