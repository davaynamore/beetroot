'use strict';
const form = $('#contactForm');
form.on('submit', (e) => {
	e.preventDefault();	
});

const servicesTexts = $('.grid-item__text');

servicesTexts.map = [].map;
servicesTexts.forEach = [].forEach;

const arr = servicesTexts.map(el => {
	let a = el.innerText.split('');
	if(a.length < 85) return el.innerText;
	let newA = a.slice(0, 85);
	let index = newA.lastIndexOf(' ');
	return newA.slice(0, index).join('') + '...';
});

servicesTexts.forEach((el, idx) => {
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



$(document).ready(function(){
  $('.partners__list').slick({
  	autoplay: true,
  	slidesToShow: 6,
  	arrows: false
  });
});