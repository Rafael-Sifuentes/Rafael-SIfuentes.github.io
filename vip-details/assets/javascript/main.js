/*=============== SCROLL HEADER ===============*/
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



// JavaScript
const imageUrls = [
  "assets/images/home-1.png",
  "assets/images/home-2.png",
  "assets/images/home-3.png",
  // Add more image URLs as needed
];

const homeImg = document.getElementById("home-img");
let currentImageIndex = 0;

function switchBackgroundImage() {
  homeImg.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;
}

function switchToNextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  switchBackgroundImage();
}

function switchToPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
  switchBackgroundImage();
}

// Preload the images
function preloadImages() {
  for (const imageUrl of imageUrls) {
    const img = new Image();
    img.src = imageUrl;
  }
}

// Call the function to preload the images
preloadImages();

// Call the function to set the initial background image
switchBackgroundImage();

// Add event listeners to the previous and next buttons
const prevButton = document.getElementById("button-prev");
prevButton.addEventListener("click", switchToPrevImage);

const nextButton = document.getElementById("button-next");
nextButton.addEventListener("click", switchToNextImage);



var swiper = new Swiper(".showcase__modal-1", {

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  
});


