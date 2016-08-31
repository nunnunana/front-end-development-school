(function(global, angular, jq){
  'use strict';

  function oCtrl(){
      var that = this;

      this.init_value = null;
      this.trigger = trigger;
      
      function trigger(){
        console.log(this);
        if (jq.type(this.init_value) === 'null' ) {
          this.init_value = 'otherController';
        } else {
          this.init_value = 'not initializaton';
        }  
      }
  }

  angular.module('ngApp').controller('otherCtrl', oCtrl);
}(this, this.angular, this.jQuery));
