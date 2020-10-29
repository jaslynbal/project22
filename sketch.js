var bullet,wall;
var speed,thickness,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52);
  thickness = random(22,83);
}

function draw() {
  background(255,255,255);  
  wall = createsprite(1200,200,thickness,height/2)
  wall.shapeColor = shapeColor(80,80,80);
  
  if(hascollided(bullet,wall)){
    bullet.velocityx = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10){
    wall.shapecolor = color (0,255,0);
  }
 
  drawSprites();
}


function hascollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.weight;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
   return false;
}