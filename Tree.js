class Tree {
    constructor() {
        var options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(310, 55, 100, 100, options);
        this.img = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);
        
    }

    display() {
        this.img.width = 500;
        this.img.height = 2000;
        image(this.img, this.body.position.x, this.body.position.y);
    }
}
