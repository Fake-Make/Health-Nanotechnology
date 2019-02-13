$(function() {
	$('.menu-toggler').on('click', function() {
		if ($(document).width() <= 480) {
			// Деактивация активных элементов при наличии таковых
			$('.active').find('.sub-menu').slideToggle(0);
			$('.active').removeClass('active');

			// Переключение меню
			$('.menu-togglable').slideToggle(200, function() {
				if($(this).css('display') === 'none') {
					$(this).removeAttr('style');
				}
			});
		}
	});

	$('.header-nav-item').on('click', function() {
		if ($(document).width() <= 480) {
			if($(this).hasClass('active')) {
				// Деактивация задействованного элемента
				$(this).find('.sub-menu').slideToggle(200);
				$(this).removeClass('active');
			}
			else {
				// Деактивация других активных элементов при наличии таковых
				$('.active').find('.sub-menu').slideToggle(200);
				$('.active').removeClass('active');
				// Активация задействованного элемента
				$(this).find('.sub-menu').slideToggle(200);
				$(this).addClass('active');
			}
		}
	});

	$(window).resize(function() {
		// Если окно увеличилось, а меню оставалось открытым - уберём его
		if($(document).width() > 480 && $('.menu-togglable').css('display') === 'block') {
			// Деактивация активных элементов при наличии таковых
			$('.active').find('.sub-menu').slideToggle(0);
			$('.active').removeClass('active');

			// Переключение меню
			$('.menu-togglable').slideToggle(200, function() {
				if($(this).css('display') === 'none') {
					$(this).removeAttr('style');
				}
			});
		}
	});
});