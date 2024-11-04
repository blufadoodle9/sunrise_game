let sunHeight;
let horizon = 400;
let birdX=300;
let birdY=300;
//let gameState = "Beginning";
var gameState = "Beginning";

function setup() {
createCanvas(600,600);
textAlign(CENTER);
//textsize(20);

}//end of setup


function draw() {
background (13, 4, 74);

if(gameState == "Beginning") {
  beginning();
}
if(gameState == "Day") {
  Day();
}
if(gameState == "Birdlevel") {
  birdlevel();
}
}//end of draw

function drawBird (x,y){
  push();
  fill(240, 150, 34);
  triangle(x + 5, y + 30, x + 30, y + 15, x + 30, y + 35); // Use x and y
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
} //creation of bird sprite

function drawWorm(x, y, amplitude, segments) {
noFill();
  stroke(252, 150, 216); // Set line color
  strokeWeight(8);
  
  beginShape();
  for (let i = 0; i < segments; i++) {
    let xOffset = map(i, 0, segments, -25, 5); // X position
    let yOffset = sin(TWO_PI * (i / segments)) * amplitude; // Y position based on sine wave
    vertex(x + xOffset, y + yOffset); // Create a vertex for the line
  }
  endShape();
}

function beginning() {


  
if (mouseIsPressed === true) {
  sunHeight = mouseY;
}//sun follows mouse when clicked

if(sunHeight <= horizon) {
  background(92, 82, 158); 
} //dawn sky
if(sunHeight < horizon - 50) {
  background(172, 206, 247);
} //daytime sky
  fill(255, 251, 0);
circle(300, sunHeight, 100); //sun

stroke (0);
line (0,horizon, 600,horizon); //horizon line

fill (75, 214, 75);
rect (0, horizon, 600, 600); //grass
text(("Click and drag to bring up the sun!"),width/2,40);
if(sunHeight <= horizon - 150) {
  gameState = "Day";
}
} //end of beginning/daytime scene

function Day() {
   
if (mouseIsPressed === true) {
  sunHeight = mouseY;
}//sun follows mouse when clicked

if(sunHeight <= horizon) {
  background(92, 82, 158); 
} //dawn sky
if(sunHeight < horizon - 50) {
  background(172, 206, 247);
} //daytime sky
  fill(255, 251, 0);
circle(300, sunHeight, 100); //sun

stroke (0);
line (0,horizon, 600,horizon); //horizon line

fill (75, 214, 75);
rect (0, horizon, 600, 600); //grass
text(("Keep Going!"),width/2,200);
if (sunHeight < horizon - 250) {
  gameState = "Birdlevel";

}
} // end of Day gamestate

function birdlevel() {
  background(172, 206, 247)
    fill(255, 251, 0);
circle(300, sunHeight, 100); //sun
stroke (0);
line (0,horizon, 600,horizon); //horizon line

fill (75, 214, 75);
rect (0, horizon, 600, 600); //grass

drawBird(birdX,birdY);
if (mouseIsPressed === true) {
  birdX = mouseX - 50;
  birdY = mouseY - 50;
} //bird moves with mouse when clicked


}
