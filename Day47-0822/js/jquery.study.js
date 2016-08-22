
// jQuery는 $별칭을 사용하여 jQuery() 팩토리 함수를 참조한다.
// 그런데 위와 같은 $별칭을 사용할 경우, 다른 자바스크립트 라이브러리와 충돌이 날 가능성이 높다.
console.log(window.$ === window.jQuery);

// 문서객체모델이 완성된 다음 코드가 실행될 수 있도록 이벤트를 사용해야 한다.
// window.onload를 대체할 수 있는 window.addEventListener('DOMContentLoaded')이벤트를 추상화한 jQuery(document).ready() 구문을 지원한다.


// -----------------------------
// $ 별칭 충돌을 방지하기 위한 다양한 방법
// -----------------------------

// 방법 1. $를 사용하지 않고, jQuery 키워드만 사용한다.
jQuery(document).ready(function(){
  jQuery('body').css('background','#41DB71');
})

// 방법 2. $를 사용하지 않고, jQuery.noConflict()메소드 사용으로 jQuery를 참조하는 새로운 변수를 생성한다.
// $ 별칭을 포기하게 된다.
// var $jq = jQuery.noConflict();

// 방벙 3. jQuery.noConflict()를 사용하여 $, window.jQuery 모두 포기한다.
// console.log(this.$, this.jQuery);
// $$ 변수에 jQuery 변수를 담아서 사용할 수 있다.
// var $$ = jQuery.noConflict(true);  

// 방법 4. IIFE패턴을 사용하는 방법
// (function(global, $){
//   'use strict';
//   console.log(global.$ === global.jQuery);
// }(this, this.jQuery));

//  방법 5. 팩토리 함수에 전달한 후, 인자 값을 $로 받는다.

// var $j = jQuery.noConflict(true);
// $j(function($){
// })

// jQuery.noConflict(true)(function($){
//   console.log($().jquery);
// });
