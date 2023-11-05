
class Tablero{
    constructor(context, filas, columnas, fondo, tamFicha){
        this.context = context;
        this.filas = filas;
        this.columnas = columnas;
        this.fondo = fondo;
        this.tamFicha = tamFicha;

        this.jug = new verificarGanador(this, this.context);

        this.filasHeight = 90;
        this.columnasWidth = 90;
        this.tabWidth = columnas * this.columnasWidth;
        this.a = 138;
        this.b = 40;
        this.matriz = [];
        this.arrDeColumnas = [];

        this.iniciarCasilleros();
        this.draw();
        this.iniciarArrGuia();
    }

    iniciarArrGuia(){
        for (let i = 0; i < this.columnas; i++) {
            const indicator = new Image(); 
            indicator.src = 'img/juego/flecha.png'; 
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
            const indicatorX = 200 + i * this.columnasWidth;
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

    dropFicha(columna, jugador, idFicha) {
        if (!this.isColumnFull(columna)) {
            for (let fila = this.filas - 1; fila >= 0; fila--) {
                if (!this.matriz[fila][columna].isFilled()) {
                    // console.log(fila, columna);
                    this.matriz[fila][columna].dropFicha(jugador, idFicha);
                        
                    this.verificar(idFicha);
                    console.log(this.verificar(idFicha)); 
                    return {
                        fila,
                        columna
                    };
                }
            }
        }
        
        return null; 

    }

    verificar(id){
       return this.jug.verificarSiEsGanador(id);
    }

    isColumnFull(columna) {
        for (let fila = 0; fila < this.filas; fila++) {
            if (!this.matriz[fila][columna].isFilled()) {
                return false; 
            }
        }
        return true;
    }


}