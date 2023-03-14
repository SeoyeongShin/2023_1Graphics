let img;
function preload(){
  img = loadImage("https://cdn-icons-png.flaticon.com/512/1501/1501860.png");
}
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);
  //rotate(mouseX);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(100);
  //console.log(frameCount);
}
