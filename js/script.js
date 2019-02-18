// Деактивация активных элементов при наличии таковых
function hideAllActive() {
	$('.active').removeClass('active').find('.sub-menu').css('display', 'none');
}

// Переключение меню
function menuToggle(item) {
	hideAllActive();
	if($(item).css('display') === 'flex') {
		$(item).removeAttr('style');
	}
	else {
		$(item).css('display', 'flex');
	}
}

// Функция для исправления отображения флекс-бокса
function flexFix() {
	if($(document).width() > 480)
		var n = 3;
	else var n = 2;

	// Если количество элементов не кратно n, то дополняется до кратности n
	if($('ul.categories').children().length % n) {
		// Перед запуском удаляются лишние фикс-элементы
		$('.category.hidden').remove();
		while($('ul.categories').children().length % n)
			$('ul.categories').append('<li class="category hidden"><a><img><span></span></a></li>');
	}
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
				if($(this).find('.sub-menu').is('ul')) {
					menuToggle('.sub-menu');
					$(this).addClass('active');
				}
			}
			return false;
		}
	});

	// Починка флекс-отображения категорий при загрузке страницы
	flexFix();

	// Закрывашка меню при смене области просмотра Mobile -> Desktop
	$(window).resize(function() {
		if($(document).width() > 480) {
			if($('.menu-togglable').css('display') === 'flex') {
				menuToggle('.menu-togglable');
			}
		}

		flexFix();
	});
});