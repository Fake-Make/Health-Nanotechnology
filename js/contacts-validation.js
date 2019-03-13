$(function () {
	{ // Группа функций для валидации полей при потере фокуса
		// Валидация поля имени при потере фокуса	
		$('.registration-form input[name="feedback-author"]').focusout(function () {
			if ($(this)[0].value === "") {
				// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
				$('.name-field-empty').removeClass('invisible');
				$('.registration-form .inner-input-box__name').addClass('incorrect-input-style');
			} else {
				// Иначе скрываем сообщение, возвращаем цвета границ
				$('.name-field-empty').addClass('invisible');
				$('.registration-form .inner-input-box__name').removeClass('incorrect-input-style');
			}
		});

		// Валидация поля электронной почты при потере фокуса	
		$('.registration-form input[name="email"]').focusout(function () {
			if ($(this)[0].value === "") {
				// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
				$('.email-field-empty').removeClass('invisible');
				$('.registration-form .inner-input-box__email').addClass('incorrect-input-style');
			} else {
				// Иначе скрываем сообщение, возвращаем цвета границ
				$('.email-field-empty').addClass('invisible');
				$('.registration-form .inner-input-box__email').removeClass('incorrect-input-style');
			}
		});

		// Валидация поля сообщения при потере фокуса	
		$('.registration-form textarea[name="feedback-text"]').focusout(function () {
			if ($(this)[0].value === "") {
				// Если пусто, то делаем границы поля красными
				$('.registration-form .feedback-text-area__input').addClass('incorrect-input-style');
			} else {
				// Иначе возвращаем цвета границ
				$('.registration-form .feedback-text-area__input').removeClass('incorrect-input-style');
			}
		});
	}

	// Очистка полей при нажатии соответствующей кнопки
	// Кнопка ничего не сделает без JavaScript
	$('.clear-inputs').on('click', function () {
		// Удаление значений всех полей, кроме кнопок и сабмитов
		// И возвращение изначального цвета границ полей
		$('.registration-form').find('input[type != "submit"][type != "button"], textarea[type="textarea"]').each(function (i, t) {
			t.value = "";
			$(t).removeClass('incorrect-input-style');
		});
		// А так же скрытие всех сообщений об ошибках
		// Мы же не хотим пугать пользователя ещё до ввода информации
		$('.name-field-empty').addClass('invisible');
		$('.email-field-empty').addClass('invisible');
	});

	// Валидация при отправке формы
	$('.registration-form').on('submit', function () {
		var flag = 0;
		var name = $(this).find('input[name="feedback-author"]')[0].value;
		var email = $(this).find('input[name="email"]')[0].value;
		var message = $(this).find('textarea[name="feedback-text"]')[0].value;

		// Проверка поля автора отзыва на пустоту
		if (name === "") {
			// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
			$('.name-field-empty').removeClass('invisible');
			$(this).find('.inner-input-box__name').addClass('incorrect-input-style');
			flag++;
		} else {
			// Иначе скрываем сообщение, возвращаем цвета границ
			$('.name-field-empty').addClass('invisible');
			$(this).find('.inner-input-box__name').removeClass('incorrect-input-style');
		}

		// Проверка поля электронной почты на пустоту
		if (email === "") {
			// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
			$('.email-field-empty').removeClass('invisible');
			$(this).find('.inner-input-box__email').addClass('incorrect-input-style');
			flag++;
		} else {
			// Иначе скрываем сообщение, возвращаем цвета границ
			$('.email-field-empty').addClass('invisible');
			$(this).find('.inner-input-box__email').removeClass('incorrect-input-style');
		}

		// Проверка поля текста сообщения на пустоту
		if (message === "") {
			// Если пусто, то делаем границы поля красными
			$(this).find('.feedback-text-area__input').addClass('incorrect-input-style');
			flag++;
		} else {
			// Иначе возвращаем цвета границ
			$(this).find('.feedback-text-area__input').removeClass('incorrect-input-style');
		}

		// Отправляем форму, только если все требуемые поля валидны
		if (flag)
			return false;
	})
});