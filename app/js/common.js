$(document).ready(function () {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	//menu
	$('.nav-trigger').click(function () {
		$(this).next().slideToggle('fast');
	});
	$('.navigation-dropdown__click').click(function () {
		$(this).parent().find('.navigation-dropdown').toggleClass('active');
	});


	//form
	$('.landing__hero-form .button').click(function () {
		$(this).parent('.landing__hero-form').addClass('landing__hero-form-success');
	});
	$(".footer-btn-submit").click(function () {
		$.fancybox.open({ src: '#modal-thanks', type: 'inline', });
	});

	//slider
	$('.landing__slider').slick({
		dots: true
	});
	$('.js-slider').slick({
		dots: true,
		arrows: true
	});
	$('.costumer-page__carousel').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.feature-spotlight__slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.feature-spotlight__slider-small'
	});
	$('.feature-spotlight__slider-small').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feature-spotlight__slider-big',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		infinite: false,

	});
	$('.property-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$('.testimonials-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		centerMode: true,
		centerPadding: '0',
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.pricing-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		centerMode: true,
		centerPadding: '0',
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	// Pricing slider controls
	$('.pricing-size__item').click(function () {
		$('.pricing-size__item').removeClass('active');
		$(this).addClass('active');
		var slideNumber = $(this).data('slide');
		$('.pricing-slider').slick('slickGoTo', slideNumber - 1);
	});
	$('.pricing-slider').on('afterChange', function (event, slick, currentSlide) {
		$('.pricing-size__item').removeClass('active');
		$(`.pricing-size__item[data-slide="${currentSlide + 1}"]`).addClass('active');
	});

	$('.pricing-addons__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	//wow
	new WOW().init();

	//menu
	$(".navigation__button").click(function () {
		$(".navigation").toggleClass("active");
		$(this).find("i").toggleClass("fa-times");
		$(".navigation__overlay").toggleClass("active");
		$("body").toggleClass("no-scroll");
	});
	// $( ".navigation__close" ).click(function() {
	//   $( ".navigation" ).removeClass( "active");
	//   $( ".navigation__overlay" ).hide( );
	// });
	$(".navigation__overlay").click(function () {
		$(".navigation").removeClass("active");
	});

	//accordion
	$(".faq_head").click(function () {
		$(this).next('.faq_answer').slideToggle("slow");
		$(this).toggleClass("active");
	});
	$(".landing__accordion-trigger").click(function () {
		$(this).next().slideToggle("slow");
		$(this).toggleClass("active");
	});
	$(".faq__trigger").click(function () {
		$(this).next().slideToggle("fast");
		$(this).toggleClass("active");
	});
	$(".landing__faq-question").click(function () {
		$(this).next().slideToggle("fast");
		$(this).parent().toggleClass("active");
	});
	$(".pricing-accordion__trigger").click(function () {
		$(this).next().slideToggle("fast");
		$(this).parent().toggleClass("active");
	});
	$(".checkout-form .add-code-button").click(function () {
		$(".add-code-container").slideToggle("fast");
	});


	//gallery
	$(".gallery-content__switch input").click(function () {
		$('.gallery-content__tab').toggleClass("active");
	});
	// gallery
	$(".thumb").fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		afterLoad: function () {
			this.title = this.title + '<a href="' + this.href + '" target="_blank">Download</a> ';
		},
		helpers: {


			thumbs: {
				width: 100,
				height: 100
			},
			buttons: {}
		}

	});

	//floating form
	$(".floating_form_title").click(function () {
		$('.floating_form').toggleClass("active");
	});

	//covid
	$(".covid-more button").click(function () {
		$('.covid-hidden').slideDown();
		$(this).hide();
	});
	$(".covid-info__close").click(function () {
		$('.covid-info ').fadeOut('fast');
	});

	//myth
	$(".truth__btn").click(function () {
		$(this).closest('.myth-truth__block').addClass("active");
	});
	$(".myth__btn").click(function () {
		$(this).closest('.myth-truth__block').removeClass("active");
	});

	//tabs
	$('.integration_tabs li a').click(function (event) {
		event.preventDefault();
		$('.integration_tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.integration_tab').hide();
		$($(this).attr('href')).show();
	});
	$('.tour__nav a').click(function (event) {
		event.preventDefault();
		$('.tour__nav a').removeClass('active');
		$(this).addClass('active');
		$('.tour__item').removeClass('active');
		$($(this).attr('href')).addClass('active');
	});
	$('.customer__nav a').click(function (event) {
		event.preventDefault();
		$('.customer__nav li').removeClass('active');
		$(this).parent().addClass('active');
		$('.customer-top__text').removeClass('active');
		$($(this).attr('href')).addClass('active');
	});
	$('.tab a').click(function (event) {
		event.preventDefault();
		$('.tab li a').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();
		$($(this).attr('href')).show();
	});
	$('.resource-center__tabs-links a').click(function (event) {
		event.preventDefault();
		$('.resource-center__tabs-box .col-lg-4').removeClass('active');
		$('.resource-center__tabs-links a').removeClass('active');
		$(this).addClass('active');
		$(".resource-center__tabs-box .col-lg-4").filter($(this).attr('data-href')).addClass('active');
	});
	$('.proceed-payment').click(function (event) {
		event.preventDefault();
		$('.checkout-form__first-step').hide();
		$('.checkout-form__second-step').show();
	});
	$('.webinar-tabs label').click(function () {
		$('.webinar-tab-content').toggleClass('active');
		console.log('1');
	});


	//show modal
	$("body").one('mouseleave', function () {
		jQuery('.trial__not-leave-black').addClass('active');
	});
	$(".trial__not-leave-close").click(function () {
		$('.trial__not-leave').removeClass("active");
	});

	//scroll anchor
	$('.integration__nav li a, .totop').on('click', function () {
		$('html,body').animate({ scrollTop: $($(this).attr('href')).offset().top - 105 }, 800);
		return false;
	});

	//demo lead modal
	$("#demo-lead").submit(function () {
		$.ajax({
			type: "POST",
			url: "", // URL to which the request is sent
			data: $(this).serialize()
		}).done(function () {
			$('.demo-lead-modal__form').toggleClass("active");
			$('.demo-lead-modal__video').toggleClass("active");
		});
		return false;
	});

	// International Telephone Input
	if (document.querySelector('[id$=trial-phone]')) {
		var input = document.querySelector('[id$=trial-phone]');
		window.intlTelInput(input, {
			preferredCountries: ['us'],
			separateDialCode: true
			// any initialisation options go here
		});
	}

	// input number arrows
	$('.input-number button').on('click', function () {
		if ($(this).hasClass('input-number__plus')) {
			this.nextElementSibling.stepUp();
		} else if ($(this).hasClass('input-number__minus')) {
			this.previousElementSibling.stepDown();
		}
	});

	// open/close cart on pricing page
	$('.pricing-cart-icon__button').on('click', function () {
		$('.pricing-cart').addClass('active');
	});
	$('.pricing-cart__button-close a').on('click', function () {
		$('.pricing-cart').removeClass('active');
	});

	//webinar forms - get values from register buttons
	$('.webinar-register').on('click', function () {
		var webinarDate = $(this).data('webinar-month') + ' ' + $(this).data('webinar-day') + ' ' + $(this).data('webinar-time');
		$('.webinar-id input').val($(this).data('webinar-id'));
		$('.webinar-name input').val($(this).data('webinar-name'));
		$('.webinar-display-name').text($(this).data('webinar-name'));
		$('.webinar-date').text(webinarDate);
	});
});

//fixed
$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 100) {
		$(".header").addClass("fixed");
	} else {
		$(".header").removeClass("fixed");
	}
});
