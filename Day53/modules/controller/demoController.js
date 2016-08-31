(function(global, angular){
  'use strict';

  function demoCtrl() {
      var headline = 'this App maked Angular';
      this.headline = headline;
  };

  angular.module('ngApp').controller('demoController', demoCtrl);
}(this, this.angular));
