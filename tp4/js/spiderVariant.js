
document.addEventListener('DOMContentLoaded', function () {
const gwen = document.getElementById("variantGwen");
const peter=document.getElementById("variantPeter");
const miles=document.getElementById("variantMiles");
const bordes = document.querySelectorAll(".borde");
const fondo=document.querySelector(".fondoVariant");

gwen.addEventListener('mouseenter', () => { //al hacerle un hover gwen
    //realizo cambios en el estilo de cada elemento
    fondo.style.backgroundColor = '#FF00A7'; // Cambia el color de fondo al hacer hover
    fondo.style.opacity='0.2';
    bordes.forEach(borde => {
        borde.style.backgroundColor = '#C92B94'; // Cambia el color de los bordes al hacer hover
    });
    gwen.style.transform = 'scale(1.2)';
    peter.style.filter=' blur(5px)';
    peter.style.transform='scale(0.7)';
    miles.style.filter=' blur(5px)';
    miles.style.transform='scale(0.7)';
});

gwen.addEventListener('mouseleave', () => {//cuando saco el mouse de encima de gwen
    //retorno a los valores iniciales
    fondo.style.background = ''; 
    fondo.style.opacity='';
    bordes.forEach(borde => {
        borde.style.backgroundColor = ''; 
    });
    gwen.style.transform = 'scale(1)';
    peter.style.filter='';
    peter.style.transform='scale(1)';
    miles.style.filter='';
    miles.style.transform='scale(1)';
});

peter.addEventListener('mouseenter',()=>{ // hover sobre peter
    fondo.style.backgroundColor = '#2552C8'; // Cambia el color de fondo al hacer hover
    fondo.style.opacity='0.2';
    bordes.forEach(borde => {
        borde.style.backgroundColor = '#2552C8'; // Cambia el color de los bordes al hacer hover
        borde.style.opacity='0.9'; //cambia la opacidad del borde
    });
    peter.style.transform = 'scale(1.2)';
    gwen.style.filter=' blur(5px)';
    gwen.style.transform='scale(0.7)';
    miles.style.filter=' blur(5px)';
    miles.style.transform='scale(0.7)';

});

peter.addEventListener('mouseleave', () => { //saco mouse sobre peter
    fondo.style.background = ''; 
    fondo.style.opacity='';
    bordes.forEach(borde => {
        borde.style.backgroundColor = ''; 
        borde.style.opacity='';
    });
    peter.style.transform = 'scale(1)';
    gwen.style.filter='';
    gwen.style.transform='scale(1)';
    miles.style.filter='';
    miles.style.transform='scale(1)';
});

miles.addEventListener('mouseenter',()=>{//hago hover sobre Miles
    fondo.style.backgroundColor = '#000000'; // Cambia el color de fondo al hacer hover
    fondo.style.opacity='0.2';
    bordes.forEach(borde => {
        borde.style.backgroundColor = '#304C71'; // Cambia el color de los bordes al hacer hover
    });
    miles.style.transform = 'scale(1.2)';
    gwen.style.filter=' blur(5px)';
    gwen.style.transform='scale(0.7)';
    peter.style.filter=' blur(5px)';
    peter.style.transform='scale(0.7)';

});

miles.addEventListener('mouseleave', () => { //saco mouse sobre miles
    //retorno a los valores iniciales
    fondo.style.background = ''; 
    fondo.style.opacity='';
    bordes.forEach(borde => {
        borde.style.backgroundColor = ''; 
    });
    miles.style.transform = 'scale(1)';
    peter.style.filter='';
    peter.style.transform='scale(1)';
    gwen.style.filter='';
    gwen.style.transform='scale(1)';
});

});

