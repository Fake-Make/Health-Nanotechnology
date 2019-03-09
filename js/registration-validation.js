
var REQUIRED_FIEDLS_NUMBER = 4;

$(function() {
	{	// Группа функций для валидации полей при потере фокуса
		// Валидация поля имени при потере фокуса	
		$('.registration-form input[name="registration-user-name"]').focusout(function() {
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
		$('.registration-form input[name="registration-email"]').focusout(function() {
			if ($(this)[0].value === "") {
				// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
				$('.email-field-empty').removeClass('invisible');
				$('.registration-form .inner-input-box__registration-email').addClass('incorrect-input-style');
			} else {
				// Иначе скрываем сообщение, возвращаем цвета границ
				$('.email-field-empty').addClass('invisible');
				$('.registration-form .inner-input-box__registration-email').removeClass('incorrect-input-style');
			}
		});

		// Валидация поля пароля при потере фокуса	
		$('.registration-form input[name="registration-password"]').focusout(function() {
			if ($(this)[0].value === "") {
				// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
				$('.password-field-empty').removeClass('invisible');
				$('.registration-form .inner-input-box__password').addClass('incorrect-input-style');
			} else {
				// Иначе скрываем сообщение, возвращаем цвета границ
				$('.password-field-empty').addClass('invisible');
				$('.registration-form .inner-input-box__password').removeClass('incorrect-input-style');
			}
		});

		// Валидация поля подтверждения пароля при потере фокуса	
		$('.registration-form input[name="registration-password-confirm"]').focusout(function() {
			if ($(this)[0].value === "") {
				// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
				$('.password-confirm-field-empty').removeClass('invisible');
				$('.registration-form .inner-input-box__password-confirm').addClass('incorrect-input-style');
			} else {
				// Иначе скрываем сообщение, возвращаем цвета границ
				$('.password-confirm-field-empty').addClass('invisible');
				$('.registration-form .inner-input-box__password-confirm').removeClass('incorrect-input-style');
			}
		});
	}

	// Валидация при отправке формы
	$('.registration-form').on('submit', function(event) {
		event.preventDefault();
		var flag = 0;
		var name = $(this).find('input[name="registration-user-name"]')[0].value;
		var email = $(this).find('input[name="registration-email"]')[0].value;
		var password = $(this).find('input[name="registration-password"]')[0].value;
		var passwordConfirm = $(this).find('input[name="registration-password-confirm"]')[0].value;

		console.log(name, email, password, passwordConfirm);
		// Проверка поля автора отзыва на пустоту
		if (name === "") {
			// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
			$('.name-field-empty').removeClass('invisible');
			$(this).find('.inner-input-box__name').addClass('incorrect-input-style');
		} else {
			// Иначе скрываем сообщение, возвращаем цвета границ
			flag++;
			$('.name-field-empty').addClass('invisible');
			$(this).find('.inner-input-box__name').removeClass('incorrect-input-style');
		}

		// Проверка поля электронной почты на пустоту
		if (email === "") {
			// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
			$('.email-field-empty').removeClass('invisible');
			$(this).find('.inner-input-box__registration-email').addClass('incorrect-input-style');
		} else {
			// Иначе скрываем сообщение, возвращаем цвета границ
			flag++;
			$('.email-field-empty').addClass('invisible');
			$(this).find('.inner-input-box__registration-email').removeClass('incorrect-input-style');
		}

		// Проверка поля пароля сообщения на пустоту
		if (password === "") {
			// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
			$('.password-field-empty').removeClass('invisible');
			$(this).find('.inner-input-box__password').addClass('incorrect-input-style');
		} else {
			// Иначе скрываем сообщение, возвращаем цвета границ
			flag++;
			$('.password-field-empty').addClass('invisible');
			$(this).find('.inner-input-box__password').removeClass('incorrect-input-style');
		}

		// Проверка поля пароля сообщения на пустоту
		if (passwordConfirm === "") {
			// Если пусто, то показываем сообщение об ошибке, делаем границы поля красными
			$('.password-confirm-field-empty').removeClass('invisible');
			$(this).find('.inner-input-box__password-confirm').addClass('incorrect-input-style');
		} else {
			// Иначе скрываем сообщение, возвращаем цвета границ
			flag++;
			$('.password-confirm-field-empty').addClass('invisible');
			$(this).find('.inner-input-box__password-confirm').removeClass('incorrect-input-style');
		}

		// Отправляем форму, только если все требуемые поля валидны
		if(REQUIRED_FIEDLS_NUMBER == flag)
			this.submit();
	})
});