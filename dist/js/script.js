// Hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Navbar Fixed
window.onscroll = (e) => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.getElementById('to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.add('hidden');
  }

  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
};

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Dark mode toggle

const darkToggle = document.getElementById('dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// move toggle position with current mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
