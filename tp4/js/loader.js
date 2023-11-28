let percent = document.querySelector("#porcentaje");
let counter =0;
setInterval(()=>{// Establece un intervalo que ejecutará la función que sera cada 30 milisegundos (,30). 
    if(counter == 100){ //Comprueba si el valor de counter ha alcanzado 100. Si es así, se detiene el intervalo utilizando clearInterval()
        clearInterval();
    }else{
        counter +=1; //incrementa el valor de porcentaje en 1
        percent.innerHTML=`${counter}` + '%' //lo muestra en pantalla
    }

},30);

  window.addEventListener('load', () => { //cuando carga por completo la pagina
    //oculta el contenedor_loader
    const contenedor_loader = document.querySelector("#contenedor-loader");
    contenedor_loader.style.visibility="hidden";  });