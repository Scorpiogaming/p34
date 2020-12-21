
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;
const Mouse=Matter.Mouse;
var bob1,bob2,bob3,bob4,bob5,rope1,roof1,rope2,rope3,rope4,rope5,canvas,engine,world,mConstraint;
function preload()
{
	
}

function setup() {
	canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof1=new roof(350,100,600,20);
	 bob1=new bob(150,500);
	 bob2=new bob(250,500);
	 bob3=new bob(50,500);
	 bob4=new bob(-50,500);
	 bob5=new bob(-150,500);
	 rope1=new rope(bob1.body,roof1.body,150,0);
	 rope2=new rope(bob2.body,roof1.body,250,0);
	 rope3=new rope(bob3.body,roof1.body,50,0);
	 rope4=new rope(bob4.body,roof1.body,-50,0);
	 rope5=new rope(bob5.body,roof1.body,-150,0);
	 var canvasmouse=Mouse.create(canvas.elt);
	 canvasmouse.pixelRatio=2;
     var options={
		 mouse:canvasmouse
	 }
	 mConstraint=MouseConstraint.create(engine,options);
	 World.add(world,mConstraint)
	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
   roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}



