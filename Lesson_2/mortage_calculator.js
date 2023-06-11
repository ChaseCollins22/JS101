let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getMonthlyPayment (loanAmount, interestRate, loanDuration) {
  return (loanAmount *
    (interestRate / (1 - Math.pow((1 + interestRate), (-loanDuration)))))
    .toFixed(2);
}

function invalidNumber (input) {
  return Number.isNaN(Number(input)) || Number(input) < 0;
}

let anotherLoan;
prompt('Welcome to Mortage Calculator 1.0');

do {
  // Get loan amount
  prompt('Enter your loan amount: ');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Please enter a valid loan amount');
    loanAmount = readline.question();
  }

  // Get APR
  prompt('Enter the APR in _% format: ');
  let interestRate = readline.question();

  while (invalidNumber(interestRate)) {
    prompt('Please enter a valid interest rate');
    interestRate = readline.question();
  }

  // Convert annual interest rate to monthly interest rate
  interestRate = (Number(interestRate) / 100) / 12;

  // Get loan duration
  prompt('Enter the loan duration (years): ');
  let loanDuration = readline.question();

  while (invalidNumber(loanDuration)) {
    prompt('Please enter a valid loan duration');
    loanDuration = readline.question();
  }

  // Convert loan duration from years to months
  loanDuration *= 12;

  prompt(`Your monthly payment is $${getMonthlyPayment(loanAmount, interestRate, loanDuration)}`);
  prompt('Would you like to enter another loan? (y/n)');
  anotherLoan = readline.question() === 'y';

} while (anotherLoan);

