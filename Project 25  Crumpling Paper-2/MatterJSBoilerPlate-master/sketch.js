
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar1,bar2,bar3;
var paper,ground;
var paperIMG,binIMG,papersprite,binsprite;

function preload(){
  
}
  


function setup() {
	createCanvas(800, 600);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bar1 = new Bin(660,500,200,200)
	
	ground = new Grb()
  paper = new Sheet()
  
  Engine.run(engine);

  
      
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();  
  bar1.display();  
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 155,y: -205});
	}
}

