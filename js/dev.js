//encapsulando o slide e btn

var slider = $('#slider');
var siguinte = $('#btn-next');
var anterior = $('#btn-prev');

//movendo a imagem para o primeiro lugar

$('#slider section:last').insertBefore('#slider section:first');

//mostrando a primeira imagem
slider.css('margin-left','-'+100+'%');

//
function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider section:first').insertAfter('#slider section:last');
			slider.css('margin-left','-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider section:last').insertBefore('#slider section:first');
			slider.css('margin-left','-'+100+'%');
	});
}

siguinte.on('click',function(){

	moverD();

});


anterior.on('click',function(){

	moverI();

});

function autoplay(){
	interval = setInterval(function(){
		moverD();

	},4000);
}
autoplay();