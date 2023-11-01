class Tablero{
    constructor(context, filas, columnas, fondo, tamFicha){
        this.context = context;
        this.filas = filas;
        this.columnas = columnas;
        this.fondo = fondo;
        this.tamFicha = tamFicha;
        let matriz = [filas][columnas];
    }



    draw(){
        let a = 0;
        let b = 50;
        let fila = 0;
        let columna = 0;
        for(fila; x<this.filas; fila++){
            this.drawCasilla(a=235, b=b+90);
            for(columna; y<this.columnas-1; columna++){
                this.drawCasilla(a=a+90, b);
            }
        }
    }

    drawCasilla(a, b){
        this.drawRect(a, b);
        
        this.context.fillStyle = 'rgba(0, 0, 0, 255)';
        this.context.beginPath();
        this.context.arc(a, b, 35, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }

    drawRect(a, b){
        this.context.fillStyle = this.fondo;
        this.context.fillRect(a-45, b-45, 90, 90);
    }

}