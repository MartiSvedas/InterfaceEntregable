class Tablero{
    constructor(context, filas, columnas, fondo, tamFicha){
        this.context = context;
        this.filas = filas;
        this.columnas = columnas;
        this.fondo = fondo;
        this.tamFicha = tamFicha;
        this.matriz = [];
        this.iniciarCasilleros();
        this.draw();
    }

    
    draw(){
        for(let x=0; x<this.filas; x++){
            for(let y=0; y<this.columnas; y++){
                this.matriz[x][y].draw();
            }
        }
    }
    
    crearCasilla(a,b){   
       let cas = new Casilla(a,b,this.tamFicha,this.fondo,this.context);
       return cas;
}

iniciarCasilleros(){
    let a = 0;
    let b = 40;
    for(let x=0; x<this.filas; x++){
        this.matriz[x] = [] ;
        b += 90;
        a = 138;
        for(let y=0; y<this.columnas; y++){
            a+= 90;
            this.matriz[x][y] = this.crearCasilla(a, b);
        }
    }
}



}