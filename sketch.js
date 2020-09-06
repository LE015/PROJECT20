var car,wall;
var speed, weight;
var deformaton;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
  if(wall.x-car.x<= wall.width/2+car.width/2){
  deformaton = (0.5*weight*speed*speed)/22500;
  car.velocityX = 0;
  }
  if(deformaton < 100 ){
  car.shapeColor = "green";
  }
  else if(deformaton > 100 || deformaton < 180){
  car.shapeColor = "yellow";
  }
  else if(deformaton > 180 ){
    car.shapeColor = "red";
    }
    
 
  drawSprites();
}
