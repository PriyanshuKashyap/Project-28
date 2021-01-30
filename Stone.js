class Stone {
    constructor() {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2
        };
        this.body = Bodies.circle(50, 400, 20, options);
        //-40, 370, 20, options
        this.img = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
    }

    display() {
        //line(this.elasticConstraint.bodyB.x, this.elasticConstraint.bodyB.y, this.body.position.x, this.body.position.y);
        image(this.img, this.body.position.x, this.body.position.y);
    }
}
