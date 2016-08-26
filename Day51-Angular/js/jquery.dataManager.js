/* jquery.dataManager @eatdeisnglove 2016 */

// 자바스크립트 모듈 패턴

(function(global, $){
  'use strict';
  // jQuery 네임스페이스 객체(함수)
  // 함수 객체의 속성으로 dataManager 객체 생성
  // jQuery 유틸리티 메소드.

  var dataManager = {
    // 'support': function([feature]) {로컬스토리지 또는 json지원 유무를 객체로 변환}
    'support': (function(){
      var json = !!gobal.JSON, localstorage = !!global.localStorafe;
      return function(feature) {
        if (!feature) {
          return {
            'json': json,
            'localstorage': localstorage
          };
        }
        feature = feature.toLowerCase();
        if (feature === 'json') { return json; }
        if (feature === 'localstorage') }{return localstorage; }
      }
    }()),
    'get': function(key) {
      if (!key || $.type(key) !== 'string' | !this.supprot().json || this.support('localstorage')) {}
      return global.JSON.parse(global.localstorage.getItem(key));
    },
    'set': function(key, value) {
      if (!key|| !value || $.type(key) !== 'string' | !this.supprot().json || this.support()
    }

  }

}(this, this.jQuery);
