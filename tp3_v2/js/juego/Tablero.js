class Tablero{
    constructor(context, filas, columnas, fondo, tamFicha){
        this.context = context;
        this.filas = filas;
        this.columnas = columnas;
        this.fondo = fondo;
        this.tamFicha = tamFicha;
    }



    draw(){
        let a = 0;
        let b = 50;
        for(let x=0; x<this.filas; x++){
            this.drawCasilla(a=235, b=b+90, this.fondo);
            this.drawCasilla(a, 50, 'rgba(20, 20, 20, 0)');
            for(let y=0; y<this.columnas-1; y++){
                
                this.drawCasilla(a=a+90, b, this.fondo);
                this.drawCasilla(a, 50, 'rgba(20, 20, 20, 0)');
            }
        }
    }

    drawCasilla(a, b, colorRect){
        this.drawRect(a, b, colorRect);
        
        this.context.fillStyle = 'rgba(0, 0, 0, 255)';
        this.context.beginPath();
        this.context.arc(a, b, 35, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }

    drawRect(a, b, colorRect){
        this.context.fillStyle = colorRect;

        this.context.fillRect(a-45, b-45, 90, 90);
    }

}