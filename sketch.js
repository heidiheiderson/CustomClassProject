let aliens = [];
let cannon;
let counter = 0;
let directionTrigger = true;
let cannonX;
let cannonY;
let bulletY;


function setup() {
  createCanvas(800, 650);
  bulletY = height;
  cannonX= width/2;
  cannon = loadImage('cannon.png');
  greenAlien = loadImage('greenAlien.png');
  for(let i =0; i < 10; i++) {
    let x = 10 +100 * i;
    aliens[i] = new Alien(x, 0);
  } 
}


function draw() {
  //frameRate(10);
  background(50, 89, 100);
  cannonMove();
  // counter += 1;
  // print(counter);
  for (let i = 0; i < aliens.length; i++){
  aliens[i].move();
  aliens[i].display();
  }
  bullet();
}

function cannonMove(){
  cannonX = cannonX + random(-5, 5);
  cannonY = 600;
   image(cannon, cannonX, cannonY,  100, 75);
   if(cannonX < 50){
    cannonX = cannonX + 50;
   }
   if(cannonX > 750){
    cannonX = cannonX - 50;
   }
}

function bullet(){
  bulletY = bulletY -1;
  noStroke();
  rect(cannonX + 50, bulletY, 5, 5);
 }

// Jitter class
class Alien {
  constructor(tempX,tempY) {
    this.x = tempX;
    this.y = tempY;
    this.xHome = tempX;
    this.yHome = tempY;
    this.diameter = 50;
    this.ySpeed = 0.25;
    this.xSpeed = 0.25;
  }

  display() {
    image(greenAlien, this.x, this.y, this.diameter, this.diameter);
  }
  move(){

    // this.y = this.y + this.ySpeed;
    if(this.y > 650){
      this.y = 0;
    }
    this.x = this.x + this.xSpeed;
    if(this.x > this.xHome + 10){
      this.xSpeed = -1* this.xSpeed;
      this.y = this.y + 10;
    }
    if(this.x < this.xHome - 10){
      this.xSpeed = -1 * this.xSpeed;
      this.y = this.y + 10;
    }
  }
}



// get and setup my cannon image
//get and setup my bullet image

//create a method for bullet/alien collision


//create a method for randomized cannon movement
  //cannon speed
  //initialize and update middle of cannon which is a global variable


//create a method for randomized bullet timing and movement 
  //bullet position x/starting point is the same as the middle of cannon variable
  //bullet position x = middle of cannon variable
  //bullet speed
//





//if my counter reads 10 then change direction, which applies to both +x and -x
//  if my counter reads anything other than 10, keep moving in same direction

//while helen is away, read documentation examples of boolean in js

//let directionTrigger = true;
//let c = 10;
// for(let i = c; i <= 10
//if(directionTrigger ===true)
// this.xSpeed = -this.xSpeed;
//if 




  


  


