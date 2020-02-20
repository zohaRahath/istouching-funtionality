var frect,mrect;


function setup() {
  createCanvas(1200,800);
frect=createSprite(600,400,50,80);
mrect=createSprite(400,200,80,30);
frect.shapeColor="cyan";
mrect.shapeColor="aqua";

  




}

function draw() {
  background(0,0,255);
  rectMode(CENTER);
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  //console.log(mrect.width/2+frect.width/2);
if(frect.x-mrect.x<mrect.width/2+frect.width/2 && mrect.x-frect.x<mrect.width/2+frect.width/2 && mrect.y-frect.y<mrect.height/2+frect.height/2 &&  frect.y-mrect.y<mrect.height/2+frect.height/2){
  frect.shapeColor="yellow"
}
else{
  frect.shapeColor="cyan"
}
console.log(mrect.x-frect.x);
  
  drawSprites();
}