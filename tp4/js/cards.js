//selecciono las cards y las guardo en una variable
var cards = document.querySelectorAll('.cardsJuegoSM');
//agrego funcion al hacer scroll
document.addEventListener('scroll', function() {
    //para cada card paso como parametro a esta misma y el indice del arr (q seria el nro q corresponde dependiendo de la card)
    cards.forEach((card, index) => {
        //creo variable que tiene la posicion de la card
        var pos = card.getBoundingClientRect();
        var altura = pos.top; //creo variable con la posicion superior de la card
        if (altura < 550) { //mientras q la pos este a menos de 550px de la parte de arriba
            //le agrego un transitionDelay a la card, q depende del nro de card q es
            card.style.transitionDelay = index * 0.5 + 's';
            //le agrego clase active para agregarles los estilos q corresponden
            card.classList.add('active');
        }
    });
});