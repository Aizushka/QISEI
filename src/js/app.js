import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const body = document.querySelector('body');
const burgerBtn = document.querySelector('.header__burger');
const nav = document.querySelector('.header__menu');
const burgerLinks = Array.from(document.querySelectorAll('.header__link'));

burgerBtn.addEventListener('click', function(){
  body.classList.toggle('no-scroll');
  burgerBtn.classList.toggle('header__burger_active');
  nav.classList.toggle('header__menu_active');
})

burgerLinks.forEach(element => {
  element.addEventListener('click', function(){
    body.classList.remove('no-scroll');
    burgerBtn.classList.remove('header__burger_active');
    nav.classList.remove('header__menu_active');
  });
});


//  SWIPER 
import swiper from './modules/swiper.js'