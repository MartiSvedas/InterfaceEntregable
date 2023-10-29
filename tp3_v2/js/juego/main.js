
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let tab = new Tablero(context, 6, 7, randomRGBA(), 35);
let fichas = [];
let fichasJug1 = [];
let fichasJug2 = [];
let posicionY=50;
let posicionXJug1= 90;
let posicionXJug2= 900;

let isMouseDown = false;
let lastClickedFicha;

addFichas();
tab.draw();

function addFichas() {
    createFicha(posicionXJug1,  posicionY);
    createFicha(posicionXJug2, posicionY);
    posicionY=posicionY+36;
    if (fichas.length < 42) {
        addFichas();
    }
    drawFicha();
}

function drawFicha(){
    clearCanvas();
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

function clearCanvas(){
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    tab.draw();
}

function onMouseDown(e){
    isMouseDown = true;
    if(lastClickedFicha!=null){
        lastClickedFicha = null;
    }

    let clickFicha = findClickedFicha(e.layerX, e.layerY-(190));
    console.log(e.layerY-200)
    if(clickFicha!=null){
        lastClickedFicha = clickFicha;
    }
    drawFicha();
}

function onMouseUp(e){
    isMouseDown = false;
}

function onMouseMove(e){
    if(isMouseDown && lastClickedFicha!=null){
        lastClickedFicha.setPosition(e.layerX, e.layerY-190);
        drawFicha();
    }
}

function findClickedFicha(x, y){
    for(let i=0; i<fichas.length; i++){
        const fichaSelec = fichas[i];
        if(fichas[i].isPointInside(x, y)){
            return fichas[i];
        }
        console.log(i);
    }
}

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);