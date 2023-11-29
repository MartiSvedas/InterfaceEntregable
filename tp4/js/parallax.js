"use strict"

function castParallax() {
	window.addEventListener("scroll", function(event){//al ahcer scroll

		var top = this.pageYOffset; //obtiene la posición vertical de desplazamiento de la página en ese momento específico.
		var gwen= document.getElementById('parallax1Layer3');
		var layers = document.getElementsByClassName("parallaxLayer");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) { //recorro todas mis capas
			layer = layers[i]; //obtengo cada capa
			speed = layer.getAttribute('data-speed'); //obtiene la velocidad de la capa desde el atributo data-speed
			var yPos = -(top * speed / 100); //calcula la nueva posicion inicial (yPos) para la capa .Determina cuánto se desplaza la capa verticalmente en relación con el desplazamiento de la página
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)'); //establece el estilo de de transformacion (translate3D) en la capa para aplicar el efecto parallax
		}
		gwen.setAttribute('style', 'transform: translate3d( ' +- yPos + 'px,0px, 0px)'); //establece el estilo de de transformacion (translate3D) en la capa para aplicar el efecto parallax

		document.querySelector('.btn_menu').classList.add('mostrar');
		document.querySelector('.btn_comprar').classList.add('mostrar');
		document.querySelector('.fondo').classList.add('mostrar');
	});
}

document.body.onload = castParallax();

document.addEventListener("DOMContentLoaded", function(){ //al cargar la pagina
	//muestro cada imagen
	document.getElementById('parallax1Layer0').classList.add('mostrar');
	document.getElementById('parallax1Layer1').classList.add('mostrar');
	document.getElementById('parallax1Layer2').classList.add('mostrar');
	document.getElementById('parallax1Layer3').classList.add('mostrar');
	document.getElementById('parallax1Layer4').classList.add('mostrar');
	document.getElementById('parallax1Layer5').classList.add('mostrar');
	document.getElementById('parallax1Layer8').classList.add('mostrar');
	document.getElementById('parallax1Layer7').classList.add('mostrar');
	document.getElementById('parallax1Layer6').classList.add('mostrar');


})