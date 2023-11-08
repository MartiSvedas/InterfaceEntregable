const btnright = document.getElementById("button-next")
const btnleft = document.getElementById("button-prev")

const slider = document.querySelector("#carrusel")

const slidersection = document.querySelector(".carruselLi")


btnright.addEventListener('click', ()=>{
   slider.scrollLeft += slider.offsetWidth
    slider.classList.toggle("activeder")


})
btnleft.addEventListener('click', ()=>{    
    
    slider.scrollLeft -= slider.offsetWidth;
    slider.classList.toggle("activeizq")


})
slider.addEventListener('animationend', () => {
    slider.classList.remove("activeder");
    slider.classList.remove("activeizq");
});