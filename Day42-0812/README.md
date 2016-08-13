###### eatdesignlove's Front-End Development Study

# Day41

## 잊지말기
- 함수, 변수는 항상 상단에 배치한다.
- 함수는 카멜케이스, 변수는 밑줄을 써서 구분하는 습관
- `${자바스크립트} 인터폴레이션 방식`
- 안티패턴 : 강력한 비교연산자를 사용할 것(===)

## 1. 자바스크립트 데이터 유형
### 1.1. 원시형 데이터 (숫자, 문자, 논리, null, undefined)
#### undefined, null
```
function isNumber(data) {
  return typeof data === 'number';
}
```
### 1.2. 자료형 데이터 (함수, 배열, 객체)
#### 함수
##### 함수 선언문(Function Declaration)
- if(){} 
- for() {}
- while() {}

```
function 함수(){}
```
> 함수 블록문 뒤에 세미콜론(;)을 사용하지 않는다. 에러를 발생시키지는 않지만, 문법적으로 맞지 않다. 


##### 함수 표현식()
```
var 함수이름 = function(){};
```

> 함수 블록문 뒤에 세미콜론(;)을 사용한다.


##### 함수 생성자
함수 생성자 함수를 사용하여 함수를 생성하는 방법

```
var logIdentity = new function('consol.log("this is functon object")');
```

함수를 참조하고 있는 변수 이름을 통해서 호출(실행 연산자 '()' 사용)

```
logIdentity();
```

#### 배열 

자바스크립트의 배열은 객체를 가지고 꾸민 것이지, 다른 언어에서 말하는 배열과 같지 않다.

```
 var temp = [];
 temp[0] = true;
 temp[1] = 'coffee';
 temp[2] = function(){console.log('temp[2]')};
 temp[3] = = [1,2,3];
 temp[3][2]
```


##### 배열 다루기 기초
.pop() // 배열의 가장 마지막 원소를 빼낸다.
.shift() // 배열의 가장 첫 원소를 빼낸다.


##### 연관배열 
그렇다면 자바스크립트의 배열을 통틀어 연관배열이라 부르는지. 아니면 아까와 같은 특정 상황만을 일컫는지?

```
// 객체임을 증명하기
temp['type'] = 'array';
temp['scope'] = 'global';
temp;
dir(temp);
```

##### new Array등의 표현보다 리터럴 표현식을 쓰는 것이 좋다.
```
new Array("eatdesignlove"); // ["eatdesignlove"]
new Array(1,2,3); // [1,2,3]
new Array(3); // undefuned x 9
```

#### 객체

> - NaN은 숫자 객체이다.
- 전역에 변수(전역 객체의 속성)는 제거할 수 없다. 전역을 오염시키지 않는 방식으로 코드를 작성한다.
- typeof (x-1)과 같이 묶어줄때 괄호를 사용하는 것이지, typeof 는 함수가 아니다. 

**객체, 프로퍼티 추가**
```
myObj['propery'] = data
myObj['true-or-false'] = data
myObj.true-or-false [x]
```

##### 데이터 형 확인

typeof num // 'number'
typeof str // 'string'
typeof boo // 'boolean'
typeof fnc // 'function'
typeof obj // 'object'
typeof arr // 'object'
typeof null // 'object'
typeof undefined // 'undefined'

typeof RegExp;
type of RegExp;
typeof  Math;

### 나머지 값을 활용한 코드

var i = 0;
while (document.querySelector('a')[i++]){
  console.log(i)
}

### Carousel와 객체

함수를 만든다가 아니라, 객체를 만들어서 확장성을 유지한다.

```
function Navigation(){}
function Carouse(){}

var banner_carousel = new Carousel();
var header_gnb = new Navigation();

```

## 연산

```
function display(value) {
  value = value || 'block';
  return value;
}
```
>[관련 내용 레퍼런스 참고](https://github.com/yamoo9/FDS/blob/master/References/A__Fundmantal/04-javascript-operator.md)

```
var today = new Date().getDay();
var today_is = today === 0 ? '일' :
               today === 1 ? '월' :
               today === 2 ? '화' :
               today === 3 ? '수' :
               today === 4 ? '목' :
               today === 5 ? '금' :
               today === 6 ? '토' : false;
console.log( `오늘은 ${today_is}요일 입니다.` )
```

## Case, Switch, Default
```
var today_is, today = 1;
switch( today ) {
  case 0: today_is ='일';
    break;
  case 1: today_is ='월';
    break;
  case 2: today_is ='월';
    break;
  case 3: today_is ='월';
    break;
  case 4: today_is ='월';
    break;
  case 5: today_is ='월';
    break;
  case 6: today_is ='월';
    break;
  default: today_is = false;
}
console.log( today_is ? today_is :'ㄴㄴ' );
```


```
var event_type = '_click';
var callback;
var dom_el = query('');

dom_el.innerHTML = 'this is dom object.'

switch(event_type) {
  case 'click':
    callback = function(){
      console.log('clicked object')
    }
    break;
    case 'mouseenter':
}
```


## Todo
- [v] todolist 코드 디버깅
- [ ] 오늘 배운 내용 md정리, 레퍼런스 md 읽기
- [ ] SportShop. (주말)
- [ ] Github Blog. (주말)

