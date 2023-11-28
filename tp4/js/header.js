window.onscroll = function() { //cuando hago scroll en la ventana
    //obtengo header, logo, menuHamburguesa y boton
    let header = document.querySelector('.fondo');
    let logo = document.querySelector('.logo');
    let menuHamburguesa = document.querySelector('.btn_menu');
    let button = document.querySelector('.btn_comprar');
    //pageYOffset :representa el número de píxeles que el documento ha sido desplazado
    if (window.pageYOffset > 70) {  //si los pixeles desplazados son mas de 70px
        //realizo cambios de style a los respectivos elementos
        header.style.height='67px';
        menuHamburguesa.style.top= '-4px';
        menuHamburguesa.style.transform='scale(0.9)';
        button.style.transform= 'scale(0.8)';
        button.style.top='-4px';
        logo.style.transform = 'scale(0.2)';
        logo.style.top='-200px';
    }else { // si no, retorno a los valores iniciales 
        header.style.height='';
        menuHamburguesa.style.top= '';
        menuHamburguesa.style.transform='';
        logo.style.transform = 'scale(1)';
        logo.style.top='';
        button.style.transform= '';
        button.style.top='';
    }
  };

