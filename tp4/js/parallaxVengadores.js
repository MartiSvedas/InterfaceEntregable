
const layers = document.querySelectorAll('.parallax2Layer');
const container= document.querySelector('.parallax2Container');

container.addEventListener('mousemove', (event) => { //cuando se mueve el mouse
  const mouseX = event.clientX; //coordenada del mouse en ejeX
  const mouseY = event.clientY;//coordenada del mouse en ejeY

  layers.forEach((layer, index) => { //por cada una de mis imagenes 
    //desplazamiento horizontal deseado
    const offsetX = (index + 1) * 90; // Ajusta según la separación deseada entre las capas
    //desplazamiendo vertical deseado
    const offsetY = (index + 1) * 90; // Ajusta según la separación deseada entre las capas

    //calculo del desplazamoento en pixeles de la capa teniendo en cuenta la posicion del raton
    //window.innerWidth y window.innerHeight toman en cuenta la posicion del raton segun el tamaño de la ventana
    //se le resta 0.5 para que este centralizado
    const translateX = (mouseX / window.innerWidth - 0.5) * offsetX;
    const translateY = (mouseY / window.innerHeight - 0.5) * offsetY;

    //aplica la transformacion, el desplazamiento, a cada imagen
    layer.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
});

// Cuando el mouse no se está moviendo, reseteamos la transformación
document.addEventListener('mouseout', () => {
  layers.forEach((layer) => {
    layer.style.transform = 'translate(0, 0)';
  });
});


