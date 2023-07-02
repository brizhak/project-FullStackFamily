let openModalBtn = document.getElementById('openBtn');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelector('.modal-close-btn');

function openModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.body.addEventListener('keyup', function (e) {
  const key = e.keyCode;

  if (key === 27) {
    closeModal();
  }
});
