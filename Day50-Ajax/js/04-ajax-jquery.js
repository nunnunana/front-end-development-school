(function(global, $){
  'use strict';
  
  // Javascript Promise 개념 사용
  // ECMAScript 2015 Promise 기본 지원

  // jQuery AJAX 단축 유틸리티 메소드
  $.getJSON('http://api.randomuser.me/?results=5')
    .then(function(data, status, XHR){
      console.log(data.results);
    })

  // jquery AJAX Low-Level Interface 메소드
  $.ajax({
    'url':'http://api.randomuser.me/?results=5',
    'dataType':'json',
    'success': function(data, status, XHR){
      console.log(data.results)
    }
  });


}(this, this.jQuery));
