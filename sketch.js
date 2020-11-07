var car,wall;
var speed ,weight;
var deformation;

function prelod(){
  //carImage=loadImage("sport-car-silhouette-25");
}

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  
  car =createSprite(50,200,50,50);
  //car.addImage(carImage);
  wall =createSprite(600,200,30,height/2);
  wall.shapeColor=80,80,80;
  
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation<100){
    wall.shapeColor=("red");
  }
  if(deformation<180 && deformation>100){
    wall.shapeColor=("green");
  }
  if(deformation>180){
    wall.shapeColor=("yellow");
  }

  }
  
  drawSprites();
  }