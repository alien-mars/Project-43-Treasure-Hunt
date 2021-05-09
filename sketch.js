var bg,bg2,form,system,security;
var score=0;
var treasure_sound, correct_sound, incorrect_sound, unlocked_img;

function preload() {
 
  bg= loadImage("aladdin_cave2.jpg");
  bg2= loadImage("aladdin_cave.jpg");

  //load image for the treasure background
  
  bg3= loadImage("treasure.jpg");
  bg4= loadImage("treasure2.jpg");

  unlocked_img = loadImage("unlocked.png");
}

function setup() {
  createCanvas(1100,500);

  treasure_sound = new Audio("treasure.mp3");
  correct_sound = new Audio("correct.mp3");
  incorrect_sound = new Audio("incorrect.mp3");
  
  system = new System();
  security = new Security();
  
}

function draw() {
    background(bg2);
    
    security.display();
    clues();
    textSize(20);
    fill("white");
    text("Score: " + score, 450, 50);

    if(score === 3) {
      // add code for changing the background to the treasure background
      clear();
      background(bg4);
      image(unlocked_img,370,5,350,230);
      treasure_sound.play();
      if(treasure_sound.isLooping()){
        treasure_sound.stop();
      }
    }
 
    drawSprites();
}