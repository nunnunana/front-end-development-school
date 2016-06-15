######2016 06 15 / Day02

<!-- 
- Github이해/관리하기 (학습내용 기록/명시적으로 정리)
- Markdown문법 익히기 (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Sublime Emmet 더 알아보기
- html Tidy / css lint /
- 과제가 오늘까지 배운 것으로 홈페이지 만들기 / IE주석 
-->

### Heading 
- HTML5에서는 h1이 <section>마다 하나씩 쓸 수 있도록 바뀜. 

### 단락에서 사용되는 요소들

```
<strong> # 아주 중요함을 의미
<em> # 중요함을 의미 Emphasize
<mark> # 동적으로 처리되는 코드
<br> # 단락을 나누지 않고, 다음 행으로 내림
<hr> # 가로줄

```

- MIME TYPE은 html5에서는 생략가능, 기본값으로 제공하기 때문.
- 브라우저 핵대신 필터링 방식(조건부 주석)을 사용한다 : 특정조건에서 주석이 아닌, 코드로 해석시킨다.	

### 조건부 주석문
- 조건부 주석문은 IE6부터 9까지만 적용된다.

```
<!-- [if IE] -->
	인터넷 익스플로러에서만 보입니다.
<!-- ![endif] -->

<!-- [if lt IE 9] --> # less than 9보다 작으면
<!-- [if gt IE 9] --> # greater than 9보다 크면
<!-- [if lte IE 9] --> # less than or equal 9보다 작거나 같으면
<!-- [if gte IE 6] --> # greater than or equal 9보다 크거나 같으면
```

<!-- [if IE 6]<html lang="ko" class="ie6"><![endif]-->
<!-- [if IE 7]<html lang="ko" class="ie7"><![endif]-->
<!-- [if IE 8]<html lang="ko" class="ie8"><![endif]-->
<!-- [if IE 9]<html lang="ko" class="ie9"><![endif]-->
<!-- [if !IE]<!--><html lang="ko-KR"><!--<![endif]-->

IE가 아닌 경우도 처리해주어, html요소가 적절하게 자리잡도록 한다.
자주 쓰는 코드는 snippet으로 만들어 놓으면 나중에 편하게 처리할 수 있다. *.sublime-snippet
기호는 Html Entity Code를 활용한다. entitycode.com

class 구조화에 대해 생각해본다.
<!-- [if IE 6]<html lang="ko" class="lt-ie10 lt-ie9 lt-ie8 lt-ie7 ie6"><![endif]-->
<!-- [if IE 7]<html lang="ko" class="lt-ie10 lt-ie9 lt-ie8 ie7"><![endif]-->
<!-- [if IE 8]<html lang="ko" class="lt-ie10 lt-ie9 ie8"><![endif]-->
<!-- [if IE 9]<html lang="ko" class="lt-ie10 ie9 "><![endif]-->
<!-- [if !IE]<!--><html lang="ko-KR"><!--<![endif]-->

h1.brand{제목1}|e

YUI Yahoo User Interface.
<big></big>은 없음.
<small></small>요소 html5에서 사용가능
sup / sub 윗첨자와 아래첨자

favicon은 32px*32px png파일로 생성. 원래 16px이었음. 
아이패드 등과 같은 곳에서는 파비콘이 앱아이콘으로 쓰이는 관계로 더 큰 파일이 필요하기도 함.

IE에서 favicon의 확장자는 ico로 사용가능하고, IE에서 파비콘을 확인하려면 서버 상에서 테스트해봐야 한다.

### IMG
- img 의 필수 속성, src / alt.
- ** 96 / 72 의 차이는 웹타이포그래피 pt의 크기와 관련된 것! 이미지는 영향을 받지 않는다.
- 절대경로와 상대경로 간의 차이를 직접 구성해볼 필요가 있다. 
- practice2(상대) vs practice3(절대, 관리측면에서 편하다)
- 절대경로의 기준은 / ,즉 Root.

### 참고자료
- [koreahtml5.kr](koreahtml5.kr/) : 브라우저 사용량 등에 대한 통계 확인가능.
- [entitycode.com](entitycode.com/) : Html Entity code가 잘 정리된 사이트.
- [resourcecards.com](resourcecards.com/) : 다양한 리소스를 구할 수 있는 사이트.
- 야무 강사님 책 디자인편 색채 / 김환, 색채에 관한 강의 SLR.