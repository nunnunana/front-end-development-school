###### eatdesignlove's Front-End Development Study

# Day41


## 잊지말기
- 스크립트 내에서 되도록 함수를 상단에 쓰기. 엔진이 스스로 처리하긴 하지만 작성단계에서 신경쓸 필요가 있다.
- aria-label="close"
- 네이밍 규칙, BEM
- 가능하면 선택(query etc)보다 탐색(parentNode etc)을 하는 것이 좋다.
- 조건확인시에 형 변환(!!)이 필요하다.
- `if, for, while` 뒤에는 세미콜론(;)을 쓰지 않는다.
- Dot Syntax로 연결되는 구문. (체이닝)
- console.log() 비표준, 사실상 표준
- `let` 키워드 ES6

- 변수에 값을 할당하면 값이 복제되어 변수에 들어가는 것이지, 동일한 것이 아니다. (원시데이터 유형: 숫자, 문자, 논리, undefinde, null)
- 자료형 데이터 유형(객체, 배열, 함수)은 데이터가 참조 된다.
- 즉, 참조된 자료형 데이터를 바꾸게 되면, 그에 따라 할당한 변수도 바뀐다.
- 

## 상수 (Constant)

- 대문자로 작성, 변수와 구별
- 변수와 달리 정의되고 나서 변하지 않음

## 데이터 형
- 자바스크립트 언어의 숫자는 다른 언어에 비해 간단하다.
- `\` 으로 이스케이핑 처리
- Boolean('') -` false` / Boolaen(' ') - `true`
- 모든 이벤트의 default값은 null.



### 데이터 형변환

1. 숫자 -> 문자
1.1 '데이터'
1.2. 데이터 + '';
1.3. 데이터 + ㄴ셔
1.4. 

2. 문자 ->(객체, 배열, 함수)> 숫자


4.  parseInt() -/, oaer




## 인라인으로 들어가있지 않은 스타일을 가져오는 방법

### 변수명을 알 때
man.age

### 변수명을 모를 때
man[property]


```javascript
function getStyle(el, property) {
  var value;
  if (winddow.getComputedStyle) {
    value = winddow.getComputedStyle(el,'')[property];
  } else {
    value = el.currentStyle[property];
  }
}

```

### 비표준 MS IE 방식 (IE 8 -)
$0.currentStyle

### 표준 W3C 방식
window.getComputedStyle(대상, 가상요소).스타일속성


## 더 알아봐야할 내용
- defer
- async

## 참고
>- parse.com
- 

## Todo
- [ ] SportShop 
- [ ] Sass 단위제거 함수 만들기, getStyle핼퍼함수
- [ ] 레퍼런스 계속 읽기 (A)
