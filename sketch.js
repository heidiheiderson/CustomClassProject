let aliens = [];
let cannonImage;
let counter = 0;
let directionTrigger = true;
let cannonX;
let cannonY;
let bulletY;
<<<<<<< HEAD
let bullet;
let cannon;
=======
>>>>>>> parent of ab04d93 (fixed wiggly bullet)


function setup() {
  createCanvas(800, 650);
  bulletY = height;
  cannonX= width/2;
  cannonImage = loadImage('cannon.png');
  greenAlien = loadImage('greenAlien.png');
  for(let i =0; i < 10; i++) {
    let x = 10 +100 * i;
    aliens[i] = new Alien(x, 0);
<<<<<<< HEAD
  }
  bullet = new Bullet();
  // cannon = new Cannon();
=======
  } 
>>>>>>> parent of ab04d93 (fixed wiggly bullet)
}


function draw() {
  //frameRate(10);
  if (second() % 4 == 0) {
  //bullet is triggered to fire 
   bullet.display();
   print(second());
  }
  background(50, 89, 100);
  cannonMove();
<<<<<<< HEAD
  // cannon.display();
  // cannon.move();
=======
  // counter += 1;
  // print(counter);
>>>>>>> parent of ab04d93 (fixed wiggly bullet)
  for (let i = 0; i < aliens.length; i++){
  aliens[i].move();
  aliens[i].display();
  }
<<<<<<< HEAD
=======
  bullet();
>>>>>>> parent of ab04d93 (fixed wiggly bullet)
}

function cannonMove(){
  cannonX = cannonX + random(-5, 5);
  cannonY = 600;
   image(cannonImage, cannonX, cannonY,  100, 75);
   if(cannonX < 50){
    cannonX = cannonX + 50;
   }
   if(cannonX > 750){
    cannonX = cannonX - 50;
   }
 }


// class Cannon{
//   constructor(tempX, tempY){
//     this.x = tempX;
//     this.y = tempY;
//     this.speed = 1;
//     this.initialX = cannonX;
//     this.initialY = cannonY;
//   }
//   move(){
//     this.y += random(-this.speed, this.speed);
//       if(this.y < 50){
//     this.y = this.y + 50;
//    }
//    if(this.y > 750){
//     this.y = this.y - 50;
//    }
//   }


//   display(){
//     cannonY = 600;
//    image(cannonImage, this.initialX, this.initialY,  100, 75);
//   }
// }

function bullet(){
  bulletY = bulletY -1;
  noStroke();
<<<<<<< HEAD
  //this.y = this.y - 1;
  bulletY = bulletY - 2;
  translate(0, this.y);
  rect(this.initialX + 50, bulletY - 60, 5, 5);

  }
  move(){
  bulletY = bulletY -1;
  }
=======
  rect(cannonX + 50, bulletY, 5, 5);
>>>>>>> parent of ab04d93 (fixed wiggly bullet)
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




  


  


