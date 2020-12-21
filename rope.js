class rope{
    constructor(bodyA,bodyB,offsetx,offsety){      
        this.offsetx=offsetx;
        this.offsety=offsety;
         var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{
                x:this.offsetx,y:this.offsety
            },
            length:400,
            stiffness:0.04
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        var anchorx=pointB.x+this.offsetx;
        var anchory=pointB.y+this.offsety;
        strokeWeight(5);
        stroke("green");
        line(pointA.x,pointA.y,anchorx,anchory);
    }
}