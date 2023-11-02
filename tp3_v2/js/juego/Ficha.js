class Ficha extends Figure {
    constructor(posX, posY, radius, context, image) {
        super(posX, posY, context);

        this.radius = radius;
        this.image=image;
    }

    draw() {
        super.draw();
        this.context.save();
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.closePath();
        this.context.clip();

        // Dibuja la imagen en la ficha, ajustándola al círculo
        const diameter = this.radius * 2;
        const x = this.posX - this.radius;
        const y = this.posY - this.radius;
        this.context.drawImage(this.image, x, y, diameter, diameter);

        this.context.restore(); 

    }

    getRadius() {
        return this.radius;
    }

    isPointInside(x, y){
        const nx = x - this.getPosX();
        const ny = y - this.getPosY();
        return Math.sqrt(nx * nx + ny * ny) < this.getRadius();
    }

    setPosition(x, y){
        this.posX = x;
        this.posY = y;
    }
}