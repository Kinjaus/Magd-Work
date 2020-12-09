var screenON = 1
var channal = 1
var y = 370


function setup() {
  createCanvas(400, 400);
  
  
  //TV screen
  fill(210,105,30)
  beginShape();
    vertex(0,0)
    vertex(400,0)
    vertex(400,400)
    vertex(0,400)
  endShape();
  
  
 
}

function draw() {
  push();
  fill(255)
  beginShape();
    vertex(30,30)
    vertex(370,30)
    vertex(370,370)
    vertex(30,370)
  endShape(CLOSE);
  pop();
  
  //TV button
  push();
    //TV button OFF
  if(screenON == 1){ 
  fill(255,0,0)
  ellipse(350,385,20,20);
    push();
    fill(0)
    text('off',342,387)
    pop();
  }
  
  //TV button ON
  if(screenON == -1){
    fill(0,255,0)
    ellipse(350,385,20,20); 
     push();
    fill(0)
    text('on',342,387)
    pop();
    //Screen static
    y= y-3
    line(30,y,370,y);
    if(y <= 30) {
      y = 370

    }
  }
  pop();
  
  
  //Channal button
  push();
  if(channal == 1){
    fill(125);
    rect(width/2,375,20,20)
    push();
    fill(0)
    text('off',202,387)
    pop();
  }
  
  if(channal == -1){
    fill(100);
    rect(width/2,375,20,20)
     push();
    fill(0)
    text('on',202,387)
    pop();
    print('Imageine multiple channals')
  }

  pop();
  }







//TV button Change
function mouseClicked(){
    if(dist(mouseX,mouseY,350,385)<10){
     screenON = screenON*-1
      print(screenON)
}
  
  
  if(mouseX>200 && mouseX<220 && mouseY>375 && mouseY<395){
    channal = channal*-1
  }
    }