const menu = document.querySelector('.dropdown');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function () {
  menu.classList.toggle('dropdown-show');
})
menu.addEventListener('click', function () {
  menu.classList.remove('dropdown-show');
})

const nav = document.querySelector('nav');
const ul = document.querySelector('.nav-ul');

document.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nav.classList.add('nav-bg');
    ul.classList.add('nav-ul-show');
  } else {
    nav.classList.remove('nav-bg');
    ul.classList.remove('nav-ul-show');
  }
});

const scroll = new SmoothScroll('a[href*="#"]');