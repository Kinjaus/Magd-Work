function setup() {
  createCanvas(1400, 800);
   background(0);
  
}

function draw() {
  //colors
 let a = color(215,255,255);
  let b = color ('#808080');
  push();
  colorMode(HSB, 360, 100, 100);
  let c = color (240,100,90);
  pop();
  let d = color (0,230,0)
  let e = color (255,0,0)
  //UFO BOTTOM
  
  fill(b);
  arc(350,200,100,60,radians(10),radians(170),PIE);
  
  //UFO TOP
  fill(a);
  arc(350,205,50,70,radians(180),radians(0),OPEN);
  
  //Earth
  fill(c);
  ellipse(1000,600,500,500)
  //Land
  fill(d);
  noStroke();
  triangle(1200,650,1150,700,1150,630);
  quad(1000,600,1150,620,1150,720,1000,710)
  triangle(1050,710,1150,715,1000,800)
  triangle(1010,620,900,550,970,545)
  quad(850,550,1050,550,1125,450,900,440);
  push();
  stroke(d);
  strokeWeight(10);
  line(1045,550,1050,570)
  pop();
  
  beginShape();
  vertex(830,690);
  vertex(900,700);
  vertex(940,780);
  vertex(845,730)
  endShape();
  
  //Extra planet
  fill(e);
  ellipse(100,700,100,100);
  
  //Extra planet 2
  fill(a);
  ellipse(500,400,150,150)
  
  //sun
  fill(255,255,73)
  ellipse(1400,0,300,300)
}