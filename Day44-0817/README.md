###### eatdesignlove's Front-End Development Study

# Day42

## 잊지말기
- '문자도 길이를 가집니다.'.length
- 문자에서 특정 부분은 빼올 수 있다. .charAt(1)
- for ~ in - 자신의 속성인지 필히 확인해야 한다. 
- for ~ of - ECMA2015
- forEach와 map의 차이
- 매개변수, 전달인자
- 전달받은 인자를 검증하지 않으면 원하는 결과가 나오지 않을 수 있기 때문에, 검증단계를 거치게 한다.
- return을 만나면 함수는 바로 종료되고, 연산된 값을 반환한다.



## 자바스크립트 반복문
- 1.1. while
- 1.2. do ~ while
- 2.1. for
- 2.2. for ~ in [Object] 
- 2.3. forEach [array] : ECMASCript 5 Edition
- 2.4. for ~ of [array] : ECMAScript 2015
- 2.5. map

### forEach예제
```js
var movielist = [];
movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('서울역');
movielist.push('부산행');

console.log(movielist)

//for문
for (var i =0; l=movielist.length; i < l; i++) {
  console..log(movielist[i]);
}

//for - in문
for (var index in movielist){
  if (movielist.hasOwnProperty(index)) {
    console.log('')
  }
}

//for - of문 [array]
for (var movie of movielist){
  console.log('for- of 문의 결과:', moive);
}


// forEach(); [array]
// - 배열 요소 마다 함수를 실행할 수 있게 제공
// - 반환 값(return)이 없다( undifined )
// 매개변수 순서 : 원소, 순서, 배열

movielist.forEach(function(itme,index,arr){
  console.log('itme:',itme);
  console.log('index:',index);
  console.log('arr:',arr);
  return 'itme '+ idx +': ' + item;
})

// 배열 객체의 메소드 .map() 
// - ECMAScript 2015에 추가된 부분
// - 반환 값을 가진다.

movielist = movielist.map(function(item, index, arr){
  //return item + '은 ' + index + '번째원소입니다.'
  console.log('item'+index+':', item);
  if (index === movielist.length -1){
    console.log('arr:', arr);
  }
})

```

#### forEach와 map의 차이
`return`을 통해 반복문 내의 값을 반환할 수 있는지가 차이점.

## 자바스크립트 함수
- 자바스크립트는 일급객체
- 함수를 인자로 전달할 수 있다.

### 특징
- 자바스크립트 함수는 상위 영역과 구분되는 별도의 **독립적인 영역을 생성**한다.
- 함수 내부에 `var`키워드, `function` 키워드로 정의된 데이터 값은 외부 영역에서 접근이 불가하다.
- 함수 내부는 독립된 공간이기에 내부에 `var` 키워드, `function` 키워드로 정의된 데이터는 호이스트(Hoist) 된다.


### 호이스트
- 영역 최상단으로 끌어 올려진다.
- `function`으로 정의된 함수는 몸체가 전부 끌어올려진다.
- `var`키워드로 정의된 변수는 변수 이름만 끌어 올려질 뿐, 할당되는 데이터는 나중에 할당된다.
- 함수는 전체가 끌어올려지지만, 변수는 변수명만 이동한다. 옮겨진 변수명은  undefined;

```js
var scopeFnExpression = function(){
  console.log(this)
   // window (실행시킨 context)
  if (movielist) {
    console.log('if 내부:', movielist);
  }
  console.log('함수 내부:', movielist);
}
scopeFnExpression(movielist)
console.log('if 외부:', movielist);
```

#### 호이스트 예제
```js
```

## this
- 전역 context의 this는 곧 window를 가리킨다.
- this는 함수를 실행하는 주체.

일반 함수(글로벌 스코프에 정의된 함수)
function showMe(){
  console.log(this);
  return this;
}

showMe() === window;

var fds = {
  'callMe': showMe
};

fds.callMe() === fds;

## 'use strict';

- new를 반드시 붙여야 하는 경우는 문제를 일으킬 수 있기 때문에, 'use strict'를 사용하여 코드 사용을 강제화하여 방지한다.
- 생성자 함수 내에서는 `use strict`를 반드시 사용할 것을 권장한다. 
- 제이쿼리의 경우는 new 키워드를 적지 않아도, 자동으로 생성되도록 처리해둔다.
- ECMAScript 2015 버전부터는 기본 설정 값이 **엄격 모드**
- 맨날 해야하는 것, 맨날 가져오는 것 => 객체지향 방식으로 컴포넌트 개발에 활용할 수 있다.


엄격 모드가 아닌, 자바스크립트에서는 전역에서 함수를 호출할 경우, 그 함수의 컨텍스트를 암묵적으로 전역 객체인 window를 가리켰다. (문제 발생) 반면 엄격모드에서 명시적으로 특정 객체가 함수를 호출하게 되면 this 컨텍스트 참조 변수는 해당 객체를 참조한다.


```
function strictFn(){
  'use strict';
  // 변수 선언 시에 var 키워드를 강제화 한다. (오류 발생)
  var hi_message = 'Hello';
  // this 컨텍스트 참조 변수는 더 이상 window 전역 객체가 아닌 undefined이다.
  console.log(this, hi_message)
}

window.strictFn();
document.onclick = strictFn // window.document객체
```

## 클로저 (closuer)
- 함수에서 반환된 함수를 실행하면 생성된다.
- 클로저 영역에서 반환된 함수 === 클로저 함수
- 자바스크립트 함수는 일급 객체의 요건을 모두 충족한다.
- 인자로 서 전달도 가능하며, 값으로서 반환 또한 가능하다.
- **함수가 실행되어 내부에 존재하는 함수를 외부로 반환할 경우** 클로저가 생성되며, 반환된 함수는 **클로저 영역**을 참조할 수 있다.
- 이 때 반환된 함수를 **클로저 함수**라 한다.

```
// callback === cb
var fn = function(cb) {
  if (typeof cb === 'function'){
    cb();
    window.setTimeout(cb, 2000);
  } else {
    throw new Error('전달인자는 함수 데이터 유형이어야 합니다.')
  }
};

// 자바스크립트가  함수가 일급 객체인 이유!
// 함수를 다른 함수의 인자로 전달할 수 있다.
fn(function(){
  console.log()
})
```

```
function countDown(number) {
  if (typeof number !== 'number') {throw new Error('숫자를 전달하라.');}
  var test = 'hello'; 
  var _num = number;
  
  var _countDown = function(){
    console.log( '_num:  ' + _num-- );
  }
  return _countDown;
}

var countDown10 = countDown(10);
```
#### 비용을 절감하는 형태로 클로저 함수를 만드는 방법
- 모던 자바스크립트 패턴 중 이 패턴이 가장 많이 사용되는 패턴
- IIFE 패턴 (즉시 실행되는 함수)
- 일반적인 함수의 호출과정과 달리 이름이 없는 함수를 즉시 호출하는 것을 말한다.

```
+function(){}();
~function(){}();
!function(){}();
(function(){
  // 외부와 단절된 독립된 공간이 형성
  // 캡슐화
}()); // 더글라스 크록포드의 추천
(function(){}()); // 추후 코드를 붙일 때 문제가 발생할 여지가 있다.
```


### 콜백

프로그래밍에서 콜백(callback)은 **다른 코드의 인수로서 넘겨주는 실행 가능한 코드**를 말한다. 콜백을 넘겨받는 코드는 이 콜백을 필요에 따라 즉시 실행할 수도 있고, 아니면 나중에 실행할 수도 있다.



## 참고자료
>- [호이스팅 문제](https://gist.github.com/getify/11336871)
- [호이스팅 문제2](https://www.nczonline.net/blog/2010/01/26/answering-baranovskiys-javascript-quiz/)


## ToDo
- [ ] forEach, map 활용 실습해보기
- [ ] 호이스팅 이해하기 
- [ ] 콜백을 활용한 예제 만들기
- [ ] 클로저를 이용한 예제 만들기
- [ ] 핼퍼함수 전체 다시 작성해보기
- [ ] FDS 레퍼런스
