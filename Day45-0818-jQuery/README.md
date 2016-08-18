###### eatdesignlove's Front-End Development Study

# Day45

## 잊지말기
- [Universal Module Definition](https://github.com/umdjs/umd)
- shift(), pop(), reverse()
- arguments 객체 (함수 내에만 존재한 =)

## 연관배열의 배열

```js
function makeArray(data) {
  var choeck_data = isType(data), 
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

## 클로저의 사용
- 연관배열을 실제 배열으로 변환하는 헬퍼 함수

```js
function makeArray(data) {
  var choeck_data = isType(data), 
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
- Array.from을 한 번만 물어보는 방식으로 코드 개선
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
- null, undefined를 제외한 모든 것은 객체이다.
- 객체는 속성과 메소드로 구성된 덩어리(데이터 형)이다.
- 생성자 함수가 new키워드를 만나면 객체를 생성한다. 
- 실체화된 객체가 바로 객체 인스턴스.
- 자바스크립트가 객체를 어떻게 만들고 관리하는지가 주안점 (자바스크립트의 객체지향)
- 플래시/스케치의 심볼 개념, 또는 포토샵의 스마트오브젝트 개념

```

```

## ToDo
- [ ] jQuery3에 대한 내용을 포스팅하자! 아직 어떤 글도 없다는.
- [ ] 반복문 배운거 모두 사용해보기.
- [ ] 클로저 예제 만들어보기 (계산기)
