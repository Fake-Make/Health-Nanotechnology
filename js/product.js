// Когда документ загрузился, добавим функции элементам
$(function() {
	$('.amount-tumbler__button_left').on('click', function() {
		var a = $(this).siblings('.products-amount__input')
		if (!(a[0].value >= 1) || a[0].value % 1 != 0)
			a[0].value = 1;

		if (a[0].value > 1) 
			a[0].value = +a[0].value - 1
	});

	$('.amount-tumbler__button_right').on('click', function() {
		var a = $(this).siblings('.products-amount__input')
		if (!(a[0].value >= 1) || a[0].value % 1 != 0)
			a[0].value = 1;

		a[0].value = +a[0].value + 1
	});

	$('.product__form').on('submit', function(e) {
		e.preventDefault();
		var amount = $(this).find('.products-amount__input')[0].value;
		if (amount >= 1 && amount % 1 == 0)
			this.submit();
	})
});