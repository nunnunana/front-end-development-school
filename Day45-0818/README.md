###### eatdesignlove's Front-End Development Study

# Day45

## 잊지말기
- [Universal Module Definition](https://github.com/umdjs/umd)
- shift(), pop(), reverse()
- arguments 객체 (함수 내에만 존재한다.)

## 연관배열의 배열

```js
function makeArray(data) {
  var check_data = isType(data), 
      result_arr = [], len = data.length;
  if (check_data === 'array') { 
    return data;
  }
  if (len && check_data !=='string') {
    while (len--) {
      result_arr.psuh(data[len]);
    }
  return result_arr.reverse();
  }
}
```

## 클로저의 사용
- 연관배열을 실제 배열으로 변환하는 핼퍼 함수

```js
function makeArray(data) {
  var check_data = isType(data), 
      result_arr = [], len = data.length;
  if (check_data === 'array') { 
    return data;
  }
  if (len && check_data !=='sting') {
    while (len--) {
      result_arr.psuh(data[len]);
    }
  return result_arr.reverse();
  }
}
```

- 연관배열을 배열로 바꾸는 방법을 브라우저 환경에 따라 한 번만 물어보는 조건식으로 코드 개선
- 클로저를 활용하여 매번 구버전/최신브라우저를 조건으로 분기하는 과정을 줄일 수 있다. 반드시 사라지는 변수나 파라미터를 기억하게 하기 위해서 이용되는 것이 아니라는 것을 알 수 있음.

```js
1. 클로저를 사용하는 방법으로 문제해결
function convertArray_wrapper(){
  var closureFn;
  if (Array.from) {
    closureFn = function(data) {
      return Array.from(data);
    };
  } else {
    colsureFn = function(data){
      return Array.prototype.slice.call(data);
    }
  }
}
var convertArray = convertArray_wrapper();

2. 약식(IIFE)을 사용하여 클로저 처리방법
var convertArray = (function(){
  if (Array.from) {
    return function(data){
      return Array.from(data);
    }
  } else {
    return function(data) {
      return Array.prototype.slice.call(data);
    }
  }
}());
```

## 요일 반환기 & 버튼 예제


## 자바스크립트 객체
- **객체는 속성과 메소드로 구성된 덩어리(데이터 형)이다.**
- null, undefined를 제외한 모든 것은 객체이다.
- **생성자 함수**가 **new 키워드**를 만나면 객체를 생성한다. 
- 실체화된 객체가 바로 **객체 인스턴스.**
- 자바스크립트가 객체를 어떻게 만들고 관리하는지가 주안점 (자바스크립트의 객체지향)
- 플래시/스케치의 심볼 개념, 또는 포토샵의 스마트오브젝트 개념
- ath 객체는 new가 필요없다.


```js
function Coffee(name) {
  this.name = name;
}

// ECMAScript 2015
class Coffee {
  constructor() {}
  drink() {}
  addShot() {}
}
```


```
function Navigation(name) {
  this.name = name;
}

var gnb = new Navigation('글로벌 내비게이션 바');
var lnb = new Navigation('로컬 내비게이션 바');
var unb = new Navigation('유틸리티 내비게이션 바');
```


## 네이티브 객체
- 객체 리터럴 표현식을 사용하면 **new문을 사용하지 않고도 객체를 바로 인스턴스화 하여 사용**할 수 있다.
- 자바스크립트의 내장객체는 6가지 (Number, String, Boolean, Array, Function, Object)
- valueOf()
- 프로토타입 체이닝
- 메서드 체이닝
- apply(), call()차이는 call()은 함수에 전달될 여러 개의 인자를 받는데 비해, apply()는 배열로 된 하나의 인자를 받는다는 점입니다.
- 덧붙여, 정적인 호출에 call() 동적인 호출에 apply()를 사용하는데, 그 이유는 배열로 받아서 처리할 수 있는 부분의 장점 때문일듯. 


```js
var hello = function(name, age) {
      alert("제 이름은 " + name + "입니다." + "저는 " + age + "살 입니다.");
};

hello("홍길동", 5); //일반적인 호출
hello.apply(undefined, ["홍길동", 5]); //apply를 사용한 호출
hello.call(undefined, "홍길동", 5); //call을 사용한 호출 
```

## 참고자료
- [ECMAScript2015](http://www.ecma-international.org/ecma-262/6.0/)


## ToDo
- [ ] 반복문 배운거 모두 사용해보기.
- [ ] 클로저 예제 만들어보기 (계산기)
- [ ] 이력서 작성/제출

## 장기적 todo
- [ ] jQuery3에 대한 내용을 포스팅하자! 아직 어떤 글도 없다는.
- [ ] 프론트엔드 핸드북과 비슷한 것 만들어서 정리하기.
