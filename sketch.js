const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var paper1;
var dustbin1, dustbin2, dustbin3;
var ground1;
var dustbinobj, dustbinobjp;

function preload(){
  dustbinobjp = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Paper(50, height - 90, 40);


  dustbinObj=new Dustbin(900,650);

  ground1 = new Ground(width/2, 670, width, 20);

  launcherObject=new Launcher(paper1.body,{x:300,y:300})
  Engine.run(engine);


	
  
}

function draw() {
  rectMode(CENTER);
  background(180);
  
  ground1.display();
  dustbinObj.display();

  paper1.display();

  launcherObject.display();
  

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
 slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon,{x:130,y:300})
      slingshot.attach(this.polygon);
  }
}


  