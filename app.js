// owl carousel for hero section
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	rtl: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: false,
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

// slick slider
$(".slider").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 700,
	dots: true,
	infinite: true,
	speed: 900,
	centerMode: true,
	centerPadding: "50px",
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: "50px",
				slidesToShow: 1,
			},
		},
	],
});
// hamburger menue
const LinkSection = document.querySelector(".linkSec");
const ham = document.querySelector(".bars");
ham.addEventListener("click", () => {
	LinkSection.classList.toggle("linkSecShow");
});

// changing navbar bg color
window.addEventListener("scroll", () => {
	const nav = document.querySelector("nav");
	if (window.scrollY > 600) {
		nav.classList.add("scroll");
	} else {
		nav.classList.remove("scroll");
	}
});
// up Arrow
window.addEventListener("scroll", () => {
	const arrow = document.querySelector(".upArrow");
	if (window.scrollY > 950) {
		arrow.classList.add("arrow");
	} else {
		arrow.classList.remove("arrow");
	}
});
