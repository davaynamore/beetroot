		'use strict';

		console.dir($('#welcome'));

		const requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame;
		window.requestAnimationFrame = requestAnimationFrame;

		$('.partners__list').slick({
			autoplay: true,
			slidesToShow: 6,
			arrows: false
		});

		const form = $('#contactForm');

		form.on('submit', (e) => {
			e.preventDefault();
			getUserData();
			showModal();
		});

		$('.modal__close').on('click', () => {
			closeModal();
		});

		const showModal = () => {
			$('.modal')[0].classList.add('open');
			disableScroll();
		}

		const closeModal = () => {
			$('.modal')[0].classList.remove('open');
			enableScroll();
		}

		const getUserData = () => {
			const userData = {};
			Array.prototype.forEach.call(form[0].elements, (el) => {
				if(!el.value) return;
				userData[el.name] = el.value;
				el.value = '';
			})
			return userData;
		};

		const servicesTexts = $('.grid-item__text');

		const arr = Array.prototype.map.call(servicesTexts ,el => {
			let a = el.innerText.split('');
			if(a.length < 85) return el.innerText;
			let newA = a.slice(0, 85);
			let index = newA.lastIndexOf(' ');
			return newA.slice(0, index).join('') + '...';
		});

		Array.prototype.forEach.call(servicesTexts, (el, idx) => {
			el.innerText = arr[idx];
		});

		document.addEventListener('scroll', () => {
			setMenuFixed();
		});

		const setMenuFixed = () => {
			const navbar = document.getElementsByClassName('navigation')[0];
			if(window.pageYOffset >= 34){
				navbar.classList.add('fixed-top');
			} else {
				navbar.classList.remove('fixed-top');
			}
		};

		let progress = 0;

		function step() {
			const progressbar = $('#progressbar')[0];
			let progress = Math.floor(window.scrollY * 100 / (document.body.scrollHeight - window.innerHeight));
			if(progress <= 100) {
				progressbar.style.transform = `translateX(-${100 - progress}%)`;
			}
		};

		document.onscroll = () => {
			requestAnimationFrame(step);
		};

		const mobileMenuButton = $('.navbar-toggler');
		const mobileMenu = $('#navbar');

		mobileMenuButton.on('click', function() {
			mobileMenu.toggleClass('open');
		});

		$('.navigation__link').on('click', function(e){
			e.preventDefault();
			const top = $($(this).attr('href'))[0].offsetTop;
			window.scrollTo({
				top: top,
				behavior: 'smooth'
			});
		});

		$('.up').on('click', () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});



// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

function disableScroll() {
  if (window.addEventListener) // older FF
  	window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}