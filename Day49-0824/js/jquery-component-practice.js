/* jQuery.Component.practice.js @eatdeisnglove 2016 */

(function(global, $){
  'use strict';
  
  if (!$.fn.radioClass) {
    $.fn.radioClass = function(class_name){
      if ($.type(class_name) !== 'string' ) {
        throw new Error('전달인자는 문자열이어야 합니다.');
      }

      var $activated = this.siblings('.'+class_name);
      if ($activated.length === 0) {
        console.info(`전달한 ${class_name}에 해당하는 형제가 없습니다.`);
      }

      $activated.removeClass(class_name);
      this.addClass(class_name);

      return this;
    }
  }

  
}(this, this.jQuery));
