var bullet,wall
var speed,weight
var wall,thickness;
speed=random(30,50);

function setup()
{
  createCanvas(600,600);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
bullet=createSprite(50,200,50,50)
wall=createSprite(600,200,60,thickness,height/2)
}
function draw()
{
background(0);
bullet.velocityX= speed;
if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/22509
if(deformation>180)
{
  bullet.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  bullet.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  bullet.shapeColor=color(0,255,0);
}
}
function hascollided(bullet,wall)
{
bullet.velocityX=0;
var damage=0.5*width*speed*speed/(thickness*thickness*thickness)
if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}
if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}




}
drawSprites();
function hascollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}

}
