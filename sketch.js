var o1 ;
var o2 ;

function setup() {
  createCanvas(800,400);
  o1=createSprite(400, 100, 40, 80);
  o1.shapeColor="red";
  o1.velocityY=6;

  o2=createSprite(400, 300, 80, 40);
  o2.shapeColor="red";
  o2.velocityY=-6;
}

function draw() {
  
  bounceOff(o1,o2);
  background(0);  
  drawSprites();
}
