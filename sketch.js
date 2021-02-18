let aliens = [];

function setup() {
  createCanvas(800, 650);
  greenAlien = loadImage('greenAlien.png');
  for(let i =0; i < 16; i++) {
    let x = 0 +50 * i;
    aliens[i] = new Alien(x, 200, 40);
  }
 
  
}

function draw() {
  background(50, 89, 100);
  for (let i = 0; i < aliens.length; i++){
  aliens[i].move();
  aliens[i].display();
  }
}

// Jitter class
class Alien {
  constructor(tempX,tempY) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = 50;
    this.speed = 0.5;
    
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

  


  


