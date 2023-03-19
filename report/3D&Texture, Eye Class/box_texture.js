// box texture
let img;
function preload(){
  img = loadImage("https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/bird_parrot.png");
}
function setup() {
  createCanvas(400, 400, WEBGL);
  strokeWeight(5);
  stroke(102, 204, 102);
}

function draw() {
  background(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(100);
}
