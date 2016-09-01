###### eatdesignlove's Front-End Development Study

# Day53

## 잊지말기
- 최신버전의 angular에서는 ng-app에 모듈 이름을 넣는다.
- angular의 factory, service는 함수나 객체를 반환한다.
- 결국 가장 중요한 것은 자바스크립트를 이해하고 있는가.
- as 문법 없이는 내부에서 this를 사용할 수 없다.


## Angular 내부에 있는 jQlite

- Angular 내부에는 작은 기능을 갖춘 jQuery가 내장되어 있다. 이를 활용하기 위해서는 요소를 선택하고, angular의 element를 사용해 angular내에서 jQuery를 쓸 수 있다.
- jQuery를 Angular 아래에 불러오게되면 Angular에서 jQuery를 사용할 수 있다.


```js
var template_headline = document.querySelector('.ng-template-headline');
console.log('query:', template_headline); // 결과: 요소만 반환한다.

template_headline = angular.element(template_headline);
console.log('element:', template_headline); // 결과: 배열에 요소를 담아 반환한다.
```


## this는 컨텍스트를 가리킨다.

아래 코드는 otherCtrl에서 trigger()가 실행되면 내부 코드가 동작한다. otherCtrl 내부에 있는 버튼을 통해 trigger를 실행시키면 this는 otherCtrl가 된다. 하지만 마지막 코드처럼 global.setTimeout()을 통해 함수를 실행시킬 경우, this는 window객체가 된다. 때문에 컨트롤러 내부에서 `that`과 같이 this를 변수에 담아 참조하는 방식을 사용하면 컨텍스트가 변경되었을 때 발생할 수 있는 문제를 방지할 수 있다.

```js
angular.module('ngApp').controller('otherCtrl', function(){

// 컨트롤러 참조 변수
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
global.setTimeout(trigger, 3000);
```

## Controller를 작성하는 두 가지 방식


```js
// 함수를 분리
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
```

```js
// 인라인 방식
  angular.module('ngApp').controller('otherCtrl', function (){
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
  });
```

## 코드 압축과정에서 발생하는 문제 이슈

angular코드를 압축하면, 변수명이 바뀌면서 angular는 특정 부분을 압축하지 않도록 처리할 수 있다.

```js
//방법 1. 압축과정에서 주입된 $scope 모듈이름이 변경되는 것을 방지한다.
ngCtrl.$inject = ['$scope'];

//방법2. 
angular.module('ngApp').controller('ngController', ['$scope', ngCtrl]);  

```


## 유용한 정보
- [크롬앱]ng-inspector for AngularJS
- [크롬앱]AngularJS Graph
- YUI Compressor
- ngResource


## ToDo
- [ ] [angular, as문법(v.1.2)](http://haruair.com/blog/3186)
- [ ] gulp 환경 구축하고, 프로젝트에 활용하기 (모던웹사이트 제작 참고)
- [ ] YUI Compressor활용하여 배포용 파일 압축
