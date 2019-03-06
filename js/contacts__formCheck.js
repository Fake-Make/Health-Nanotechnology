// Функция проверки всех полей на форме
function checkInputs() {
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