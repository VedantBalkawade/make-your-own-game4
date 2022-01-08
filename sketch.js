var engine, world;
var bg, question, betterlucknexttime,timesup
var playerButton,soundButton,rulesButton,rankButton
var timesup, player1, player2;


function preload(){
    
bg = loadImage("img3.jpg")
question = loadImage("img1.jpg")
betterlucknexttime = loadImage("better luck next time.jpg")
timesup = loadImage("times up.jpg")  
player1 = loadImage("player1.png")
player2 = loadImage("player2.png")
}

function setup(){

    var canvas = createCanvas(1200,600);

    var playerButton = createSprite(600,400,200,60)
    playerButton.visible = false
    var playerButton2 = createSprite(129,55,40,60)
    playerButton2.visible = false
    var playerButton3 = createSprite(208,55,40,60)
    playerButton3.visible = false
    var playerButton4 = createSprite(288,55,40,60)
    playerButton4.visible = false
    var playerButton5 = createSprite(365,55,40,60)
    playerButton5.visible = false
    var soundButton = createSprite(50,55,40,60)
    soundButton.visible = false
    var player1Sprite = createSprite(500,270,30,30)
    var player2Sprite = createSprite(700,270,30,30)

    player1Sprite.addImage(player2);
    player1Sprite.scale = 0.5

    player2Sprite.addImage(player1);
    player2Sprite.scale = 0.5


    
    if(mousePressedOver(playerButton)) {
      console.log("yes")
    }


    // playerButton.mouseClicked("Pressed")
}

function draw(){

    background(bg);
    
    // player2.a
  
    drawSprites();
}


















// let ground;
// let lander;
// var lander_img;
// var bg_img;


// var vx = 0;
// var g = 0.05;
// var vy = 0;

// function preload()
// {
//   lander_img = loadImage("normal.png");
//   bg_img = loadImage("bg.png");
// }

// function setup() {
//   createCanvas(1000,700);
//   frameRate(80);

//   lander = createSprite(100,50,30,30);
//   lander.addImage(lander_img);
//   lander.scale = 0.1;

//   rectMode(CENTER);
//   textSize(15);
// }

// function draw() 
// {
//   background(51);
//   image(bg_img,0,0);
//   push()
//   fill(255);
//   text("Vertical Velocity: "+round(vy),800,75);
//   pop();

//   //fall down
//   vy +=g;
//   lander.position.y+=vy;
//   drawSprites();
// }


