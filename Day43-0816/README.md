###### eatdesignlove's Front-End Development Study

# Day42

## 잊지말기
- ES2015, of문이 Sass의 each문과 유사히다
- /\S/ : (공백이 아닌 것) 정규표현식, /\s/ (공백인것)
- var Single Turn Pattern
- for문의 변수 선언구간은 밖으로 빼낼 수 있다.
- 기존의 for문 내의 블록은 지역이 아닌데, ES6에서 *let을 사용하면 지역변수*를 선언할 수 있게 된다.
- nodeName / localName 차이
- 함수 또한 객체이기 때문에 속성을 가질 수 있다. (hasUnit()함수)
- parseFloat => 부동소수점형 / parseInt => 정수형
- hasOwnProperty(value) : 조상의 속성까지 확인하지 않도록, 막아주는 역할을 할 수 있다.

## 반복문(loop)

### while문
조건이 참인 동안 반복해서 실행된다. 이때 count값을 제어해주지 않으면 무한 반복될 가능성 있다.

#### 기본 예제
```
var boo = true, m = 10;

while (boo) {
  console.log(boo ? '참!':'거짓!');
  // if (mm-- > 0) // 9,8,7,6,5,4,3,,2,1
  if (--m > 0) {  // 10,9,8,7,6,5,4,3,2,1
    boo = !boo;
  }
}
```

```js
var count = 0 // 초기값
while (count <= 15) {
  document.write('hello')
  count ++
}

while ( (count+=2) <=10) {
  console.log(count);
}

while ( (var count = 20) <=10) {
  console.log(count);
}
```

### ES6.
```js
// ES6에서는 다음과 같이 초기값 설정 가능
var cleanWhiteSpace = ( el=document ) => {
  console.log(el);
  let current_el = el.firstChild;
  while(cur != null )
}
// let은 지역변수 (var와 같은 기능)
```

### do while문
조건에 관계없이 **1번은 수행**하고, 조건에 따라 반복해서 실행된다.

```
var boo = !true, m = 10;

do {
  console.log(boo ? '참!':'거짓!');
  // if (mm-- > 0) // 9,8,7,6,5,4,3,,2,1
  if (--m < 0) {  // 10,9,8,7,6,5,4,3,2,1
    boo = !boo;
  }
} while(boo);
```

### for문
- 1. for문 정의시 변수
- 2. 비교값
- 3. 반복문 내 내용
- 4. 증가 / 감소 연산

```js
bar boo = false;
for {
  conosole.lg
}
```

#### for문 continue 사용 예제
`continue` 키워드를 사용하면 조건이 참일 때 건너뛰게 된다.

```js
var fruits = ['바나나', true, '딸기', true, '포도', false, '수박'];
var real_fruits = [],
    k = 0, 
    o = fruits.length;

for (; k < o; k++) {
  fruit = fruits[k];
  // fruit가 문자형 데이터가 아니면 건너뛴다.
  if ( isType(fruit) !== 'string' ) {
    continue;
  }
  real_fruits.push(fruit);
}
console.log(real_fruits) // 결과: ["바나나", "딸기", "포도", "수박"]
```


#### for문 미션

```js
var collection = document.body.childNodes;

for ( var el_collection=[], i = collection.length - 1; collection[i]; i-- ) {
 let node = collection[i];
 if (node.nodeType === 3 || isElName(node, 'script')) {
  continue;
 }
 el_collection.push(node)
}
console.log(el_collection);
```


```
// break 예제를 위한 for문
var units = 'em rem % px vw vh vmin vmax'.split(' ');
var unit;
var i  = 0;
var l = units.length;

for ( ; i<l; i++) {
  unit = units[i];
  console.log(unit)
}

// ECMAScript 2015 - <for ~ of>
let units = 'em rem % px vw vh vmin vmax'.split(' '), unit, i  = 0, l = units.length;

for (let unit of units) {
  console.log(unit)
}
```

##  for ~ in
객체를 탐색할 때 사용할 수 있는 유일한 방법, 배열에 사용하지 않기를 권함. 왜냐하면 속도가 느리기 때문에.

```
for ( var property in obj) {
   if (obj.hasOwnProperty(property) {
    console.log('속성:', property);
    console.log('값:', obj[property])  
   } 
}
```

## 함수
- 함수는 명령문의 묶음이며 재 사용 가능하다.
- 함수를 정의하는 두 가지 방법의 차이점은 스코프 호이스트에 있다.

### 자바스크립트 함수를 작성하는 3 가지 방법

0. 사용하지 말아야 할 방법
```
var fn1 = new Function('console.log('쓰지말자'))
fn0(); // 함수 실행
```

1. 함수 선언문
```
function fn1() {
  console.log('선언된 함수가 실행되었다.')
}
```

2. 함수 표현식

자바스크립트 호이스팅 현상이 발생한다. function, var 키워드가 상단으로 이동된다. 변수명는 상단으로 이동되고 할당한 내용은 나중에 할당된다. 함수가 먼저 올라가게 된다.

```
var fn2 = function(){
  console.log('표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.')
}

```

### Scope(스코프)
- window내에 정의된 함수는 window의 메서드이면서 전역함수이다.
- this 는 context를 가리킨다.

### 호이스팅을 알고있는가? 전우여.

해당 영역의 최상단으로 이동한다.

```
c
```


## 참고자료
[중급으로 올라서는 길, 자바스크립트 가든](http://bonsaiden.github.io/JavaScript-Garden/ko/)


## ToDo 
- [X] 실습예제, 실습미션 다시 만들어보고 정리하기
- [ ] FDS 레퍼런스 읽기 (A)
- [ ] 모듈패턴을 익히고, 특정 프로퍼티가 있는지 확인하고 재사용하는 방법을 익히자. (B)


