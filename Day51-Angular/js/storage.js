/* Storage.js @eatdeisnglove 2016 */

(function(global, storage, $){
  'use strict';
  
  // 투트 요소인 html 을 찾조하는 jQuery객체 생성
  var $html = $('html');

  // 사용자의 웹 브라우저가 localStorage를 지원하는가?
  if (storage) {
    $html.addClass('localstorage');
  } else {
    $html.addClass('no-localstorage');
  }

  // 지원이 안된다면 사용자아게 웹브라우저 업데이트 권고
  if ( $html.hasClass('no-localstorage') ) {
    console.info('로컬 스토리지가 지원되는 최신 브라우저로 업데이트 하세요.')
    return; 
  };

  // 사용자의 웹 브라우저에 데이터를 저장/가져오기/지우기 등을 수행할 수 있다.

  // 데이터 가져오기
  var eatdesignlove = storage.getItem('eatdesignlove');
  eatdesignlove ? console.log('eatdesignlove 값:', JSON.parse(eatdesignlove)) : console.log('eatdesignlove는 존재하지 않습니다.')  

  // 데이터 저장하기
  if ( !eatdesignlove ) {
    storage.setItem('eatdesignlove','Front-end Develop School');
  }

  // 데이터 지우기
  if ( eatdesignlove )  {
    storage.removeItem('eatdesignlove');
  }

  // 데이터 모두 지우기
  // key 데이터가 1개 이상 존재한다면 모든 데이터를 제거하라
  storage.length > 0 && storage.clear();

  // Javascript Object -> JSON String -> JavaScript Object;
  // Modal Date
  var eatdesignlove = {
    'name':'정식',
    'job':'개발자',
    'age':'28',
    'gender':'female',
    'email':'soojin@gmail.com',
    'favorites': ['자동차', '여행', '공부']
  };
  
  // console.log(JSON.stringify(eatdesignlove))
  var str_eatdesignlove = JSON.stringify(eatdesignlove);
  
  // 로컬 스토리지에 eatdesignlove 저장
  storage.setItem('eatdesignlove', str_eatdesignlove);

  // 전역에 공개
  global.eatdesignlove = eatdesignlove;


  // Mission => [핼퍼 객체 만들기]
  // 가공된 형태의 사용자 정의 객체
  // 여러분이 정의할 사용자 정의 객체는 로컬스토리지 제어에 유용한 메서드를 포함
  // 데이터 가져오기 / 저장하기 / 지우기 / 모두 지우기

  function getData(name) {

  }
  function setData(name, data) {
    if ( !name ) {
      if ( typeof data === 'string' ) {
        data = data.toString();
      } else if ( typeof data === 'object' ) {
        data = JSON.stringifY(data);
      }
      storage.setItem(name, data);
    }
    console.log(name, data);

  }
  function removeData() {}
  function removeAll() {}

  global.setData = setData;

}(this, this.localStorage, this.jQuery));
