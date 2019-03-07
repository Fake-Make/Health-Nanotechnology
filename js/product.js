$(function() {
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
	});

	// Валидация при потере фокуса
	$('.products-amount__input').focusout(function() {
		var amount = $(this)[0].value;
		if (!(amount >= 1) || amount % 1 != 0)
			$(this)[0].value = 1;
	});

	// Валидация при отправке формы
	$('.product__form').on('submit', function(e) {
		e.preventDefault();
		var amount = $(this).find('.products-amount__input')[0].value;
		if (amount >= 1 && amount % 1 == 0)
			this.submit();
	})
});