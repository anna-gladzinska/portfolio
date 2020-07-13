const menu = document.querySelector('.dropdown');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function () {
  menu.classList.toggle('dropdown-show');
})
menu.addEventListener('click', function () {
  menu.classList.remove('dropdown-show');
})

const nav = document.querySelector('nav');
console.log(nav.scrollTop);

document.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 0) {
    nav.classList.add('nav-bg');
  } else {
    nav.classList.remove('nav-bg');
  }
});