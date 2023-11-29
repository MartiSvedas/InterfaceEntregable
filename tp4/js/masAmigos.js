
document.addEventListener("DOMContentLoaded", function () {
  
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let text3 = document.getElementById("text3");
    let text4 = document.getElementById("text4");
  
    let texts = [text1, text2, text3, text4];
  
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
  
    const vista = new IntersectionObserver(entries => { // instancia de IntersectionObserver llamada vista. 
      //Esta instancia observa cambios en la intersección de elementos con el viewport (la parte visible de la página en la ventana del navegador).
      //se ejecuta cada vez que un elemento observado entra o sale de la vista (viewport).
      entries.forEach(entry => { // entries es un array que contiene información sobre cada elemento observado (entry).
        if (entry.isIntersecting) {  //verifica si el elemento entry esta siendo observado

          // indexOf busca el elemento en el array y devuelve su índice. Este índice se utiliza para determinar qué elemento está actualmente en la vista.
          const index = texts.indexOf(entry.target);  
  
          [img1, img2, img3, img4].forEach(img => (img.style.opacity = 0)); //establece la opacidad inicial de 0
          [text1, text2, text3, text4].forEach(title => (title.style.opacity = 0)); //hace lo mismo con los textos
          switch (index) {
            case 0: //en caso de que el indice sea 0 realizo los cambios correspondiente mostrando u ocultando los elementos. Se repite con todos los casos(case 1, case 2 y case 3)
              img1.style.opacity = 1;
              text1.style.opacity = 1;
              break;
            case 1:
              img2.style.opacity = 1;
              text1.style.opacity = 0;
              text2.style.opacity = 1;
              break;
            case 2:
              img3.style.opacity = 1;
              text3.style.opacity = 1;
              text2.style.opacity = 0;
              break;
            case 3:
              img4.style.opacity = 1;
              text3.style.opacity = 0;
              text4.style.opacity = 1;
              break;
            default:
              break;
          }
        }
      });
    });
  
    texts.forEach(text => { //se observa cada elemento de texto en el array texts utilizando vista.observe(text);.
      // Esto asegura que la función se ejecute cada vez que uno de estos elementos entre en la vista.
      vista.observe(text);
    });
  
  
    
  });