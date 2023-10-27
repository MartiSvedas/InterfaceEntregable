
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let canvasWidth = canvas.width
let canvasHeight = canvas.height

let tab = new Tablero(context, 6, 7, randomRGBA(), 35);
let fichas = [];
let posicion=50;

addFichas();
tab.draw();

function addFichas() {    
    createFicha(90, posicion);
    createFicha(900, posicion);
    posicion= posicion+25;
    if (fichas.length < 42) {
        addFichas();
    }
    drawFicha();
}

function drawFicha(){
    for(let i=0; i<fichas.length; i++){
        fichas[i].draw();    
  }
}

function createFicha(x, y) {
    let posX = x;
    let posY = y;
    let size = 35;
    let color = randomRGBA();
    let ficha = new Ficha(posX, posY, size, color, context);
    fichas.push(ficha);

}

function randomRGBA() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}







