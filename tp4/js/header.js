window.onscroll = function() {
    let header = document.querySelector('.fondo');
    let logo = document.querySelector('.logo');
    // let logoPequeño=document.querySelector('.logoPequeño')
    let menuHamburguesa = document.querySelector('.btn_menu');
    let button = document.querySelector('.btn_comprar');
    if (window.pageYOffset > 70) { 
        header.style.height='67px';
        menuHamburguesa.style.top= '-4px';
        menuHamburguesa.style.transform='scale(0.9)';
        button.style.transform= 'scale(0.8)';
        button.style.top='-4px';
        logo.style.transform = 'scale(0.3)';
        logo.style.top='-196px';
        logo.style.position='fixed'
    }else {
        header.style.height='';
        menuHamburguesa.style.top= '';
        menuHamburguesa.style.transform='';
        logo.style.transform = 'scale(1)';
        logo.style.top='';
        button.style.transform= '';
        button.style.top='';
    }
  };

