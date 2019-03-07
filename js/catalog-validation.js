$(function() {/*
	// Действие кнопки уменьшения количества товара
	// параллельно с валидацией
	$('.amount-tumbler__button_left').on('click', function() {
		var a = $(this).siblings('.products-amount__input')
		if (!(a[0].value >= 1) || a[0].value % 1 != 0)
			a[0].value = 1;

		if (a[0].value > 1) 
			a[0].value = +a[0].value - 1
	});

	// Действие кнопки увеличения количества товара
	// параллельно с валидацией
	$('.amount-tumbler__button_right').on('click', function() {
		var a = $(this).siblings('.products-amount__input')
		if (!(a[0].value >= 1) || a[0].value % 1 != 0)
			a[0].value = 1;

		a[0].value = +a[0].value + 1
	}); */

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