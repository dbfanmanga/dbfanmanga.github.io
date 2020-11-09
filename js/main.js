$(document).ready(function(){
	var swiper = new Swiper('.promoslider > .swiper-container', {
      	
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 20,
        autoplay: 5000,
        slidesPerView: 3,
        autoplayDisableOnInteraction: false,
        breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 5
			},

			480: {
				slidesPerView: 1,
				spaceBetween: 5
			},

			768: {
				slidesPerView: 1,
				spaceBetween: 5
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 10
			}
		}
      
    });

	var recentswiper = new Swiper('.recentslider > .swiper-container', {
		nextButton: '.recent-next',
		prevButton: '.recent-prev',
		slidesPerView: 8,
		paginationClickable: true,
		preventClicks:false,
		preventClicksPropagation:false,
		spaceBetween: 10,
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 5
			},

			480: {
				slidesPerView: 3,
				spaceBetween: 5
			},

			768: {
				slidesPerView: 5,
				spaceBetween: 5
			},
			1024: {
				slidesPerView: 6,
				spaceBetween: 10
			}
		}
	});

	

});