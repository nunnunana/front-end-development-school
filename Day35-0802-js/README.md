###### eatdesignlove's Front-End-Development Study

# JavaScript

### 역사

1. 넷스케이프는 비 전문가도 사용할 수 있는 **자바와 비슷하고**, 웹 브라우저에서 해석 가능한 **가벼운 언어**를 원했다. 넷스케이프의 엔터프라이즈 서버에서도 사용할 수 있도록 서버사이드 자바스크립트도 고려되어 만들어졌다.

2. 개발 초기 코드네임은 **모카**. 이렇게 만들어진 자바스크립트는 프로토타입을 기반으로 만들어진 언어. 객체지향을 이루는 방법이 자바와는 다름.

3. 공식이름은 라이브스크립트, 넷스케이프와 선마이크로 시스템즈의 제휴 속에서 최종적으로 **자바스크립트**라는 이름을 갖게 됨

4. C, C#의 기능이 점점 ES에 빠르게 도입되고 있는 추세이고, 그러한 기능들을 **CoffeeScript, TypeScript와 같은 Transfiler**를 통해 더 많은 기능을 사용할 수 있다.

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

- 자바스크립트는 Dot Syntax.

- **반드시 세미콜론**을 붙인다. 왜냐하면 세미콜론을 붙이지 않았을 때, 압축과정에서 문제가 발생할 수 있기 때문.

- 변수 선언만 하는 경우. 즉, 값이 대입되지 않은 경우
- undefined 값이 기본으로 할당되어 있다.
- = 연산자는 할당(대입)연산자라고 한다.

```js
devicePixelRatio  // 디스플레이 밀도 비율
innerHeight       // 브라우저에서 보여지는 화면의 높이
innerWidth        // 브라우저에서 보여지는 화면의 너비
outerHeight       // 브라우저 전체의 높이
outerWidht        // 브라우저 전체의 너비
pageXOffset       // 문서가 세로로 스크롤된 픽셀값(IE9) 
pageYOffset       // 문서가 가로로 스크롤된 픽셀값(IE9) 
scrollY           // 문서가 세로로 스크롤된 픽셀값
scrollX           // 문서가 가로로 스크롤된 픽셀값

console           // window 객체 내에 위치한 웹브라우저의 디버깅 콘솔에 접근할 수 있는 객체
alert()           // ok버튼을 갖는 대화상자를 띄운다.
confirm()         // ok, cancle 버튼을 갖는 대화상자를 띄운다.
prompt()          // 사용자가 텍스트를 입력할 수 있도록 안내하는 메시지가 적힌 대화 상자를 띄운다.

resizeTo()        // window 크기를 조정
resizeBy()        // window 크기를 상대적으로 조정
scrollTo()        // 특정 위치로 이동 
ScrollBy()        // 특정 위치로 상대적으로 이동
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
init();
```

이벤트가 함수를 처리할 때는 실행 연산자를 붙이지 않아야 한다.

```
window.onload = init;
```

#### DOM Element의 Event Object 
```
onload();
onclick();
setInterval();
clearInterval();
setTimeout();
requestAnimationFrame(); 
clearRequestAnimationFrame();
```

- [DOM Element의 Event Object](http://www.w3schools.com/jsref/dom_obj_event.asp)
- [requestAnimationFrame Usecase](https://css-tricks.com/using-requestanimationframe/)
- [Can I use `requestAnimationFrame`](http://caniuse.com/#search=requestAnimationFrame)

### 브라우저 객체 모델 BOM

##### Window
- console

##### - Location (주소창)
- href          //주소값
- hash          //href에서 #가 붙은 값
- host          //host
- pathname      //host 뒤에 붙는 path값
- protocol      //문서의 프로토
- reload        //페이지 새로고침
- replace       //페이지 이동

##### - History
- go()
- forward()
- back()

##### - Navigator (브라우저 정보)
- userAgent
- vendor

##### - Screen (화면)
- orientation
- availHeight
- availWdith
- availTop
- width
- height
- colorDepth
- pixelDepth

#### - Document
- **activeElement** : 접근성 관점에서 매우 중요. 현재 활성화된 element가 무엇인지 알 수 있다.


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
- [use strict2](http://blog.aliencube.org/ko/2014/01/02/reasons-behind-using-strict-mode-while-coding-javascript/)
- [use strict3](http://hmmim.tistory.com/5)

## To Do
- [ ] @function, @mixin 활용해서 Font함수 만들기(복습)
- [X] 읽기 자료 읽기
- [X] 쿠키와 local-storage 차이점

### Web Storage
HTML5부터 Web Storage기술을 사용할 수 있는데, Web Storage에는 Local Storage와 Session Storage 두 가지가 존재한다.

Local Storage는 기존의 쿠키보다 많은 양의 데이터를 저장할 수 있는데, 이때 서버와의 통신은 하지 않는다.

Local Storage는 데이터의 유효기간이 없고, 
Session Storage는 브라우저를 닫을 때 데이터가 초기화된다.

#### Cookie

##### 단점
- 쿠키는 매번 서버로 전송된다.
- 개수(20개), 용량 제한(4kb)

```javascript
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}
```

#### Local Storage
로컬스토리지는 별도의 함수선언 없이 localStorage.항목이름 으로 저장, 불러오기가 모두 가능하다.

##### 장점
- 구조화된 객체를 저장할 수 있다.
- 용량에 제한이 없다.
- 영구 데이터 저장이 가능하다.

```javascript
//cde라는 항목에 345라는 값을 저장
localStorage.cde = "345"

//cde라는 항목에 저장된 값 불러오기
localStorage.cde
```

[WebStorage 참고](http://nubiz.tistory.com/540)
[WebStorage 관련](http://m.mkexdev.net/59)
