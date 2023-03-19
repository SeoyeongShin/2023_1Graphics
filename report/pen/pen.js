// Pen
function setup() {
  createCanvas(400, 400);
  strokeWeight(16);
  stroke(255,0,0);
}

function draw() {
  if(mouseIsPressed)
    line(pmouseX, pmouseY, mouseX, mouseY);
}
