window.onload = function () {
	var imgArr = document.getElementsByClassName('my__img');

	var modalWindow = document.getElementById('my__modal');
	var modalImg = document.getElementById('img01');
	var caption =document.getElementById('caption');
	var span = document.getElementById('close');
	var modalBlock = document.getElementById('modal__block');

	for(i=0;i<imgArr.length;i++){
		var picture = imgArr[i];
		picture.onclick = function(){
			openImg(this);
		}
	}
	function openImg(pic){
		modalWindow.style.display='block';
		modalBlock.style.transform = 'translateY(0%)';
		modalImg.src = pic.src;
		modalImg.style.width = '700px';
		modalImg.style.height = '800px';
		modalImg.alt = pic.alt;
	  caption.innerHTML = modalImg.alt;
	}

	function close(){
		modalWindow.style.display ='none';
	}
	span.onclick = function(){
		modalBlock.style.transform = 'translateY(-500%)';
		setTimeout(	close, 500);
	}

	modalWindow.onclick = function(){
		modalBlock.style.transform = 'translateY(-500%)';
		setTimeout(	close, 500);
	}
}

//------------------------Плавная прокрутка------------------------------//

$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

//-----------------------top---------------------------------//

$(function() {
    $(window).scroll(function() {
 
        if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
        } else {
        $('#toTop').fadeOut();
 
        }
    });
 
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

/*------------------------ajax------------------------------*/

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});
