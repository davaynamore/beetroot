'use strict';
const form = $('#contactForm');
form.on('submit', (e) => {
	e.preventDefault();
});

const servicesTexts = $('.grid-item__text');

console.log(servicesTexts);



servicesTexts.map = [].map;
servicesTexts.forEach = [].forEach;

const arr = servicesTexts.map(el => {
	let a = el.innerText.split('');
	if(a.length < 85) return el.innerText;
	let newA = a.slice(0, 85);
	let index = newA.lastIndexOf(' ');
	return newA.slice(0, index).join('') + '...';
	
})



servicesTexts.forEach((el, idx) => {
	el.innerText = arr[idx];
});