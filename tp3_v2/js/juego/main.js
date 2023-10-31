
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let tab = new Tablero(context, 6, 7, randomRGBA(), 35);
let fichas = [];

let fichasJug1 = []; // Array for player 1's tokens
let fichasJug2 = [];
let posicionY=50;
let posicionXJug1= 90;
let posicionXJug2= 900;
let turnoJug1 = true;

let isMouseDown = false;
let lastClickedFicha;

addFichas();
tab.draw();

function addFichas() {
    createFicha(posicionXJug1, posicionY, fichasJug1);
    createFicha(posicionXJug2, posicionY, fichasJug2);
    posicionY = posicionY + 36;

    if (fichasJug1.length < 21 && fichasJug2.length < 21) {
        addFichas();
    }

    drawFichasJugador();
}

function drawFichasJugador() {
    clearCanvas();
    for (let i = 0; i < fichasJug1.length; i++) {
        fichasJug1[i].draw();
    }
    for (let i = 0; i < fichasJug2.length; i++) {
        fichasJug2[i].draw();
    }
}

function drawFicha(){
    clearCanvas();
    for(let i=0; i<fichas.length; i++){
        fichas[i].draw();    
    }
}

function createFicha(x, y, playerList) {
    let posX = x;
    let posY = y;
    let size = 35;
    let color = randomRGBA();
    let ficha = new Ficha(posX, posY, size, color, context);
    playerList.push(ficha);
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

function onMouseDown(e) {
    if (!turnoJug1 && fichasJug2.length === 0) {
        return;
    }

    isMouseDown = true;

    let clickedFicha = findClickedFicha(e.layerX, e.layerY - 190);

    if (clickedFicha != null) {
        lastClickedFicha = clickedFicha;
    }
    drawFichasJugador();
}


function onMouseUp(e) {
    isMouseDown = false;

    if (lastClickedFicha != null) {
        lastClickedFicha.setPosition(e.layerX, e.layerY - 190);

        if (turnoJug1) {
            drawFichasJugador(fichasJug1);
        } else {
            drawFichasJugador(fichasJug2);
        }

        turnoJug1 = !turnoJug1;
    }
}

function onMouseMove(e) {
    if (isMouseDown && lastClickedFicha != null && turnoJug1) {
        lastClickedFicha.setPosition(e.layerX, e.layerY - 190);
        drawFichasJugador(fichasJug1);
    } else if (isMouseDown && lastClickedFicha != null && !turnoJug1) {
        lastClickedFicha.setPosition(e.layerX, e.layerY - 190);
        drawFichasJugador(fichasJug2);
    }
}

function findClickedFicha(x, y) {
    let fichasJugador;

    if (turnoJug1) {
        fichasJugador = fichasJug1;
    } else {
        fichasJugador = fichasJug2;
    }

    for (let i = 0; i < fichasJugador.length; i++) {
        const fichaSelec = fichasJugador[i];
        if (fichaSelec.isPointInside(x, y)) {
            return fichasJugador[i];
        }
    }
}

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);
