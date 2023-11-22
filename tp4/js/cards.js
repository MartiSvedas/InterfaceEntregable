var elScroll = document.querySelectorAll('.cardsJuegoSM');
let time = -1;

document.onscroll = function() { 
    elScroll.forEach(elScroll => {
    time+=1;
    setTimeout(function(){
        var positionEl = elScroll.getBoundingClientRect(); 
        var alturaEl = positionEl.top; 
      
        if(alturaEl < 500) { 
            elScroll.classList.add('active'); 
        }
    }
        
    ,time*1000);
    
});
}