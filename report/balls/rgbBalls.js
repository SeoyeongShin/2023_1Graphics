// rgb-balls 
function setup() {
  createCanvas(800, 400);

}
let i = 0;
function draw() {
  background(200);
  fill(255,0,0);
  ellipse(200, i, 150,150);
  fill(0,255,0);
  ellipse(400, i, 150,150);
  fill(0,0,255);
  ellipse(600, i, 150,150);
  i = i + 1;
  if(i>=height) i = 1;
}
