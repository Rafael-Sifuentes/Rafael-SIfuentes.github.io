
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



let container = document.querySelector('.card__container')
var mixer;

if(container){
  mixer = mixitup('.card__container', {
    selectors: {
      target: '.products__card'
    },
    animation: {
      duration: 300
    }
  })
}

const linkProducts = document.querySelectorAll('card__item')

function activeProduct(){
  linkProducts.forEach(l=> l.classList.remove(active-featured))
  this.classList.add('color-tag')

  linkProducts.forEach(l=> l.addEventListener('click', activeFeatured))
}