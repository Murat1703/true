$('.slider').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	dots: true,
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}

	]

});

let burger = document.querySelector('.menu-burger');
let crossBurger = document.querySelector('.cross')
let bodyLck = document.querySelector('body');
burger.addEventListener('click', function()
	{
		burger.classList.toggle('active');
        crossBurger.classList.toggle('active');
		bodyLck.classList.toggle('lock');
	});