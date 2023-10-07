"use strict"
let btn = document.querySelector("#registrobtn")
btn.addEventListener("click", active);
function active(event){
    event.preventDefault()   
    btn.classList.toggle("is_active")

}


let a=document.getElementById('registrobtn');
a.addEventListener('click',function (event)  {
  event.preventDefault(); 
  setTimeout(()=> location="index.html",900);
});