/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header')

    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER ====================*/
var swiper = new Swiper(".work__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 20,
    },
  });


/*==================== HOME IMAGE SCALE ====================*/
function resize(){
    const image = document.getElementById('home-img')

    if(this.scrollY >= 1) image.classList.add('home-scale'); else image.classList.remove('home-scale')
}

window.addEventListener('scroll', resize)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.card__container', {
    selectors: {
        target: '.card__content'
    },
    animation: {
        duration: 300
    }
  });
  
  /* Link active featured */ 
  const linkFeatured = document.querySelectorAll('card__item')
  
  function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
  }
  
  linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('client-name'),
      contactPhone = document.getElementById('client-phone'),
      contactVehical = document.getElementById('vehical-type'),
      contactServices = document.getElementById('message'),
      message = document.getElementById('contact-message')

      const sendEmail =(e) =>{
        e.preventDefault()
      
        //Check if the field has a value
        if(contactName.value === '' || contactPhone.value === '' || contactVehical.value === '' || contactServices.value === ''){
          //Add and remove color
          message.classList.remove('color-blue')
          message.classList.add('color-red')
      
          // Show message
          message.textContent = 'Write all the input fields ❌'
        }else{
          emailjs.sendForm('service_j6vt0nw','template_bbig5tq','#contact-form','dXFPVcmf0brUMMXAc')
              .then(() =>{
                // Show message and add color
                message.classList.add('color-blue')
                message.textContent = 'Message Sent ✅'
                alert('Message sent succesfully, we will be in touch shortly !')
      
                //Remove message after five seconds
                setTimeout(() =>{
                  message.textContent = ''
                }, 5000)
              }, (error) =>{
                alert('OOPS! SOMETHING HAS FAILED...', error)
              })
      
              //To clear the input field
              contactName.value = ''
              contactPhone.value = ''
              contactVehical.value = ''
              contactServices.value = ''
        }
      }
      contactForm.addEventListener('submit', sendEmail)