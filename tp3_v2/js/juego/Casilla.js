
class Casilla extends Figure{
    constructor(posX, posY, radius, context, filasHeight, columnasWidth){
        super(posX, posY, context);
        this.radius = radius;
        this.context=context;
        this.fill='rgba(200, 0, 250, 255)';
        this.filasHeight=filasHeight;
        this.columnasWidth=columnasWidth;
        this.jugador = null;
        this.idFicha = 0;
    }

    draw(){
        this.drawRect(this.posX, this.posY);
        this.context.fillStyle = 'rgba(0, 0, 0, 255)';
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }

    drawRect(a, b){
        this.context.fillStyle = this.fill;
        this.context.fillRect(a-(this.filasHeight/2), b-(this.columnasWidth/2), this.filasHeight, this.columnasWidth);
    }

    isFilled() {
        return this.jugador !== null;
    }

    
    dropFicha(jugador, idFicha) {
        this.jugador = jugador;
        this.idFicha = idFicha;
        console.log(idFicha);
    }
    
}

