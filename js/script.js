// Деактивация активных элементов при наличии таковых
var hideAllActive = function() {
	var temp = $('.active');
	temp.removeClass('active');
	temp.find('.sub-menu').slideToggle(0);
}

// Переключение меню
var menuToggle = function(item) {
	hideAllActive();
	$(item).slideToggle(0, function() {
		if($(this).css('display') === 'block') {
			$(this).css('display', 'flex');
		}
		if($(this).css('display') === 'none') {
			$(this).removeAttr('style');
		}
	});
}

// Когда документ загрузился, добавим функции элементам
$(function() {
	// Переключатель основного меню
	$('.menu-toggler').on('click', function() {
		if ($(document).width() <= 480) {
			menuToggle('.menu-togglable');
		}
	});

	// Переключатель под-меню
	$('.header-nav-item').on('click', function() {
		if ($(document).width() <= 480) {
			if($(this).hasClass('active')) {
				// Деактивация задействованного элемента
				hideAllActive();
			}
			else {
				// Деактивация других активных элементов при наличии таковых
				hideAllActive();
				// Активация задействованного элемента
				//menuToggle('.sub-menu');
				$(this).find('.sub-menu').slideToggle(0, function() {
					if($(this).css('display') === 'block') {
						$(this).css('display', 'flex');
					}
				});
				$(this).addClass('active');
			}
		}
	});

	// Закрывашка меню при смене области просмотра Mobile -> Desktop
	$(window).resize(function() {
		if($(document).width() > 480 && $('.menu-togglable').css('display') === 'flex') {
			//!!! При изменении размера окна ему иногда передаётся ширина в 481px, даже если по факту она  350px
			menuToggle('.menu-togglable');
		}
	});
});