###### eatdesignlove's Front-End Development Study

# Day47

## 잊지말기
- 유명한 라이브러리를 열어보고 패턴을 익히기 
- 코드를 보면서 무엇이 문제인지 파악하고 수정할 수 있는 능력 갖추기)


## [Modernizr](https://modernizr.com/)

- 사용자 브라우저의 특징을 감지해서 처리를 용이하도록 도와주는 라이브러리.
- 확인하고자 하는 기술을 선택해서, 빌드해서 간편히 사용할 수 있다.
- 신기술을 도입하는 경우, 그것이 지원되지 않는 환경에 대한 대응도 해주는 것이 옳다. 우아한 기능저하 주의.
- cdn에는 주요 기능에 대한 내용만 포함되어 있음
- 어떻게 쉽게 만들었는지 고민하기


>- Respond.js — Fast media queries for older browsers
- 오래된 브라우저에서 미디어쿼리를 사용할 수 있도록 도와주는 라이브러리.

- [Modernizr resources](https://modernizr.com/resources)
- [Modernizr cdn](https://cdnjs.com/lbraries/modernizr)

### [Detectizr - Mordernizr Plugin](http://baris.aydinoglu.info/Detectizr/)
- 장치에 대한 정보를 쉽게 감지할 수 있게 도와주는 모더나이저의 확장 플러그인
- 현재 작동에 문제가 있음, 


## $(document).ready와 onload와의 차이

```

```

## jQuery, $ 별칭 충돌을 방지하기 위한 다양한 방법

```js
// 방법 1. $를 사용하지 않고, jQuery 키워드만 사용한다.
jQuery(document).ready(function(){
  jQuery('body').css('background','#41DB71');
})

// 방법 2. $를 사용하지 않고, jQuery.noConflict()메소드 사용으로 jQuery를 참조하는 새로운 변수를 생성한다.
// $ 별칭을 포기하게 된다.
var $jq = jQuery.noConflict();

// 방벙 3. jQuery.noConflict()를 사용하여 $, window.jQuery 모두 포기한다.
console.log(this.$, this.jQuery);
// $$ 변수에 jQuery 변수를 담아서 사용할 수 있다.
var $$ = jQuery.noConflict(true);  

// 방법 4. IIFE패턴을 사용하는 방법
(function(global, $){
  'use strict';
  console.log(global.$ === global.jQuery);
}(this, this.jQuery));

//  방법 5. 팩토리 함수에 전달한 후, 인자 값을 $로 받는다.

var $j = jQuery.noConflict(true);
  $j(function($){
})

```

> [Avoid Conflicts Other Libraries](http://learn.jquery.com/using-jquery-core/avoid-conflicts-other-libraries/) 내용을 참고


## $와 $()의 차이
- $는 jQuery 함수, $()는 함수실행 결과로서 jQuery 인스턴스 객체를 반환한다.


> [$ vs $()](http://learn.jquery.com/using-jquery-core/dollar-object-vs-function/) 내용을 참고


## event

```
var $button = $('.change-text-button');
$button.on('click mouseenter keydown', function(){
  console.log(this)
  $(this).next().text('변경되었습니다.');
});
```

## jQuery Selector 
- CSS 1-3 모두 지원
- $('html a:not(:first-child)')
- :nth-child(fomular)
- :nth-child(fomular)
- :only-child(fomlar)

## Todo
- [ ] 자바스크립트 완전정복 3, 김춘경
- [ ] [Learn.jQuery 읽기](http://learn.jquery.com/about-jquery/)
- [ ] [http://mcdlr.com/wai-aria-cheatsheet/](http://mcdlr.com/wai-aria-cheatsheet/)
- [ ] offcanvas menu 리팩토링

