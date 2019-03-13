const phoneSize = 480;

// Функция для исправления отображения флекс-бокса
function flexFix() {
	if ($(window).width() > phoneSize)
		var n = 3;
	else
		var n = 2;

	// Если количество элементов не кратно n, то дополняется до кратности n
	if ($('ul.categories').children().length % n) {
		// Перед запуском удаляются лишние фикс-элементы
		$('.category.hidden').remove();
		while ($('ul.categories').children().length % n)
			$('ul.categories').append('<li class="category hidden"></li>');
	}
}

// Деактивация активных элементов при наличии таковых
function hideAllActive() {
	$('.active').removeClass('active').find('.sub-menu').css('display', 'none');
}

// Переключение меню
function menuToggle(item) {
	hideAllActive();
	if ($(item).css('display') === 'flex') {
		$(item).removeAttr('style');
	} else {
		$(item).css('display', 'flex');
	}
}

// Скрытие сайдбара при просмотре Mobile на внутренних страницах
function sidebarHide() {
	if ($(window).width() <= phoneSize) {
		if ($(document).find('.header-nav-item__link_current').is('.header-nav-item__link_current')) {
			if ($('.header-nav-item__link_current').text() != "Главная") {
				$('.sidebar').css('display', 'none');
			}
		}
	}
}

// Функция валидации поля
function validate(item) {
	if ($(item).val() === "") {
		// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
		$(item).next('.error-emptyness').removeClass('invisible');
		$(item).addClass('incorrect-input-style');
		return 1;
	} else {
		// Иначе скрываем сообщение, возвращаем цвета границ
		$(item).next('.error-emptyness').addClass('invisible');
		$(item).removeClass('incorrect-input-style');
		return 0;
	}
}

// Функция привязки валидаторов к полям	
function validateForEmptyness(form, input) {
	$(form + ' ' + input).focusout(function () {
		validate(this);
	});
}

// Назначение элементам событий после загрузки документа
$(function () {
	// Починка флекс-отображения категорий при загрузке страницы
	flexFix();
	// Скрытие сайдбара при просмотре Mobile на внутренних страницах
	sidebarHide();

	// Настройка отображения при изменении размеров экрана
	$(window).resize(function () {
		if ($(window).width() > phoneSize) {
			// Закрывашка меню при смене области просмотра Mobile -> Desktop
			if ($('.menu-togglable').css('display') === 'flex') {
				menuToggle('.menu-togglable');
			}

			// Возобновление отображения сайдбара при переходе Mobile -> Desktop
			if ($('.sidebar').css('display') === 'none') {
				$('.sidebar').removeAttr('style');
			}
		}
		sidebarHide();
	});

	{	// Общие настройки для всего сайта
		// Переключатель основного меню
		$('.menu-toggler').on('click', function () {
			if ($(window).width() <= phoneSize) {
				menuToggle('.menu-togglable');
			}
		});

		// Переключатель под-меню
		$('.header-nav-item').on('click', function () {
			if ($(window).width() <= phoneSize) {
				if ($(this).hasClass('active')) {
					// Деактивация задействованного элемента
					hideAllActive();
				} else {
					// Деактивация других активных элементов при наличии таковых
					hideAllActive();
					// Активация задействованного элемента
					//menuToggle('.sub-menu');
					if ($(this).find('.sub-menu').is('ul')) {
						menuToggle('.sub-menu');
						$(this).addClass('active');
						return false;
					}
				}
			}
		});

		// Заливка непустых полей ввода
		$('.user-info__input').on('change', function () {
			if ($(this).val() === "")
				$(this).removeClass('user-info__input_filled-white')
			else
				$(this).addClass('user-info__input_filled-white')
		})
	}

	{	// Группа специфических настроек
		// Очистка полей при нажатии соответствующей кнопки
		// Кнопка ничего не сделает без JavaScript
		$('form[name="contats-page__feedback-form"] .clear-inputs').on('click', function () {
			// Удаление значений всех полей, кроме кнопок и сабмитов
			// И возвращение изначального цвета границ полей
			$('form[name="contats-page__feedback-form"]').find('input[type != "submit"][type != "button"], textarea[type="textarea"]').each(function (i, item) {
				$(item).val("");
				$(item).removeClass('incorrect-input-style');
			});
			// А так же скрытие всех сообщений об ошибках
			// Мы же не хотим пугать пользователя ещё до ввода информации
			$('.error-emptyness').addClass('invisible');
		});
	}

	{	// Секция валидации
		{	// Группа функций для валидации полей при потере фокуса
			// Валидация полей формы "Обратная связь" на странице "Контакты"
			validateForEmptyness('form[name="contats-page__feedback-form"]', 'input[name="feedback-author"]');
			validateForEmptyness('form[name="contats-page__feedback-form"]', 'input[name="email"]');
			validateForEmptyness('form[name="contats-page__feedback-form"]', 'textarea[name="feedback-text"]');

			// Валидация формы "Фильтр поиска" на странице "Каталог"
			$('.search-filter .search-filter__input').focusout(function () {
				var amount = parseFloat($(this).val(), 10);
				// Если не число, пустая строка или меньше нуля, то заменить
				if (!(amount >= 0))
					$(this).val(0);
			});
		}
		
		{	// Группа функций для валидации полей при отправке формы
			// Валидация формы "Обратная связь" на странице "Контакты"
			$('.registration-form').on('submit', function () {
				var flag = 
					validate('form[name="contats-page__feedback-form"] input[name="feedback-author"]') +
					validate('form[name="contats-page__feedback-form"] input[name="email"]') +
					validate('form[name="contats-page__feedback-form"] textarea[name="feedback-text"]');
				
				// Отправляем форму, только если все требуемые поля валидны
				if (flag)
					return false;
			})

			// Валидация формы "Фильтр поиска" на странице "Каталог"
			$('.search-filter').on('submit', function () {
				var min = parseFloat($(this).find('.search-filter__input[name="cost-from"]').val());
				var max = parseFloat($(this).find('.search-filter__input[name="cost-to"]').val());
				// Проверка на пустоту, логичность и неотрицательость
				if (!(min <= max) || min < 0 || max < 0)
					return false;
			})
		}
	}
});