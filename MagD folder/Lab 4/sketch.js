 let x=-150

function setup() {
  createCanvas(400, 400);
  background(220);
  //pizza
  stroke(255,200,0)
  fill(255,255,0)
  ellipse(width/2,height/2,200,200)
  line(200,100,200,300)
  line(100,200,300,200)
  line(130,130,270,270)
  line(130,270,270,130)
  
  //text
  push();
  noStroke()
  fill(0,0,0)
  textSize(28)
  text('Click and hold to add pepperoni',0,30)
  pop();
  
  //text 2
  push();
  noStroke()
  fill(0,0,0)
  textSize(27)
  text('Press any key to clear the screen',0,60)
}




function draw() {
  
  //pepperoni
  push();
  stroke(0,0,0)
if(mouseIsPressed){
  fill(255,0,0)
  let w = random(130,270)
  let h = random(130,270)
  for(let x=0; x<5; x++)
    ellipse(w,h,20,20)

}
  if(keyIsPressed){
  clear();
    background(220);
  //pizza
  stroke(255,200,0)
  fill(255,255,0)
  ellipse(width/2,height/2,200,200)
  line(200,100,200,300)
  line(100,200,300,200)
  line(130,130,270,270)
  line(130,270,270,130)
  
}
  pop();
  
  //Floating "Have fun"
  push();
  stroke(0,0,0)
  fill(255,255,255)
  x++
if(x>400){
  x=-150
}
  text('Have fun!',x,350);
  pop();
  print(x)
}
