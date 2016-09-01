(function(global, angular){
  'use strict';

  var app = angular.module('fdsApp',[]);

  app.controller('fdsMemberListController', ['$http', function($http){
    console.log('$http:', $http);

    // 컨트롤 객체 참조 변수 설정
    var ctrl = this;
    // 참조된 컨트롤 객체의 속성 members 설정 (초기 값)
    ctrl.members = [];


    $http({
      'method': 'GET',
      'url': '/db/fds.json'
    }).then(successAjax, errorAjax);
  
    function successAjax(response){
      console.log(response);
      ctrl.members = response.data.results
    }

    function errorAjax(response){
      console.log('error!')
    }

  }]);

  // function fdsMemberListController($scope, $http) {
  // }

  // fdsMemberListController.$injector = ['$scope', '$http'];

  // app.controller('fdsMemberListController2', fdsMemberListController);

}(this, this.angular));
