/*
Author       : Dreambuzz
Template Name: Venture-product landing template
Version      : 1.0
*/



jQuery(function($) {
	"use strict";
	
//	sticky navigation==
//	======================
	 $("#siteHeaderNavbar").sticky({ topSpacing: 0 });
	
	

		/*START MENU JS*/
		$(window).on('scroll', function() {
			if ($(".navbar").offset().top > 50) {
				$(".navbar-fixed-top").addClass("top-nav-collapse");
			} else {
				$(".navbar-fixed-top").removeClass("top-nav-collapse");
			}
		});
		
		$('a.page-scroll').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top-10
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	
	/* jquery scroll spy	*/	
	
	   jQuery('body').scrollspy({
           target: '.navbar-fixed-top'
    })

		/* Closes the Responsive Menu on Menu Item Click*/
		$('.navbar-collapse ul li a').on('click', function() {
			$('.navbar-toggle:visible').click();
		});
		/*END MENU JS*/  
 
// =========== wow aniamation========================

 new WOW().init();
   

	/* ----------------------------------------------------------- */
  /*  Main slideshow
  /* ----------------------------------------------------------- */

   $('#slider-carousel').carousel({
      pause: true,
      interval: 100000,
   });

	
	
	
  });



