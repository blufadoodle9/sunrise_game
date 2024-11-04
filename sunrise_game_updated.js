let sunHeight;
let horizon = 400;
let birdX = 300;
let birdY = 300;
var gameState = "Beginning"; // Current game state
var wormX = 400;
var wormY = 400;
var score = 0;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
}

function draw() {
  background(13, 4, 74); // Initial background color

  if (gameState === "Beginning") {
    beginning();
  }
  if (gameState === "Day") {
    Day();
  }
  if (gameState === "Birdlevel") {
    birdlevel();
  }
  if (gameState === "BirdLevelTwo") {
    birdlevelTwo();
  }

}

function drawBird(x, y) {
  push();
  fill(240, 150, 34);
  triangle(x + 5, y + 30, x + 30, y + 15, x + 30, y + 35); 
  pop();

  push();
  strokeWeight(4);
  line(x + 60, y + 60, x + 60, y + 75);
  line(x + 60, y + 75, x + 65, y + 80);
  line(x + 45, y + 60, x + 45, y + 75);
  line(x + 45, y + 75, x + 50, y + 80);
  pop();

  fill(207, 191, 154);
  ellipse(x + 50, y + 50, 50, 35);
  circle(x + 35, y + 25, 30);
  arc(x + 50, y + 50, 20, 20, 0, PI + QUARTER_PI, CHORD);

  push();
  fill(0);
  circle(x + 33, y + 22, 5);
  pop();
}

function drawWorm(x, y, amplitude, segments) {
  noFill();
  stroke(252, 150, 216); 
  strokeWeight(8);

  beginShape();
  for (let i = 0; i < segments; i++) {
    let xOffset = map(i, 0, segments, -25, 5);
    let yOffset = sin(TWO_PI * (i / segments)) * amplitude;
    vertex(x + xOffset, y + yOffset);
  }
  endShape();
}

function beginning() {
  if (mouseIsPressed) {
    sunHeight = mouseY;
  }

  if (sunHeight <= horizon) {
    background(92, 82, 158); 
  }
  if (sunHeight < horizon - 50) {
    background(172, 206, 247);
  }
  
  strokeWeight(0);
  fill(255, 251, 0);
  circle(300, sunHeight, 100); 

  stroke(0);
  line(0, horizon, 600, horizon); 

  fill(75, 214, 75);
  rect(0, horizon, 600, 600); 
  text("Click and drag to bring up the sun!", width / 2, 40);
  if (sunHeight <= horizon - 150) {
    gameState = "Day";
  }
}

function Day() {
  if (mouseIsPressed) {
    sunHeight = mouseY;
  }

  if (sunHeight <= horizon) {
    background(92, 82, 158); 
  }
  if (sunHeight < horizon - 50) {
    background(172, 206, 247);
  }
  
  fill(255, 251, 0);
  circle(300, sunHeight, 100); 

  stroke(0);
  line(0, horizon, 600, horizon); 

  fill(75, 214, 75);
  rect(0, horizon, 600, 600); 
  text("Keep Going!", width / 2, 200);
  if (sunHeight < horizon - 250) {
    gameState = "Birdlevel";
  }
}

function birdlevel() {
  background(172, 206, 247);
  fill(255, 251, 0);
  strokeWeight(0);
  circle(300, sunHeight, 100); 
  stroke(0);
  line(0, horizon, 600, horizon); 

  fill(75, 214, 75);
  rect(0, horizon, 600, 600); 

  strokeWeight(2);
  drawBird(birdX, birdY);

  if (mouseIsPressed) {
    birdX = mouseX - 50;
    birdY = mouseY - 50;
  }

  push();
  text("Level 1", width / 2, height - 20);
  text("Score: " + score, width / 2, 40);
  pop();
  
  drawWorm(wormX, wormY, 10, 20);
  var distToWorm = dist(birdX + 25, birdY + 25, wormX, wormY);
  if (distToWorm < 20) {
    wormX = random(20, 580);
    wormY = random(horizon + 20, 580);
    score++;
  }
  
  if (score > 10) {
    gameState = "BirdLevelTwo"; 
  }
}

function birdlevelTwo() {
  background(92, 82, 158);
  fill(255, 251, 0);
  strokeWeight(0);
  circle(300, sunHeight +100 , 100); 
  stroke(0);
  line(0, horizon, 600, horizon); 

  fill(75, 214, 75);
  rect(0, horizon, 600, 600); 

  strokeWeight(2);
  drawBird(birdX, birdY);

  if (mouseIsPressed) {
    birdX = mouseX - 50;
    birdY = mouseY - 50;
  }

  push();
  text("Level 2", width / 2, height - 20);
  text("Score: " + score, width / 2, 40);
  pop();
  
  drawWorm(wormX, wormY, 5, 10);
  var distToWorm = dist(birdX + 25, birdY + 25, wormX, wormY);
  if (distToWorm < 20) {
    wormX = random(20, 580);
    wormY = random(horizon + 20, 580);
    score++;
  }

}
