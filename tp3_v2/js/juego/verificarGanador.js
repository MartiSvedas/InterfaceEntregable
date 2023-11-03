"use strict"

class verificarGanador {
    constructor( idficha,tablero){
        // this.fichasJug2=fichasJug2;
        this.idficha=idficha;
        this.tablero=tablero;
        this.fichasGanadoras = [];
    }
    
    verificarSiEsGanador() {

            this.checkHorizontal();
            this.checkVertical() ;
            // this.checkDiagonal();
            
            //obtengo x
            // console.log(this.tablero.filas);
            // for(let x=0; x<this.tablero.filas; x++){
            //     // obtengo y
            //     for(let y=0; y<this.tablero.columna; y++){
            //         console.log(id);
                
            
            return true;
            
            
        }
            
    checkVertical() {
        for (let col = 0; col < this.tablero.columnas; col++) {
            let count = 0;
            let idFichaAnterior = null;
                for (let row = 0; row < this.tablero.filas; row++) {
                const casilla = this.tablero.matriz[row][col];
                    if (casilla.idFicha === this.idficha) {
                        if (casilla.idFicha === idFichaAnterior) {
                                count++;                            
                        } else {
                                count = 1; 
                                idFichaAnterior = casilla.idFicha;
                        }
                        if (count === 4) {
                                console.log("ganador jugador  " + this.idficha);
                                // finalizarJuego(idficha);
                        }
                        } else {
                            count = 0; 
                            idFichaAnterior = null;
                        }
                    }
                }
        }

        checkHorizontal(){
            for (let row = 0; row < this.tablero.filas; row++) {
                let count = 0;
                let idFichaAnterior = null;
                //verifico der
                for (let col = 0; col < this.tablero.columnas; col++) {
                        const casilla= this.tablero.matriz[row][col];
                        if (casilla.idFicha === this.idficha) {
                            if (casilla.idFicha === idFichaAnterior) {
                                    count++;                            
                            } else {
                                    count = 1; 
                                    idFichaAnterior = casilla.idFicha;
                            }
                            if (count === 4) {
                                    console.log("ganador jugador  " + this.idficha);
                                    // finalizarJuego();
                            }
                            } else {
                                count = 0; 
                                idFichaAnterior = null;
                            }
                        }
                    }

                    
                    
        }

        
        checkDiagonal() {
            return null;
        }
    

    
        
    

    

    }
