document.addEventListener('scroll', function() {
    //llamo a la seccion donde se encuentran los cards
    let seccion = document.querySelector('.seccionGwenStacy');
    //creo una variable con el valor en Y de la seccion en la parte superior de la pantalla
    const scrollPosition = seccion.getBoundingClientRect().top;
    console.log(scrollPosition);
    //llamo a las cards q van a tener el efecto con su clase
    const parallaxElements = document.querySelectorAll('.parallax-elementGS');
    parallaxElements.forEach(element => {
        //creo variable speed con la velocidad asignada en cada card
        const speed = element.getAttribute('data-speed');
        //creo variable que va a transformar la posicion en Y de la card
        const translateY = (scrollPosition * speed/100); 
        element.setAttribute('style', 'transform: translateY( ' + translateY + 'px)');
    });
});