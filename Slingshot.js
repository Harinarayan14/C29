class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.catapult1 = loadImage ("./sprites/sling1.png");
        this.catapult2 = loadImage ("./sprites/sling2.png");
        this.catapult3 = loadImage ("./sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.catapult1,200,20);
        image(this.catapult2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke(84,35,15);
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
            image(this.catapult3,pointA.x-25, pointA.y-10,15,30);
        }
    }
    
}