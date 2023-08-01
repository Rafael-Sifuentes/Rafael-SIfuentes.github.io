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



// Define an array of image URLs
const imageUrls = [
    "assets/images/home-1.png",
    "assets/images/home-2.png",
    "assets/images/home-3.png",
    // Add more image URLs as needed
  ];
  
  // Get the home image element
  const homeImg = document.getElementById("home-img");
  
  // Set initial image index
  let currentImageIndex = 0;
  
  // Function to switch the background image
  function switchBackgroundImage() {
    homeImg.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;
  }
  
  // Function to switch to the next image
  function switchToNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    switchBackgroundImage();
  }
  
  // Function to switch to the previous image
  function switchToPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
    switchBackgroundImage();
  }
  
  // Call the function to set the initial background image
  switchBackgroundImage();
  
  // Add event listeners to the previous and next buttons
  const prevButton = document.getElementById("button-prev");
  prevButton.addEventListener("click", switchToPrevImage);
  
  const nextButton = document.getElementById("button-next");
  nextButton.addEventListener("click", switchToNextImage);
  
  