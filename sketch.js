

// delete above me
var bullet,thickness
var speed,weights

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
   bullet = createSprite(50, 200, 50 , 10);
   wall=createSprite(1200,200,thickness,height/2)
   
   bullet.velocityX = speed;
  }

function draw() {
  background(0);  
 

  drawSprites();
}


function hasCollided (lbullet,lwall)
{
  bulletRightEdge+lbullet.x +bullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
 return false;
 if(hasCollided(lbullet,lwall))
  {
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed/(thickness*thickness*thickness);
    
if (damage>10)
{
  wall.shapeColor=color(255,0,0);

}

if (damage<10)
{
  wall.shapeColor=color(0,255,0)
}

  }



}
