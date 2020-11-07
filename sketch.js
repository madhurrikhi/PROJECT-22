var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1200, 400);

  speed=random(223,321)
  weight=random(30,52)


  thickness=random(22,83)




  
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor="green"

 
  	
    
    wall=createSprite(800, 200, 50, height/2);  

    wall.shapeColor="green"
}


function draw() {
  background(0);  
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor="red"
		
	}

	

	if(damage<10)
	{
		wall.shapeColor="white"
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}