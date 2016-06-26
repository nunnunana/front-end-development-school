###### Front-End-Development Study

# Day09
## CSS Selector

```css
/*! selectors.css/* /* yamoo9.net, 2016 */ 
```
주석 안에 `!`를 붙인 이유는 저작권 관련 주석이라는 표시

command+shift+y : 수치를 계산해서 변경하는 EMMET 단축키
디바이스마다 가지고 있는 비율이 다르기 때문에 픽셀또한 상대적이다. 

>참고자료 
>
[sublime HTML-CSS-Prettify](https://github.com/victorporof/Sublime-HTMLPrettify) :  
HTML, CSS 코드를 이쁘게 정리해주는 플러그인

### 요소 선택자 ( CSS1 ~ )

```css
body {
	margin: 0;
	font-size: 1.25em;
}
```
글자 크기를 px단위(고정)에서 em(상대)단위로 변경하는 방법
>1. font-size: 16px;
1. 20px/16px ( 현재 값 / 상대 값; 현재px값을 default값으로 나눈다.)

### 전체 선택자
```css
 body * {
 	margin: 0;
 }
 ```
 * 를 이용해 **전체 요소**를 선택할 수 있다. 위의 예는 body 내부의 모든 요소를 선택하는 모습이다. 그러나 이러한 방법 많이 쓰는 것은 좋지 않다. 왜냐하면 모든 요소를 찾아 선택하는 과정에서 불필요한 **성능 저하**를 일으킬 수 있기 때문이다. 따라서 **필요에 따라 특정 섹션에만 전체선택자를 주는 방법**을 사용하거나 **Modernizer**를 사용하여 대체한다.

### 선택자의 다양한 활용
선택자는 요소 + 그룹핑 + 아이디 + 전체선택자 등 여러 유형을 조합하여 사용할 수 있다. 아래는 전체 선택ㅈ를 특정 요소에만 적용시킨 경우.
```css
body, #shoppingGrpTab * {
	margin: 0;
}
```

### 자식 선택자
E(Parent) > E(Child)의 형태로 사용한다. 그러나 HTML요소가 변경되면 그에 맞추어 다시 수정해줘야 할 수 있기 때문에 좋은 방식이 아니다. 관리를 위해 되도록 Class로 요소를 선택하도록 한다.

```css
 /* 직계 자식을 가리키는 선택자 */
#shopping1 > h4 {
	color: #DC513E;
} /* 101점 */
```

```css
 /* 자식, 자손 모두를 가리키는 선택자 */
#shopping1 h4 {
	color: #00C3DC;
} /* 101점 */
```

### 클래스 선택자
클래스를 선택하는 것은 아래처럼 몇 가지 방법을 활용할 수 있다.
>1. E.class-name
1. .class-name
1. .class-name1.class-name2
1. .class-name1 .class-name2

##### 1. E.class-name 
요소이름 뒤에 바로 클래스를 붙여서 선택한다. 이 방식은 디자인 컨셉[범위제한]이 명확하지 않은 경우 사용을 자제해야 한다. >> 여기서 말하는 디자인 컨셉은 무엇?

```css
<!-- button요소가 .btn-default 클래스를 가지고 있을 때만 적용됨 -->
button.btn-default {
	padding: 10px 20px;
	border: 2px solid;
	border-radius: 3px;
	background: #eee;
	font-size:16px;
	color: #fff;
}
```

##### 2. .class-name
```css
.btn-default {
	padding: 10px 20px;
	border: 2px solid;
	border-radius: 3px;
	background: #eee;
	font-size:16px;
	color: #fff;
}
```

##### 3. .class-name1.class-name2 (Multi Class)
```css
.btn-buy.button {
	background: #2A93F5;
	border-color: #2354F5;
}
```
클래스를 앞 뒤로 바꾸어 써도 사용가능, 이것은 넣고자 하는 클래스의 순서를 암기할 필요가 없게하여 Moduler CSS 사용의 효율성을 높여준다. 단, IE6에서는 클래스 순서를 바꿔쓰는 것이 불가능.

##### 4. .class-name1 .class-name2
이 경우는 앞선 멀티클래스의 경우와 분명히 다르다는 것을 인식해야 한다.
멀티클래스는 두개의 클래스를 모두 가진 하나의 요소를 대상으로 하는 반면, 띄어쓰기로 작성된 클래스는 앞의 요소의 자식 또는 손자 요소 중 후자의 클래스를 가진 것을 선택하기 때문이다.


### 인접 형제 선택자 ( CSS2 ~ )
여기서 **인접**이란 바로 다음에 인접한 요소를 의미한다. 이 선택자를 활용하여 스타일을 할 때는 절대적으로 마크업의 구조(프레임)이 무너지지 않아야 한다.

```css
/* #shopping1아래의 모든 ul요소에 적용 */
#shopping1 ul {
	border: 1px solid red;
}
/* #shopping1아래의 h4 인접 ul만 적용 */
#shopping1 h4 + ul {
	border-color: #00FFE2
}
```

### 일반 형제 선택자
일반 형제 선택자는 **인접 형제 선택자**처럼 바로 뒤에 인접한 형제 요소만을 선택하는 것이 아니라 **모든 형제 요소**를 찾는다.

```css
/* #shopping1 바로 다음의 인접한 h3 형제를 찾는다. */
#shoppingGrpTab > #shopping1 + h3 {
	background: #000; color:#fff;
} 
/* #shopping1 **뒤의** 모든 h3 형제들을 찾는다. */
#shoppingGrpTab > #shopping1 ~ h3 {
	background: red; color: #fff;
}
```

### 속성 선택자
- E[attr="value"]의 형태로 사용
- IE 7, 8에서 사용할 수 없음

```css
/* ID 선택자 = 속성 선택자로 변경한 경우 */
[id] {border:2px dotted #dedede;} 
/* id를 가지고 있는 모든 요소를 찾는다. 앞쪽에 아무것도 없을 경우 * 이 생략된 것임 */
/*shopping3라는 특정 ID 선택자를 찾고자 한다면 */
[id="shopping3"] {
	border: 3px solid #5345FF;
}
```

```css
/* Class 선택자 = 속성 선택자로  변경 */
[class] { outline: 3px solid rgba(255, 255, 0, 0.5); }
[class] { border: 3px solid rgba(255, 255, 0, 0.5); }
```

```css
[id="shopping3"] [class="screen_out"]{
	border: 3px solid #5345FF;
} 
```
#shopping3에 screen_out이어야만 적용, 
또는 class^="screen_out"이면 처음 클래스이 screen_out 
또는 class$="screen_out"이면 마지막 클래스가 screen_out


[CSS 속성 선택자를 활용하여 각 파일 포맷별 아이콘 표현하기](http://)
```css
a[href$=".docx"] {
	display:block; 
	width:100px; 
	height:100px; 
	background: url(../images/1466770242_pdfs.png);
	background-size: cover;
}
a[href$=".hwp"] {
	display:block; 
	width:100px; 
	height:100px; 
	background: url(../images/1466770226_aibs.png);
	background-size: cover;
}
```