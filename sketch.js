let aliens = [];
let cannon;
let counter = 0;
let directionTrigger = true;
let cannonX;
let cannonY;
let bulletY;
let bullet;


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
  bullet = new Bullet();
}


function draw() {
  //frameRate(10);
  background(50, 89, 100);
  cannonMove();
  for (let i = 0; i < aliens.length; i++){
  aliens[i].move();
  aliens[i].display();
  }
  bullet.display();
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


 class Bullet{
  constructor(tempX, tempY){
    this.x = tempX;
    this.y = tempY;
    this.ySpeed = -0.5;
    this.initialX = cannonX;
  }
  display(){
  noStroke();
  // this.y = this.y - 1;
  bulletY = bulletY - 2;
  translate(0, this.y);
  rect(this.initialX + 50, bulletY - 60, 5, 5);

  }
  // move(){
  // bulletY = bulletY -1;
  // }
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

//i need a function(?) that causes my bullet to shoot randomly
//and then i need the occurance of the bullet to end at 0Y or at
//impact of aliens

//i need to place the start point of my bullet at the cannon's center as the cannon is moving. 
//and then i need the bullet and it's movement to not be associated
//with the cannon or it's movement



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




  


  


