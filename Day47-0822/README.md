###### eatdesignlove's Front-End Development Study

# Day47

## 잊지말기
- 유명한 라이브러리를 열어보고 패턴을 익히기 
- 코드를 보면서 무엇이 문제인지 파악하고 수정할 수 있는 능력 갖추기
- eq() ?

## [Modernizr](https://modernizr.com/)

- 사용자 브라우저의 특징을 감지해서 처리를 용이하도록 도와주는 라이브러리.
- 확인하고자 하는 기술을 선택해서, 빌드해서 간편히 사용할 수 있다.
- 신기술을 도입하는 경우, 그것이 지원되지 않는 환경에 대한 대응도 해주는 것이 옳다. 우아한 기능저하 주의.
- cdn에는 주요 기능에 대한 내용만 포함되어 있음


>- Respond.js — Fast media queries for older browsers
- 오래된 브라우저에서 미디어쿼리를 사용할 수 있도록 도와주는 라이브러리.

- [Modernizr resources](https://modernizr.com/resources)
- [Modernizr cdn](https://cdnjs.com/lbraries/modernizr)

### [Detectizr - Mordernizr Plugin](http://baris.aydinoglu.info/Detectizr/)
- 장치에 대한 정보를 쉽게 감지할 수 있게 도와주는 모더나이저의 확장 플러그인
- 현재 작동에 문제가 있음, 


## $(document).ready와 onload와의 차이

$(document).ready는 내부적으로 아래의 첫번째 코드와 같은 내용을 지니고 있다. 문서가 DOMContentLoad 되었을 때 콜백함수를 실행하게된다. 반면 window.onload의 경우 문서에서 필요한 모든 소스가 로드된 이후에 함수 내부의 내용을 실행하는 차이점을 가지고 있다.

때문에 마크업이 로드되었을 때, 이미지 등의 미디어 파일과 같은 나머지 소스를 기다리지 않고 자바스크립트를 처리하는 것이 효율적이라고 볼 수있다.

```js
//DOMContent가 모두 로드되었을 때 실행
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM이 완성되었다.');
});

// 문서의 모든 소스가 로드되었을 때 실행
window.onload = function() {
  console.log('DOM이 완성되었을 뿐 아니라, 이미지를 포함한 미디어 파일까지 모두 다운로드 완료 되었다.');
};
```


## jQuery, $ 별칭 충돌을 방지하기 위한 다양한 방법

### 방법 1. $를 사용하지 않고, jQuery 키워드만 사용한다.
```js
// 
jQuery(document).ready(function(){
  jQuery('body').css('background','#41DB71');
})

```


### 방법 2. $를 사용하지 않고, jQuery.noConflict()메소드 사용으로 jQuery를 참조하는 새로운 변수를 생성한다.
```js
// $ 별칭을 포기하게 된다.
var $jq = jQuery.noConflict();
```


### 방벙 3. jQuery.noConflict()를 사용하여 $, window.jQuery 모두 포기한다.
```js
// $$ 변수에 jQuery 변수를 담아서 사용할 수 있다.
// noConflict()안에 인수로 true를 전달할 경우, 식별자로 등록된 $, jQuery 모두를 포기하게 된다.
var $$ = jQuery.noConflict(true);  

```


### 방법 4. IIFE패턴을 사용하는 방법
```js
(function(global, $){
  'use strict';
  console.log(global.$ === global.jQuery);
}(this, this.jQuery));
```


### 방법 5. jQuery 팩토리 함수에 전달한 후, 인자 값을 $로 받는다.
```js
var $j = jQuery.noConflict(true)(function($){});
<!-- $j(function($){}) -->
```


> [Avoid Conflicts Other Libraries](http://learn.jquery.com/using-jquery-core/avoid-conflicts-other-libraries/) 내용을 참고


## $와 $()의 차이
- $는 jQuery 함수, $()는 함수실행 결과로서 jQuery 인스턴스 객체를 반환한다.

> [$ vs $()](http://learn.jquery.com/using-jquery-core/dollar-object-vs-function/) 내용을 참고


## jQuery Selector 

> [http://codylindley.com/jqueryselectors/](http://codylindley.com/jqueryselectors/) 에서 셀렉터를 알아봅시다.

## a:nth-child(odd) vs a:odd
- CSS에서의 odd는 짝수, CSS는 1이 첫번째이기 때문에.
- JavaScript에서 odd는 홀수, 0이 첫번째이기 때문에. 

## .animated 
- 애니메이션이 작동중일 때 요소를 확인할 수 있음


## jQuery.fn.css()
- getter :$().css('');
- setter : $().css('','');
- css-map : $().css({'':'', '':'', '':''});
- callback : $().css({function(){ return }});



## 참고자료
- [https://www.w3.org/TR/wai-aria-practices/#combobox](https://www.w3.org/TR/wai-aria-practices/#combobox)
- [http://codylindley.com/jqueryselectors/](http://codylindley.com/jqueryselectors/)
- [elastic sidebar](https://codepen.io/suez/pen/emjwvP)

## Todo
- [x] 자바스크립트 완전정복 3, 김춘경
- [x] 제이쿼리 필터 목록 살펴보고 사용해보기(Keynote)
- [ ] [Learn.jQuery 읽기](http://learn.jquery.com/about-jquery/)
- [ ] offcanvas menu 리팩토링(Elastic Sidebar)
- [ ] [http://mcdlr.com/wai-aria-cheatsheet/](http://mcdlr.com/wai-aria-cheatsheet/)

