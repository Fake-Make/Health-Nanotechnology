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
	if($(window).width() > 480)
		var n = 3;
	else var n = 2;

	// Если количество элементов не кратно n, то дополняется до кратности n
	if($('ul.categories').children().length % n) {
		// Перед запуском удаляются лишние фикс-элементы
		$('.category.hidden').remove();
		while($('ul.categories').children().length % n)
			$('ul.categories').append('<li class="category hidden"><a class="category__link"><img class="category__image"></a></li>');
	}
}

// Когда документ загрузился, добавим функции элементам
$(function() {
	// Переключатель основного меню
	$('.menu-toggler').on('click', function() {
		if ($(window).width() <= 480) {
			menuToggle('.menu-togglable');
		}
	});

	// Переключатель под-меню
	$('.header-nav-item').on('click', function() {
		if ($(window).width() <= 480) {
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
					return false;
				}
			}
		}
	});

	// Починка флекс-отображения категорий при загрузке страницы
	flexFix();

	// Заливка непустых полей ввода
	$('.user-info__input').on('change', function() {
		if($(this).val() === "")
			$(this).removeClass('user-info__input_filled-white')
		else
			$(this).addClass('user-info__input_filled-white')
	})

	$(window).resize(function() {
		if($(window).width() > 480) {
			// Закрывашка меню при смене области просмотра Mobile -> Desktop
			if($('.menu-togglable').css('display') === 'flex') {
				menuToggle('.menu-togglable');
			}

			// Возобновление отображения сайдбара при переходе Mobile -> Desktop
			if($('.sidebar').css('display') === 'none') {
				$('.sidebar').removeAttr('style');
			}
		}
		if($(window).width() < 481) {
			// Сокрытие сайдбара при переходе Desktop -> Mobile на внутренних страницах
			if($(document).find('.header-nav-item__link_current').is('.header-nav-item__link_current')) {
				if ($('.header-nav-item__link_current')[0].text != "Главная") {
					$('.sidebar').css('display', 'none');
				}
			}				
		}

		flexFix();
	});
});