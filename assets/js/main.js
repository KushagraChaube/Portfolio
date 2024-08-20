
/***************************************************
==================== JS INDEX ======================
****************************************************
// Lenis Scroll Js
// Stacking Cards Js
// Sticky Header Js
// Hamburger Menu Js
// OnePage Active Js
// Testimonial Carousel Js
// Post Carousel Js
// Accordion Js
// Brand Slider Js
// Nice Select Js
// All Popup Js
// WoW Js
// Preloader Js
// Services Hover Js
// Portfolio Filter Js
// Portfolio Carousel Js
// Fun Fact Js
// Anim Js
// Contact Form Js

****************************************************/


document.getElementById('emailButton').onclick = function() {
        window.location.href = 'mailto:Kushagrachaube1203@gmail.com';
    };


(function ($) {
	"use strict";

	// Lenis Scroll Js
	const lenis = new Lenis();

	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add(time => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	var windowSize = $(window).width();

	$(window).on("load resize", function () {
		if (windowSize > 991) {
			// Stacking Cards Js
			const cards = document.querySelectorAll(".stack-item");
			const stickySpace = document.querySelector(".stack-offset");
			const animation = gsap.timeline();
			let cardHeight;
			if (document.querySelector(".stack-item")) {
				function initCards() {
					animation.clear();
					cardHeight = cards[0].offsetHeight;
					//console.log("initCards()", cardHeight);
					cards.forEach((card, index) => {
						if (index > 0) {
							gsap.set(card, { y: index * cardHeight });
							animation.to(
								card,
								{ y: 0, duration: index * 0.5, ease: "none" },
								0
							);
						}
					});
				}
				initCards();
				ScrollTrigger.create({
					trigger: ".stack-wrapper",
					start: "top top",
					pin: true,
					end: () =>
						`+=${cards.length * cardHeight + stickySpace.offsetHeight}`,
					scrub: true,
					animation: animation,
					// markers: true,
					invalidateOnRefresh: true,
				});
				ScrollTrigger.addEventListener("refreshInit", initCards);
			}
		}
	});

	// Data Js
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-bg-image") + ")"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$(document).ready(function ($) {
		// Sticky Header Js
		var lastScrollTop = 0;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 300) {
				$(".tj-header-area.header-sticky").addClass("sticky");
				$(".tj-header-area.header-sticky").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 500) {
					$(".tj-header-area.header-sticky").addClass("sticky-out");
					$(".tj-header-area.header-sticky").removeClass("sticky");
				}
			} else {
				$(".tj-header-area.header-sticky").removeClass("sticky");
			}

			lastScrollTop = scroll;
		});

		// Meanmenu Js
		$("#headerMenu").meanmenu({
			meanMenuContainer: ".mobile-menu",
			meanScreenWidth: "991",
			meanExpand: [
				"<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>",
			],
		});

		// Hamburger Menu Js
		$(".menu-bar").on("click", function () {
			$(".menu-bar").toggleClass("menu-bar-toggeled");
			$(".mobile-menu").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});

		$(".mobile-menu ul li a")
			.not(".mean-expand")
			.on("click", function () {
				$(".menu-bar").removeClass("menu-bar-toggeled");
				$(".mobile-menu").removeClass("opened");
				$("body").removeClass("overflow-hidden");
			});



		// Accordion Js
		if ($(".accordion-item").length > 0) {
			$(".accordion-item .faq-title").on("click", function () {
				if ($(this).parent().hasClass("active")) {
					$(this).parent().removeClass("active");
				} else {
					$(this).parent().siblings().removeClass("active");
					$(this).parent().addClass("active");
				}
			});
		}

		// Brand Slider Js
		if ($(".brand-slider").length > 0) {
			var brand = new Swiper(".brand-slider", {
				slidesPerView: 6,
				spaceBetween: 30,
				loop: false,
				breakpoints: {
					320: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 3,
					},
					640: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 4,
					},
					992: {
						slidesPerView: 5,
					},
					1024: {
						slidesPerView: 6,
					},
				},
			});
		}

		// Nice Select Js
		$("select").niceSelect();

		// All Popup Js
		if ($(".popup_video").length > 0) {
			$(`.popup_video`).lightcase({
				transition: "elastic",
				showSequenceInfo: false,
				slideshow: false,
				swipe: true,
				showTitle: false,
				showCaption: false,
				controls: true,
			});
		}

		$(".modal-popup").magnificPopup({
			type: "inline",
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: "auto",
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: "popup-mfp",
		});
	});

	$(window).on("load", function () {
		// WoW Js
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 100, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();

		// Preloader Js
		const svg = document.getElementById("preloaderSvg");
		const svgText = document.querySelector(
			".hero-section .intro_text svg text"
		);
		const tl = gsap.timeline({
			onComplete: startStrokeAnimation,
		});
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

		tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 1.5,
			y: -100,
			opacity: 0,
		});
		tl.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.easeIn",
		}).to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.easeOut",
		});
		tl.to(".preloader", {
			y: -1500,
		});
		tl.to(".preloader", {
			zIndex: -1,
			display: "none",
		});

		function startStrokeAnimation() {
			if (svgText) {
				// Add a class or directly apply styles to trigger the stroke animation
				svgText.classList.add("animate-stroke");
			}
		}

		// Services Hover Js
		function service_animation() {
			var active_bg = $(".services-widget .active-bg");
			var element = $(".services-widget .current");
			$(".services-widget .service-item").on("mouseenter", function () {
				var e = $(this);
				activeService(active_bg, e);
			});
			$(".services-widget").on("mouseleave", function () {
				element = $(".services-widget .current");
				activeService(active_bg, element);
				element.closest(".service-item").siblings().removeClass("mleave");
			});
			activeService(active_bg, element);
		}
		service_animation();

		function activeService(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var topOff = e.offset().top;
			var height = e.outerHeight();
			var menuTop = $(".services-widget").offset().top;
			e.closest(".service-item").removeClass("mleave");
			e.closest(".service-item").siblings().addClass("mleave");
			active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
		}

		$(".services-widget .service-item").on("click", function () {
			$(".services-widget .service-item").removeClass("current");
			$(this).addClass("current");
		});

		// Portfolio Filter Js
		function filter_animation() {
			var active_bg = $(".portfolio-filter .button-group .active-bg");
			var element = $(".portfolio-filter .button-group .active");
			$(".portfolio-filter .button-group button").on("click", function () {
				var e = $(this);
				activeFilterBtn(active_bg, e);
			});
			activeFilterBtn(active_bg, element);
		}
		filter_animation();

		function activeFilterBtn(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var leftOff = e.offset().left;
			var width = e.outerWidth();
			var menuLeft = $(".portfolio-filter .button-group").offset().left;
			e.siblings().removeClass("active");
			e.closest("button")
				.siblings()
				.addClass(".portfolio-filter .button-group");
			active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
		}

		// Fun Fact Js
		if ($(".odometer").length > 0) {
			$(".odometer").appear(function () {
				var odo = $(".odometer");
				odo.each(function () {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
		}

		// Anim Js
		const target = document.getElementById("anim");
		function splitTextToSpans(targetElement) {
			if (targetElement) {
				const text = targetElement.textContent;
				targetElement.innerHTML = "";
				for (let character of text) {
					const span = document.createElement("span");
					if (character === " ") {
						span.innerHTML = "&nbsp;";
					} else {
						span.textContent = character;
					}
					targetElement.appendChild(span);
				}
			}
		}
		splitTextToSpans(target);
	});
})(jQuery);
