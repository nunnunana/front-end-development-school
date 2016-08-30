###### eatdesignlove's Front-End Development Study

# Day52

## 잊지말기
- Angular는 데이터 중심 
- 웹컴포넌트가 표준으로 들어왔을 때의 변화를 준비해야 한다.
- service객체에 접근할 수 있는 것은 controller뿐이다.
- 

## 표현식과 디렉티브

더 다양한 경우에 사용할 수 있는 이유로 표현식이 더 많이 사용된다.

```html
<!-- 표현식 : 일부 자바스크립트 사용 가능-->
<h1>eatdesignlove {{ 'yamoo'+ [9,2,1].join('/') }}</h1>
<!-- 디렉티브 -->
<p data-ng-bind="'yamoo'+ [9,2,1].join('/')"></p>
```


## data-ng-cloak

느린 네트워크 환경에서 컬리 브레이스가 보이거나 특정 컨텐츠가 번쩍이는 현상이 나타날 수 있는데, 이를 방지할 수 있는 지시자.


## data-ng-src (Lazy Loading)

data-ng-src를 사용하면, 접근성이 저해된다. 브라우저가 해석할 때 src 내의 expression을 제대로 해석하지 못해 파일을 찾을 수 없다는 에러 메시지르 띄운다. angular를 활용하여 data-ng-src를 사용하면 파일을 lazy loading처리하여 에러를 띄우지 않고 작동하게 된다.

```html
<ul data-ng-repeat="person in people">
  <li>{{person.name}}</li>
  <li>{{person.age}}</li>
  <li>{{person.mail}}</li>
  <li><img src="{{person.picture}}" alt="{{person.name}}"></li>
</ul>
```


```html
<ul data-ng-repeat="person in people">
  <li>{{person.name}}</li>
  <li>{{person.age}}</li>
  <li>{{person.mail}}</li>
  <li><img data-ng-src="{{person.picture}}" alt="{{person.name}}"></li>
</ul>
```


## filter: search

아래 코드에서 input창에 넣는 값을 `ng-repeat`가 필터링하여 간단히 보여줄 수 있다.

```html
<input type="search" data-ng-model="search">

<ul data-ng-repeat="person in people | filter: search | orderBy: 'age': order_reverse">
  <!-- <li>{{person.name}}</li> -->
  <li>{{person.name | uppercase }}</li>
  <li>{{person.age}}</li>
  <li>{{person.birthday | date:'yyyy년 MM월 dd일'}}</li>
  <li>{{person.mail | lowercase}}</li>
  <li>{{person['has-money'] |  currency: 'EURO ' :0}} 원</li>
  <li>{{person['has-money'] | number:0}} 원</li>
  <li><img data-ng-src="{{person.picture}}" alt="{{person.name}}"></li>
</ul>
```

## MVC + MVVM

service객체로 부터 받은 데이터를 controller가 전달 받고, $scope에게 알려준다. 그럼 $scope가 view에 변경사항을 반영한다.


