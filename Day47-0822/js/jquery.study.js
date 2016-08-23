
// jQuery는 $별칭을 사용하여 jQuery() 팩토리 함수를 참조한다.
// 그런데 위와 같은 $별칭을 사용할 경우, 다른 자바스크립트 라이브러리와 충돌이 날 가능성이 높다.
console.log(window.$ === window.jQuery);

// 문서객체모델이 완성된 다음 코드가 실행될 수 있도록 이벤트를 사용해야 한다.
// window.onload를 대체할 수 있는 window.addEventListener('DOMContentLoaded')이벤트를 추상화한 jQuery(document).ready() 구문을 지원한다.


// -----------------------------
// $ 별칭 충돌을 방지하기 위한 다양한 방법
// -----------------------------

// 방법 1. $를 사용하지 않고, jQuery 키워드만 사용한다.
// jQuery(document).ready(function(){
//   jQuery('body').css('background','#41DB71');
// })

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


(function(global, $){
  'use strict';
  
  // global.setTimeout(function(){
  //   $('.demo').find('p').text('문서객체모델이 모두 준비되어 해당 코드는 문서 객체의 내용을 변경했습니다.');
  //   $('.demo p').text('문서객체모델이 모두 준비되어 해당 코드는 문서 객체의 내용을 변경했습니다.')  
  // }, 2000);

  // var $button = $('.change-text-button');
  // $button.on('click mouseenter keydown', function(){
  //   console.log(this)
  //   $(this).next().text('변경되었습니다.');
  //   // attribute vs property
  //   // HTML에 마크업하는 내용, 자바스크립트가 셋팅하는 속성 내용
  //   //$(this).attr('disabled','true'); //xhtml에서는 속성과 값이 일치해야한다.
  //   $(this).prop('disabled','true'); 

  // });

  // jQuery 사용시 느려지는 이유. 매번 객체를 만들기 때문.
  // console.log(!!this.css, $(this).css );

  var $body = $('body');
  var $isMenu = false;
  var $side_menu = $('.side-menu', $body);
  var $side_menu_links = $('a', $side_menu);
  var $btnMenu = $('.btn__menu');
  console.log($side_menu_links)
  $btnMenu.on('click', toggleMenu);

  function toggleMenu(){
    if ( !$isMenu ) {
      $side_menu.css('display','block');
      $body.css('transform','translateX(210px)');
      $(this).removeClass('ion-navicon-round');
      $(this).addClass('ion-close-round');  
      $('li:first a', $side_menu).focus();
      console.log($side_menu.first()[0])

      $( $side_menu_links[2] ).on('focusout', function() {
        $btnMenu.focus();
      });

    } else {
      setTimeout(function(){
        $side_menu.css('display','none');
      }, 250);
      $body.css('transform','translateX(0)');
      $(this).addClass('ion-navicon-round');
      $(this).removeClass('ion-close-round');
    }
    $isMenu = !$isMenu;
  }

}(this, this.jQuery));

// (function(global, $){
//   'use strict';
//   var wrapper_origin_pos;
//   // 오프캔버스 메뉴 이벤트 핸들링
//   function init() {
//     // 오프캔버스 메뉴 래퍼 선택(참조)
//     var $offcanvas_wrapper = $('.offcanvas-menu-wrapper');
//     wrapper_origin_pos = $offcanvas_wrapper.css('left');
//     // 오프캔버스 토글 메뉴 버튼 선택(참조)
//     var $toggle_btn = $offcanvas_wrapper.find('.toggle-menu-button');
//     // var $toggle_btn = $('.toggle-menu-button', $offcanvas_wrapper);
//     // 오프캔버스 메뉴 래퍼에서 탐색한 버튼에 클릭 이벤트 핸들링
//     $toggle_btn.on('click', toggleOffCanvasMenu);
//   }

//   // 이벤트 핸들러(함수)
//   function toggleOffCanvasMenu() {
//     // this는 이벤트가 연결된 <button> 문서 객체 이다.
//     // this가 참조하는 <button> 객체를 jQuery 객체화 시키는 방법은
//     // jQuery() 팩토리 함수 내부에 this 참조 변수를 전달하여 jQuery 객체를 생성한다.
//     // 생성된 jQuery 객체는 jQuery.프로토타입 객체가 가진 능력을 맘껏 사용 가능하다.
//     var $this = $(this); // ※ 이와 같은 행위는 성능을 저하시킨다.
//     // console.log($this.jquery); // jQuery 버전 출력
//     var $wrapper = $this.parent();
//     // console.log($wrapper, $wrapper[0]);
//     // 부모요소 $wrapper의 left 속성을 이동
//     $wrapper.animate({
//       'left': global.parseInt($wrapper.css('left')) == 0 ? wrapper_origin_pos : 0
//     });
//   }


//   $(init); // $(document).ready(init);

// })(this, this.jQuery);


// (function(global, $){
//   'use strict';
  
//  // $('.dmem-box').on('click', function(){
//  //  var $this = $(this);
//  //  console.log($this);
//  //  $this.addClass('primary')
//  // });

//  $('.demo-box').eq(0).on('mounseenter', function(){
//   var $this = $(this);
//   if ($this.hasClass('secondary')){
//     $this.css('font-size', '+=10');
//     }
//     $this.addClass('primary');
//   })
//   .on('mouseleave', function(){
//     var $this = $(this);
//     $this.removeClass('primary');
//     $this.addClass('secondary');
//   });
//  })


// }(this, this.jQuery));
