var backgroundImg,earthImg,playerImg;
var enemy1Img,enemy2Img,enemy3Img,enemy4Img,enemy5Img;
var stoneImg,fireImg,coinImg;
var enemyGroup1,enemyGroup2,enemyGroup3,enemyGroup4,enemyGroup5,enemyGroup6
var fireGroup;
var LOSE=0;
var PLAY=1;
var WIN=2;
var gameState=PLAY;

function preload() {
  backgroundImg = loadImage("ground.png");
  earthImg = loadImage("blue.jpg");
  playerImg = loadImage("player.png");
 enemy1Img = loadImage("enemy1.jpg");
 enemy2Img = loadImage("enemy2.jpg");
 enemy3Img = loadImage("enemy3.jpg");
 enemy4Img = loadImage("enemy4.jpg");
 enemy5Img = loadImage("enemy5.jpg");

 stoneImg = loadImage("stone.png");
 fireImg = loadImage("fire.jpg");
 //coinImg = loadImage("coin.png");
}



function setup() {
  createCanvas(1000,600);
earth=createSprite(30,300,50,50);
earth.addImage(earthImg);
earth.scale = 0.1;

player=createSprite(170,300,50,50);
player.addImage(playerImg);
player.scale = 0.3

//coin=createSprite(400,45,10,10);
//coin.addImage(coinImg);
//coin.scale = 0.2;

enemyGroup1= new Group(); 
enemyGroup2= new Group(); 
enemyGroup3= new Group(); 
enemyGroup4= new Group(); 
enemyGroup5= new Group(); 
enemyGroup6= new Group();
fireGroup= new Group();

score = 0

}

function draw() {
  background(backgroundImg);  
 
  if(gameState==PLAY)//Play state
  {  
    if (keyDown("space")) {
      createFire();
      
    }
  
    var createenemy = Math.round(random(1,6));
    
    if (World.frameCount % 80 == 0) {
      if (createenemy == 1) {
        enemy1();
      } else if (createenemy == 2) {
        enemy2();
      } else if (createenemy == 3) {
        enemy3();
      } else if (createenemy == 4) {
        enemy4();
      } else if (createenemy == 5) {
        enemy5();
      }else {
        enemy6();
      }
    }
  
    if (fireGroup.isTouching(enemyGroup1)) {
      enemyGroup1.destroyEach();
      fireGroup.destroyEach();
      score=score+2;
    }
    
    if (fireGroup.isTouching(enemyGroup2)) {
      enemyGroup2.destroyEach();
      fireGroup.destroyEach();
      score=score+2;
    }
    
    if (fireGroup.isTouching(enemyGroup3)) {
      enemyGroup3.destroyEach();
      fireGroup.destroyEach();
      score=score+2;
    }
    
    if (fireGroup.isTouching(enemyGroup4)) {
      enemyGroup4.destroyEach();
      fireGroup.destroyEach();
      score=score+2;
    }
    
    if (fireGroup.isTouching(enemyGroup5)) {
      enemyGroup5.destroyEach();
      fireGroup.destroyEach();
      score=score+2;
    }
    
    if (fireGroup.isTouching(enemyGroup6)) {
      enemyGroup6.destroyEach();
      fireGroup.destroyEach();
      score=score+2;
    }  
  
    if(keyDown("up")){
      player.y = player.y - 6;
    }
    if(keyDown("down")){
      player.y = player.y + 6;
    }
        if(enemyGroup1.isTouching(earth) || enemyGroup2.isTouching(earth) || enemyGroup3.isTouching(earth)  || enemyGroup4.isTouching(earth) || enemyGroup5.isTouching(earth) || enemyGroup6.isTouching(earth)) {
          gameState=LOSE;
        } 
       
   }

   if(gameState==LOSE)//END State
   { 
    enemyGroup1.destroyEach(); 
    enemyGroup2.destroyEach();
    enemyGroup3.destroyEach();
    enemyGroup4.destroyEach();
    enemyGroup5.destroyEach();
    enemyGroup6.destroyEach();
   player.setVelocity(0,0);
 player.pause();
 textSize(50)
    textFont("Broadway");
    fill("yellow");
    stroke("red");
    strokeWeight(5);
 text("     ⛔OH! NO! CROWN STOLEN⛔",player.x,300);
 }
   drawSprites();
   textSize(50)
    
  
    textFont("Broadway");
    fill("yellow");
    stroke("red");
    strokeWeight(5);
   text("killed😈: "+ score, 420,50);
}

function enemy1() {
  var ship1 = createSprite(1000,Math.round(random(60, 550)), 10, 10);
  ship1.addImage(enemy1Img);
  ship1.velocityX = -3;
  ship1.scale = 0.3;
  enemyGroup1.add(ship1);
}

function enemy2() {
  var ship2 = createSprite(1000,Math.round(random(60, 550)), 10, 10);
  ship2.addImage(enemy2Img);
  ship2.velocityX = -3;
  ship2.scale = 0.1;
  enemyGroup2.add(ship2);
}

function enemy3() {
  var ship3 = createSprite(1000,Math.round(random(60, 550)), 10, 10);
  ship3.addImage(enemy3Img);
  ship3.velocityX = -3;
  ship3.scale = 0.3;
  enemyGroup3.add(ship3);
}

function enemy4() {
  var ship4 = createSprite(1000,Math.round(random(60, 550)), 10, 10);
  ship4.addImage(enemy4Img);
  ship4.velocityX = -3;
  ship4.scale = 0.3;
  enemyGroup4.add(ship4);
}

function enemy5() {
  var ship5 = createSprite(1000,Math.round(random(60, 550)), 10, 10);
  ship5.addImage(enemy5Img);
  ship5.velocityX = -3;
  ship5.scale = 0.3;
  enemyGroup5.add(ship5);
}

function enemy6() {
  var stone = createSprite(1000,Math.round(random(60, 550)), 10, 10);
  stone.addImage(stoneImg);
  stone.velocityX = -3;
  stone.scale = 0.3;
  enemyGroup6.add(stone);
}


function createFire() {
  var fire= createSprite(270,300, 60, 10);
  fire.addImage(fireImg);
  fire.x = 270;
  fire.y=player.y;
  fire.velocityX = 4;
  fire.scale = 0.2;
  fireGroup.add(fire);
   
}

