
var tileCount = 20;
var circleAlpha = 180;
var actRandomSeed = 0;
function setup(){
  createCanvas(500, 500);
  colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
  push();
  translate(width/tileCount/2, height/tileCount/2);
  background('#d8a8b5');
  smooth();
  noFill();
  var circleColor = (random(255));
  var circleAlpha = 4.0; 
  randomSeed(actRandomSeed);
  stroke(circleColor,circleAlpha);
  //stroke('rgba(100,0,100,0.5)');
  strokeWeight(mouseY/25);

  for (var gridY=0; gridY<tileCount; gridY++) {
    for (var gridX=0; gridX<tileCount; gridX++) {
      var posX = width/tileCount * gridX;
      var posY = height/tileCount * gridY;
      var shiftX = random(-mouseX, mouseX)/100;
      var shiftY = random(-mouseX, mouseX)/100;
      ellipse(posX+shiftX, posY+shiftY, mouseY/15, mouseY/15);
    }
  }
  pop();
  }

function mousePressed() {
  actRandomSeed = int(random(100000));
}

function keyTyped(){
  if (key == 's' || key == 'S') save("P_2_1_2_01.png");
}