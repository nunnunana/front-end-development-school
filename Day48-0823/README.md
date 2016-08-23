###### eatdesignlove's Front-End Development Study

# Day48

## 잊지말기
- 기존의 자바스크립트와 'use strict'간 차이를 파악
- JavaScript Keynote. **모두읽기** [이벤트위임]


###  this 컨텍스트 참조 변수
- 자바스크립트 언어는 영역(scope)을 가진다.
- 영역으로 구분되는 공간은 크게 전역과 지역이 있다.
- 자바스크립트에서는 if, while, do~while, for 문 값은 블록문('{}')내부는 영역이 아니다.
- 함수 데이터 유형의 블록문 내부에서는 공간이 형성된다.
- 아래의 코드에서 meFn 을 실행시키면 `undefined`가 리턴되는데 그 이유는 엄격 모드에서는 기존의 설계 오류를 해결하기 위해 더 이상 암묵적으로 전역 콘텍스트 객체인 window에서 실행한 것처럼 처리하지 않는다.
- 엄격 모드(strict mode)에서 실행 시, 명시적으로 실행 콘텍스트 객체를 설정하면 this는 명시적으로 설정된 실행 콘텍스트 객체를 가리키게 된다.

```js
function meFn() {
  'use strict';

  console.log(this);
}
meFn(); // undefined

window.meFn(); // window object
```

call() 메서드를 통해 this의 컨텍스트를 변경할 수 있다. 

```js
demo1.onclick = function(){
  myFn(); //결과: this === window.object
  myFn.call(this); //결과: this === demo1
}
```


### jQuery에서의 this
- 아래의 코드는 jQuery내에서 클릭할때마다 객체를 생성하여 성능이 저하되는 문제를 해소하기 위해 사용할 수 있는 방법이다. 이와 관련된 플러그인을 만들어볼 수 있다.
- 특정 이벤트를 동작할 때, 내부에 `$(this)`와 같은 구문이 있다. 그렇다면 이벤트가 실행될때마다 `$(this)`를 통해 새로운 객체를 생성하게 되는데, 이를 아래와 같이 처리해주면 객체를 통해 관리할 수가 있다. (객체합성 패턴)


```js
jQuery(function($){
  'use strict';

  console.log('jQuery 팩토리 함수에 전달된 콜백 함수 내부에서의 this:', this);
  
  var $demo1 = $('.demo1'); 

  // 이때 반환되는 것은 DOM요소.
  // 그런데 우리는 evt를 활용하기 위해 다시 제이쿼리 객체화를 해야하는데
  // 그 방법으로 on메서드 내에 객체형태로 $demo1 값을 전달하면 
  // 추가한 객체가 이벤트 객체에 합성되면서
  // 내부적으로 다시 제이쿼리 객체화하지 않아도 되기 때문에 객체를 통해 관리할 수 있다.
  // => [객체 합성 패턴]

  $demo1.on('mousedown', {'$this' : $demo1}, function(evt){
    var $this = evt.data.$this;
    console.log(evt.data);
    console.log($this);
  });  
}); 
```


## IIFE 패턴(즉시실행함수)
- 함수 표현식을 사용하여 사용자가 이름을 호출하는 과정을 생략하고 즉시 실행되는 함수 패턴을 말한다.
- 모듈 패턴에 자주 사용되며, 전역과 구분되는 지역을 형성함으로서 공개/비공개 멤버를 설정할 수 있다.

```js
var fn = function(){}; // 함수 표현식, 함수 값(Literal)
fn();

(function($j$){
  console.log('즉시실행함수');
}(jQuery));
```

- 즉시실행함수는 IIFE의 모습을 가지고 있긴하지만, 객체를 반환한다는 점에서 클로저와 차이가 있다.
- 또한 모듈 패턴을 이용해 생성한 객체는 외부에 공개되지 않는 내용을 만들 수 있다는 점이 장점이 될 수 있다.


## jQuery css()

### 1. 계산된 속성값을 가져온다.
```js
var body_margin = $body.css('margin');
console.log(body_margin)
```

### 2. 속성 값을 설정하기.

```js
$body
  .css('margin-left','2rem')
  .css('margin-right','2rem');

$body.css('margin');
console.log(body_margin);
```

### 3. css map객체를 전달해서 설정하기

```js
var css_map = {
  'background':'#658DFF',
  'color':'#fff',
  'font-size':'+=22'
};
$body.css(css_map);
var body_font_size = $body.css('font-size');
console.log(body_font_size);

```

### 4. 각 속성에 콜백 함수 설정

```js
var fn_map = {
    'width': function(index, value){
      return global.parseFloat(value, 10)/3 + 20
    },
    'height': function(index, value){      
      if (value < 300) {
        return '100vh';
      } else {
        return global.parseFloat(value, 10) * 2;
      }
    }
  };
  $body.css(fn_map);
  console.log('#1 - width', $body.css('width') );
  console.log('#2 - width', $body.css('height') );
```

## $.map() / $.trim()

- jQuery팀에서는 map, trim과 같은 메서드들을 추상화해 만들어두어서 ES6에서 사용 가능한 메서드들을 크로스브라우징이 가능한 제이쿼리 메서드로서 사용가능하다.


## .bind() / $.proxy()
- ES6의 `.bind()`를 제이쿼리 내에 추상화해 놓은 것이 `$.proxy()`이다.
- context만 바꿔 놓고 실행을 대기하는 반면, apply, call은 바로 실행시킨다.
- 아래의 코드는 `$.proxy`를 통해 외부 함수의 context를 바꾸어 줄 수 있다.
- [Javascript call() & apply() vs bind()?](http://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)


```js
$letters.on('mouseenter', { '$l' : $letters }, function(e){
  console.log(e.data.$l.eq(0));
});

$letters.each(function(index, item){
  var $this = $(this);
  // var $this = $letters.eq(index);
  // $this.on('mouseenter', letterOvers);
  $this.on('mouseenter', $.proxy(letterOvers, $this));
});

function letterOvers() {
  console.log('this:', this);
  this.css('color', '#52c88c');
};
```

## jQuery Class 제어
- .hasClass(): 해당 클래스 속성을 소유했는가? Boolean
- .addClass(): 해당 클래스가 없다면 추가한다. jQuery object
- .removeClass(): 해당 클래스가 있다면 제거한다. jQuery Object | 인자 값이 없다면 모든 클래스 속성을 제거한다. 
- .toggleClass(): 해당 클래스 속성을 토글한다. (해당 클래스 속성을 소유했다면 제거, 소유하지 않았다면 추가)

### 이벤트 위임
- 크로스브라우징 문제로 이벤트 위임처리를 자유롭게 처리하지 못했다.
- 이벤트 캡쳐링 : 부모에서 자식으로 내려가는 방법
- 이벤트 버블링 : 자식에서 부모로 올라오는 방법

### 버튼예제 | 초기 코드

```js
var button_control = $('.button-control');
var $demo_box = $('.demo-box');
var addClass_btn = $('.addClass_look', button_control);
var removeClass_btn =$('.removeClass_look', button_control);
var toggleClass_btn =$('.toggleClass_look', button_control);

addClass_btn.on('click', function(){
  demo_box.addClass('look');
});
removeClass_btn.on('click', function(){
  demo_box.removeClass('look');
});
toggleClass_btn.on('click', function(){
  demo_box.toggleClass('look');
});
```

### 버튼예제 | 이벤트 위임을 이용한 더 효율적인 코드

```js
var button_control = $('.button-control');
var $demo_box = $('.demo-box');

button_control.on('click','button',function(){
  switch(this.getAttribute('class')) {
    case 'addClass_look':
      $demo_box.addClass('look');
    break;
    case 'removeClass_look':
      $demo_box.removeClass('look');
    break;
    case 'toggleClass_look':
      $demo_box.toggleClass('look');
    break;
  }
});

```


## Q.
- 함수가 실행되고 리턴될때 클로저 영역이 생기고 해당 변수들을 기억할 수 있을 것 같은데, 위의 예에서 함수가 실행되는 시점이 마우스가 들어왔을 때이고, 반복문시 작동하는 시점은 그 이전인데 어떻게 가능한거지? on 이벤트의 콜백함수는 마우스가 진입했을 때 실행되고, 그때 $this를 받아오는 것일텐데? var $this를 어떻게 기억하지?
- 크롬 개발자도구의 XHR 내 정보가 보이지 않게 하는 것? IIFE를 활용하는 것과 관련이 있을까?


## 참고자료
>- [$.extend(obj1, obj2);](htt-api.jquery.com/jQuery.extend/)


## Todo
- [ ] counter.js 라이브러리 (오늘 배운 것을 활용)
- [ ] _on 핼퍼함수 (JJ_Camp)
- [ ] 내일 팀액티비티, 관리자페이지 작업
  
