
// --------------swiper---------------

let swiper; 

function swiperStart() {
   swiper = new Swiper('.slider', {
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 16,
      setWrapperSize: true,
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: true,
      }
   });
}


function changes(screen) {
   if (!screen.matches) {
      swiperStart();
   } else if (swiper !== undefined) {
      swiper.destroy();
   }
}


let screen = window.matchMedia('(min-width: 768px)');
screen.addListener(changes);
changes(screen);

//----------------btn--------------------------------------------

let btn = document.querySelector('.brands-btn');
let wrapper = document.querySelector('.brand-menu__wrapper');
let spanBtn = document.querySelector('.brands-btn > span');

btn.addEventListener('click', function () {
   if (!wrapper.classList.contains('brand-menu__wrapper--open')) {
      wrapper.classList.remove('brand-menu__wrapper--close');
      wrapper.classList.add('brand-menu__wrapper--open');
      btn.classList.add('brands-btn__close');
      spanBtn.textContent = 'Скрыть';
   } else {
      wrapper.classList.remove('brand-menu__wrapper--open');
      wrapper.classList.add('brand-menu__wrapper--close');
      btn.classList.remove('brands-btn__close')
      spanBtn.textContent = 'Показать все';
   }

});
















