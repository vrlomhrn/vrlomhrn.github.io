// Hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');

  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
