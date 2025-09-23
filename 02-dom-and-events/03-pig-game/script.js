'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score0El.textContent = 5;
score1El.textContent = 10;

diceEl.classList.add('hidden');

let currentScore = 0;

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');

  console.log(dice, diceEl.src);

  diceEl.src = `dice-${dice}.png`;

  console.log(diceEl.src);

  if (dice !== 1) {
    currentScore += dice;

    console.log(currentScore);

    current0El.textContent = currentScore;
  }
});
