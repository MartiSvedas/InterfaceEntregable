const btnright = document.getElementById("button-next")
const btnleft = document.getElementById("button-prev")

const slider = document.querySelector("#carrusel")

const slidersection = document.querySelector(".carruselLi")


btnright.addEventListener('click', ()=>{
    slider.scrollLeft += slider.offsetWidth;
   setTimeout( slider.classList.toggle("activeder"),100)
    
})
btnleft.addEventListener('click', ()=>{    
    
    slider.scrollLeft -= slider.offsetWidth;
    setTimeout( slider.classList.toggle("activeizq"),100)


})