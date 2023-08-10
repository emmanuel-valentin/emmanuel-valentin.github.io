import AOS from 'aos';
import 'normalize.css';
import 'aos/dist/aos.css';
import './style.css';

const toogleButtonElement = document.querySelector('#btn-nav');
const navElement = document.querySelector('#nav');

const setIsNavVisible = (event) => {
  let isNavVisible = !navElement.classList.contains('d-none');
  isNavVisible
    ? (toogleButtonElement.innerHTML =
        '<img src="./assets/icons/menu.svg" alt="Menu icon" width="20" height="23.8" />')
    : (toogleButtonElement.innerHTML =
        '<img src="./assets/icons/close.svg" alt="Close icon" width="20" height="23.8" />');

  navElement.classList.toggle('d-none');

  isNavVisible = !isNavVisible;
};

toogleButtonElement.addEventListener('click', setIsNavVisible);
navElement.addEventListener('click', setIsNavVisible);

AOS.init();
