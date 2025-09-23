'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].textContent);

  btnShowModal[i].addEventListener('click', function () {
    console.log('Button Clicked');

    console.log(modal.classList);

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e);
  console.log(!modal.classList.contains('hidden'));

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Keypress Event');
    console.log(!modal.classList.contains('hidden'));

    closeModal();
  }
});
