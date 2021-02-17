
let greenAlien;

function setup() {
  createCanvas(800, 650);
  greenAlien = loadImage('greenAlien.png');
  alien = new Alien();
  
}

function draw() {
  background(50, 89, 100);
  alien.display();
  alien.move();
}

// Jitter class
class Alien {
  constructor() {
    this.x = 200;
    this.y = 1;
    this.diameter = 50;
    this.speed = 1;
    
  }

  display() {
    image(greenAlien, this.x, this.y, this.diameter, this.diameter);
  }
  move(){
    this.x = this.x;
    this.y = this.y + this.speed;
    if(this.y > 650){
      this.y = 0;
    }
  }
}

  


