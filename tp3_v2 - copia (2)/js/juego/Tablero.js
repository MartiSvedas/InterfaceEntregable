
class Tablero{
    constructor(context, cantEnLinea){
        this.context = context;
        this.cantEnLinea=cantEnLinea;
        this.filas = cantEnLinea+2;
        this.columnas = cantEnLinea+3;
        this.filasHeight;
        this.columnasWidth;
        this.tamFicha;

        this.jug = new verificarGanador(this, this.context, this.cantEnLinea);

        
        this.tabWidth = this.columnas * this.columnasWidth;
        this.a;
        this.bordeIzq;
        this.b = 50;
        this.matriz = [];
        this.arrDeColumnas = [];
        this.setFilasHeightColWidth();
        this.setTamFicha();
        this.iniciarCasilleros();
        this.draw();
        this.iniciarArrGuia();
        
    }

    setFilasHeightColWidth(){
        switch(this.cantEnLinea){
            case 4:
                this.filasHeight=90;
                this.columnasWidth=90;
                this.bordeIzq=135;
                break;
            case 5:
                this.filasHeight=80;
                this.columnasWidth=80;
                this.bordeIzq=135;
                break;
            case 6:
                this.filasHeight=70;
                this.columnasWidth=70;
                this.bordeIzq=150;
                break;
            case 7:
                this.filasHeight=60;
                this.columnasWidth=60;
                this.bordeIzq=163;
                break;
        }
        
    }

    setTamFicha(){
        this.tamFicha = (this.filasHeight/3)+5;
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
            const indicatorX = this.bordeIzq+this.filasHeight/2 + i * this.columnasWidth;
            const indicatorY = this.tamFicha;
            this.context.drawImage(indicator, indicatorX, indicatorY);
        }
    }

    iniciarCasilleros(){
        for(let x=0; x<this.filas; x++){
            this.matriz[x] = [] ;
            this.b += this.filasHeight;
            this.a = this.bordeIzq;
            for(let y=0; y<this.columnas; y++){
                this.a+= this.columnasWidth;
                this.matriz[x][y] = this.crearCasilla(this.a, this.b);
            }
        }
    }

    crearCasilla(a, b){   
        let cas = new Casilla(a, b, this.tamFicha, this.context, this.filasHeight, this.columnasWidth);
        return cas;
    }

    dropFicha(columna, jugador, idFicha) {
        if (!this.isColumnFull(columna)) {
            for (let fila = this.filas - 1; fila >= 0; fila--) {
                if (!this.matriz[fila][columna].isFilled()) {
                    // console.log(fila, columna);
                    this.matriz[fila][columna].dropFicha(jugador, idFicha);
                    this.verificar(idFicha);
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
        return  this.jug.verificarSiEsGanador(id);
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