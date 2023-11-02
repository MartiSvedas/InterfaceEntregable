class Tablero{
    constructor(context, filas, columnas, fondo, tamFicha){
        this.context = context;
        this.filas = filas;
        this.columnas = columnas;
        this.fondo = fondo;
        this.tamFicha = tamFicha;
        this.columnWidth = 90;
        this.a = 0;
        this.b = 40;
        this.matriz = [];
        this.arrDeColumnas = [];
        this.iniciarCasilleros();
        this.draw();
        this.iniciarArrGuia();
    }

    iniciarArrGuia(){
        for (let i = 0; i < this.columnas; i++) {
            const indicator = new Image(); // Create an image element
            indicator.src = 'img/juego/flecha.png'; // Set the image source
            this.arrDeColumnas.push(indicator);
        }
    }

    draw(){
        for(let x=0; x<this.filas; x++){
            for(let y=0; y<this.columnas; y++){
                this.matriz[x][y].draw();
            }
        }
        for (let i = 0; i < this.arrDeColumnas.length; i++) {
            const indicator = this.arrDeColumnas[i];
            const indicatorX = 200 + i * this.columnWidth;
            const indicatorY = 20;
            this.context.drawImage(indicator, indicatorX, indicatorY);
        }
    }
    
    crearCasilla(a, b){   
       let cas = new Casilla(a,b,this.tamFicha,this.fondo,this.context);
       return cas;
    }
    
    iniciarCasilleros(){
        for(let x=0; x<this.filas; x++){
            this.matriz[x] = [] ;
            this.b += 90;
            this.a = 138;
            for(let y=0; y<this.columnas; y++){
                this.a+= 90;
                this.matriz[x][y] = this.crearCasilla(this.a, this.b);
            }
        }
    }



}