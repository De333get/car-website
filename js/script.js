//=====MAIN JS======
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
	navToggle = document.getElementById('nav__toggle'),
	navClose = document.getElementById('nav__close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}
/*=====REMOVE MENU MOBILE=====*/
const navLinks = document.querySelectorAll('.nav__link')

for (let navlink of navLinks) {
	navlink.addEventListener('click', linkAction)
}
function linkAction() {
	const navMenu = document.getElementById('nav__menu')
	navMenu.classList.remove('show-menu')
}

/*=====change BACKGROUND HEADER======*/

function scrollHeader() {
	const header = document.getElementById('header')
	if (this.scrollY >= 60) header.classList.add('scroll-header');
	else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==========swiper========= */



let swiperPopular = new Swiper(".popular__conteiner", {
	loop: true,
	spaceBetween: 24,
	slidesPerView: 1.3,
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,

		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 48,
		},
	},
});

/*============MIXIT UP=========== */
let mixerFeatured = mixitup('.featured__content', {
	selectors: {
		target: '.featured__card'
	},
	animation: {
		duration: 300
	}
});

/*======Link active featured======= */
const linkFeatureds = document.querySelectorAll('.featured__item')
for (let l of linkFeatureds) {
	l.addEventListener('click', activeFeatured)
}
function activeFeatured() {
	for (let l of linkFeatureds) {
		l.classList.remove('active-featured')
		this.classList.add('active-featured')
	}
}
/*======SCROLL UP=========== */
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up')
	if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)








let arr = [1, 2, 5, 6, -11]
function highAndLow(arr) {
	let high = Math.max(arr)
}