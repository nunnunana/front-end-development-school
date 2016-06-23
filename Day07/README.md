###### Front-End-Development Study

#Day07
## HTML Script 

- **스타일코드는 스크립트보다 반드시 위에 입력한다?** 그렇다. 인터넷 접속 환경이 느린 곳에서는 스크립트의 다운로드가 지연될 경우 화면에 스타일이 적용되지 않은 상태가 사용자에게 보여지게 될 수 있기 때문에.
- **자바스크립트는 직렬식으로 다운로드 된다?** 그렇다. 때문에 브라우저가 HTML문서를 읽는 도중 자바스크립트를 만나면, 자바스크립트를 모두 읽을 때까지 랜더링 하지 않고 기다리게 된다.
- **자바스크립트를 페이지 안에 작성하는 것이 잘못된 것은 아니다?** 그렇다. 자바스크립트를 페이지 안에 작성하는 것이 문제가 아니라, 비효율적으로 코드를 구성하는 것이 문제가 된다. 반복적으로 쓰이는 코드는 재사용가능하도록.


## HTML Object 요소
images, audio, video, java applets, ActiveX, PDF, Flash를 사용하기 위한 요소

```html
<h3>object를 이용하여 그림을 문서내 호출하는 경우</h3>
<object data="파일경로" type="image/gif">
	<!-- 대체 텍스트 -->	
	<p>Type에 지정된 적절한 플러그인을 찾을 수 없을 경우, 포함하고 있는 &lt;p&gt;내용을 대체 텍스트로 보여준다.</p>	
</object>

<h3>웹 문서 페이지 호출시</h3>
<object data="파일경로" type="text/html">
</object>
```
과거 플래시를 불러올 때 `&lt;object&gt;`를 활용함.


### Parameter 요소 (Param)
오브젝트의 자식 요소로 해당 요소의 파라미터나 변수를 설정하는데 사용.

---

## HTML의 기타요소
### 인용
```html
<q></q> <!-- 짧은 인용, 잘 사용하지 않음 --> 
<blockqoute></blockqoute> <!-- 긴 인용 -->
<cite> <!-- citation 인용문을 말한 사람을 구조화할 때 사용-->
```

### 축약
```html
<abbr title=""> <!-- by 넷스케이프. IE 6 지원 X. 표준! 축약어 -->
<acronym> <!-- by IE. HTML5에서 폐지. 두문자어 -->
```

### 웹정보
```html
<!-- 이메일 주소 등 웹 상의 주소를 구조화 할때 사용, 즉 물리적인 주소를 넣는 곳이 아님 -->
<!-- address안에는 단락이 올 수 없다. -->
<address> 
	e-mail: <a href="mailto:eatdesignlove.gmail.com">eatdesignlove.gmail.com</a><br>
	phone: <a href="tel:010-1234-5678">010-1234-5678</a>
</address>
```

```html
<ins> <!-- 불필요한 단어나 문장 대신 새로운 단어, 문장 삽입하는 의미 # Insert Text -->
<del> <!-- 불필요한 단어나 문장 대신 새로운 단어, 문장 삭제하는 의미 # Delete Text  -->
```

### Output

```html
<pre> Preserved text
<code> Computer code text
<kbd> Keyboard text
<var> Variable
<tt> Teletype text
<dfn> Definition Term 
<samp> Sample computer code

```

## Frame
접근성이 떨어져 표준 문서 작성시 사용을 권장하지 않음 
과거에는 Ajax기술이 발달하지 못해 프레임을 사용함
frame을 쓸때는 body를 쓰지 않는다. 

>- frame
- frameset
- noframes
- inline frame (iframe)


## Micro Format
마이크로포맷은 특정 마크업을 사용하여 "사람이 쉽게 이해할 수 있는" 정보를 "장치(device)도 이해할 수 있도록" 바꾸어 주는 기술.

>class : 마이크로포맷을 구성하는 기본 속성으로 정보를 정의하는 역할
rel:  현재 문서가 링크로 연결되는 문서와 어떤 관계 인지 정의 (현재문서 >> 링크문서)
rev: 링크로 연결되는 문서가 현재 문서와 어떤 관계인지 정의 (현재문서 << 링크문서)

```html
<!-- 마이크로포맷 hcard 적용 예 -->
<address class="vcard">
	<span class="fn">연오랑</span>
	<span class="org">정글커뮤니케이션즈</span>
	<span class="tel">02-3474-1511</span>
	<a href="http://ejungle.co.kr" rel="co-worker colleague">http://ejungle.co.kr</a>
</address>
```
[Microformat 참고](http://microformats.org/get-started)


## HTML5

### 새로 생긴 HTML5 코드 
```html
<section>, <article>, <aside>, <nav>, <main>은 Section 요소
<header>, <footer>
<time>, <datalist>, <summary>, <figure>, <figcaption>
<hgroup>은 사라짐
```

contentinfo

### HTML5 마크업
HTML5은 외부 기술에 의존하지 않고 마크업 언어선에서 기존에 의존하던 기술 대부분을 해결할 수 있는 방향성을 제시한다.

[HTML5가 탄생하기까지](http://channy.creation.net/blog/719)

```html
# Sectoning Content
<article> <!-- 독립적으로 사용 --> 
<section> <!-- 범용적인 경우, 제목이 꼭 필요하다. -->
<main><!-- 문서에서 한 번만 사용할 수 있다. -->
<footer> <!-- 부모 영역의 footer -->
<aside> 
```

같은 section요소를 담을 수 있는 것은 sectioning 요소인데, header안에 section요소가 들어오는 것은 문법오류를 발생시키지는 않는다.
`<h1>` 제목 요소는 문서에서 한 번만 쓰도록 한다. id를 줄이고, class를 줄여야하는 이유는 관리 측면에서 권장한다.

[New Elements in HTML](http://www.w3schools.com/html/html5_new_elements.asp)
[아웃라인 알고리즘 outlining-algorithm](https://www.smashingmagazine.com/2011/08/html5-and-the-document-outlining-algorithm/)
[article과 section 활용 참고](http://dezang.net/511)


### 콘텐츠모델
- Block 
- Inline

`<h2>`바로 아래 보조 제목을 넣는 경우, 
`<h3>`를 감싸는 암묵적으로 `<section>`가 생겨난다.

```html
<h2>제목</h2>
<!-- 암묵적 <section>가 생성된다. -->
<h3>보조제목</h3>
<!-- </section> -->
<h2>제목 <h3>보조제목</h3></h2> 또는 그대로 써도 디자인 상으로 문제는 없다.
```

>### 참고자료
[caniuse](http://caniuse.com/) 
[html5test](https://html5test.com/)
[w3.github.io](w3.github.io/html/)


# CCS (Cascading Style Sheet)

```css
<!-- 스타일 모듈 파일로드 -->
@import url("colors.css");
@import "common.css";
@import "grid";
@import "layout.css"
@import "old-ie.css"
@import "print.css"
```

CSS import 방식은 직렬식으로 파일을 다운로드하기 때문에 좋은 방법이 아님.
대신 HTML link방식이 더 좋고, css도 압축하여 요청을 최소화한다.

>`@charset "utf-8";`을 css상단에 넣어준다. 연결된 문서에 적용된 UTF-8 인코딩은 해당 문서에만 적용되고 연결된 CSS은 적용되지 않음. 때문에 CSS 최상단에 넣어주어 css문서의 인코딩도 utf-8로 적용시킬 수 있다.


#### CSS Selector 선택자
```css
h1 {요소}
h1, h2, h3, h4, h5, h6 {그룹}
h1 p {자손}
* {모든 요소}
```

---------------
|inline|1000점|
|id|100점|
|class|10점|
|요소|1점|
|*|0점|
---------------

