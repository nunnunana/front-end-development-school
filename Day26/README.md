###### Front-End-Development Study

# Day26 

## 반응형 웹디자인

### N Screen 시대
Static 그리드의 시대는 끝났다. 이제는 동적으로 반응하는 디자인의 시대. 오늘을 연구하고 만드려는 태도가 필요한 시대. 세상 모든 기기에서의 www. 여기서 정말 중요한 것은 **멀티디바이스가 아니라 콘텐츠와 컨텍스트.**

### 반응형 디자인
기기의 경험에 맞춰 최적화된 뷰를 사용자에게 제공하여 컨텐츠를 제공해야한다. 이에 대응하기 위해서 모바일 우선주의(Mobile First)가 필요하다.

모바일 환경에서 꼭 보여주어야 하는 필수 컨텐츠를 기획, 디바이스 환경에 맞게 선택적 컨텐츠를 추가하는 방식으로 전략적 수립을 해야 한다.

[The New Multi-screen World](https://ssl.gstatic.com/think/docs/the-new-multi-screen-world-study_research-studies.pdf)

Responsive Web <  <  < Adapt Web

### 크로스 브라우징?
크로스 브라우징은 사실 모양에 관한 이야기가 아니다. 브라우저 마다 모양이 조금 다르더라도 콘텐츠에 대한 접근이 동일하게 가능하다면 크로스 브라우징이 지켜졌다고 할 수 있다.

## 반응형 프로젝트 준비하기

### 콘텐츠 중심
### 가급적 네이티브 기능 사용
### Form 2.0 도입 (모바일에서 지원이 되기 때문)
### NUI를 고려한 설계 (Natural User Interface)
### 콘텐츠를 모호하게 하지 않는 내비게이션
### 화면에 바로 보이지 않는 콘텐츠는 Lazy Loading 
### 읽기 쉬운 콘텐츠를 구성하는 타이포그래피
### svg 그래픽 및 아이콘 폰트 적극 활용
### 데이터 커넥션 불안정 고려
### 성능 고려 (HTTP 요청 수를 줄인다.)
### 모바일 퍼스트 디자인
### 웹 리소스 압축 배포(gZip)
### 프레임워크 도입 검토
### 구형 IE는 우라한 기능 저하로 대처
### 디자인 패턴 라이브러리(UI Kit) 제작
### 고해상도 디스플레이 대응
### 마우스 이벤트 핸들링에서 벗어나야 함
### 애자일(민첩한) 팀웍이 요구, 프로젝트 초기부터 협업 고려

## 반응형 프로젝트 시작하기
### 콘텐츠 전략 (중단점에 따른 콘텐츠 전략)
### 콘텐츠 구성 (프로토타이핑)
### 유동 그리드 시스템/레이아웃
### 유동 이미지 / 미디어
```css
width: 100%;
height: auto;
padding: 66.6667%; <!-- 이미지 높이 / 기준 화면 너비 + % --> 
background: url("이미지 주소");
background-size: cover;
background-size: content; <!-- IE Fix -->
```
### 클리핑 이미지 / 미디어 
```css
width: 100%;
height: 960px; <!-- 고정 높이 -->
background: url("이미지 주소");
background-size: cover;
background-size: content; <!-- IE Fix -->
```

### 중단점(Break Point) / 미디어쿼리



? Fluid layout / Adapt layout 차이 ?
? Isolate plating 방식 Grid System
