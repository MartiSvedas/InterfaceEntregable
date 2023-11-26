document.addEventListener('scroll', function() {
    let seccion = document.querySelector('.seccionGwenStacy');
    const scrollPosition = seccion.getBoundingClientRect().top;

    // Parallax effect
    const parallaxElements = document.querySelectorAll('.parallax-elementGS');
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const translateY = (scrollPosition * speed/100);
        console.log(translateY);
        element.setAttribute('style', 'transform: translateY( ' + translateY + 'px)');
    });
});