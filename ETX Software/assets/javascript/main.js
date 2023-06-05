const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                         :header.classList.remove('scroll-header')
}

window.addEventListener('scroll' , scrollHeader)

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



/*==================== SWIPER ====================*/
var swiper = new Swiper(".work__container", {

  
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    spaceBetween: 22,
    coverflowEffect: {
      rotate: 20,
      slideShadows: true,
      depth: 100,
    },

    breakpoints:{
      700: {
        slidesPerView: 2,
        spaceBetween: 20,

        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      },
    }

    
  });


/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
  distance: '80px',
  duration: 2800,
  // reset: true,
})

sr.reveal(`.section__title, .about__icon`,{
  origin: 'top',
})

sr.reveal(`.description, .about__img`,{
  origin: 'bottom',
})

sr.reveal(`.home__subtitle, .modal__title, .contact__bkgr, .wrapper-1`,{
  origin: 'left',
})

sr.reveal(`.socials, .projects__bkgr, .portal__bkgr`,{
  origin: 'right',
})

// Define the username-password and HTML file path mappings
var userCredentials = {
  admin1: {
    password: "El mendigo",
    htmlFile: "assets/dash.html"
  },

  user2: {
    password: "pass2",
    htmlFile: "dash.html"
  },

  user3: {
      password: "pass3",
      htmlFile: "dash.html"
    },
  // Add more username-password mappings as needed
};

function authenticateUser(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve username and password from the form
  var username = document.getElementById("id").value;
  var password = document.getElementById("password").value;

  // Check if the entered credentials exist in the userCredentials object
  if (username in userCredentials && password === userCredentials[username].password) {
    alert("Authentication successful! Redirecting to the dashboard...");

    // Redirect to the corresponding HTML file
    window.location.href = userCredentials[username].htmlFile;
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

var form = document.getElementById("login-form");
form.addEventListener("submit", authenticateUser);