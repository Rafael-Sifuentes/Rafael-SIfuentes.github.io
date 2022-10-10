/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('scroll-header')
                      :header.classList.remove('scroll-header')
}

window.addEventListener('scroll' , scrollHeader)

/*=============== SWIPER PRODUCTS ===============*/
let swiperCards = new Swiper(".gallery-cards", {
        loop: true,
        loopedSlides: 4,
        cssMode: true,
        effect: 'fade',
});

let swiperThumbs = new Swiper(".gallery-thumbs", {
        loop: true,
        loopedSlides: 4,
        slidesPerView: 3,
        centeredSlides: true,
        slideToClickedSlide: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});


swiperThumbs.controller.control = swiperCards;
/*=============== MIXITUP FILTERS ===============*/
let container = document.querySelector('.products__content')
var mixer;

if(container){
  mixer = mixitup('.products__content', {
    selectors: {
      target: '.products__card'
    },
    animation: {
      duration: 300
    }
  })
}

const linkProducts = document.querySelectorAll('products__item')

function activeProduct(){
  linkProducts.forEach(l=> l.classList.remove(active-featured))
  this.classList.add('products__line')

  linkProducts.forEach(l=> l.addEventListener('click', activeFeatured))
}

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

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	            this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
})

sr.reveal(`.home__data`,{
  origin: 'top'
})

sr.reveal(`.img1`,{
  origin: 'right',
  interval: 100,
})

sr.reveal(`.img2`,{
  origin: 'left',
  interval: 150
})

sr.reveal(`.nav__item`,{
  origin: 'bottom',
  interval: 100
})
/*=============== SEND EMAIL ===============*/
function sendEmail(){

  Email.send({
      Host : "smtp.yourisp.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}