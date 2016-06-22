#Day07
##

스타일코드는 스크립트보다 반드시 위에 입력한다.
자바스크립트는 직렬식으로 다운로드 된다.
자바스크립트를 페이지 안에 작성하는 것이 잘못된 것은 아니다.


### Object 요소
images, audio, video, java applets
```html
<h3>object를 이용하여 그림을 문서내 호출하는 경우</h3>
<object data="파일경로" type="image/gif">
	<!-- 대체내용 -->	
	<p>png 이미지가 보이지 않을 경우 대체 내용 제공</p>	
</object>

<h3>웹 문서 페이지 호출시</h3>
<object data="파일경로" type="text/html">
	
</object>
```

과거 플래시를 불러올 때 `&lt;object&gt;`를 활용함.

[강의자료 참고]()

## HTML의 기타요소

### 인용
```html
<cite>
<q></q> <!-- 짧은 인용, 잘 사용하지 않음 --> 
<blockqoute></blockqoute> <!-- 긴 인용 -->
```

### 축약
```html
<abbr title=""> <!-- by 넷스케이프. IE 6 지원 X. 표준! -->
<acronym> <!-- by IE. HTML5에서 폐지. -->

### 웹정보
```html
<!-- 웹 상의 주소를 구조화 할때 사용 -->
<!-- address안에는 단락이 올 수 없다. -->
<address> 
	e-mail: <a href="mailto:eatdesignlove.gmail.com">eatdesignlove.gmail.com</a><br>	
	phone: <a href="tel:010-1234-5678">010-1234-5678</a>
</address>
```

Insert Text `<ins>` 불필요한 단어나 문장
Delete Text `<del>`

### Output


## Frame
왜 프레임을 썼을까? Ajax기술이 발달하지 못해서.
frame을 쓸때는 body를 쓰지 않는다. 


##HTML5 

caniuse 
html5test
w3.github.io/html

contentinfo

section, article, aside, nav, main은 Section 요소
header, footer은 div와 같은 요소
time, datalist, summary, figure, figcaption
hgroup은 사라짐

### HTML5마크업
`<article>` 독립적으로 사용 
`<section>` 범용적인 경우, 제목이 꼭 필요하다.
`<main>`은 문서에서 한 번만 사용할 수 있다.
`<footer>` 부모 영역의 footer

같은 section요소를 담을 수 있는 것은 sectioning 요소인데, header안에 section요소가 들어온 것은 문법오류를 발생시키지는 않는다.
`<h1>` h1제목은 문서에서 한 번만 쓰도록 한다.
id를 줄이고, class를 줄여야하는 이유는 관리측면에서 권장하고, id는 꼭 id를 써야하는 

input:search
::placeholder {}
아웃라인 알고리즘(outlining-algorithm)

### 콘텐츠모델
BLOCK / INLINE

h2바로 아래 보조 제목을 넣는 경우, <h3>를 감싸는 암묵적으로 <section>가 생겨난다.
<h2>제목</h2>
<h3>보조제목</h3>

대안 : <h2>제목 <h3>보조제목</h3></h2> 또는 그대로 써도 디자인 상으로 문제는 없다.


## CCS (Cascading Style Sheet)
