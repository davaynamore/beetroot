"use strict";

;

(function () {
  'use strict';

  var rootElement = document.getElementById('root'); // const form = document.createElement('form');
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

  function getRandom() {
    return Math.ceil(Math.random() * 10000000000);
  }

  var wrapper = document.createElement('div');
  wrapper.classList.add('test-item');

  function getQuestion(questionText) {
    var question = document.createElement('span');
    question.classList.add('test-question');
    question.innerText = questionText;
    return question;
  }

  function getTestForm() {
    var form = document.createElement('form');
    form.classList.add('test-form');
    var formName = "form".concat(getRandom());
    form.appendChild(getTestAnswer(['6', '5', '3']));
    return form;
  } // answer = [];


  function getTestAnswer(answer) {
    var wrapper = document.createElement('div');
    var name = "answers".concat(getRandom());

    for (var i = 3; i > 0; i--) {
      var div = document.createElement('div');
      wrapper.classList.add('answer-wrapper');
      var input = document.createElement('input');
      input.setAttribute('type', 'radio');
      input.setAttribute('name', name);
      var inputId = "id".concat(getRandom());
      input.id = inputId;
      var label = document.createElement('label');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRSYW5kb20iLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0UXVlc3Rpb24iLCJxdWVzdGlvblRleHQiLCJxdWVzdGlvbiIsImlubmVyVGV4dCIsImdldFRlc3RGb3JtIiwiZm9ybSIsImZvcm1OYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZXRUZXN0QW5zd2VyIiwiYW5zd2VyIiwibmFtZSIsImkiLCJkaXYiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImlucHV0SWQiLCJpZCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUFDLENBQUMsWUFBVTtBQUVYOztBQUNBLE1BQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXBCLENBSFcsQ0FLWDtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJRDtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNB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LENBQUNDLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkJKLElBQTNCO0FBRUEsVUFBTUssT0FBTyxlQUFRdkIsU0FBUyxFQUFqQixDQUFiO0FBQ0FxQixNQUFBQSxLQUFLLENBQUNHLEVBQU4sR0FBV0QsT0FBWDtBQUVBLFVBQU1FLEtBQUssR0FBRzNCLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0FvQixNQUFBQSxLQUFLLENBQUNILFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEJDLE9BQTFCO0FBQ0FFLE1BQUFBLEtBQUssQ0FBQ2QsU0FBTixHQUFrQk0sTUFBTSxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUF4QjtBQUVBQyxNQUFBQSxHQUFHLENBQUNMLFdBQUosQ0FBZ0JNLEtBQWhCO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0wsV0FBSixDQUFnQlUsS0FBaEI7QUFFQXJCLE1BQUFBLE9BQU8sQ0FBQ1csV0FBUixDQUFvQkssR0FBcEI7QUFDQTs7QUFFRCxXQUFPaEIsT0FBUDtBQUNBOztBQUdEQSxFQUFBQSxPQUFPLENBQUNXLFdBQVIsQ0FBb0JQLFdBQVcsQ0FBQyxPQUFELENBQS9CO0FBQ0FKLEVBQUFBLE9BQU8sQ0FBQ1csV0FBUixDQUFvQkgsV0FBVyxFQUEvQjtBQUlBZixFQUFBQSxXQUFXLENBQUNrQixXQUFaLENBQXdCWCxPQUF4QjtBQUdDLENBaGFBIiwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbigpe1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblx0Y29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5cclxuXHQvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cdC8vIGZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ215Rm9ybScpO1xyXG5cclxuXHQvLyBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG5cdC8vIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0Ly8gaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RleHRJbnB1dCcpO1xyXG5cdC8vIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZW50ZXIgeW91ciBuYW1lJyk7XHJcblx0Ly8gaW5wdXQuY2xhc3NMaXN0LmFkZCgndGV4dC1pbnB1dCcpO1xyXG5cclxuXHQvLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdC8vIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcblx0Ly8gYnV0dG9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdWJtaXQnKTtcclxuXHQvLyBidXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdQdXNoJyk7XHJcblxyXG5cclxuXHQvLyBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHQvLyBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG5cdC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG5cclxuXHQvLyBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0Ly8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG5cclxuXHQvLyBsZXQgdXNlck5hbWUgPSAnJztcclxuXHJcblx0Ly8gZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuXHQvLyBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0Ly8gXHR1c2VyTmFtZSA9IGRvY3VtZW50LmZvcm1zWydteUZvcm0nXS5lbGVtZW50cy50ZXh0SW5wdXQudmFsdWU7XHJcblx0Ly8gXHRyZXN1bHQuaW5uZXJUZXh0ID0gdXNlck5hbWU7XHJcblx0Ly8gfSk7XHJcblxyXG5cclxuXHQvLyBsZXQgcmFuZG9tID0gMDtcclxuXHJcblx0Ly8gZG97XHJcblx0Ly8gXHRyYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSlcclxuXHQvLyB9IHdoaWxlKHJhbmRvbSA8PSA1KTtcclxuXHJcblx0Ly8gY29uc29sZS5sb2cocmFuZG9tKTtcclxuXHJcblxyXG5cclxuLy8gXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4vLyBcdGZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ215Rm9ybScpO1xyXG5cclxuLy8gXHRjb25zdCBpbnB1dF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbi8vIFx0aW5wdXRfMS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4vLyBcdGlucHV0XzEuc2V0QXR0cmlidXRlKCduYW1lJywgJ2lucHV0Rmlyc3QnKTtcclxuLy8gXHRpbnB1dF8xLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZW50ZXIgZmlyc3QgbnVtYmVyJyk7XHJcblxyXG4vLyBcdGNvbnN0IGlucHV0XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuLy8gXHRpbnB1dF8yLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbi8vIFx0aW5wdXRfMi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaW5wdXRTZWNvbmQnKTtcclxuLy8gXHRpbnB1dF8yLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZW50ZXIgc2Vjb25kIG51bWJlcicpO1xyXG5cclxuLy8gXHRjb25zdCBpbnB1dF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbi8vIFx0aW5wdXRfMy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbi8vIFx0aW5wdXRfMy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCcpO1xyXG5cclxuLy8gXHRmb3JtLmFwcGVuZENoaWxkKGlucHV0XzEpO1xyXG4vLyBcdGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfMik7XHJcbi8vIFx0Zm9ybS5hcHBlbmRDaGlsZChpbnB1dF8zKTtcclxuXHJcbi8vIFx0Y29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4vLyBcdGxldCByZXN1bHRWYWx1ZSA9ICdUaGUgcmVzdWx0IHdpbGwgYmUgaGVyZSc7XHJcbi8vIFx0cmVzdWx0LmlubmVyVGV4dCA9IHJlc3VsdFZhbHVlO1xyXG5cclxuLy8gXHRyb290RWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuLy8gXHRyb290RWxlbWVudC5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG5cclxuLy8gXHRjb25zdCBpc051bWVyaWMgPSAobnVtKSA9PiB7XHJcbi8vIFx0XHRyZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobnVtKSAmJiBpc0Zpbml0ZShudW0pKTtcclxuLy8gXHR9XHJcblxyXG5cclxuLy8gXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCk9PiB7IFxyXG4vLyBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gY2FuY2VsIGRlZmF1bHQgYWN0aW9uXHJcblxyXG4vLyBcdFx0Y29uc3QgdmFsdWVfMSA9IGRvY3VtZW50LmZvcm1zWydteUZvcm0nXS5lbGVtZW50cy5pbnB1dEZpcnN0LnZhbHVlO1xyXG4vLyBcdFx0Y29uc3QgdmFsdWVfMiA9IGRvY3VtZW50LmZvcm1zWydteUZvcm0nXS5lbGVtZW50cy5pbnB1dFNlY29uZC52YWx1ZTtcclxuXHJcbi8vIFx0XHRsZXQgc3VtO1xyXG5cclxuLy8gXHRcdGlmKCEoaXNOdW1lcmljKHZhbHVlXzEpICYmIGlzTnVtZXJpYyh2YWx1ZV8yKSkpe1xyXG4vLyBcdFx0XHRzdW0gPSAnU29tZXRoaW5nIGlzIGdvaW5nIHdyb25nJztcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdC8vIGNvbnN0IHN1bSA9IE51bWJlcih2YWx1ZV8xKSArIE51bWJlcih2YWx1ZV8yKTtcclxuXHJcbi8vIFx0XHRcdHN1bSA9ICt2YWx1ZV8xICsgK3ZhbHVlXzI7IC8vINGB0L7QutGA0LDRidC10L3QvdCw0Y8g0LfQsNC/0LjRgdGMXHJcbi8vIFx0XHR9XHJcblxyXG5cclxuXHJcbi8vIFx0XHRyZXN1bHQuaW5uZXJUZXh0ID0gc3VtO1xyXG4vLyB9KVxyXG5cclxuXHJcbi8vIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuLy8gcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5Jyk7XHJcblxyXG4vLyBwbGF5QnV0dG9uLmlubmVyVGV4dCA9ICdQbGF5JztcclxuXHJcbi8vIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XHJcbi8vIHdyYXBwZXIuc3R5bGUucGFkZGluZyA9ICcyZW0nO1xyXG4vLyB3cmFwcGVyLnN0eWxlLm1hcmdpbiA9ICcyZW0nO1xyXG4vLyB3cmFwcGVyLnN0eWxlLmJvcmRlciA9ICc1cHggc29saWQgIzAwMCc7XHJcblxyXG5cclxuLy8gd3JhcHBlci5vbmNsaWNrID0gKGUpID0+IHsgLy8gY29sb3ItdHJpZ2dlciAtINGA0LDRgdC60L7QvNC80LXQvdGC0LjRgtGMIGNzc1xyXG4vLyBcdGlmKCF3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucygnZ3JlZW4nKSl7IC8vINC/0YDQvtCy0LXRgNC60LAg0L3QsCDQvdCw0LvQuNGH0LjQtSDQutC70LDRgdGB0LBcclxuLy8gXHRcdHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ3JlZW4nKTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdCwXHJcbi8vIFx0fSBlbHNlIHtcclxuLy8gXHRcdHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4nKTsgLy8g0YPQtNCw0LvQtdC90LjQtSDQutC70LDRgdGB0LBcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGxlZnRDdWJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vIGNvbnN0IHJpZ2h0Q3ViZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuLy8gbGVmdEN1YmUuY2xhc3NMaXN0LmFkZCgnY3ViZScpO1xyXG4vLyByaWdodEN1YmUuY2xhc3NMaXN0LmFkZCgnY3ViZScpO1xyXG5cclxuLy8gcmlnaHRDdWJlLmlubmVyVGV4dCA9ICcxJztcclxuLy8gbGVmdEN1YmUuaW5uZXJUZXh0ID0gJzEnO1xyXG5cclxuLy8gY29uc3QgY29pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyBjb2luLmNsYXNzTGlzdC5hZGQoJ2NvaW4nKTtcclxuXHJcbi8vIHJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHBsYXlCdXR0b24pO1xyXG4vLyB3cmFwcGVyLmFwcGVuZENoaWxkKGxlZnRDdWJlKTtcclxuLy8gd3JhcHBlci5hcHBlbmRDaGlsZChyaWdodEN1YmUpO1xyXG5cclxuLy8gcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbi8vIHJvb3RFbGVtZW50LmFwcGVuZENoaWxkKGNvaW4pO1xyXG5cclxuXHJcblxyXG4vLyBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyBcdGNvbnN0IGdldFJhbmRvbSA9IChsaW1pdCkgPT4ge1xyXG4vLyBcdFx0cmV0dXJuIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogKGxpbWl0KSk7XHJcbi8vIFx0fVxyXG4vLyBcdGNvbnN0IHJhbmRvbV8xID0gZ2V0UmFuZG9tKDYpO1xyXG4vLyBcdGNvbnN0IHJhbmRvbV8yID0gZ2V0UmFuZG9tKDYpO1xyXG5cclxuLy8gXHRsZWZ0Q3ViZS5pbm5lclRleHQgPSByYW5kb21fMjtcclxuLy8gXHRyaWdodEN1YmUuaW5uZXJUZXh0ID0gcmFuZG9tXzE7XHJcblxyXG4vLyBcdGNvbnN0IGdldENvaW5SYW5kb20gPSAoKSA9PiB7XHJcbi8vIFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRsZXQgY29pblRleHQgPSBnZXRDb2luUmFuZG9tKCkgPyAnTycgOiAnUic7XHJcblxyXG5cclxuXHJcbi8vIFx0Y29pbi5pbm5lclRleHQgPSBjb2luVGV4dDtcclxuXHJcblxyXG4vLyB9KTtcclxuXHJcbi8vIGxldCB1c2VyQW5zd2VyID0gcHJvbXB0KCfQmtCw0LrQvtCy0L4gwqvQvtGE0LjRhtC40LDQu9GM0L3QvtC1wrsg0L3QsNC30LLQsNC90LjQtSBKYXZhU2NyaXB0PycpO1xyXG5cclxuLy8gY29uc3Qgb3VyQW5zd2VyID0gdXNlckFuc3dlci50b0xvd2VyQ2FzZSgpID09PSAnRUNNQVNjcmlwdCcudG9Mb3dlckNhc2UoKSA/ICfQktC10YDQvdC+IScgOiAn0J3QtSDQt9C90LDQtdGC0LU/IMKrRUNNQVNjcmlwdMK7ISc7XHJcblxyXG4vLyBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gZGl2LmlubmVyVGV4dCA9IG91ckFuc3dlcjtcclxuXHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbi8vIGxldCByZXN1bHQ7XHJcblxyXG4vLyBjb25zdCBhID0gMjtcclxuLy8gY29uc3QgYiA9IDI7XHJcblxyXG4vLyBpZiAoYSArIGIgPCA0KSB7ICBcclxuLy8gcmVzdWx0ID0gJ9Cc0LDQu9C+JztcclxuLy8gfSBlbHNlIHsgIFxyXG4vLyByZXN1bHQgPSAn0JzQvdC+0LPQvic7XHJcbi8vIH1cclxuXHJcbi8vIHJlc3VsdCA9IGEgKyBiIDwgNCA/ICfQnNCw0LvQvicgOiBhICsgYiA9PT0gNCA/ICfQkiDRgdCw0LzRi9C5INGA0LDQtycgOiAn0JzQvdC+0LPQvic7XHJcblxyXG4vLyBjb25zdCB1Y0ZpcnN0ID0gKHN0cikgPT4ge1xyXG4vLyBcdGlmKCFzdHIubGVuZ3RoKSByZXR1cm4gJyc7XHJcbi8vIFx0bGV0IG5ld1N0ciA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcclxuLy8gXHRmb3IobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcclxuLy8gXHRcdG5ld1N0ciArPSBzdHJbaV07XHJcbi8vIFx0fVxyXG4vLyBcdHJldHVybiBuZXdTdHI7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKHVjRmlyc3QoXCLQstCw0YHRj1wiKSApO1xyXG4vLyBjb25zb2xlLmxvZyh1Y0ZpcnN0KFwiXCIpKTtcclxuXHJcbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbi8vIGZvcm0uc2V0QXR0cmlidXRlKCduYW1lJywgJ215Rm9ybScpO1xyXG5cclxuLy8gY29uc3QgaW5wdXRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4vLyBpbnB1dF8xLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbi8vIGlucHV0XzEuc2V0QXR0cmlidXRlKCduYW1lJywgJ2lucHV0Rmlyc3QnKTtcclxuLy8gaW5wdXRfMS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2VudGVyIGZpcnN0IG51bWJlcicpO1xyXG5cclxuLy8gY29uc3QgaW5wdXRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4vLyBpbnB1dF8yLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbi8vIGlucHV0XzIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2lucHV0U2Vjb25kJyk7XHJcbi8vIGlucHV0XzIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdlbnRlciBzZWNvbmQgbnVtYmVyJyk7XHJcblxyXG4vLyBjb25zdCBpbnB1dF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbi8vIGlucHV0XzMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4vLyBpbnB1dF8zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkJyk7XHJcblxyXG4vLyBmb3JtLmFwcGVuZENoaWxkKGlucHV0XzEpO1xyXG4vLyBmb3JtLmFwcGVuZENoaWxkKGlucHV0XzIpO1xyXG4vLyBmb3JtLmFwcGVuZENoaWxkKGlucHV0XzMpO1xyXG5cclxuLy8gY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4vLyBsZXQgcmVzdWx0VmFsdWUgPSAnVGhlIHJlc3VsdCB3aWxsIGJlIGhlcmUnO1xyXG4vLyByZXN1bHQuaW5uZXJUZXh0ID0gcmVzdWx0VmFsdWU7XHJcblxyXG4vLyByb290RWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuLy8gcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuXHJcbi8vIGNvbnN0IGlzTnVtZXJpYyA9IChudW0pID0+IHtcclxuLy8gXHRyZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobnVtKSAmJiBpc0Zpbml0ZShudW0pKTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KT0+IHtcclxuLy8gXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuLy8gXHRjb25zdCB2YWx1ZV8xID0gZG9jdW1lbnQuZm9ybXNbJ215Rm9ybSddLmVsZW1lbnRzLmlucHV0Rmlyc3QudmFsdWU7XHJcbi8vIFx0Y29uc3QgdmFsdWVfMiA9IGRvY3VtZW50LmZvcm1zWydteUZvcm0nXS5lbGVtZW50cy5pbnB1dFNlY29uZC52YWx1ZTtcclxuXHJcbi8vIFx0bGV0IHN1bTtcclxuXHJcbi8vIFx0aWYoIShpc051bWVyaWModmFsdWVfMSkgJiYgaXNOdW1lcmljKHZhbHVlXzIpKSl7XHJcbi8vIFx0XHRzdW0gPSAnU29tZXRoaW5nIGlzIGdvaW5nIHdyb25nJztcclxuLy8gXHR9IGVsc2Uge1xyXG4vLyBcdFx0c3VtID0gK3ZhbHVlXzEgKyArdmFsdWVfMjtcclxuLy8gXHR9XHJcblxyXG4vLyBcdHJlc3VsdC5pbm5lclRleHQgPSBzdW07XHJcbi8vIH0pXHJcblxyXG5cclxuLy8gY29uc3QgbWluID0gKGEsIGIpID0+IHtcclxuLy8gXHQvLyBpZihhIDw9IGIgKXsgXHJcbi8vIFx0Ly8gXHRyZXR1cm4gYTtcclxuLy8gXHQvLyB9IGVsc2Uge1xyXG4vLyBcdC8vIFx0cmV0dXJuIGI7XHJcbi8vIFx0Ly8gfVxyXG5cclxuLy8gXHRyZXR1cm4gYSA8PSBiID8gYSA6IGI7XHJcbi8vIH07IFxyXG5cclxuLy8gY29uc29sZS5sb2cobWluKDEsIDEpKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKG1pbigyLCAzKSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhtaW4oNSwgNCkpO1xyXG5cclxuLy8gY29uc3QgbmVlZEh1Z2VOdW1iZXIgPSAoKSA9PiB7XHJcbi8vIFx0bGV0IG51bWJlciA9IDA7XHJcblxyXG4vLyBcdGRvIHtcclxuLy8gXHRcdG51bWJlciA9IHByb21wdCgnVHlwZSBodWdlIG51bWJlciwgcGxlYXNlIScpO1xyXG4vLyBcdH0gd2hpbGUobnVtYmVyICYmIG51bWJlciA8PSAxMDApO1xyXG5cclxuLy8gXHRhbGVydCgnVGhhbmsgeW91IScpO1xyXG4vLyB9XHJcblxyXG4vLyBuZWVkSHVnZU51bWJlcigpO1xyXG5cclxuXHJcblxyXG4vLyB2YXIgc2FsYXJpZXMgPSB7XHJcbi8vIFx0XCLQktCw0YHRj1wiOiAxMDAsXHJcbi8vIFx0XCLQn9C10YLRj1wiOiAzMDAsXHJcbi8vIFx0XCLQlNCw0YjQsFwiOiAyNTAsXHJcbi8vIFx0XCLQktC+0LLQsFwiOiAzMDBcclxuLy8gfTtcclxuXHJcblxyXG4vLyBjb25zdCBnZXRTYWxhcmllc1N1bSA9IChvYmopID0+IHtcclxuXHJcbi8vIFx0bGV0IGFjYyA9IDA7XHJcblxyXG4vLyBcdGZvcihsZXQga2V5IGluIG9iail7XHJcbi8vIFx0XHRhY2MgKz0gb2JqW2tleV07XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRyZXR1cm4gYWNjO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgZ2V0UmVhY2hlc3QgPSAob2JqKSA9PiB7XHJcbi8vIFx0bGV0IG1heCA9IDA7XHJcblxyXG4vLyBcdGZvcihsZXQga2V5IGluIG9iail7XHJcbi8vIFx0XHRpZihtYXggPD0gb2JqW2tleV0pe1xyXG4vLyBcdFx0XHRtYXggPSBvYmpba2V5XTtcclxuLy8gXHRcdH1cclxuLy8gXHR9XHJcblxyXG4vLyBcdGxldCByZWFjaGVzdE5hbWVzID0gW107XHJcbi8vIFx0bGV0IHJlYWNoZXN0RW1wbHMgPSB7fTtcclxuXHJcbi8vIFx0Zm9yKGxldCBrZXkgaW4gb2JqKXtcclxuLy8gXHRcdGlmKG9ialtrZXldID09PSBtYXgpIHtcclxuLy8gXHRcdFx0cmVhY2hlc3ROYW1lcy5wdXNoKGtleSk7XHJcbi8vIFx0XHRcdHJlYWNoZXN0RW1wbHNba2V5XSA9IG9ialtrZXldO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH1cclxuXHJcbi8vIFx0Y29uc29sZS5sb2cocmVhY2hlc3RFbXBscyk7XHJcblxyXG4vLyBcdHJldHVybiByZWFjaGVzdE5hbWVzLmxlbmd0aCA/IHJlYWNoZXN0TmFtZXMuam9pbignLCAnKSA6ICdI0LXRgiDRgdC+0YLRgNGD0LTQvdC40LrQvtCyJztcclxuLy8gfVxyXG5cclxuLy8gY29uc29sZS5sb2coZ2V0UmVhY2hlc3Qoc2FsYXJpZXMpKTtcclxuXHJcbi8vIGNvbnN0IGEgPSB7fTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGdldFJlYWNoZXN0KGEpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tKCl7XHJcblx0cmV0dXJuIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjEwMDAwMDAwMDAwKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxud3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZXN0LWl0ZW0nKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRRdWVzdGlvbihxdWVzdGlvblRleHQpe1xyXG5cdGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdHF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rlc3QtcXVlc3Rpb24nKTtcclxuXHRxdWVzdGlvbi5pbm5lclRleHQgPSBxdWVzdGlvblRleHQ7XHJcblxyXG5cdHJldHVybiBxdWVzdGlvbjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRlc3RGb3JtKCl7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblx0Zm9ybS5jbGFzc0xpc3QuYWRkKCd0ZXN0LWZvcm0nKTtcclxuXHRjb25zdCBmb3JtTmFtZSA9IGBmb3JtJHtnZXRSYW5kb20oKX1gO1xyXG5cclxuXHRmb3JtLmFwcGVuZENoaWxkKGdldFRlc3RBbnN3ZXIoWyc2JywgJzUnLCAnMyddKSk7XHRcclxuXHJcblx0cmV0dXJuIGZvcm07XHJcbn1cclxuXHJcblxyXG5cclxuLy8gYW5zd2VyID0gW107XHJcbmZ1bmN0aW9uIGdldFRlc3RBbnN3ZXIoYW5zd2VyKXtcclxuXHJcblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRjb25zdCBuYW1lID0gYGFuc3dlcnMke2dldFJhbmRvbSgpfWA7XHJcblxyXG5cdGZvcihsZXQgaSA9IDM7IGkgPiAwOyBpLS0pe1xyXG5cclxuXHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbnN3ZXItd3JhcHBlcicpO1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXRJZCA9IGBpZCR7Z2V0UmFuZG9tKCl9YDtcclxuXHRcdGlucHV0LmlkID0gaW5wdXRJZCA7XHJcblxyXG5cdFx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dElkKTtcclxuXHRcdGxhYmVsLmlubmVyVGV4dCA9IGFuc3dlcltpIC0gMV07XHJcblxyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuXHJcblxyXG53cmFwcGVyLmFwcGVuZENoaWxkKGdldFF1ZXN0aW9uKCc3ICsgMycpKTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChnZXRUZXN0Rm9ybSgpKTtcclxuXHJcblxyXG5cclxucm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcblxyXG5cclxufSkoKTsiXSwiZmlsZSI6InNjcmlwdC5qcyJ9
