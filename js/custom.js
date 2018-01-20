(function($) {
	"use strict"
	$('#back-to-top').on("click", function() {
		// When arrow is clicked
		$('body,html').animate({
			scrollTop : 0 // Scroll to top of body
		},800);
		return false;
	});
})(jQuery);