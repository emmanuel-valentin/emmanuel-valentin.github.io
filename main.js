import AOS from 'aos';
import 'normalize.css';
import 'aos/dist/aos.css';
import './style.css';

const toogleButtonElement = document.querySelector('#btn-nav');
const navElement = document.querySelector('#nav');

const setIsNavVisible = (event) => {
  console.log(event.target);
  let isNavVisible = !navElement.classList.contains('d-none');
  isNavVisible
    ? (toogleButtonElement.innerHTML =
        '<img src="./src/assets/icons/menu.svg" alt="Menu icon" width="20" height="23.8" />')
    : (toogleButtonElement.innerHTML =
        '<img src="./src/assets/icons/close.svg" alt="Close icon" width="20" height="23.8" />');

  navElement.classList.toggle('d-none');

  isNavVisible = !isNavVisible;
};

toogleButtonElement.addEventListener('click', setIsNavVisible);

// Esconde el nav cuando se hace click en algún enlace
navElement.addEventListener('click', setIsNavVisible);

AOS.init();
