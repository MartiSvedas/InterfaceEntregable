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
            for (let fil = 0; fil < this.tablero.filas; fil++) {
                let count = 0;
                let idFichaAnterior = null;
                for (let col = 0; col < this.tablero.columnas; col++) {
                        const casilla= this.tablero.matriz[fil][col];
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

        checkDiagonal() {
            for (let fil = 0; fil < this.tablero.filas; fil++) {
              for (let col = 0; col < this.tablero.columnas; col++) {
                if (col + 3 < this.tablero.columnas && fil - 3 >= 0) {
                  let count = 0;
                  let idFichaAnterior = null;
          
                  for (let i = 0; i < 4; i++) {
                    const casilla = this.tablero.matriz[fil - i][col + i];
          
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
                      console.log("Ganador jugador " + this.idficha + " en diagonal hacia la derecha y arriba. ");
                      return this.finalizarJuego(this.idficha);
                            }
                  }
                }
          
               if (col + 3 < this.tablero.columnas && fil + 3 < this.tablero.filas) {
                  let count = 0;
                  let idFichaAnterior = null;
          
                  for (let i = 0; i < 4; i++) {
                    const casilla = this.tablero.matriz[fil + i][col + i];
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
              
      }

    }
