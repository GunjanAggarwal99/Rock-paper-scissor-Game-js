// Import stylesheets
import './style.css';

// Write Javascript code!
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_VALUE_CHOICE = ROCK;
let gameIsRunning = false;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

const getPlayerChoice = () => {
  const selection = prompt(
    `Enter your Selection b/w ${ROCK}, ${PAPER} / ${SCISSOR}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(`Invalid choice! we choose ${DEFAULT_VALUE_CHOICE} for You!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_VALUE_CHOICE) => {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSOR) ||
    (cChoice === SCISSOR && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }
  let message = `You picked ${
    playerSelection ? playerSelection : DEFAULT_VALUE_CHOICE
  }, and Computer select ${computerSelection}, therefor`;
  if (winner === RESULT_DRAW) {
    message = message + ' had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ' you win';
  } else {
    message = message + ' you lost';
  }
  alert(message);
  gameIsRunning = false;
});

//Rest Operator
const combine = (resultHandler, operator, ...numbers) => {
  // rest operator is used in the last of the func parameter
  const validateNum = (num) => {
    return isNaN(num) ? 0 : num;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operator === 'ADD') {
      sum += validateNum(num);
    } else {
      sum -= validateNum(num);
    }
  }
  resultHandler(sum);
};

// const subUp = function () {
//   let sub = 0;
//   for (const num of arguments) {
//     // work same as rest operator it is hidden argument defined by js used in Es5
//     sub -= num;
//   }
//   return sub;
// };

const showResult = (messageText, result) => {
  alert(messageText + result);
};

combine(
  showResult.bind(this, 'The sum of numbers are :'),
  'ADD',
  1,
  2,
  3,
  4,
  5,
  'sbns'
);
combine(showResult.bind(this, 'The sum of numbers are :'), 'ADD', 4, 6, 9, 10);
combine(
  showResult.bind(this, 'The subtract of numbers are :'),
  'SUBTRACT',
  1,
  2,
  4,
  5
);
