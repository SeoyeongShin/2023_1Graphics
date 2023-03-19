# 3D&Texture, Eye Class 

## 1. Graphics 개인 과제 - 1

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

### 2.3. 실행 결과


## 3. Eye Class 구현
### 3.1. 요구사항 도출
  * ㅇ
  * ㅇ
### 3.2. Code 
### 3.3. 실행 결과

## 4. 소감 및 결론 

## 5. 기타 
