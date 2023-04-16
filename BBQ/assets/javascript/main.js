const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                         :header.classList.remove('scroll-header')
}

window.addEventListener('scroll' , scrollHeader)

/*==================== SWIPER ====================*/
var swiper = new Swiper(".featured__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 22,
    coverflowEffect: {
      rotate: 20,
      slideShadows: true,
      depth: 100,
    },
  });
