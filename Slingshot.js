class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointA: {x: 50, y: 400},
            pointB: pointB,
            stiffness: 0.01,
            length: 5
        }
        this.elasticConstraint = Constraint.create(options);
        World.add(world, this.elasticConstraint);
    }

    fly() {
        this.elasticConstraint.bodyA = null;
    }

    display() {
        //image(this.elasticConstraint.bodyA.img, this.elasticConstraint.bodyA.position.x, this.elasticConstraint.bodyA.position.y);
        if (this.elasticConstraint.bodyA) {
            line(this.elasticConstraint.bodyA.position.x, this.elasticConstraint.bodyA.position.y, this.elasticConstraint.pointB.x, this.elasticConstraint.pointB.y);
        }
    }
}
