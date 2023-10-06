const btnright = document.getElementById("button-next")
const btnleft = document.getElementById("button-prev")

const slider = document.querySelector("#carrusel")

const slidersection = document.querySelector(".carruselLi")


btnright.addEventListener('click', ()=>{
    slider.scrollLeft += slider.offsetWidth;

})
btnleft.addEventListener('click', ()=>{    
    
    slider.scrollLeft = slider.offsetWidth;

})