$(function () {
	// Действие кнопки уменьшения количества товара
	// параллельно с валидацией
	$('.amount-tumbler__button_left').on('click', function () {
		var a = $(this).siblings('.products-amount__input')
		if (!(a.val() >= 1) || a.val() % 1 != 0)
			a.val(1);

		if (a.val() > 1)
			a.val(+a.val() - 1);
	});

	// Действие кнопки увеличения количества товара
	// параллельно с валидацией
	$('.amount-tumbler__button_right').on('click', function () {
		var a = $(this).siblings('.products-amount__input')
		if (!(parseInt(a.val()) >= 1) || a.val() % 1 != 0)
			a.val(1);

		a.val(+a.val() + 1);
	});

	// Валидация при потере фокуса
	$('.products-amount__input').focusout(function () {
		var amount = $(this).val();
		if (!(amount >= 1) || amount % 1 != 0)
			$(this).val(1);
	});

	// Валидация при отправке формы
	$('.product__form').on('submit', function () {
		var amount = $(this).find('.products-amount__input').val();
		if (amount < 1 || amount % 1 !== 0)
			return false;
	})
});