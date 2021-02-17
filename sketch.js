

//let bug; // Declare object
let aliens = [];
let greenAlien;

function setup() {
  createCanvas(800, 650);
  greenAlien = loadImage('greenAlien.png');
  pinkAlien = loadImage('pinkAlien.png');
 
  // Create object
  //bug = new Jitter();
  //aliens = new Aliens();
  for (let i = 0; i < 10; i++){
  aliens.push(new Aliens());
  }
}

function draw() {
  background(50, 89, 100);
  
  // bug.move();
  // bug.display();
  // aliens.move();
  // aliens.display();
  for (let i = 0; i < aliens.length; i++){
    aliens[i].move();
    aliens[i].display();
  }
}

// Jitter class
class Aliens {
  constructor() {
    this.x = random(width);
    this.y = 1;
    //this.y = random(height);
    //this.diameter = random(10, 30);
    this.diameter = (50, 50);
    this.speed = 1;
   
  }

  move() {
    //this.x += random(-this.speed, this.speed);
    //this.y += random(-this.speed, this.speed);
    this.y += this.speed;
    if (this.y < height){
      this.y = 0;
    }
  }

  display() {
    image(greenAlien, this.x, this.y, this.diameter, this.diameter);
    
  }
}

