let i =1
let r =1
let g =1
let b =1
let z =1
let y =1
let x =1

function setup() {
  createCanvas(400, 400);
   background(220);
}

function draw() {
  //cricle loop
 if (i>99) {
   i=1
 }
if (i<100) {
  i++
}
  
  //color r
  if (r>224) {
    r=1
    print('R done')
  }
  if (r<225) {
   r++ 
  }
  
  //color b
  if (b>200) {
    b=1
    print('B done')
  }
  if (b<201) {
   b++ 
  }
  
  //color g
  if (g>100) {
    g=1
    print('G done')
  }
  if (g<101) {
   g++ 
  }
  
  fill(r%255,g%255,b%255)
  //cricle 1
   ellipse(mouseX, mouseY,i,i)

   //circle 2 - oppisite
  
  ellipse(width - mouseX, height - mouseY,i,i)

  //size of i
  print(i)
  
  //battleing numbers
  let ma = max (x%5 * 10,y%5 *10,z%5 *10)
  x = float(x+r)
  y = float(y+b)
  z = float(z+g)
  
  let mi = min (x%4 *5, y%4 *5, z%4 *5)
  
  let d = dist(ma,mi,x,y)
  print (d)
  
  //box
  push();
  rect(CENTER);
  rect(width/2,height/2, ma, mi)
  pop();
  
  
  
}