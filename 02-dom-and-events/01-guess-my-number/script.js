'use strict';
/*
console.log(document.querySelector('.message'));

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;

console.log((document.querySelector('.guess').value = 20));
*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  }
});
