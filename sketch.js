 var PLAY = 1;
var END = 0;
var gameState = 1;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  ground = createSprite(600,500,1200,200)
  
  
  monkey = createSprite(100,370,50,50);
  monkey.addAnimation(monkey_running);
  
  score = 0;
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
}


function draw() {
background("lightblue");
  ground.velocityX = -4;
  
  
  if(frameCount % 60 === 0){
    obstacle = createSprite(500,370,50,50);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    obstacleGroup.add(obstacle);
    
   
  }
    if(ground.x < 30){
      ground.x = 300;
      
    }
  
  if(keyDown("space")){
    
    monkey.velocityY =-15; 
  }
  
  monkey.velocityY = monkey.velocityY+ 0.8;
  
 monkey.collide(ground);
  
  
  
  
  if(frameCount % 100 === 0){
    banana = createSprite(550,220,50,50);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -8;
    bananaGroup.add(banana);
  }
  
  
  text("SCORE "+ score,450,150);
  
  
  if(bananaGroup.isTouching(monkey)){
    
    score = score+1; 
    bananaGroup.destroyEach();
  }
    
  
    if(obstacleGroup.isTouching(monkey)){
    
      gameState = END;
    }
  
  if(gameState === END){
    score = 0;
    reset();
    text("GAME OVER",250,250);
    text("PRESS R TO RESTART",240,270);
  }
  
if(keyDown("r")){
  
  gameState = PLAY;
}
  
  drawSprites();
}

function reset(){
  
  bananaGroup.destroyEach();
  obstacleGroup.destroyEach();
  
}

  
  
  




