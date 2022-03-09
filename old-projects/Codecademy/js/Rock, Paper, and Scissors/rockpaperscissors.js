// JavaScript source code
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || 
  userInput === 'scissors' || userInput === 'bomb') {
    return userInput;} else console.log('ERROR');
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer has won!';
    } else return "The user has won!"
  }
  if (userChoice ==='paper') {
    if (computerChoice ==='scissors') {
      return 'The computer has won!';
    } else return "The user has won!"
  }
  if (userChoice === 'scissors') {
    if (computerChoice ==='rock') {
      return "The computer has won!";
    } else return "The user has won!"
  }
  if (userChoice === 'bomb') return 'The user has won!';
  // god mode
}

const playGame = () => {
  let userChoice = getUserChoice('rock'); // Declaring the userChoice
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice} and the
  computer threw ${computerChoice}!`);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();