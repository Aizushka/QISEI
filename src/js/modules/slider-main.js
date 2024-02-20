
import Swiper from 'swiper/bundle';

export const swiperMain = new Swiper('.swiper-main', {
  // Optional parameters
  loop: true,
  speed: 1000,
  keyboard: {
    enable: true,
  },
  // parallax: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-sbutton-prev',
  }
});