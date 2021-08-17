var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  Leaves_falling=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
var rabbit_lifetime=6
function createApples() { 
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage("apple.png")
  apple.velocityY=-5
   if (rabbit.isTouching(Leaves)){ 
    rabbit_lifetime=rabbit_lifetime-1
  
  }
  if(rabbit.isTouching(apple)){ 
    rabbit_lifetime=rabbit_lifetime+1
  
  }
  

  var select_sprites =Math.round(random(1,2))

  if(frameCount % 80 == 0){ 
    if(select_sprites==1){
      apple =createSprite(random(50,350),40,10,10)
    }
    else{ 
    Leaves=createSprite(random(50,350),40,10,10)
    Leaves.addImage("redImage",Leaves_falling)
    Leaves.velocityY=-5
    }
  }
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX
 createApples();
  drawSprites();
}