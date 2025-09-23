'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 5;
score1El.textContent = 10;

diceEl.classList.add('hidden');
