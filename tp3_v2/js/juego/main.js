
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let offsetX = 11;
let offsetY = 190;
let tab = new Tablero(context, 6, 7, 'rgba(100, 0, 100, 255)', 35);
let fichas=[];
let fichasJug1 = [];  
let fichasJug2 = [];
let posicionY=50;
let posicionXJug1= 90;
let posicionXJug2= 900;

let mins = 4;
let secs = 0;
let timer = null;

let turnoJug1 = true;
let juegoIniciado=false;
let isMouseDown = false;
let lastClickedFicha;
let gameOver = false;

let textoEmpezar = document.getElementById("textoEmpezarJuego");
textoEmpezar.innerHTML="Elija debajo las fichas de cada jugador";
let textoNoEmpezar=document.getElementById("primeroElijaJugador1");

const btnJugar = document.getElementById("btnJugar");
const botonesJ1 = document.querySelectorAll('.btn_fichas');
const botonesJ2 = document.querySelectorAll('.btn_fichas0');

let imgJugador1=null;
const imageJug1 = new Image();
let imgJugador2=null;
const imageJug2 = new Image();

let imgSeleccionadaJugador1=null;

botonesJ1.forEach(function (boton) {
    boton.addEventListener('click', function() {
        const img = boton.querySelector("img");
        const imgSrc = img.getAttribute("src");

        if (imgSeleccionadaJugador1) {
     
            imgSeleccionadaJugador1.parentNode.style.border = 'initial';
        }
        if(juegoIniciado==false){
        imgSeleccionadaJugador1 = img;

        imgJugador1 = imgSrc;

        boton.style.border = '4px solid red';

        imageJug1.src = imgJugador1;
        }else{
            textoNoEmpezar.innerHTML="Ya tiene seleccionada su ficha"
        }
    });
});

botonesJ2.forEach(function (boton) {
    boton.addEventListener('click', function() {
        const img = boton.querySelector("img");
        const imgSrc = img.getAttribute("src");
    if(imgJugador1!=null ){
        if(juegoIniciado==false){
         imgJugador2 = imgSrc;
         textoNoEmpezar.innerHTML="";
         boton.style.border = '4px solid red'; 

         imageJug2.src = imgJugador2;

        }else{
            textoNoEmpezar.innerHTML="Ya tiene seleccionada su ficha"
        }           
    }else{
    textoNoEmpezar.innerHTML="Primero debe elejir el Jugador 1"
}  
    });
});

btnJugar.addEventListener('click', function () {
    // Check if both players have selected their tokens
    if (imgJugador1 && imgJugador2) {
       // Promise.all([cargarImagen(imageJug1), cargarImagen(imageJug2)]).then(() => {
            addFichas();
            drawFichasJugador();
            textoEmpezar.innerHTML = "";
            juegoIniciado = true;
            //drawTemporizador();
            timer = setInterval(iniciarTemporizador, 1000);

        //});
    } else {
        // Display a message to inform the players to select their tokens first
        textoNoEmpezar.innerHTML = "Ambos jugadores deben seleccionar una ficha antes de empezar.";
    }
});

function iniciarTemporizador(){
    drawTemporizador();
    console.log(mins, secs);
    if(mins==0 && secs==0){
        clearInterval(timer);
        gameOver = true;
        tab.jug.setEmpate();
    }else{
        clearCanvas();
        if(secs==0){
            mins--;
            secs=59;
        } else{
            secs--;
        }
    }
}

function drawTemporizador(){
    let tiempoRestante = String(mins).padStart(2,'0') + ':' + String(secs).padStart(2,'0');
    context.fillStyle = "rgba(242,75,235,1)";
    context.fillRect(20, 40, 20, 60);
    context.beginPath();
    context.stroke();
    context.font = "30px 'M PLUS Rounded 1c', sans-serif";
    context.fillStyle = 'white';
    context.textAlign = "center";
    context.fillText(tiempoRestante, (20+(20/2)), (40+60/1.4));
}

/*function cargarImagen(image) {
    return new Promise((resolve) => {
        image.onload = resolve;
    });
}*/

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

function createFicha(x, y, playerList, imgFicha, fila, columna) {
    let ficha = new Ficha(x, y, 35, context, imgFicha);
    ficha.setFila(fila);
    ficha.setColumna(columna);
    playerList.push(ficha);
    fichas.push(ficha);
}

function clearCanvas(){
    let fill = "rgba(2,48,82,255)";
    context.fillStyle = fill;
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    tab.draw();
    drawTemporizador();
}

function onMouseDown(e) {
    if ((!turnoJug1 && fichasJug2.length === 0)||gameOver) {
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
    if(gameOver){
        return;
    }
    if (lastClickedFicha != null) {
        let columaSeleccionada = null;
        isMouseDown = false;
        for (let i = 0; i < tab.arrDeColumnas.length; i++) {
            const indicatorX = 190 + i * tab.columnasWidth;
            if (e.layerX >= indicatorX && e.layerX < indicatorX + tab.columnasWidth) {
                columaSeleccionada = i;
                break;
            }
        }
        if (columaSeleccionada !== null  && e.layerY<90+offsetY) {
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
                if (tab.jug.verificarSiEsGanador(idFicha)) {
                    gameOver = true;
                }
            }
        }
        else{
            lastClickedFicha.resetPosition();
            drawFichasJugador();
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
