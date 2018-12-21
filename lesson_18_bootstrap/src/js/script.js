// ;(($) => {
// 	$(document).ready(() => {
// 		$('.mobile-menu').on('click', function(e) {
// 			$(this).toggleClass('opened');
// 			$('.navigation__list').toggleClass('open');
// 		});

// 		$(window).on('scroll', () => {
// 			let scrolled = $(window)[0].pageYOffset;



// 			if(scrolled > 10) {
// 				$('#topline').addClass('fixed');
// 			} else {
// 				$('#topline').removeClass('fixed');
// 			}
// 		});
// 	});



// })(jQuery);

const form = document.forms['regForm'];

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const form = event.target;

	const userName = form.elements.userName.value;
	const userEmail = form.elements.email.value;
	const userMessage = form.elements.message.value;

	const div = document.getElementById('innerDiv');



	div.innerHTML = `${userName} ${userEmail} ${userMessage}`;
})

