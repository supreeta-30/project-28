
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new PaperGlass(200,450,70);
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(1200,650);
	
	launcher=new Launcher(paper.body,{x:300,y:300})
	

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paper.display();
  ground.display();
  dustbin.display();
  launcher.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});

    
  	}
}
function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	launcher.fly();
}
