/* radioClass.js @eatdeisnglove 2016 */

(function(global, $){
  'use strict';
  
  if (!$.fn.radioClass) {
    $.fn.radioClass = function(class_name){
      if ($.type(class_name) !== 'string' ) {
        throw new Error('전달인자는 문자열이어야 합니다.');
      }

      // this === jQuery 플러그인이 연결된 객체
      // 사용자가 클릭한 <a>요소의 부모 <li> 요소
      // console.log(this);
      
      // 현재 활성화 되어있는 <li>를 찾는다.
      var $activated = this.siblings('.'+class_name);
      if ($activated.length === 0) {
        console.info(`전달한 ${class_name}에 해당하는 형제가 없습니다.`);
      }
      // 클래스를 제거하고 받아온다.
      $activated.removeClass(class_name);
      this.addClass(class_name);
    
      // jQuery 인스턴스 메소드 체이닝
      return this;
    }
  }
}(this,this.jQuery));
