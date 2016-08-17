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

//for - of문
for (var movie of movielist){
  console.log('for- of 문의 결과:', moive);
}


// forEach();
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
`return`에 의해 배열이 바뀌는지가 차이다.

## 자바스크립트 함수

### 특징
- 자바스크립트 함수는 상위 영역과 구분되는 별도의 독립적인 영역을 생성한다.
- 함수 내부에 `var`키워드, `function` 키워드로 정의된 데이터 값은 외부 영역에서 접근이 불가하다.
- 함수 내부는 독립된 공간이기에 내부에 `var` 키워드, `function` 키워드로 정의된 데이터는 호이스트(Hoist) 된다.


### 호이스트
- 영역 최상단으로 끌어 올려진다.
- `function`으로 정의된 함수는 몸체가 전부 끌어올려진다.
- `var`키워드로 정의된 변수는 변수 이름만 끌어 올려질 뿐, 할당되는 데이터
- 함수는 전체가 끌어올려지지만, 변수는 변수명만 이동한다. 옮겨진 변수명은  undefined

```js
var scopeFnExpression = function(){
  console.log(this) // window (실행시킨 context)
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

- new를 반드시 붙여야 하는 경우는 문제를 일으킬 수 있기 때문에, 'use strict'를 사용하여 코드 사용을 강제화 하여 방지한다.
- 생성자 함수 내에서는 `use strict`를 반드시 사용할 것을 권장한다. 
- 제이쿼리의 경우는 new 키워드를 적지 않아도, 자동으로 생성되도록 처리해두었다고 함.

## 맨날 해야하는 것, 맨날 가져오는 것 => 객체지향 방식으로 컴포넌트 개발에 활용할 수 있다.

## ToDo
- [ ] 호이스팅 특징 이해하기
- [ ] forEach, map 활용 실습해보기
