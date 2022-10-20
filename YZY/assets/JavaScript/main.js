/*===== MENU SHOW =====*/ 
const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   	const scrollY = window.pageYOffset

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

// 		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link')
// 		}else{
// 			sectionsClass.classList.remove('active-link')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)

/*===== CHANGE COLOR HEADER =====*/
window.onscroll = () =>{
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

// Scroll Reveal 

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
  })

  sr.reveal(`.home__sneaker, .new__sneaker`,{
    origin: 'top'
  })
  
  sr.reveal(`.right`,{
    origin: 'right',
    interval: 100,
  })
  
  sr.reveal(`.home__new, .home__title, .home__description, .left, .new__mens`,{
    origin: 'left',
    interval: 150
  })
  
  sr.reveal(`.home__shape, .button, .sneaker`,{
    origin: 'bottom',
    interval: 100
  })