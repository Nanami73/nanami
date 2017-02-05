function setup() {
  resizeCanvas(600,600);
  background(0);
  
  
}


function draw() {
  
  //sad
  
  fill('#4a6ded');
  
  var speed = 0.02
  var t = sin(frameCount * speed);
  
  quad(200,100+ (t * 20)+20,300,250,200,400+ (t * -20)-20,100,250);
  
  
  curve(-20,400,100,250,300,250,420,400);
  fill(0);
  ellipse(170,200,10,10);
  ellipse(230,200,10,10);
  
  
  //smile
  var speed = 0.08
  var t = sin(frameCount * speed);
  
  fill('#e73568');
  quad(400+ (t * 50)-50+50,200,500,350,400+ (t * 50)+50-50,500,300,350);
  
  
  curve(180,200,300,350,500,350,620,200);
  fill(0);
  ellipse(370,300,10,10);
  ellipse(430,300,10,10);
  
  
}