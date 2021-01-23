class Mango {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.img = loadImage("Plucking mangoes/mango.png");
        
        World.add(world, this.body);
    }

    display() {
        this.body.radius = 0;
        this.img.width = 60;
        this.img.height = 600;
        image(this.img, this.body.position.x, this.body.position.y);
    }
}