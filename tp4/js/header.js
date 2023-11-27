window.onscroll = function() {
    let header = document.querySelector('.fondo');
    let logo = document.querySelector('.logo');
    let logoPequeño=document.querySelector('.logoPequeño')
    let menuHamburguesa = document.querySelector('.btn_menu');
    let button = document.querySelector('.btn_comprar');
    if (window.pageYOffset > 70) { 
        header.style.height='67px';
        menuHamburguesa.style.top= '-4px';
        menuHamburguesa.style.transform='scale(0.9)';
        button.style.transform= 'scale(0.8)';
        button.style.top='-4px';
        logo.style.transform = 'scale(0.0)';
        logoPequeño.classList.add('mostrard');
    }else {
        header.style.height='';
        menuHamburguesa.style.top= '';
        menuHamburguesa.style.transform='';
        logo.style.transform = 'scale(1)';
        logo.style.position='absolute';
        logo.style.marginTop=''
        button.style.transform= '';
        button.style.top='';
        logoPequeño.classList.remove('mostrard');
    }
  };

let percent = document.querySelector("#porcentaje");
let counter =0;
setInterval(()=>{
    if(counter == 100){
        clearInterval;
    }else{
        counter +=1;
        percent.innerHTML=`${counter}` + '%'
    }

},30);

  window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector("#contenedor-loader");
    contenedor_loader.style.visibility="hidden";  });