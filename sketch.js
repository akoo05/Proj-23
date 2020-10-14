var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box = createSprite(width/2, height-50, 200,20);
	box.shapeColor= "red";

	box1 = createSprite(width/2.75, height-90,20,100);
	box1.shapeColor="red";

	box2 = createSprite(width/1.57, height-90,20,100);
	box2.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	keyPressed();

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	Matter.Body.setStatic(packageBody, false);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	box = Bodies.rectangle(width/2, height-50, 200,20,{isStatic: true});
	World.add(world, box);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keycode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}


