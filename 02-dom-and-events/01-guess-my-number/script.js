'use strict';
/*
console.log(document.querySelector('.message'));

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;

console.log((document.querySelector('.guess').value = 20));
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMessage('🎉 Correct number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     // document.querySelector('.message').textContent = '📈 Too high!';
  //     displayMessage('📈 Too high!');

  //     // score = score -1
  //     score--;

  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     // document.querySelector('.message').textContent = '💥 You lost the game!';
  //     displayMessage('💥 You lost the game!');
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';

  //     // score = score -1
  //     score--;

  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
