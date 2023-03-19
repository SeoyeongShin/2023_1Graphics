# Graphics 개인 과제 - 1 

## 1. 3D&Texture, Eye Class

### 1.1. 과제 목표 
수업시간에 학습한 내용을 3회 이상 직접 구현해 보고, 두 소스코드를 Github에 올린다.
### 1.1. 과제 내용 
  * 1. 3D&Texture
  * 2. Eye Class

## 2. 3D&Texture 구현
### 2.1. 요구사항 도출
  * ㅇ
  * ㅇ
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
  * ㅇ
  * ㅇ
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
<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/result/EyeClassResult.JPG" width="640px" height="360px" title="EyeClassResult" alt="EyeClassResult"></img>
<br/>

## 4. 소감 및 결론 

## 5. 기타 
