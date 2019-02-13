$(function() {
	$('.menu-toggler').on('click', function() {
		$('.menu-togglable').slideToggle(200, function() {
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	$('.header-nav-item').on('click', function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).find('.sub-menu').slideToggle(250);
		}
		else {
			$(this).addClass('active');
			$(this).find('.sub-menu').slideToggle(250);
		}
	});
});