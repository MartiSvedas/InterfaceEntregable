class Casilla extends Figure{
    constructor(posX, posY, radius, fill, context){
        super(posX, posY, radius, fill, context);
        this.context=context;
        this.fill=fill;
        this.jugador = null;
        this.idFicha = 0;
    }

    draw(){
        this.drawRect(this.posX, this.posY);
        this.context.fillStyle = 'rgba(0, 0, 0, 255)';
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, 35, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }

    drawRect(a, b){
        this.context.fillStyle = this.fill;
        this.context.fillRect(a-45, b-45, 90, 90);
    }

    isFilled() {
        return this.jugador !== null;
    }

    
    dropFicha(jugador, idFicha) {
        this.jugador = jugador;
        this.idFicha = idFicha;
        console.log(idFicha);
        this.draw();
    }

}