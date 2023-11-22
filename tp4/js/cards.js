var elScroll = document.querySelectorAll('.cardsJuegoSM');

document.onscroll = function() { 
    elScroll.forEach(elScroll => {
    var positionEl = elScroll.getBoundingClientRect(); 
    var alturaEl = positionEl.top; 
  
    if(alturaEl < 500) { 
        elScroll.classList.add('active'); 
    }
});
}