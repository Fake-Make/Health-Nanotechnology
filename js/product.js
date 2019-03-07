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
});