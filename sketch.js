// rushing to complete projects to begin with 4 dots game
var helicopterIMG, helicopterSprite;
var packageSprite,packageImg,packageBody;
var ground;
var bg;
var box1,box2,box3;
var world,engine;
const E=Matter.Engine;
const B=Matter.Bodies;
const W=Matter.World;
const body=Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	bg=loadImage('bg.jpg');
	packageImg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	packageSprite=createSprite(100,100, 10,10);
	packageSprite.addImage(packageImg);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(600,100,10,10);
	helicopterSprite.addImage(helicopterIMG);

	engine=E.create();
	world=engine.world;	
	rectMode(CENTER);
	packageBody = B.circle(630,100 , 5 , {restitution:0.4, isStatic:true});
	W.add(world, packageBody);
	var options={
		isStatic:true,
	}
	ground=B.rectangle(400,690,800,20,options);
	W.add(world,ground);
	box1=B.rectangle(550,630,30,100,options);
	W.add(world,box1);
	box2=B.rectangle(630,665,130,30,options);
	W.add(world,box2);
	box3=B.rectangle(700,630,30,100,options);
	W.add(world,box3); 
}


function draw() {
  background(bg);
  E.update(engine);
  packageSprite.x=packageBody.position.x;
  packageSprite.y=packageBody.position.y;
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);
  fill("red");
  rect(box1.position.x,box1.position.y,30,100);
  rect(box2.position.x,box2.position.y,130,30);
  rect(box3.position.x,box3.position.y,30,100);
  fill("white")
  drawSprites();
}
function keyPressed() {
	if (keyCode === 32) {
	   body.setStatic(packageBody, false);
	 }
   }
