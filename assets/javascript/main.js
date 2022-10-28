/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

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

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

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
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true, 
})

sr.reveal(`.home__greeting, .home__name, .home__education, .skills__content, .work__card`,{
  origin: 'top',
  interval: 100,
})

sr.reveal(`.nav__list, .home__buttons, .home__handle, .home__img,
            .section__title, .section__subtitle`,{
  origin: 'bottom',
  interval: 100
})

sr.reveal(`.home__social-link, .home__social, .box-one`,{
  origin: 'left',
  interval: 100
})

sr.reveal(`.home__scroll, .box-two`,{
  origin: 'right'
})

/*=============== Email Send ============================*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')
      const sendEmail =(e) =>{
        e.preventDefault()
      
        //Check if the field has a value
        if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
          //Add and remove color
          contactMessage.classList.remove('color-blue')
          contactMessage.classList.add('color-red')
      
          // Show message
          contactMessage.textContent = 'Write all the input fields ❌'
        }else{
          emailjs.sendForm('service_j6vt0nw','template_60qrmmg','#contact-form','dXFPVcmf0brUMMXAc')
              .then(() =>{
                // Show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message Sent ✅'
                alert('Message Sent! I will be in contact soon :)')
      
                //Remove message after five seconds
                setTimeout(() =>{
                  contactMessage.textContent = ''
                }, 5000)
              }, (error) =>{
                alert('OOPS! SOMETHING HAS FAILED...', error)
              })
      
              //To clear the input field
              contactName.value = ''
              contactEmail.value = ''
              contactProject.value = ''
        }
      }
      contactForm.addEventListener('submit', sendEmail)