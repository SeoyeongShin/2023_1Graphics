# 1. 🖼 ml5.js 활용하기
### 1.1 과제 목표
ml5.js의 다음 예제 중에 관심있는 예제 하나를 선택하고 활용한다. 
예제를 통해서 변형해 본다. 

### 1.2 예제 선택
본 과제에서는 SketchRNN basic을 예제로 선택한다. 
<br><img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/ml5_exam/ex1.jpg" width="400px" height="250px"></img><br>

- 코드 변경 전 특징
  * 'clear' 버튼을 이용해서 그림을 다시 그리는 단순한 기능만을 포함한다. 
  * 코드 실행을 통해서 코드 내에서 고정된 모델만을 로드할 수 있어서, 새 모델을 로드하기에 번거롭다. 
   <img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/ml5_exam/ex_code.jpg" width="60%"></img><br>

# 2. 🧠 SketchRNN 변형 아이디어 
  * 로드하려고 하는 모델을 입력할 수 있는 사용자 입력 기능을 구현한다. 
  * 입력된 모델을 로드하는 모델 로드 버튼 기능을 구현한다. 
  * 모델을 로드하고 캔버스에 스케치된 그림을 저장할 수 있도록 저장 기능을 구현한다. 


# 3. 시스템 변형 및 구현 
<br><img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/ml5_exam/ex_ui.png" width="100%"></img><br>

- 사용자 입력 기능 구현
- 모델 로드 버튼 구현
- 스케치 저장 버튼 구현
- 스타일 적용


# 4. 시스템 사용 방법
### 1) 모델 입력 
사용하고 싶은 모델을 텍스트 필드에 입력한다.
### 2) 모델 로드
입력된 모델을 로드할 수 있도록 [Load] 버튼을 누른다. 
### 3) 스케치 저장
캔버스에 그려진 그림을 저장할 수 있도록 [Save] 버튼을 누른다. 
### 4) 스케치 다시 그리기(원기능)
로드된 모델을 캔버스에 다시 그릴 수 있도록 [clear] 버튼을 누른다.

<br>

### - Case.1
<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/faceSIM/faceS2.jpg" width="400px" height="250px"></img>
### - Case.2
<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/faceSIM/faceS3.jpg" width="400px" height="250px"></img>

# 5. 결론 및 소감



# 6. 📂 참고문헌
[1] https://learn.ml5js.org/#/reference/sketchrnn
<br>
[2] https://github.com/ml5js/ml5-library/blob/main/src/SketchRNN/models.js
<br>
[3] https://editor.p5js.org/ml5/sketches/SketchRNN_basic
<br>
[4] chatGPT
<br>
