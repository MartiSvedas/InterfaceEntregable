var cards = document.querySelectorAll('.cardsJuegoSM');

document.addEventListener('scroll', function() {
    cards.forEach((card, index) => {
        var pos = card.getBoundingClientRect();
        var altura = pos.top;
        if (altura < 550) {
            card.style.transitionDelay = index * 0.5 + 's';
            card.classList.add('active');
        }
    });
});