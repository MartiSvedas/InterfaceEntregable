
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

function onMouseDown(e){
    let isMouseDown = true;
    let clickFicha = findClickedFicha(e.layerX, e.layerY-(219));
    console.log(e.layerY);
    if(clickFicha!=null){
        clickFicha.setFill('rgba(0, 0, 0, 255)');
    }
    drawFicha();
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