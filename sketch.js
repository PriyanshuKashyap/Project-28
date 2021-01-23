
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, ground, stone, boy, elasticConstraint, mangoBodyPosition, stoneBodyPosition;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	tree = new Tree();
	
	ground = new Ground();
	stone = new Stone();

	mango1 = new Mango(350, 210);
	mango2 = new Mango(350, 135);
	mango3 = new Mango(480, 90);
	mango4 = new Mango(490, 170);
	mango5 = new Mango(480, 250);
	mango6 = new Mango(600, 80);
	mango7 = new Mango(580, 115);
	mango8 = new Mango(580, 240);
	mango9 = new Mango(625, 150);
	mango10 = new Mango(660, 137);
	mango11 = new Mango(685, 210);

	var options = {
		bodyA: stone.body,
		pointB: {x: 50, y: 600},
		stiffness: 0.01,
		length: 5
	};

	elasticConstraint = Constraint.create(options);
	World.add(world, elasticConstraint);
	
	console.log(boy);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  tree.display();
  //tree.img.width = 500;
  ground.display();
  stone.display();
  stone.img.width = 180;
  boy.width = 300;
  image(boy, 0, 280);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
   
  line(elasticConstraint.bodyA.position.x, elasticConstraint.bodyA.position.y, elasticConstraint.pointB.x, elasticConstraint.pointB.y);
  console.log();
  drawSprites();
 
}

/*
function mouseDragged() {

}

function mouseReleased() {

}
 */

function fly() {
	elasticConstraint.bodyA = null;
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 235, y: 420});
		launcherObject.attach(stone.body);
	}
}
//Hello Shivangi, we will resolve the problems in Projects 27 and 28 tomorrow. It has been a busy week and that is why these 2 projects are not entirely complete.
//Project 27: No force is being applied
//Project 28: line(x, y, width, height), constraint problem(bodyA, pointB)
//See you tomorrow.
//-Priyanshu