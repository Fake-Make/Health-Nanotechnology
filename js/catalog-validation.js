$(function () {
	// Валидация при потере фокуса
	$('.search-filter__input').focusout(function () {
		var amount = $(this).val();
		if (amount === "" || !(parseInt(amount, 10) >= 0))
			$(this)[0].value = 0;
	});

	// Валидация при отправке формы
	$('.search-filter').on('submit', function () {
		var min = $(this).find('.search-filter__input').val();
		var max = $(this).find('.search-filter__input')[1].value;
		// Проверка на пустоту, неотрицательость и логичность
		if (min === "" || max === "" || min < 0 || max < 0 || parseInt(min, 10) > parseInt(max, 10))
			return false;
	})
});