var fixed,moving;


function setup() {
  createCanvas(800,400);
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="green";
  moving.debug=true;

  fixed=createSprite(200,100,50,50);
  fixed.shapeColor="green";
  fixed.debug=true;
}
function draw() {
  background(0,0,0); 
  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(moving.x-fixed.x<moving.width/2+fixed.width/2
    && fixed.x-moving.x<moving.width/2+fixed.width/2
    && moving.y-fixed.y<moving.height/2+fixed.height/2
    && fixed.y-moving.y<moving.height/2+fixed.height/2){
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }
 else{
  moving.shapeColor="green";
  fixed.shapeColor="green";
 }


  drawSprites();
}