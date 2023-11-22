var elScroll = document.querySelectorAll('.cardsJuegoSM');

document.onscroll = function() { //ao rolar a tela...
    elScroll.forEach(elScroll => {
    var positionEl = elScroll.getBoundingClientRect(); //pega valores da posição do elemento
    var alturaEl = positionEl.top; //pega distancia do topo da tela
  
    if(alturaEl < 300) { //se a distancia do topo for menor que 300
        elScroll.classList.add('active'); //adiciona a classe .scroll--show
    }
});
}