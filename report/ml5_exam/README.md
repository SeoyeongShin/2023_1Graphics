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

# 2. 🧠 SketchRNN 변형을 위한 초기 아이디어 
  * 로드하려고 하는 모델을 입력할 수 있는 사용자 입력 기능을 구현한다. 
  * 입력된 모델을 로드하는 모델 로드 버튼 기능을 구현한다. 
  * 모델을 로드하고 캔버스에 스케치된 그림을 저장할 수 있도록 저장 기능을 구현한다. 


# 3. 🛠 시스템 변형 및 구현 
### 3.1 변형 내용 
<br><img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/ml5_exam/ex_ui.png" width="100%"></img><br>

- 사용자 입력 기능 구현
- 모델 로드 버튼 구현
- 스케치 저장 버튼 구현
- 스타일 적용

### 3.2 변형 코드 링크
[script.js](https://github.com/SeoyeongShin/2023_1Graphics/blob/main/report/ml5_exam/script.js)

[index.html](https://github.com/SeoyeongShin/2023_1Graphics/blob/main/report/ml5_exam/index.html)

# 4. 📖 시스템 사용 방법 
### - 시스템에서 사용 가능한 모델
SketchRNN은 디지털 라인 드로잉의 입력에서 이미지를 생성하기 위해 114개의 사전 훈련된 모델에 대한 액세스를 제공한다. <br>
때문에 아래 링크에서 볼 수 있는 사전 훈련된 모델에 의해 모델을 입력 및 로드할 수 있다. <br>
[models.js] https://github.com/ml5js/ml5-library/blob/main/src/SketchRNN/models.js <br>
ex) 입력 모델: fish(X), pig(O)

### 1) 모델 입력 
웹 서버를 실행 후, 사용하고 싶은 모델을 텍스트 필드에 입력한다.
### 2) 모델 로드
입력된 모델을 로드할 수 있도록 [Load] 버튼을 누른다.
### 3) 스케치 저장
캔버스에 그려진 그림을 저장할 수 있도록 [Save] 버튼을 누른다. 
### 4) 스케치 다시 그리기(원기능)
로드된 모델을 캔버스에 다시 그릴 수 있도록 [clear] 버튼을 누른다.

<br>

# 5. 🖥 시스템 테스트
### 5.1 모델 입력 및 로드 
pig를 입력하고 [Load] 버튼을 누른다. 

<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/ml5_exam/ex_pig.jpg" width="100%"></img><br>
### 5.2 스케치 저장
[Save] 버튼을 누르고 스케치를 다운 받는다.

<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/ml5_exam/my_drawing.jpg" width="60%"></img><br>

# 5. 👩‍💻 결론 및 소감
ml5.js 예제 중 SketchRNN 선택하고 변형해서 컴퓨터 그래픽스 수업 과제를 수행했습니다. 
본 과제를 통해 머신러닝과 그래픽스의 융합을 경험하며 창의적인 작업을 할 수 있는 기회를 가졌습니다. 
과제 초반에는 ml5.js와 SketchRNN을 사용하는 방법에 익숙하지 않았지만, 
이후 예제 코드를 분석하고 조금씩 변형해가면서 기능을 수정하거나 새로운 기능을 추가하는 등 새로운 결과물을 만들어내는 과정이 매우 흥미로웠습니다. 
또한 이 과제를 통해 머신러닝 모델과의 상호작용이 어떻게 이루어지는지를 이해하는 데 도움이 되었습니다. 
사용자의 입력에 따라 모델이 예측한 결과를 시각화하고, 그 결과를 다시 모델에 입력으로 전달하는 과정을 경험하면서 머신 러닝의 작동 원리를 실제로 체감할 수 있었습니다.
이러한 경험을 통해 컴퓨터 그래픽스와 머신러닝에 대한 흥미가 더욱 커졌습니다. 앞으로 더 많은 도전과 연구를 통해 이 분야에서 더 나아가고 싶다는 동기를 얻게 되었습니다.
감사합니다. 

# 6. 📂 참고문헌
[1] https://learn.ml5js.org/#/reference/sketchrnn
<br>
[2] https://github.com/ml5js/ml5-library/blob/main/src/SketchRNN/models.js
<br>
[3] https://editor.p5js.org/ml5/sketches/SketchRNN_basic
<br>
[4] https://chat.openai.com
<br>
