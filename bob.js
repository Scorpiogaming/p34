class bob {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y,50,options);
      this.r=50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke("green");
      fill("green");
     ellipse(0,0,this.r*2);
      pop();
    }
  }
  