// Функция для исправления отображения флекс-бокса
function flexFix() {
	if ($(window).width() > phoneSize)
		var n = 3;
	else 
		var n = 2;

	// Если количество элементов не кратно n, то дополняется до кратности n
	if ($('ul.categories').children().length % n) {
		// Перед запуском удаляются лишние фикс-элементы
		$('.category.hidden').remove();
		while ($('ul.categories').children().length % n)
			$('ul.categories').append('<li class="category hidden"><a class="category__link"><img class="category__image"></a></li>');
	}
}

// Когда документ загрузился, добавим функции элементам
$(function() {
	// Починка флекс-отображения категорий при загрузке страницы
	flexFix();

	$(window).resize(function() {
		flexFix();
	});
});