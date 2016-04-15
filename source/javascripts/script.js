(function(){
'use strict';

jQuery(window).load(function() {		

	if(jQuery().parallax) { 
		jQuery('.parallax-section').parallax();
	}

	jQuery('header').on("click", ".open-nav", function() { 
		jQuery('header').toggleClass('nav-is-open'); 
		return false;
	});
	
	if(jQuery().wolf) { 
		jQuery('.wolf-grid').wolf();
	}
	
	if (jQuery('.single-pagination').length >  0 && jQuery(window).width() > 780) { 
		var pHeight = jQuery('.single-pagination').height();
		var pPrevHeight = jQuery('.single-pagination li.prev a').height();
		var pNextHeight = jQuery('.single-pagination li.next a').height();
		if (pPrevHeight < pHeight-10 && jQuery('.single-pagination li.prev a img').length >  0) { 
			jQuery('.single-pagination li.prev ').css('marginTop',(pHeight-pPrevHeight)/2 + 'px'); }
		if (pNextHeight < pHeight-10 && jQuery('.single-pagination li.next a img').length >  0) { 
			jQuery('.single-pagination li.next ').css('marginTop',(pHeight-pNextHeight)/2 + 'px'); }
	}
	
});

})(jQuery);
