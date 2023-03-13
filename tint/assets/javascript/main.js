/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
  
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        :header.classList.remove('scroll-header')
  }
  
  window.addEventListener('scroll' , scrollHeader)



/*==================== SWIPER ====================*/
var swiperPrev = new Swiper(".prev__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== QUESTIONS OPEN / CLOSE ===============*/

const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
  const accordionHeader = item.querySelector('.questions__header')

  accordionHeader.addEventListener('click', () =>{
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem!== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.questions__content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
})

sr.reveal(`.home__title, .home__subtitle`,{
  origin: 'top',
  interval: 100,
})

sr.reveal(`.nav__link, .section__subtitle, .section__title, .home__description, .social__group, .home__img,
            .questions__item, .about__img`, {
  origin: 'bottom',
  interval: 100
})

sr.reveal(`.nav__logo, .home__cta, .line, .contact__subtitle`, {
  origin: 'left',
  interval: 100
})

sr.reveal(`.about__details-description, .contact__description`,{
  origin: 'right',
  interval: 200
})