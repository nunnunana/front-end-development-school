###### eatdeisnlove's Front-End-Development Study

# Day11
## CSS Selector

|유형|선택자|설명|
|---|---|---|
|일반선택자|E|요소선택자|
||E(P) E(C)|자손 선택자|
|속성선택자|[attr^="value"]|시작하는 속성 값이 일치하는 경우 선택|
||[attr$="value"]|끝나는 속성 값이 일치하는 경우 선택|
||[attr*="value"]|속성 값을 포함하는 경우 선택|
||[attr~="vaule"]|공백으로 구분되는 단어가 일치할 때 선택|
|가상클래스|:link|요소의 기본 상태|
||:visited|요소의 방문한 상태|
||:hover|요소에 마우스가 커서가 올라간 상태|
||:active|요소를 마우스 커서로 누른 상태|
||:focuse|요소에 키보드 포커스가 적용된 상태|
||:nth-child(an+b)|부모 요소의 자식 요소 중, 수학 표현식에 따른 계산 결과를 처리 후 선택|
||:first-child|부모 요소의 첫번째 자식 요소일 경우 선택|
||:last-child|부모 요소의 마지막 자식 요소일 경우 선택|
||:only-child|부모 요소의 유일한 자식 요소일 경우 선택|
||:not(selector)|() 안의 선택자를 제외한 나머지 대상 요소 선택|
||:nth-last-child(an+b)|부모 요소의 자식 요소 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 (뒤로부터 색인)|
||:nth-of-type(an+b)|동일한 유형 중, 수학 표현식에 따른 계산 결과를 처리 후 선택|
||:nth-last-of-type(an+b)|동일한 유형 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 (뒤로부터 색인)|
|가상 요소|:root|루트 요소 선택|
||:empty|요소 내 내용이 빈 경우 선택|
||:target|문서의 URI의 조각 식별자(#id)를 가진 요소 선택|
||:enabled| |
|| | |
|| | |
|| | |
|| | |
|| | |
|| | |
|| | |
|| | |
|:lang(language)|요| |

### 1. 속성선택자
- [attr]
- [attr="value"] 속성선택자는 순서까지 일치해야만 한다.
- [attr|="value"] 하이픈(-)으로 구분되는 단어가 일치하는 것을 찾는다. [lang|="en"]
- [attr~="value"] 공백으로 구분되는 단어가 일치하는 것을 찾는다.
- [attr*="value"] 공백, 하이프이 아니라 value앞뒤로 내용이 붙어있어도 찾는다.
```css
/* 공백으로 구분되는 단어가 일치할 때 선택 */
[class~="container"] {
	border: 1px dashed #cacaca;
	padding: 1em;
}
/* 하이픈으로 구분되는 단어가 일치할 때 선택 */
/* 속성값의 앞부분만 확인 */
[lang|="GB"] {
	text-decoration: underline;
}
```

### 2. 가상 클래스 
상태디자인 State Design 선택자
- 기본상태 (Normal)
- 커서가 올라간 상태 (Hover)
- 커서로 누른 상태 (Active)
- Pseudo Class : 가상(유사, 의사) 클래스

```css
p {
	color: #84888a;

}

p:hover {
	color: #383E3A;
}

p:active {
	background: #F9F651;
}
```

#### 하이퍼링크 `<a href>`의 가상 클래스
- 상태 디자인(State Design)
- Pseudo Class : 가상(유사, 의사) 클래스

>- :link | 기본
- :visited | 방문
- :hover | 커서 올라간 상태
- :active | 커서를 누르고 있는 상태
- :focus | 키보드 포커싱 상태

#### a:link

```css
 /* 기본 상태 */
 a {
 	text-decoration: none;
 	color: #232323;
 	background: #ccc;
 	font-weight: bold;
 	padding-left: 0.25px; /* 상대값으로 적용한다 */
 	padding-right: .25px; /* 0이 없어도 0있는 것과같음 */
 }
 ```

#### a:visited 
```css
/* 방문한 상태 */
a:visited {
	color: #5382E7;
	background: #fff;
}
```
[가능한 상태속성](http://www.w3schools.com/cssref/sel_visited.asp)

#### a:focus 
```css
a:focus {
	outline: 3px solid #fc414b;
}
a:focus:hover {
	outline-offset:10px;
	<!-- Outline은 컨텐츠에 영향을 주지 않는다. -->
}
```

### 가상 요소 Pseudo Element
가상으로 요소(콘텐츠)를 만들어준다.

과거 CSS 2/2.1|현재 CSS 3+|
--------------|------------|
:first-line   |::first-line   |
:first-letter |::first-letter |
:before       |::before       |
:after        |::after        |

#### first-letter
단락의 첫 글자를 가상요소로 활용한다 CSS2 

```css
/*.dropcap::first-letter {
	font-size:300%;
	color: #ec0904;	
}*/
```

#### first-line
단락의 첫 행를 가상요소로 활용한다

```css
.dropcap::first-line {
	font-size:150%;
	color: #45E3DB;
	line-height: 1;
}
```

#### ::before, after
선택한 요소의 자식으로 가장 앞, 뒤에 가상 요소를 만든다.
```css
.msg .before,
.msg::before {
	content: "Hey!";
	color: #5C56B5;
}

.msg .after,
.msg::after {
	content: "Hand Up!";
	color: #756CE3;
}
```

#### selecetion
사용자가 커서로 클릭 후, 텍스트 블록을 선택할 경우 가상으로 요소를 만들어 디자인

```css
 ::selection {
 	background-color: #E40000;
 	color:#fff;
 }
```

###	(추가)접근성 관점에서 링크의 주소를 출력하는 스타일
```css
/* 프린트를 할때 a요소 뒤에 컨텐츠를 링크 속성을 보여준다. */
/* 변수를 활용할 수 있다. */
@media print {
	a::after {
		content: '(' attr(href) ')';
		color: #FF8655;
	}
	abbr::after {
		content: '(' attr(title) ')'
	}
}
```

### Inherited CSS

### OOP CSS 
스타일문서를 세부 역할(객체형태)로 쪼개어 관리하는 시스템

## 참고자료
>- inline-block padding/margin 등 css 적용 실험



