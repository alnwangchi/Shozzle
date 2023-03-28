const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});
