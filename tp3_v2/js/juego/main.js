
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let offsetX = 11;
let offsetY = 190;
let tab = new Tablero(context, 6, 7, 'rgba(100, 0, 100, 255)', 35);
let fichas = [];

let fichasJug1 = [];  
let fichasJug2 = [];
let posicionY=50;
let posicionXJug1= 90;
let posicionXJug2= 900;
let turnoJug1 = true;

let isMouseDown = false;
let lastClickedFicha;

const imageJug1 = new Image();
imageJug1.src = 'img/juego/Fichas/catOp1.png';
const imageJug2 = new Image();
imageJug2.src = 'img/juego/Fichas/dogOp5.jpg';




Promise.all([cargarImagen(imageJug1), cargarImagen(imageJug2)]).then(() => {
    addFichas();
    drawFichasJugador();
});

function cargarImagen(image) {
    return new Promise((resolve) => {
        image.onload = resolve;
    });
}

function addFichas() {
    createFicha(posicionXJug1, posicionY, fichasJug1, imageJug1, null, null);
    createFicha(posicionXJug2, posicionY, fichasJug2, imageJug2, null, null);
    posicionY += 28;
    
    if (fichasJug1.length < 21 && fichasJug2.length < 21) {
        addFichas();
    }
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

function createFicha(x, y, playerList, imgFicha, fila, columna) {
    let ficha = new Ficha(x, y, 35, context, imgFicha);
    ficha.setFila(fila);
    ficha.setColumna(columna);
    playerList.push(ficha);
    fichas.push(ficha);
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

    let clickedFicha = findClickedFicha(e.layerX - offsetX, e.layerY - offsetY);

    if (clickedFicha != null) {
        lastClickedFicha = clickedFicha;
    }
    if(clickedFicha.getUsada()){
       lastClickedFicha = null; 
    }
    drawFichasJugador();
}


function onMouseUp(e) {
    if (lastClickedFicha != null) {
        let columaSeleccionada = null;
        isMouseDown = false;
        for (let i = 0; i < tab.arrDeColumnas.length; i++) {
            const indicatorX = 200 + i * tab.columnasWidth;
            const indicatorWidth = tab.columnasWidth;
            if (e.layerX >= indicatorX && e.layerX < indicatorX + indicatorWidth) {
                columaSeleccionada = i;
                break;
            }
        }
        if (columaSeleccionada !== null) {
            if (tab.isColumnFull(columaSeleccionada)) {
                lastClickedFicha.resetPosition();
            } else {
                let image = imageJug1;
                let listaJug = fichasJug1;
                let idFicha = 1;
                if(!turnoJug1){
                    image = imageJug2;
                    listaJug = fichasJug2;
                    idFicha = 2;
                }
                const result = tab.dropFicha(columaSeleccionada, image, idFicha);
                
                if (result) {
                    const fila = result.fila;
                    const columna = result.columna;
                    const x = tab.a + result.column * tab.columnasWidth + tab.columnasWidth / 2;
                    const y = tab.b + result.row * tab.filasHeight + tab.filasHeight / 2;
                    lastClickedFicha.setPosition(tab.matriz[result.fila][result.columna].getPosX(), tab.matriz[result.fila][result.columna].getPosY());
                    lastClickedFicha.setUsada(true);
                    createFicha(x, y, listaJug, image, fila, columna);
                    drawFichasJugador();
                    turnoJug1 = !turnoJug1;
                }
            }
        }
        else{
            lastClickedFicha.resetPosition();
        }
        lastClickedFicha = null;
    }
}

function onMouseMove(e) {
    if (isMouseDown && lastClickedFicha != null && turnoJug1) {
        lastClickedFicha.setPosition(e.layerX - offsetX, e.layerY - offsetY);
        drawFichasJugador(fichasJug1);
    } else if (isMouseDown && lastClickedFicha != null && !turnoJug1) {
        lastClickedFicha.setPosition(e.layerX - offsetX, e.layerY - offsetY);
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
