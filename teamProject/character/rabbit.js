function setup()
{
  createCanvas(400, 400);
}

function draw()
{
  background(255);
  translate(mouseX - 200, mouseY - 200);
  rabbit();
}

function rabbit()
{
  //귀
  fill(255);
  strokeWeight(3);
  push(); //왼쪽 귀
  translate(150, 115);
  rotate(radians(-10));
  ellipse(0, 0, 50, 100);
  pop();
  push(); //오른쪽 귀
  translate(250, 115);
  rotate(radians(10));
  ellipse(0, 0, 50, 100);
  pop();
  
  //귀 내부
  fill(255, 180, 180);
  push(); //왼쪽 귀 내부
  translate(150, 112);
  rotate(radians(-10));
  ellipse(0, 0, 30, 65);
  pop();
  push(); //오른쪽 귀 내부
  translate(250, 112);
  rotate(radians(10));
  ellipse(0, 0, 30, 65);
  pop();
  
  //얼굴
  fill(255);
  ellipse(200, 200, 180, 170);
  
  //눈
  fill(0);
  ellipse(160, 195, 10, 10); //왼쪽 눈
  ellipse(240, 195, 10, 10); //오른쪽 눈

  //코
  ellipse(200, 210, 15, 15);
  
  //입
  fill(255);
  line(200, 220, 200, 225); //인중
  arc(190, 225, 20, 20, 0, PI); //왼쪽 입
  arc(210, 225, 20, 20, 0, PI); //오른쪽 입
}
