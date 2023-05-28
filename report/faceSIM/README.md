# 1. 출석 대체 얼굴 인식 시스템
##### 과제 목표
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

# 3. 시스템 구현 및 사용 방법
<img src="https://raw.githubusercontent.com/SeoyeongShin/2023_1Graphics/main/img/faceSIM/faceS1.jpg"></img>
