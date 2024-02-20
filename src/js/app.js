import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper/bundle';

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

const tabs = document.querySelectorAll('.lab-tab');
const descr = document.querySelector('.lab-description');
const labWrapper = document.querySelector('.lab-descr-wrapper');
const labBg = labWrapper.querySelector('#lab-bg');
const picture = labWrapper.querySelector('source');
import { labsInfo } from './modules/labs-info.js';

tabs.forEach(tab => {
  tab.addEventListener('click', function(e){
    let pressedTab = e.currentTarget; 
    tabs.forEach( el => el.classList.remove('lab-tab-active'));
    tab.classList.add('lab-tab-active');
    for (let lab of labsInfo ) {
      if ( lab.labName == e.currentTarget.querySelector('h4').innerHTML.trim()) {
        descr.innerHTML = lab.labDescription;
        labBg.src = lab.bgPng;
        picture.srcset = lab.bgWebp;
      }
    };
  })
});


// SWIPERS 
import { swiperMain } from './modules/slider-main.js';

let sliderLabNav = new Swiper('.slider-lab-nav', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

let sliderLab = new Swiper('.slider-lab-main', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-lab-button-next",
    prevEl: ".swiper-lab-button-prev",
  },
  thumbs: {
    swiper: sliderLabNav,
  },
});
