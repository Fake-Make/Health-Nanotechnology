// Функция проверки всех полей на форме
/*function checkInputs() {
	var correctFlag = true;

	$('.inner-label').each(function(i, t) {
		// Если поле обязательно и пусто
		if( -1 != t.innerHTML.search('required-star') && $(t).siblings('.inner-input-box').val() === '') {
			// То флаг корректности меняется на ложный
			correctFlag = false;
			// А соответствующие сообщения об ошибках появляются
			$(t).siblings('.error_emptyness').removeClass('invisible');
			// Рамки полей окрашиваются в красный
			$(t).siblings('.inner-input-box').addClass('incorrect-input-style');
		}
	});

	return correctFlag;
}

// Назначение функций элементам DOM-дерева при загрузке страницы
$(function() {
	
	// Проверка полей при отправке формы
	$('.data-send').on('click', function() {
		return checkInputs();
	});
});
*/
/*****************************************************************************************************/
/*****************************************************************************************************/
/*****************************************************************************************************/

$(function() {
	// Валидация при потере фокуса 
	/*
	$('.search-filter__input').focusout(function() {
		var amount = $(this)[0].value;
		if (amount === "" || !(amount >= 0))
			$(this)[0].value = 0;
	}); */

	// Валидация при отправке формы
	$('.registration-form').on('submit', function(e) {
		e.preventDefault();
		var flag = 0;
		var name = $(this).find('input[name="feedback-author"]')[0].value;
		var email = $(this).find('input[name="email"]')[0].value;
		var message = $(this).find('textarea[name="feedback-text"]')[0].value;

		if (name === "") {
			flag--;
			$('.name-field-empty').removeClass('invisible');
			$(this).find('.inner-input-box__name').addClass('incorrect-input-style');
		} else {
			flag++;
			$('.name-field-empty').addClass('invisible');
			$(this).find('.inner-input-box__name').removeClass('incorrect-input-style');
		}

		if (email === "") {
			flag--;
			$('.email-field-empty').removeClass('invisible');
			$(this).find('.inner-input-box__email').addClass('incorrect-input-style');
		} else {
			flag++;
			$('.email-field-empty').addClass('invisible');
			$(this).find('.inner-input-box__email').removeClass('incorrect-input-style');
		}

		if (message === "") {
			flag--;
			$(this).find('.feedback-text-area__input').addClass('incorrect-input-style');
		} else {
			flag++;
			$(this).find('.feedback-text-area__input').removeClass('incorrect-input-style');
		}

		console.log(name, email, message);
		if(3 == flag)
			this.submit();
	})
});