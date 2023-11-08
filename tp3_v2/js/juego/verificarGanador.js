"use strict"

class verificarGanador {
  constructor(tablero, context){
      this.idficha=null;
      this.tablero=tablero;
      this.context=context;
  }
    
    verificarSiEsGanador(id) {
        this.idficha=id;
        this.checkHorizontal();
        this.checkVertical() ;
        this.checkDiagonal();
        if(!this.checkDiagonal&&!this.checkHorizontal&&!this.checkVertical){
            this.setEmpate();
        }
      return (this.checkHorizontal()||this.checkVertical()||this.checkDiagonal());
    }
            
    checkVertical() {
      for (let col = 0; col < this.tablero.columnas; col++) {
            let count = 0;
            let idFichaAnterior = null;
            for (let fil = 0; fil < this.tablero.filas; fil++) {
                const casilla = this.tablero.matriz[fil][col];
                if (casilla.idFicha === this.idficha) {
                    if (casilla.idFicha === idFichaAnterior) {
                          count++;                            
                    } else {
                          count = 1; 
                          idFichaAnterior = casilla.idFicha;
                    }
                    if (count === 4) {
                        console.log("Ganador jugador  " + this.idficha);
                        return this.finalizarJuego(this.idficha);
                       
                    }
                } else {
                    count = 0; 
                    idFichaAnterior = null;
                }
            }
        }
        return false;
    }

        checkHorizontal(){ 
            for (let fil = 0; fil < this.tablero.filas; fil++) {//recorro las filas
                let count = 0;//instancio contador
                let idFichaAnterior = null;//instancio idFichaAnterior para ir guardando el valor de las fichas que voy recorriendo
                for (let col = 0; col < this.tablero.columnas; col++) {//recorro columnas
                        const casilla= this.tablero.matriz[fil][col]; //casilla instanciada con los valores que voy recorriendo
                        if (casilla.idFicha === this.idficha) { //si existe una casilla igual a mi ficha actual
                            if (casilla.idFicha === idFichaAnterior) { //si tiene un id igual a mi idficha actual inmediata de forma horizontal
                                    count++;        //cuento +1                    
                            } else {
                                    count = 1; //cuento mi ficha actual
                                    idFichaAnterior = casilla.idFicha; //seteo fichaAnterior con mi ficha actual
                            }
                            if (count === 4) { //si conte 4 casillas con idFicha igual gano
                                    console.log("Ganador jugador  " + this.idficha);
                                    return this.finalizarJuego(this.idficha);
                            }
                            } else {
                                count = 0; 
                                idFichaAnterior = null;
                            }
                        }
                    }
                    return false;                   
                    
        }

        checkDiagonal() {//checkeo diagonal
          //checkeo diagonal hacia la derecha y arriba
            for (let fil = 0; fil < this.tablero.filas; fil++) {//recorro filas
              for (let col = 0; col < this.tablero.columnas; col++) {//recorro columnas 
                if (col + 3 < this.tablero.columnas && fil - 3 >= 0) {//recorre 3 columnas hacia la derecha y arriba (que no sale del tablero)
                  let count = 0;// instancia el contador
                  let idFichaAnterior = null;//setea en null in idFicha para ir guardando y luego verificar que hay 4 fichas seguidas con el mismo id
          
                  for (let i = 0; i < 4; i++) { //recorre 4 veces en la diagonal hacia la derecha y arriba 
                    const casilla = this.tablero.matriz[fil - i][col + i];  //toma la casilla inmediata hacia la izquierda y abajo
          
                    if (casilla.idFicha === this.idficha) {//Si el id de la casilla es igual al id que paso por parametro
                      if (casilla.idFicha === idFichaAnterior) {//si la casilla anterior a mi ficha actual es igual
                        count++; //cuento +1
                      } else {
                        count = 1; // seteo count=1 (mi ficha actual)
                        idFichaAnterior = casilla.idFicha;//seteo a isFichaAnterior a mi ficha actual
                      }
                    } else {
                      count = 0;
                      idFichaAnterior = null;
                    }
          
                    if (count === 4) {//si hay 4 fichas seguidas en diagonal hacia la derecha y arriba
                      console.log("Ganador jugador " + this.idficha + " en diagonal hacia la derecha y arriba. ");
                      return this.finalizarJuego(this.idficha);
                            }
                  }
                }
                //checkeo diagonal hacia la derecha y abajo
               if (col + 3 < this.tablero.columnas && fil + 3 < this.tablero.filas) {//recorre 3 columnas hacia la derecha y abajo
                  let count = 0;
                  let idFichaAnterior = null;
          
                  for (let i = 0; i < 4; i++) {
                    const casilla = this.tablero.matriz[fil + i][col + i];//toma la casilla inmediata hacia abajo a la derecha 
                              if (casilla.idFicha === this.idficha) {
                      if (casilla.idFicha === idFichaAnterior) {
                        count++;
                      } else {
                        count = 1;
                        idFichaAnterior = casilla.idFicha;
                      }
                    } else {
                      count = 0;
                      idFichaAnterior = null;
                    }
          
                    if (count === 4) {
                      console.log("Ganador jugador " + this.idficha + " en diagonal hacia la derecha y abajo.");
                      return this.finalizarJuego(this.idficha);
                            }
                  }
                }
            }
        }
        return false;
          }
          
        
          finalizarJuego(idFicha){
            let imageGatito=new Image();
            let imagePerrito=new Image();
            imageGatito.src="img/juego/GatitoGanador.png";
            imagePerrito.src="img/juego/PerritoGanador.png";
            if(idFicha==1){
                imageGatito.onload = function() {
                var centerX = canvas.width / 2;
                var centerY = canvas.height / 2;
                var newWidth = 500; 
                var newHeight = 500; 
    
                context.drawImage(imageGatito, centerX - newWidth / 2, centerY - newHeight / 2, newWidth, newHeight);
                }
          }else if(idFicha==2){
            imagePerrito.onload = function() {
                var centerX = canvas.width / 2;
                var centerY = canvas.height / 2;
                var newWidth = 500; 
                var newHeight = 500; 
    
                context.drawImage(imagePerrito, centerX - newWidth / 2, centerY - newHeight / 2, newWidth, newHeight);
                }
          }
          return true
        }

        setEmpate(){
          let imageEmpate=new Image();
           imageEmpate.src="img/juego/Empate.png";
           imageEmpate.onload=function(){
              var centerX = canvas.width / 2;
              var centerY = canvas.height / 2;
              var newWidth = 500; 
              var newHeight = 500; 
  
              context.drawImage(imageEmpate, centerX - newWidth / 2, centerY - newHeight / 2, newWidth, newHeight);
              }
              return true
      }

    }
