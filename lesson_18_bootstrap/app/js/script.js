"use strict";

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
var form = document.forms['regForm'];
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var form = event.target;
  var userName = form.elements.userName.value;
  var userEmail = form.elements.email.value;
  var userMessage = form.elements.message.value;
  var div = document.getElementById('innerDiv');
  div.innerHTML = "".concat(userName, " ").concat(userEmail, " ").concat(userMessage);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJmb3JtIiwiZG9jdW1lbnQiLCJmb3JtcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidXNlck5hbWUiLCJlbGVtZW50cyIsInZhbHVlIiwidXNlckVtYWlsIiwiZW1haWwiLCJ1c2VyTWVzc2FnZSIsIm1lc3NhZ2UiLCJkaXYiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxLQUFULENBQWUsU0FBZixDQUFiO0FBRUFGLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBQ0MsS0FBRCxFQUFXO0FBQzFDQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNTCxJQUFJLEdBQUdJLEtBQUssQ0FBQ0UsTUFBbkI7QUFFQSxNQUFNQyxRQUFRLEdBQUdQLElBQUksQ0FBQ1EsUUFBTCxDQUFjRCxRQUFkLENBQXVCRSxLQUF4QztBQUNBLE1BQU1DLFNBQVMsR0FBR1YsSUFBSSxDQUFDUSxRQUFMLENBQWNHLEtBQWQsQ0FBb0JGLEtBQXRDO0FBQ0EsTUFBTUcsV0FBVyxHQUFHWixJQUFJLENBQUNRLFFBQUwsQ0FBY0ssT0FBZCxDQUFzQkosS0FBMUM7QUFFQSxNQUFNSyxHQUFHLEdBQUdiLFFBQVEsQ0FBQ2MsY0FBVCxDQUF3QixVQUF4QixDQUFaO0FBSUFELEVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixhQUFtQlQsUUFBbkIsY0FBK0JHLFNBQS9CLGNBQTRDRSxXQUE1QztBQUNBLENBYkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA7KCgkKSA9PiB7XHJcbi8vIFx0JChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4vLyBcdFx0JCgnLm1vYmlsZS1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4vLyBcdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcclxuLy8gXHRcdFx0JCgnLm5hdmlnYXRpb25fX2xpc3QnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4vLyBcdFx0fSk7XHJcblxyXG4vLyBcdFx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCAoKSA9PiB7XHJcbi8vIFx0XHRcdGxldCBzY3JvbGxlZCA9ICQod2luZG93KVswXS5wYWdlWU9mZnNldDtcclxuXHJcblxyXG5cclxuLy8gXHRcdFx0aWYoc2Nyb2xsZWQgPiAxMCkge1xyXG4vLyBcdFx0XHRcdCQoJyN0b3BsaW5lJykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbi8vIFx0XHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdFx0JCgnI3RvcGxpbmUnKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuLy8gXHRcdFx0fVxyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fSk7XHJcblxyXG5cclxuXHJcbi8vIH0pKGpRdWVyeSk7XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbJ3JlZ0Zvcm0nXTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuXHRjb25zdCB1c2VyTmFtZSA9IGZvcm0uZWxlbWVudHMudXNlck5hbWUudmFsdWU7XHJcblx0Y29uc3QgdXNlckVtYWlsID0gZm9ybS5lbGVtZW50cy5lbWFpbC52YWx1ZTtcclxuXHRjb25zdCB1c2VyTWVzc2FnZSA9IGZvcm0uZWxlbWVudHMubWVzc2FnZS52YWx1ZTtcclxuXHJcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lubmVyRGl2Jyk7XHJcblxyXG5cclxuXHJcblx0ZGl2LmlubmVySFRNTCA9IGAke3VzZXJOYW1lfSAke3VzZXJFbWFpbH0gJHt1c2VyTWVzc2FnZX1gO1xyXG59KVxyXG5cclxuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
