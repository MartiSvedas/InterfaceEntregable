class Figure {
    constructor(posX, posY, context) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
    }



    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }

    draw() {
        this.context.fillStyle = this.fill;
    }

    
}
