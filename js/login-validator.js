var REQUIRED_FIEDLS_NUMBER = 2;

$(function () {
	{ // Группа функций для валидации полей при потере фокуса
		// Валидация поля электронной почты при потере фокуса	
		$('.login-form input[name="login-user-email"]').focusout(function () {
			if ($(this)[0].value === "") {
				// Если пусто, то делаем границы поля красными
				$('.login-form .inner-input-box__login-email').addClass('incorrect-input-style');
			} else {
				// Иначе возвращаем цвета границ
				$('.login-form .inner-input-box__login-email').removeClass('incorrect-input-style');
			}
		});

		// Валидация поля пароля при потере фокуса	
		$('.login-form input[name="login-password"]').focusout(function () {
			if ($(this)[0].value === "") {
				// Если пусто, делаем границы поля красными
				$('.login-form .inner-input-box__login-password').addClass('incorrect-input-style');
			} else {
				// Иначе возвращаем цвета границ
				$('.login-form .inner-input-box__login-password').removeClass('incorrect-input-style');
			}
		});
	}

	// Валидация при отправке формы
	$('.login-form').on('submit', function (event) {
		event.preventDefault();
		var flag = 0;
		var email = $(this).find('input[name="login-user-email"]')[0].value;
		var password = $(this).find('input[name="login-password"]')[0].value;

		// Проверка поля электронной почты на пустоту
		if (email === "") {
			// Если пусто, то делаем границы поля красными
			$(this).find('.inner-input-box__login-email').addClass('incorrect-input-style');
		} else {
			// Иначе возвращаем цвета границ
			flag++;
			$(this).find('.inner-input-box__login-email').removeClass('incorrect-input-style');
		}

		// Проверка поля пароля сообщения на пустоту
		if (password === "") {
			// Если пусто, то делаем границы поля красными
			$(this).find('.inner-input-box__login-password').addClass('incorrect-input-style');
		} else {
			// Иначе возвращаем цвета границ
			flag++;
			$(this).find('.inner-input-box__login-password').removeClass('incorrect-input-style');
		}

		// Отправляем форму, только если все требуемые поля валидны
		if (REQUIRED_FIEDLS_NUMBER == flag)
			this.submit();
	})
});