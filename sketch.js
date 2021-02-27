
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3,ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new DUSTBIN(1030,637,20,120);
    dustbin2 = new DUSTBIN (1184, 637, 20, 120);
    dustbin3 = new DUSTBIN(1100, 650, 150, 20);
	ground = new GROUND(750,680,1500,40);
	ball=new PAPER(100,200,20);

	Engine.run(engine);

  

}


function draw() {
  rectMode(CENTER);
  background("#dbb8fa");

  


  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  ball.display();

  drawSprites();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x: 85,y: -85});
	}
  
  }


