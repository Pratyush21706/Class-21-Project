// Hi Mam ,
/* When you will move forward ind this project you will see that i have used a short but more accurate 
algorithm for checking the bullet's collison with the wall , Ihave used the other becaise I think that mine 
algorithm works better then this one :- { bullet.y-wall.y<wall.height+bullet.height/2 =>(500 - 200<508+405/2 =
300< 105.5)}, but if you will say to use the algorithm taught in class then I would be very happily doing so.😊*/




//please read the avobe wiitten text before moving forward.






























var bullet,base,gun,crack,hole,chain,chain_anime;
var hole_anmie,gun_anime,crack_anime,bullet_anime;
var wall,timer = 1;
var load,load_anime;
var n1 =0,n2 = 20;n3 = 10;
var gunshot,starter,esc;
var thickness,weight,speed,damage;
var intro,life  =1;
var number  = 0;
var START = 1;
var END = 2;
var TEST =3;
var gameStage = START;

function preload(){
bg = loadImage("bg.jpg")
base_anime = loadImage("base.png")
bullet_anime = loadImage("bullet.png")
gun_anime = loadImage("gun.png");
crack_anime = loadImage("crack.png")
hole_anmie = loadImage("hole.png")
chain_anime = loadImage("chain.png")
load_anime = loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png");
gunshot=  loadSound("shot.mp3");
w1 = loadImage("wall1.jpg")
w2 = loadImage("wall5.jpg")
w3 = loadImage("wall3.jpg")
w4 = loadImage("wall4.jpg")
b1 = loadImage("if.png")
}
//FF007F//008OFF
function setup() {
  createCanvas(1500,650);

  intro = createSprite(750,325,1500,650);
intro.shapeColor = "#FFFF00"
load  = createSprite(intro.x-100,intro.y);
load.addAnimation("run",load_anime);
load.scale = 3;
speed = random(-223,-300);
weight = random(30,52);
thickness = random(32,83);
wall = createSprite(1000,200);
      wall.addImage(w1)
      wall.scale = 0.3
      bullet = createSprite(1000,500,10,100)
bullet.visible = false;
wall.visible = false;
bullet.depth = wall.depth+1;
bullet.addImage(bullet_anime);
bullet.scale = 0.2;
gun  = createSprite(bullet.x,bullet.y+90)
gun.addImage(gun_anime);
gun.scale = 0.5;
gun.visible = false;
chain = createSprite(wall.x+105,wall.y/2,10,100);
chain.addImage(chain_anime);
chain1 = createSprite(wall.x-35,wall.y/2,10,100);
chain1.addImage(chain_anime);
wall.depth  = chain.depth+1&&chain1.depth+1;
chain1.visible=false;
chain.visible = false;
}      

function draw() {
    background(bg);
    life = life+0.1
    if(life>10){
      intro.shapeColor = "#FF007F"
    }
    if(life>20){
      intro.shapeColor = "#0080FF"
    }
   if(life>30){
     intro.visible = false;
     base = createSprite(180,30);
     base.addImage(base_anime)
     base.scale = 1.5
     load.visible =false;
     bullet.visible = true;
     wall.visible = true;;
gun.visible = true;
      scoreboard = createSprite(180,base.y+340,415,620);
      scoreboard.shapeColor = "yellow"
      gameStage = TEST;
      life = 30;
      base.depth = scoreboard.depth+1;
chain1.visible=true;
chain.visible=true;
   }
    if(keyDown("SPACE")){
      bullet.velocityY  = speed;
      gunshot.play();
    }
if(hasCollided(bullet,wall)){
bullet.velocityY = 0;
bullet.velocityX = 0;
bullet.visible = false;
hole = createSprite(wall.x,wall.y)
hole.addImage(hole_anmie)
hole.scale = 0.1;
damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){
  crack = createSprite(wall.x,wall.y);
  crack.addImage(crack_anime);
  crack.depth = wall.depth+4;
  crack.scale = 0.4
}
}
    drawSprites();
    console.log(bullet.height)
    if(gameStage === START){
      timer  = timer+0.1*3.45;
      if(timer>100){
        timer = 100;
      }
      
    if(life>1){
      textSize(30)
      textStyle("bold")
      fill("white");
      text("1.Generating 🌏World",500,450)
    }
    if(life>10){
      textSize(30)
      fill("white");
      textStyle("bold")
      text("2.Creating The Enviroment🏞",500,500)
    }
    if(life>20){
      textSize(30)
      fill("white");
      textStyle("bold")
      text("3.Cocking the gun🔫",500,550)
    }
  rect(560,600,life*9,20);
  text(Math.round(timer)+"%",490,620);
  }
    if(gameStage===TEST){
      fill("black");
      textSize(30)
      text("Bullet Wt:  "+Math.round(weight),base.x/4,base.y+180)
    text("Bullet Speed:  "+ Math.round(-speed),base.x/4,base.y+240)
    text("Wall Thickness:   "+ Math.round(thickness),base.x/4,base.y+300)
    textStyle("bold")
text("Results",base.x/1.5,base.y+100)
text("Damage Taken🔽",base.x/5,base.y+390)
text(damage*1,base.x/5,base.y+480)
text("🦸GOOD DAY!🦸‍",base.x/3,base.y+600)
fill("White")
noStroke();
rect(base.x/3,base.y+515,damage*18,30);
fill("black")
textSize(15)
text("Intensity "+Math.round(damage)+"0%",base.x/3,base.y+530);

    }
  }

  