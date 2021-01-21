class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        console.log(this.sling3.height)
        image(this.sling1, 200, 72, 38, 150);
        image(this.sling2, 170, 73, 42, 85);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);

            if (pointA.x < 200) {
                strokeWeight(7);
                line(pointA.x-15, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-15, pointA.y, pointB.x+20, pointB.y);

                image(this.sling3, pointA.x-25, pointA.y-15, 10, 35);
            }
            else {
                strokeWeight(5);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+20, pointB.y);

                image(this.sling3, pointA.x+25, pointA.y-15, 10, 35);
            }
            
        }
    }
    
}