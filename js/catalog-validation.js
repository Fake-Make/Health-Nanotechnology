$(function() {
	// Валидация при потере фокуса
	$('.search-filter__input').focusout(function() {
		var amount = $(this)[0].value;
		if (amount === "" || !(amount >= 0))
			$(this)[0].value = 0;
	});

	// Валидация при отправке формы
	$('.search-filter').on('submit', function(e) {
		e.preventDefault();
		var min = $(this).find('.search-filter__input')[0].value;
		var max = $(this).find('.search-filter__input')[1].value;
		// Проверка на пустоту, неотрицательость и логичность
		if (min != "" && max != "" && min >= 0 && max >= 0 && min <= max) {
			this.submit();
		}			
	})
});