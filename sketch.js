var asteroid, asteroidImage, asteroidGroup
var earth, earthImage
var heart, heartImage
var laser, laserImage, laserGroup
var spaceship, shipImage
var spaceImage  
var score


function preload (){
    spaceImage = loadImage("images/space.jpeg")
    shipImage = loadImage("images/spaceship.png")
    laserImage = loadImage("images/laser.png")
    heartImage = loadImage("images/heart1.png")
    earthImage = loadImage("images/earth.png")
    asteroidImage = loadImage("images/asteroid1.png")


}
function setup (){
 createCanvas(1500,700);
   earth=createSprite(750, 600)
   earth.scale=2
   earth.addImage(earthImage) 
   spaceship=createSprite(750,550)
   spaceship.addImage(shipImage)
   spaceship.scale=0.2

   laserGroup = new Group();
   asteroidGroup = new Group();
   
   

}
function draw(){
    background (spaceImage)
    if(keyDown("A")){
     spaceship.x=spaceship.x-15
    }
    if(keyDown("D")){
        spaceship.x=spaceship.x+15

    }

    if(keyWentDown("SPACE")){
        spawnLaser();
    }
    spawnAsteroid();
        drawSprites();
}


function spawnLaser(){
    laser=createSprite(spaceship.x,spaceship.y-20)
    laser.velocityY=-30
    laser.addImage(laserImage)
    laser.scale=0.2

    laser.lifetime=17
    laserGroup.add(laser)
    

}
function spawnAsteroid(){
   if(frameCount%75===0){
       asteroid=createSprite(Math.round(random(100,1400)),50);
       asteroid.addImage(asteroidImage)
       asteroid.scale=0.2
       asteroid.velocityY=+2


   }

}