// Select DOM Items
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuNav = document.querySelector('.menu-nav');
let menuBranding = document.querySelector('.menu-branding');
let navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    showMenu = false;
  }
}
