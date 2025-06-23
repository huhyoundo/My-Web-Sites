// AJAX TEST

jQuery(document).ready(function ($) {
	'use strict';
	// Функция отправки форм.
	$('.wplb_holder').on('submit', 'form', function (ev) {
		// Определяем какую форму пользователь заполнил.
		let this_is = $(this);
		
		// Определяем кнопку.
		let button = $(this).find('input[type="submit"]');
		
		// Определяем тип формы.
		let type = $(this).attr('data-type');
		
		// Отправляем Ajax запрос в WordPress.
		$.ajax({

			// Путь к файлу admin-ajax.php.
			url: wplb_ajax_obj.ajaxurl,

			// Создаем объект, содержащий параметры отправки.
			data: {

				// Событие к которому будем обращаться.
				'action': 'wplb_ajax_request',

				// Передаём тип формы.
				'type': type,
				
				// Передаём значения формы.
				'content': $(this).serialize(),

				// Используем nonce для защиты.
				'security': wplb_ajax_obj.nonce,

				// Перед отправкой Ajax запроса.
				beforeSend: function () {
					
					// Спрячем кнопку и аокажем что скрипт работает.
					button.hide();
					this_is.find('.wplb_alert').hide();
					this_is.find('.wplb_loading').show();
				}
			}
			
		})
		.always(function() {
			// Выполнять после каждого Ajax запроса
			
			this_is.find('.wplb_loading').hide();
			
		})
		.done(function(data) {
			// Функция для работы с обработанными данными.

            console.log(data);
			
			// Переменная $reslut будет хранить результат обработки.
			let $result = JSON.parse(data);

			// Проверяем какой статус пришел
			if($result.status == false){

				//Пришла ошибка, скрываем не нужные элементы и возвращаем кнопку.
				this_is.find('.wplb_alert').addClass('wplb_alert_error').html($result.content).show();
				
				button.show();

			}else{
				setTimeout(function() {
                document.location.href = "https://inflo.kr/";
              },  500);
				// Пользователь авторизован, покажем ему сообщение.
				//$('.wplb_holder').addClass('wplb_alert wplb_signon').html('<p style="margin-bottom:3px;"><strong>Добро пожаловать!</strong></p>Ajax выполнил свою работу, вы в системе! Перезагрузите страницу и убедитесь.');
			}
			
		})
		.fail(function(errorThrown) {
			// Читать ошибки будем в консоли если что-то пойдет не по плану.
			
			console.log(errorThrown);
			
		});

		// Предотвращаем действие, заложенное в форму по умолчанию.
		ev.preventDefault();
	});

});
