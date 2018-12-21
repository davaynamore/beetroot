;(function(){

	'use strict';
	const rootElement = document.getElementById('root');

	// const form = document.createElement('form');
	// form.setAttribute('name', 'myForm');

	// const input = document.createElement('input');

	// input.setAttribute('type', 'text');
	// input.setAttribute('name', 'textInput');
	// input.setAttribute('placeholder', 'enter your name');
	// input.classList.add('text-input');

	// const button = document.createElement('input');
	// button.setAttribute('type', 'submit');
	// button.setAttribute('name', 'submit');
	// button.setAttribute('value', 'Push');


	// form.appendChild(input);
	// form.appendChild(button);

	// document.body.appendChild(form);


	// const result = document.createElement('p');
	// document.body.appendChild(result);

	// let userName = '';

	// form.addEventListener('submit', (event) => {
	// 	event.preventDefault();
	// 	userName = document.forms['myForm'].elements.textInput.value;
	// 	result.innerText = userName;
	// });


	// let random = 0;

	// do{
	// 	random = Math.floor(Math.random() * 11)
	// } while(random <= 5);

	// console.log(random);



// 	const form = document.createElement('form');
// 	form.setAttribute('name', 'myForm');

// 	const input_1 = document.createElement('input');

// 	input_1.setAttribute('type', 'text');
// 	input_1.setAttribute('name', 'inputFirst');
// 	input_1.setAttribute('placeholder', 'enter first number');

// 	const input_2 = document.createElement('input');

// 	input_2.setAttribute('type', 'text');
// 	input_2.setAttribute('name', 'inputSecond');
// 	input_2.setAttribute('placeholder', 'enter second number');

// 	const input_3 = document.createElement('input');

// 	input_3.setAttribute('type', 'submit');
// 	input_3.setAttribute('value', 'Add');

// 	form.appendChild(input_1);
// 	form.appendChild(input_2);
// 	form.appendChild(input_3);

// 	const result = document.createElement('p');
// 	let resultValue = 'The result will be here';
// 	result.innerText = resultValue;

// 	rootElement.appendChild(form);
// 	rootElement.appendChild(result);

// 	const isNumeric = (num) => {
// 		return !isNaN(parseFloat(num) && isFinite(num));
// 	}


// 	form.addEventListener('submit', (event)=> { 
// 		event.preventDefault(); // cancel default action

// 		const value_1 = document.forms['myForm'].elements.inputFirst.value;
// 		const value_2 = document.forms['myForm'].elements.inputSecond.value;

// 		let sum;

// 		if(!(isNumeric(value_1) && isNumeric(value_2))){
// 			sum = 'Something is going wrong';
// 		} else {
// 			// const sum = Number(value_1) + Number(value_2);

// 			sum = +value_1 + +value_2; // сокращенная запись
// 		}



// 		result.innerText = sum;
// })


// const playButton = document.createElement('button');
// playButton.classList.add('play');

// playButton.innerText = 'Play';

// const wrapper = document.createElement('div');
// wrapper.classList.add('wrapper');
// wrapper.style.padding = '2em';
// wrapper.style.margin = '2em';
// wrapper.style.border = '5px solid #000';


// wrapper.onclick = (e) => { // color-trigger - раскомментить css
// 	if(!wrapper.classList.contains('green')){ // проверка на наличие класса
// 		wrapper.classList.add('green'); // добавление класса
// 	} else {
// 		wrapper.classList.remove('green'); // удаление класса
// 	}
// }

// const leftCube = document.createElement('div');
// const rightCube = document.createElement('div');

// leftCube.classList.add('cube');
// rightCube.classList.add('cube');

// rightCube.innerText = '1';
// leftCube.innerText = '1';

// const coin = document.createElement('div');
// coin.classList.add('coin');

// rootElement.appendChild(playButton);
// wrapper.appendChild(leftCube);
// wrapper.appendChild(rightCube);

// rootElement.appendChild(wrapper);
// rootElement.appendChild(coin);



// playButton.addEventListener('click', () => {
// 	const getRandom = (limit) => {
// 		return Math.ceil(Math.random() * (limit));
// 	}
// 	const random_1 = getRandom(6);
// 	const random_2 = getRandom(6);

// 	leftCube.innerText = random_2;
// 	rightCube.innerText = random_1;

// 	const getCoinRandom = () => {
// 		return Math.floor(Math.random() * 2);
// 	}

// 	let coinText = getCoinRandom() ? 'O' : 'R';



// 	coin.innerText = coinText;


// });

// let userAnswer = prompt('Каково «официальное» название JavaScript?');

// const ourAnswer = userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase() ? 'Верно!' : 'Не знаете? «ECMAScript»!';

// const div = document.createElement('div');
// div.innerText = ourAnswer;

// document.body.appendChild(div);

// let result;

// const a = 2;
// const b = 2;

// if (a + b < 4) {  
// result = 'Мало';
// } else {  
// result = 'Много';
// }

// result = a + b < 4 ? 'Мало' : a + b === 4 ? 'В самый раз' : 'Много';

// const ucFirst = (str) => {
// 	if(!str.length) return '';
// 	let newStr = str.charAt(0).toUpperCase();
// 	for(let i = 1; i < str.length; i++){
// 		newStr += str[i];
// 	}
// 	return newStr;
// }

// console.log(ucFirst("вася") );
// console.log(ucFirst(""));

// const form = document.createElement('form');
// form.setAttribute('name', 'myForm');

// const input_1 = document.createElement('input');

// input_1.setAttribute('type', 'text');
// input_1.setAttribute('name', 'inputFirst');
// input_1.setAttribute('placeholder', 'enter first number');

// const input_2 = document.createElement('input');

// input_2.setAttribute('type', 'text');
// input_2.setAttribute('name', 'inputSecond');
// input_2.setAttribute('placeholder', 'enter second number');

// const input_3 = document.createElement('input');

// input_3.setAttribute('type', 'submit');
// input_3.setAttribute('value', 'Add');

// form.appendChild(input_1);
// form.appendChild(input_2);
// form.appendChild(input_3);

// const result = document.createElement('p');
// let resultValue = 'The result will be here';
// result.innerText = resultValue;

// rootElement.appendChild(form);
// rootElement.appendChild(result);

// const isNumeric = (num) => {
// 	return !isNaN(parseFloat(num) && isFinite(num));
// }


// form.addEventListener('submit', (event)=> {
// 	event.preventDefault();

// 	const value_1 = document.forms['myForm'].elements.inputFirst.value;
// 	const value_2 = document.forms['myForm'].elements.inputSecond.value;

// 	let sum;

// 	if(!(isNumeric(value_1) && isNumeric(value_2))){
// 		sum = 'Something is going wrong';
// 	} else {
// 		sum = +value_1 + +value_2;
// 	}

// 	result.innerText = sum;
// })


// const min = (a, b) => {
// 	// if(a <= b ){ 
// 	// 	return a;
// 	// } else {
// 	// 	return b;
// 	// }

// 	return a <= b ? a : b;
// }; 

// console.log(min(1, 1));

// console.log(min(2, 3));

// console.log(min(5, 4));

// const needHugeNumber = () => {
// 	let number = 0;

// 	do {
// 		number = prompt('Type huge number, please!');
// 	} while(number && number <= 100);

// 	alert('Thank you!');
// }

// needHugeNumber();



// var salaries = {
// 	"Вася": 100,
// 	"Петя": 300,
// 	"Даша": 250,
// 	"Вова": 300
// };


// const getSalariesSum = (obj) => {

// 	let acc = 0;

// 	for(let key in obj){
// 		acc += obj[key];
// 	}

// 	return acc;

// }

// const getReachest = (obj) => {
// 	let max = 0;

// 	for(let key in obj){
// 		if(max <= obj[key]){
// 			max = obj[key];
// 		}
// 	}

// 	let reachestNames = [];
// 	let reachestEmpls = {};

// 	for(let key in obj){
// 		if(obj[key] === max) {
// 			reachestNames.push(key);
// 			reachestEmpls[key] = obj[key];
// 		}
// 	}

// 	console.log(reachestEmpls);

// 	return reachestNames.length ? reachestNames.join(', ') : 'Hет сотрудников';
// }

// console.log(getReachest(salaries));

// const a = {};

// console.log(getReachest(a));






function getRandom(){
	return Math.ceil(Math.random()*10000000000);
}


const wrapper = document.createElement('div');
wrapper.classList.add('test-item');


function getQuestion(questionText){
	const question = document.createElement('span');
	question.classList.add('test-question');
	question.innerText = questionText;

	return question;
}

// answers = [];
function getTestForm(answers){
	const form = document.createElement('form');
	form.classList.add('test-form');
	const formName = `form${getRandom()}`;
	form.appendChild(getTestAnswer(answers));	

	return form;
}



// answer = [];
function getTestAnswer(answer){

	const wrapper = document.createElement('div');

	const name = `answers${getRandom()}`;

	for(let i = 3; i > 0; i--){

		const div = document.createElement('div');
		wrapper.classList.add('answer-wrapper');

		const input = document.createElement('input');
		input.setAttribute('type', 'radio');
		input.setAttribute('name', name);

		const inputId = `id${getRandom()}`;
		input.id = inputId ;

		const label = document.createElement('label');
		label.setAttribute('for', inputId);
		label.innerText = answer[i - 1];

		div.appendChild(input);
		div.appendChild(label);

		wrapper.appendChild(div);
	}

	return wrapper;
}


wrapper.appendChild(getQuestion('7 + 3'));
wrapper.appendChild(getTestForm());



rootElement.appendChild(wrapper);


})();