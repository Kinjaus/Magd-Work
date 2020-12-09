function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  fill(200);
  strokeWeight(3);

  
  //house 1
  push();
  noFill();
    rect(200,-2,128,400);
  pop();
  beginShape();
  vertex(328,0);
  vertex(328,399);
  vertex(399,380);
  vertex(399,0);
  endShape();
  //windows, house 1
  
   //house 3
  push();
  noFill();
  rectMode(CORNERS)
  rect(-3,-3,72,398)
  pop();
  beginShape();
  vertex(72,0);
  vertex(72,399);
  vertex(141,380);
  vertex(141,0);
  endShape();
 
  
  //house 2
  push();
  fill(255);
  rect(72,270,128,128)
  //Roof
  fill(255);
  pop();
push();
  strokeWeight(3);
  fill(255);
  strokeJoin(BEVEL)
  beginShape();
  vertex(72,270);
  vertex(138,234);
  vertex(200,270);
  endShape();
pop();

    //door
  rect(123,342,30,60)
  point(145,370)
  beginShape();
  vertex(138,234)
  vertex(200,220)
  vertex(200,268)
  endShape();
  
  //roof window
  fill(240);
  ellipse(138,253,30,30);
  
 
  //clock
  fill(125);
  ellipse(0,0,75,75);
  //dot
  push();
  strokeWeight(5)
   point(0,0);
  pop();
  line(0,0,6,12);
  line(0,0,20,14);
  
}