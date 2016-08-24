/* jquery plugin - UI Component @eatdeisnglove 2016 */

(function(global, $){
  'use strict';

  // 문서에서 .gnb 요소를 선택한 후에 내부에서 li 요소를 찾는다.
  var $gnb = $('.gnb');
  var $gnb_list = $gnb.find('li');

  // --------------------
  // .eq(index) 
  // --------------------
  var $gnb_list_1st = $gnb_list.eq(0);
  var $gnb_list_2st = $gnb_list.eq(1);
  var $gnb_list_last = $gnb_list.eq(-1);

  // console.log($gnb_list_1st);
  // console.log($gnb_list_2st);
  // console.log($gnb_list_last);


  // --------------------
  // .not( selector | element | function | selection(jQuey Object) ) 
  // --------------------
  // $gnb_list.not('[class]').addClass('have-not-class-attribute');

  // function
  // $gnb_list.not(function(index, element){
  //   // console.log(element);
  //   // 홀수를 제외한 짝수 <li> 필터링
  //   // 검증
  //   // if ( index % 2 === 1 ) {
  //   //   console.log(index);
  //   // }

  //   return   index % 2 === 0;
  // }).addClass('even');

  $gnb_list.not(':even').addClass('even')   //짝수
  $gnb_list.filter(':even').addClass('odd') //홀수

  // --------------------
  // filter( selector | function | element | Selection() ) 
  // --------------------
  // 1. selector
  // $gnb_list
  //   .add('nav, a')
  //   .addClass('navigation-component')
  //   .filter(function(index, element){
  //     var node_name = element.nodeName.toLowerCase();
  //     return node_name === 'a' || node_name === 'nav';
  //   })
  //   .css({
  //     'padding': '1em',
  //     'display': 'inline-block',
  //     'background': '#FFC0BC'
  //   });

  //   console.log(index, element);
  
  // --------------------
  // .is() 
  // --------------------

  // --------------------
  // .each( callback )
  // .each( function(index, element){} )
  // jQuery 객체를 돌려준다. 
  // --------------------

  // $gnb_list.each(function(idx, el){
  //   console.log(el);
  //   var origin_html_code += '<span>' + (idx * idx +1) + '</span>';
  // });

  // --------------------
  // filter 
  // --------------------
  $('li').filter(':last'); //li 중 마지막 요소를 반환한다.
  $('li').find(':last'); //li의 자손들 중 마지막 요소를 반환한다.

  // .find()
  // .next()
  // .prev()
  // .parent()
  // .parents()
  // .children()
  // .prevAll()
  // .prevUntil()
  // .nextAll() 내부에 아무것도 넣지 않으면 결과는 nextUntil와 같다.  
  // .nextUntil()

  // var $gnb_first = $gnb.find(':first');
  // console.log($gnb_first[0]);

  $gnb
    .find('li:first-child a')
    .add('<p>링크 뒤에 나오는 단락</p>')
    // .appendTo('li:first-child', $gnb);


  // $('<div>')
  //   .addClass('custom-division')
  //   .attr({
  //     'id':'hi-seoul',
  //     'title':'hey jude',

  //   })
  //   .text("Hey Division")
  //   .on(click, function(){
  //     console.log(this)
  //   })

  var $h2 = $('<h2 id="demo-test-h2">demo heading 2</h2>');
  var h3  = document.createElement('h3');
  var h3_text = document.createTextNode('New content - heading 3');
  var gnb = document.querySelector('.gnb');
  var $ol = $('ol');

  $ol.prependTo('body');

  window.setTimeout(function(){
    $('ol').before( $h2, [h3, gnb]); 
  }, 3000);

  // 보이는 모양대로 암기
  // A.insertBefore(B)
  // A -> B
  // A.after(B)
  // A -> B

  
  

}(this, this.jQuery));
