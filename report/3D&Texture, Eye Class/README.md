# Graphics 개인 과제 - 1 

## 1. 3D&Texture, Eye Class

### 1.1. 과제 목표 
수업시간에 학습한 내용을 3회 이상 직접 구현해 보고, 두 소스코드를 Github에 올린다.
### 1.1. 과제 내용 
  * 3D&Texture
  * Eye Class

## 2. 3D&Texture 구현
### 2.1. 요구사항 도출
  * p5.js으로 구현한다.
  * 새 영상을 이용해서 3D Box에 텍스처 매핑을 하여 구현한다. 
 
### 2.2. Code 
```javascript
// 3D&Texture
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
```

### 2.3. 실행 결과
<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/result/box_texture_result.jpg" width="400px" height="400px" title="boxTexture1" alt="boxTexture1"></img>
<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/result/box_texture_2_result.jpg" width="400px" height="400px" title="boxTexture2" alt="boxTexture2"></img>
<br/>

## 3. Eye Class 구현
### 3.1. 요구사항 도출
  * p5.js으로 구현한다.
  * 클래스로 눈을 정의하고, 각각의 눈동자를 마우스 커서의 움직임에 따라서 위치를  있도록 한다. 
 
### 3.2. Code 
```javascript
// Eye Class
let e1, e2, e3;
function setup() {
  createCanvas(640, 360);
  noStroke();
  e1 = new Eye(250, 16, 120);
  e2 = new Eye(164, 185, 80);
  e3 = new Eye(420, 230, 220);
}
function draw() {
  background(102);
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);
  e1.display();
  e2.display();
  e3.display();
}
class Eye {
  constructor(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0.0;
  }

  update(mx, my) {
    this.angle = Math.atan2(my - this.y, mx - this.x);
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(153, 204, 0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  }
}
```

### 3.3. 실행 결과
<img src="https://raw.githubusercontent.com/wjh2335/2023-ComputerGraphics/main/img/%EC%96%BC%EA%B5%B4%EC%9D%B8%EC%8B%9D%EC%B6%9C%EC%84%9D%EC%8B%9C%EC%8A%A4%ED%85%9Cgui(1).jpg"></img>
<br/>

## 4. 소감 및 결론 
3D & Texture와 Eye Class를 p5.js로 구현한 것은 즐거웠습니다. 본 레포트를 통해 3D 공간과 텍스처 매핑의 작동 방식을 이해하고 구현하는 방법을 배울 수 있었습니다. 
특히, Eye Class를 구현하는 것은 눈을 다루는 방법을 이해하는 것에 대해서 큰 도움이 되었습니다. <br/> 
또한 눈을 어떻게 표현할 수 있는지, 눈동자가 어떻게 움직이는지, 눈꺼풀의 움직임을 어떻게 구현할 수 있는지에 대한 이해를 높일 수 있었습니다. 
본 레포트를 통해 p5.js의 다양한 기능과 문법에 대한 이해도 높아졌습니다. 이를 통해 더욱 복잡한 프로젝트를 구현하는 데 능숙해질 수 있을 것입니다.

## 5. 기타 
심재창 교수님 덕분에 컴퓨터 그래픽스에 대한 지식과 이해도가 크게 향상되었습니다. 교수님의 열정적인 강의와 친절한 가르침에 매우 감사드립니다. 앞으로도 교수님의 지도 아래 더 많은 것을 배우고 성장할 수 있기를 기대하며 다시 한 번 감사의 말씀을 전합니다. :)
