const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  menu.classList.toggle('is-active');

  // menu 展開時禁止滾動
  if (body.style.overflow === 'hidden') {
    body.style.overflow = '';
  } else {
    body.style.overflow = 'hidden';
  }
});
