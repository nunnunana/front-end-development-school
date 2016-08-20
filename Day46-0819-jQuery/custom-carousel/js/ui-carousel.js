// --------------------
// UI Carousel Component 제작 
// --------------------

// 자바스크립트가 지원되는 환경임을 식별할 수 있는 모듈
(function(global){
  'use strict';

  // HTML요소를 찾아서 class속성에서 no-js 값을 js로 변경
  global.html = $.query('html');
  
  // 신형 방식 IE10+
  if ( html.classList ){
    html.classList.remove('no-js');
    html.classList.add('js');
  } else {
    // 구형 방식
    var html_class_attr = html.getAttribute('class');
    // 설정
    html.setAttribute('class', html_class_attr.replace(/no-js/,'js'));  
  }

}(this));

(function(global){
  'use strict';
  // --------------------
  // 1. [절차지향] 함수형 방식으로 진행 
  // --------------------
  // 1.1 컴포넌트 분석
  //   애플리케이션 초기화
  //   - 해당요소의 컴포넌트화
  //   - 요소의 클래스 설정
  //   - 버튼을 동적으로 생성
  //   - 버튼 이벤트 핸들링
  //   핸들러 작성
  //   콘텐츠 래퍼를 이동 가능
  // 1.2 기능설계
  // 1.3 기능구현
  // 1.4 테스트
  // 1.5 빌드(배포)

  var carousel_contents_wrapper;
  // 애플리케이션 초기화
  function init(selector){
    // 스타일 식별자 class 속성 설정
    var carousel = $.query(selector);

    // 기존 carousel 참조문서 객체의 class속성 값을 메모리
    // 객체.속성 방식을 사용하여 메모리
    // null값이 들어가지 않도록 비교연산자를 활용
    carousel.origin_class = carousel.getAttribute('class') || '';
    carousel.setAttribute('class', (carousel.origin_class + ' ui-carousel').trim());

    // WAI-ARIA 설정
    carousel.setAttribute('role','application');
    carousel.setAttribute('aria-label','Demonstration UI Carousel Component');
 
    // --------------------
    // 래핑 요소 
    // --------------------
    // 래핑 요소 생성
    carousel_contents_wrapper = $.createNode('div');
    // 래핑 요소에 클래스 속성 설정
    carousel_contents_wrapper.setAttribute('class','ui-carousel--content_wrapper');
    // 래핑 요소에 WAI-ARIA 속성 설정
    carousel_contents_wrapper.setAttribute('role','group');
    // 콘텐츠 래핑
    var carousel_contents = $.makeArray($.queryAll(selector + '> *'));
    carousel_contents.forEach(function(content, index){
      // 자식 요소에 class속성 설정
      content.setAttribute('class','ui-carousel--content');
      // 자식 요소의 내부에서 제목 요소를 찾아 class속성 설정
      var headline = $.query('h2', content);
      headline.setAttribute('class','ui-carousel--content__headline');
      // 래핑 요소에 자식 요소로 삽입
      carousel_contents_wrapper.appendChild(content)
    });
    // 캐로셀 컴포넌트의 첫번째 자식 요소로 삽입
    $.prependChild(carousel, carousel_contents_wrapper);
    
    // --------------------
    // 버튼 그룹과 버튼 요소들을 동적으로 생성 
    // --------------------
    var button_group = $.createNode('div');

    // 버튼 그룹에 class식별자 설정
    button_group.setAttribute('class','ui-carousel--navigation__buttons');
    button_group.setAttribute('role','group')

    // 버튼 생성
    var prev_button = $.createNode('button');
    prev_button.setAttribute('type','button');
    var next_button = prev_button.cloneNode();

    // 각 버튼에 class 및 속성 추가
    prev_button.setAttribute('class','ui-carousel--navigation__prev_button');
    next_button.setAttribute('class','ui-carousel--navigation__next_button');
    prev_button.setAttribute('aria-label','previous content');
    next_button.setAttribute('aria-label','next content');

    // 버튼에 아이콘 폰트 추가
    prev_button.innerHTML = '<span class="ion-ios-arrow-up" aria-hidde="true"></span>';
    next_button.innerHTML = '<span class="ion-ios-arrow-down" aria-hidden="true">';
    // console.log(prev_button, next_button);

    var button_group_html_code = [
    '<div class="ui-carousel--navigation__buttons" role="group">',
      '<button aria-label="previous content"type="button" class="ui-carousel--navigation__prev_button">', '<span class="ion-ios-arrow-up" aria-hidde="true"></span>',
      '</button>',
      '<button aria-label="next content"type="button" class="ui-carousel--navigation__next_button">', '<span class="ion-ios-arrow-down" aria-hidden="true"></span>',
      '</button>',
   '</div>'
    ].join('');
    carousel.innerHTML += button_group_html_code;

    // 콘텐츠 래퍼 문서 객체로부터 첫번재 자식 객체(콘텐츠)를 변수에 참조
    var content = $.firstEl(carousel_contents_wrapper);
    console.log(content);
    // 콘텐츠 높이를 가져온다.
    var content_height = $.getStyle(content, 'height');
    console.log(content_height)

    // 버튼에 이벤트 바인딩을 실행
    bindEvent();
  }

  // --------------------
  // 버튼에 이벤트 바인딩 
  // --------------------
  function bindEvent(buttons){
    var buttons = $.queryAll('.ui-carousel--navigation__buttons button');
    var len = buttons.length;
    while (buttons[--len]) {
      buttons[len].onclick = movingCarouselContents;
    }
  }

  // 버튼에 연결된 함수
  function movingCarouselContents() {
    // console.log(this);
    // 기능 구현
    // 어떤 버튼을 사용자가 클릭했는지 구분한다.
    var check_class = this.getAttribute('class');

    var carousel_contents_wrapper = this.$.prevEl((this.parentNode))
    var current_wrapper_top = $.removeUnit($.css(carousel_contents_wrapper, 'top'));
    var changed_wrapper_top;

    // 콘텐츠 래퍼를 이동시켜 준다.
    if ( /prev/.test(check_class)) {
      changed_wrapper_top = current_wrapper_top + content_height;
      $.css(carousel_contents_wrapper, 'top', (current_wrapper_top + content_height) + 'px');
    } else {
      changed_wrapper_top = current_wrapper_top - content_height;
      $.css(carousel_contents_wrapper, 'top', (current_wrapper_top - content_height) + 'px');
    }
  }

  //초기화실행
  init('.main-ad-area');
}(this));

// (function(global){
//   'use strict';
//   // --------------------
//   // 2.  [객체지향] 커스텀 객체 형태로 변경
//   // --------------------
//   // 2.1 객체 생성자 (ES 2015. class제작)
//   // 2.2 객체 생성자의 프로토 타입객체를 통해 공유할 수 있는 기능정의
//   // 2.3 정의된 기능 구현
//   // 2.4 테스트
//   // 2.5 빌드(배포)


//   function Carousel(selector){
//     this.carousel = $.query(selector);
//     this.init();
//   }

//   Carouesl.prototype = {
//     'contstructor': Carouesl,
//     'init' : function(){
//     },
//     'bindEvent': function(){
//     },
//     'movingCarouselContents': function(){
//     }
//   }

//   // 객체 생성
//   global.main_ad_area = new Carousel('.main-ad-area');
// }(this));
