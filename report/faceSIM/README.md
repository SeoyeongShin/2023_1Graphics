# 1. 🗓 출석 대체 얼굴 인식 시스템
##### [과제 목표] 
Face-Api를 study하고, ChatGPT를 활용해서
입력된 이미지로부터 얼굴만을 추출하여 출석을 대신하는 얼굴 인식 시스템을 제작한다.


# 2. 요구사항 도출
### 1) 얼굴 등록 기능
1. 전화번호를 미리 입력한다.
2. 카메라 앞에 서면 자동으로 얼굴을 추출한다.
3. 얼굴 descriptor를 계산하여 DB에 저장


### 2) 출석 인증 기능
1. 카메라 앞에 서면 얼굴을 추출한다.
2. 얼굴 descriptor를 계산하여 DB와 비교하여 해당 학생을 출석 인정한다.

# 3. 시스템 구현 
<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/faceSIM/faceS1.jpg"></img>
<br>
- 사용자 입력 기능 구현 
- 사용자 버튼 구현
- 얼굴 유사도 측정 기능 구현

# 4. 시스템 사용 방법
### 1) 📞 전화번호 입력 
얼굴 유사도를 측정할 대상의 전화번호를 입력한다.
### 2) 📸 웹캠 실행
웹캠을 실행하기 위해서 [Start Webcam] 버튼을 누른다. 
### 3) 👥 얼굴 유사도 측정
전화번호에 등록된 대상과 웹캠을 사용 중인 사용자와 얼굴 유사도를 비교하기 위해 [Click me] 버튼을 누른다.
<br>
버튼을 누르면 Distance 측정 값이 나타난다. 
아래 그림 Case.1, .2과 같이 얼굴 유사도의 값에 따라 색상과 값이 변경된다. 

### - Case.1
<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/faceSIM/faceS2.jpg" width="400px" height="250px"></img>
### - Case.2
<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/faceSIM/faceS3.jpg" width="400px" height="250px"></img>

# 5. 결론 및 소감
얼굴 인식 대체 시스템을 만들어 보면서 많은 것을 배웠습니다. 이 시스템을 개발하면서 얼굴 인식 기술의 강력함과 유용성을 체감할 수 있었습니다. 
사용자의 얼굴을 인식하여 신원을 확인하고, 출석을 대체하는 기능을 구현했습니다. 
얼굴 인식 대체 시스템을 개발하면서 문제 해결 능력과 창의적 사고를 발전시킬 수 있었습니다. 특히 이미지 처리와 비교 알고리즘을 통해 얼굴 유사도를 측정하는 부분은 도전적이었지만, 최종적으로 구현할 수 있어 뿌듯했습니다. 미래에는 더 발전된 얼굴 인식 기술을 활용하여 다양한 분야에서 적용할 수 있는 시스템을 개발하고 싶습니다. 감사합니다. 


# 6. 📂 참고문헌
[1] github.com/jcshim/facesim
<br>
[2] https://github.com/WebDevSimplified/Face-Detection-JavaScript
<br>
[3] https://justadudewhohacks.github.io/face-api.js/docs/index.html
<br>
