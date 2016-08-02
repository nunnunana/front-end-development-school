###### eatdesignlove's Front-End-Development Study

# JavaScript

### 역사

- 1. 넷스케이프는 비 전문가도 사용할 수 있는 **자바와 비슷하고**, 웹 브라우저에서 해석 가능한 **가벼운 언어**를 원했다. 넷스케이프의 엔터프라이즈 서버에서도 사용할 수 있도록 서버사이드 자바스크립트도 고려되어 만들어졌다.

- 2. 개발 초기 코드네임은 **모카**. 이렇게 만들어진 자바스크립트는 프로토타입을 기반으로 만들어진 언어. 객체지향을 이루는 방법이 자바와는 다름.

- 3. 공식이름은 라이브스크립트, 넷스케이프와 선마이크로 시스템즈의 제휴 속에서 최종적으로 **자바스크립트**라는 이름을 갖게 됨

- 4. C, C#의 기능이 점점 ES에 빠르게 도입되고 있는 추세이고, 그러한 기능들을 **CoffeeScript, TypeScript와 같은 Transfiler**를 통해 더 많은 기능을 사용할 수 있다.

- ECMA Script (JavaScript, JScript, Action Script)

### 문서객체모델 DOM (Front-End)

자바스크립트에서는 반드시 `var`를 붙이도록 한다.

#### Sass와 JavaScript의 차이
```js
// Sass 조건문
// @if dp == 1 {
//   @debug "일반 디스플레이의 농도를 픽셀 가집니다."
// }

// JavaScript 조건문
if (dp > 1) {
  console.log("고해상도 디스플레이의 픽셀 농도를 가집니다.");
} else {
  console.log("일반 디스플레이의 픽셀 농도를 가집니다.");
}
```

#### 자바스크립트 기초

자바스크립트는 Dot Syntax.

**반드시 세미콜론**을 붙인다. 왜냐하면 세미콜론을 붙이지 않았을 때, 압축과정에서 문제가 발생할 수 있기 때문.

```js
devicePixelRatio
innerHeight
innerWidth
pageXOffset
pageYOffset

console
alert()
confirm()
prompt()

resizeTo()
resizeBy()
scrollTo()
ScrollBy()
```

#### setTimeout() & setInterval()

주기마다 수행되는 일을 처리할 경우에 아래와 같은 구문을 사용할 수 있다.

컴퓨터에게 일을 반복적으로 수행하도록 시켰으나 이를 멈출 수 있는 장치를 마련하지 않고 사용하면 안된다.

함수 뒤의 `()`를 넣지 않으면 바로 실행되지 않는다.

```
setInterval(함수, 밀리초) //주기마다 계속 반복 실행
setTimeout(함수, 밀리초) // 1회만 실행
```

```js
// Sass 함수
$count: 10;
@function countDown(){
  $count: $count - 1;
  @return $count;
}

// 자바스크립트 함수
var count = 10;
function countDown(){
  count = count - 1;
  console.log(count)
}

setInterval(countDown, 1000)
```


```js
window.resizeTo(100,100)
window.resizeBy(200,200)

```

#### 사용자와 이벤트가 함수를 처리할 때의 차이

사용자가 직접 함수를 실행할 때에는 실행 연산자가 필요하다.
```
init());
```

이벤트가 함수를 처리할 때는 실행 연산자를 붙이지 않아야 한다.
```
window.onload = init;
```

#### DOM API 
```
onload;
onclick;
setInterval();
clearInterval();
setTimeout();
requestAnimationFrame(); //
```

[Can I use `requestAnimationFrame`](http://caniuse.com/#search=requestAnimationFrame)

### 브라우저 객체 모델 BOM

##### Window

##### Location (주소창)

##### History

##### Navigator (브라우저 정보)

##### Screen (화면)
orientation





### 코어 EcmaScript (Server)




## 참고자료
>- [Brendan Eich.com](https://brendaneich.com/)
- [Brendan Eich- wiki](https://en.wikipedia.org/wiki/Brendan_Eich)
- js계의 요다 스승, 더글락스 크록포드
- [인사이드 자바스크립트](http://book.naver.com/bookdb/book_detail.nhn?bid=7400243)
- [자바스크립트+jQuery 완전정복 스터디 1](http://book.naver.com/bookdb/book_detail.nhn?bid=9650891)
[detectizr](https://github.com/barisaydinoglu/Detectizr)


## 읽기 자료
- [SPA](https://en.wikipedia.org/wiki/Single-page_application)
- [Repainting Reflow 관련](http://mohwaproject.tistory.com/entry/ReflowLayout-%EA%B3%BC-Repaint-%EA%B3%BC%EC%A0%95-%EB%B0%8F-%EC%B5%9C%EC%A0%81%ED%99%94)
- [Repainting Reflow 관련 2](https://www.google.co.kr/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&ved=0ahUKEwizrrL1_aHOAhWJnpQKHXXsCEcQFggwMAE&url=https%3A%2F%2Flists.w3.org%2FArchives%2FPublic%2Fpublic-html-ig-ko%2F2011Sep%2Fatt-0031%2FReflow_____________________________Tip.pdf&usg=AFQjCNHelLgcXkYj0itupgpIYX-tl9sHVw&sig2=MoEu18Q4iAX2wSqJdiELsA&cad=rjt)
- [브라우저 동작의 이해 - 리플로우와 리페인트, 그리고 최적화](http://www.mimul.com/pebble/default/2013/07/07/1373183724195.html)
- [use strict](https://msdn.microsoft.com/ko-kr/library/br230269(v=vs.94).aspx)


## To Do
- [ ] @function, @mixin 활용해서 font함수 만들기(복습)
- [ ] 읽기 자료 읽기
