(function(global, $){
  'use strict';
    
  var $body = $('body');

  // 스타일 제어
  // .css() 사용방법
  // 방법-1 속성 값을 가져오기
  // 이 때 계산된 값을 가져오게 된다.
  var body_margin = $body.css('margin');
  console.log(body_margin)


  // 방법-2. 속성 값 설정하기. 
  $body
    .css('margin-left','2rem')
    .css('margin-right','2rem');

  $body.css('margin');
  console.log(body_margin);


  // 방법-3. css map객체를 전달해서 사용하기
  var css_map = {
    'background':'#658DFF',
    'color':'#fff',
    'font-size':'+=22'
  };
  $body.css(css_map);

  var body_font_size = $body.css('font-size');
  console.log(body_font_size);

  // 방법-4. 각 속성에 콜백 함수 설정
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
  
  var $h1 = $('.container h1');
  var h1_text = $h1.text();
  h1_text = h1_text.split('');
  console.log(h1_text);

  // jQuery.map() 유틸리티 메소드(Static Method, Class Method)
  h1_text = $.map(h1_text, function(item, index){
    if($.trim(item)) {
      return '<span>' + item + '</span>';      
    } else {
      return item;
    }
  });
  h1_text = h1_text.join('');
  $h1.html(h1_text);

  // jQuery팀에서는 map, trim과 같은 메서드들을 추상화해 만들어두어서
  // ES6에서 사용 가능한 메서드들을 크로스브라우징이 가능한 제이쿼리 메서드로서 사용가능하다.

  // var $letters = $h1.find('span'); 아래와 동일하다.
  var $letters = $('span', $h1);


  // 좋지 않은 코드
  // 이벤트 발생 시마다 this 문서 객체를
  // jQuery 팩토리 함수로 감싸 jQuery 객체를 생성해야 하기 때문.
  // $letters.on('mouseenter', function(){
  //   $(this).css('background','#ff0');
  // });

  // 불필요한 처리를 하지 않는 코드
  // 코드리뷰 => 리팩토링

  $letters.on('mouseenter', { '$l' : $letters }, function(e){
    console.log(e.data.$l.eq(0));
  });
  // 인덱스를 알아야 각각의 요소를 확인할 수 있다. => 반복문
  // 제이쿼리 내부의 $(this)는 돔 객체를 가리킨다.

  $letters.each(function(index, item){
    var $this = $(this);
    // var $this = $letters.eq(index);
    // $this.on('mouseenter', letterOvers);
    $this.on('mouseenter', $.proxy(letterOvers, $this));

    // $this.on('mouseenter', function(){
    //   $this.css('color', '#74D177');
    // });
  });  
  // on 이벤트의 콜백함수는 마우스가 진입했을 때 실행되고, 그때 $this를 받아오는 것일텐데?
  // var $this를 어떻게 기억하지?

  function letterOvers() {
    console.log('this:', this);
    this.css('color', '#52c88c');
  }


}(this, this.jQuery));
