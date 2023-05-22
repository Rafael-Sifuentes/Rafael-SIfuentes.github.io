/*==================== SWIPER ====================*/
var swiper = new Swiper(".featured__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },
    spaceBetween: 22,
    coverflowEffect: {
      rotate: 20,
      slideShadows: true,
      depth: 100,
    },

    
  });


/*=============== POLICY MODAL ===============*/
const modalViews = document.querySelectorAll('.policy__modal'),
      modalBtns = document.querySelectorAll('.home__policy'),
      modalClose = document.querySelectorAll('.policy__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})