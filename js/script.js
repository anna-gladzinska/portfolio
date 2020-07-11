const menu = document.querySelector('.dropdown');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function () {
  menu.classList.toggle('dropdown-show');
})
menu.addEventListener('click', function () {
  menu.classList.remove('dropdown-show');
})