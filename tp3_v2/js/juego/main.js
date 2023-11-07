
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let offsetX = 11;
let offsetY = 190;
let tab = null;
let tabFilas=6;
let tabColumnas=7;
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
const cantEnLinea = document.getElementById("cantEnLinea");

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

//agrega eventListener al btnJugar
btnJugar.addEventListener('click', function () {
    //si los dos jugadores eligieron sus fichas, se llama a..
    if ((imgJugador1 && imgJugador2)&& !juegoIniciado) {
        const nroTablero = parseInt(cantEnLinea.value);
        tab = new Tablero(context, nroTablero, 'rgba(100, 0, 100, 255)'); //se crea el tablero
        addFichas(); //funcion para agregar fichas
        drawFichasJugador(); //funcion para dibujar fichas
        textoEmpezar.innerHTML = "";
        juegoIniciado = true; //se "inicia" el juego, seteando la variable a true
        timer = setInterval(iniciarTemporizador, 1000); //se declara timer y llama a la funcion que lo inicia
    } else { //si no se muestra texto 
        textoNoEmpezar.innerHTML = "Ambos jugadores deben seleccionar una ficha antes de empezar.";
    }
});

//inicio el temporizador del juego
function iniciarTemporizador(){
    drawTemporizador(); //dibujo el temporizador
    if(mins==0 && secs==0){ //si tanto los minutos como los segundos estan en 0
        clearInterval(timer); //vacio el intervalo para que no siga contando
        gameOver = true; //seteo gameOver a true
        tab.jug.setEmpate(); //muestro que los jugadores empataron
    }else{ //si no
        clearCanvas(); //llamo a clearCanvas para que los nros no se dibujen encima
        if(secs==0){ //si los segundos son == 0
            mins--; //disminuyo el min
            secs=59; //seteo segundos a 59
        } else{ //si no
            secs--;//solo disminuyo el segundo ya que corren sobre el mismo min
        }
    }
}

//dibujo el temporizador
function drawTemporizador(){
    //creo variable de texto con los min y seg
    let tiempoDeJuego = String(mins) + ':' + String(secs).padStart(2,'0');
    context.font = "40px Arial"; //seteo tamaño y fuente
    context.fillStyle = 'purple'; //seteo color
    context.textAlign = "center"; //posiciono texto
    context.fillText(tiempoDeJuego, (canvasWidth/2), 32); //indico variable a escribir, y pos X e Y
}

function addFichas() {
    createFicha(posicionXJug1, posicionY, fichasJug1, imageJug1, null, null); //crear fichas con var jug1
    createFicha(posicionXJug2, posicionY, fichasJug2, imageJug2, null, null); //crear fichas con var jug2
    posicionY += 28; //aumento la posicion en Y
    //si las fichas de c/jug son menos a la cantidad de casilleros dividido 2
    if (fichasJug1.length < tabColumnas*tabFilas/2 && fichasJug2.length < tabColumnas*tabFilas/2) {
        addFichas(); //llamo a addFichas otra vez para seguir creando nuevas fichas
    }
}

//creo ficha, paso posX, posY, lista a la q pertenece, img, fila y columna
function createFicha(x, y, listaJug, imgFicha, fila, columna) {
    let ficha = new Ficha(x, y, tab.tamFicha, context, imgFicha); //creo variable y nueva instancia de clase ficha
    ficha.setFila(fila); //seteo la fila
    ficha.setColumna(columna); //seteo la columna
    listaJug.push(ficha); //la agrego a la lista del jug q corresponda
    fichas.push(ficha); //la agrego a la lista de fichas
}

//dibujo fichas de cada jug
function drawFichasJugador() {
    for (let i = 0; i < fichasJug1.length; i++) { //aumento i hasta q llegue al tam de la lista de jug1
        fichasJug1[i].draw(); //por c/ ficha en la lista jug1 llamo a la funcion draw
    }
    for (let i = 0; i < fichasJug2.length; i++) { //aumento i hasta q llegue al tam de la lista de jug2
        fichasJug2[i].draw(); //por c/ ficha en la lista jug2 llamo a la funcion draw
    }
}

function clearCanvas(){
    let fill = "rgba(0, 10, 22, 255)"; //variable con color
    context.fillStyle = fill; //pinto el fondo con color variable
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    tab.draw(); //vuelvo a dibujar tablero
    drawFichasJugador(); //vuelvo a dibujar fichas
    drawTemporizador(); //vuelvo a dibujar timer
}

//cuando se apreta el mouse
function onMouseDown(e) {
    //si no hay mas fichas a usar o el juego termino
    if ((!turnoJug1 && fichasJug2.length === 0)||gameOver) {
        return; //corta la funcion
    }
    isMouseDown = true; //seteo isMouseDown a true
    //creo variable clickedFicha y llamo a la funcion que la encuentra pasando el click en x e y (restando parte del html q no es canvas)
    let clickedFicha = findClickedFicha(e.layerX - offsetX, e.layerY - offsetY);
    if (clickedFicha != null && !clickedFicha.getUsada()) { //si el rtdo es distinto de null y la ficha no fue usada
        lastClickedFicha = clickedFicha; //se setea lastClickedFicha con la ficha nueva
    }
    drawFichasJugador(); //se llama a la funcion dibujar fichas
}
//cuando se suelta el mouse
function onMouseUp(e) {
    if(gameOver){ //si el juego termino corta la funcion
        return;
    }
    if (lastClickedFicha != null) { //si la fichaClickeada por ult vez no es null
        let columaSeleccionada = null; //se crea var columnaSeleccionada
        isMouseDown = false; //se setea isMouseDown a false
        for (let i = 0; i < tab.arrDeColumnas.length; i++) { //itero el arr de guia del tablero
            const indicatorX = 190 + i * tab.columnasWidth; //creo var x con espacio hasta el tab y ancho hasta la col
            //si la pos clickeada en x es >= a la var ant y tambien menor a esa var + el ancho del tablero (osea esta arriba de alguna col)
            if (e.layerX >= indicatorX && e.layerX < indicatorX + tab.columnasWidth) {
                columaSeleccionada = i; //seteo la columnaSeleccionada al i en el q se encuentra
                break;
            }
        }
        if (columaSeleccionada !== null  && e.layerY<90+offsetY) { //si la colSeleccionada distinto de null y la ficha se tiro arriba de la fila superior
            if (tab.isColumnFull(columaSeleccionada)) { //me fijo si la columna esta llena
                lastClickedFicha.resetPosition(); //devuelvo ficha a su pos original 
            } else { //si no
                //seteo var con info del jug1
                let image = imageJug1;
                let listaJug = fichasJug1;
                let idFicha = 1;
                if(!turnoJug1){ //si no es su turno, osea es turno jug2
                    //cambio var con info jug 2
                    image = imageJug2;
                    listaJug = fichasJug2;
                    idFicha = 2;
                }
                //creo variable result,, llamo a dropFicha del tablero con la columna, imagen e idFicha
                const result = tab.dropFicha(columaSeleccionada, image, idFicha);
                if (result) {//si hay un rtd... creo constantes
                    const fila = result.fila; 
                    const columna = result.columna;
                    const x = tab.a + result.column * tab.columnasWidth + tab.columnasWidth / 2;
                    const y = tab.b + result.row * tab.filasHeight + tab.filasHeight / 2;
                    //cambio la ficha de lugar con setPosition busco las pos X e Y de la casilla a la q corresponderia
                    lastClickedFicha.setPosition(tab.matriz[result.fila][result.columna].getPosX(), tab.matriz[result.fila][result.columna].getPosY());
                    lastClickedFicha.setUsada(true); //marco la ficha como usada
                    createFicha(x, y, listaJug, image, fila, columna); //creo la ficha con las nuevas pos x e y, imagen y seteando la dila y col
                    clearCanvas(); //redibujo canvas
                    turnoJug1 = !turnoJug1; //cambio de turno
                }
                if (tab.jug.verificarSiEsGanador(idFicha)) { //si se encuentran x cant de fichas alineadas con ese id
                    gameOver = true; //seteo gameOver para cortar juego
                    clearInterval(timer); //corto timer
                }
            }
        }
        else{ //si no se encuentra pos valida para tirar la ficha
            lastClickedFicha.resetPosition(); //la ficha clickeada vuelve a su lugar original
            clearCanvas(); //redibujo canvas
        }
        lastClickedFicha = null; //seteo lastClickedFicha nuevamente a null
    }
}

function onMouseMove(e) { //cuando muevo el mouse
    if (isMouseDown && lastClickedFicha != null && turnoJug1) { //si estoy apretando el mouse, seleccionando una ficha y es turno jug1
        lastClickedFicha.setPosition(e.layerX - offsetX, e.layerY - offsetY); //seteo la pos de la ficha al click del evento
        clearCanvas(); //redibujo canvas
    } else if (isMouseDown && lastClickedFicha != null && !turnoJug1) { //si estoy apretando el mouse, seleccionando una ficha y es turno jug2
        lastClickedFicha.setPosition(e.layerX - offsetX, e.layerY - offsetY); //seteo la pos de la ficha al click del evento
        clearCanvas(); //redibujo canvas
    }
}

//busco ficha clickeada con parametros x e y
function findClickedFicha(x, y) {
    let fichasJugador; //creo variable fichasJug
    if (turnoJug1) { //si es el turno del jug1
        fichasJugador = fichasJug1; //seteo variable al array del jug1
    } else { //si no
        fichasJugador = fichasJug2; //seteo a array del jug2
    }
    for (let i = 0; i < fichasJugador.length; i++) { //itero la lista de las fichas
        const fichaSelec = fichasJugador[i]; //constante igual a la ficha del array actual
        if (fichaSelec.isPointInside(x, y)) { //llamo a la funcion isPointInside de ficha para verificar si la ficha esta siendo clickeada
            return fichasJugador[i]; //devuelvo la ficha clickeada
        }
    }
}

//agrego eventListeners a las acciones del mouse
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);
