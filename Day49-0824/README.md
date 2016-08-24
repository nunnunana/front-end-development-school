###### eatdesignlove's Front-End Development Study

# Day49

## 잊지말기

- arguments를 활용하면 어떤 인자를 넣어야 할지를 알 수 있다.
- filter(수집된 내용 중 걸러낸다.) vs find(수집된 내용 안에 있는 요소를 찾아온다.)


## .filter() vs .find()

```js
$('li').filter(':last') //**li 중에서** 마지막 요소를 반환한다.
$('li').find(':last') //**li의 자손들 중** 마지막 요소를 반환한다.
```

## .addBack() vs .end() 차이

## prop() vs attr()
- `.attr()`의 경우, 마크업에서 이미 작성되어 있는 것들을 가져올 수 있다.
- `.prop()`을 이용하면, 마크업에 작성되지 않고, 사용자들에 입력된 내용까지 받아올 수 있다. 예를 들면 input에서의 value와 같은 값. (**폼 유효성 검사** 등에 유용하게 활용할 수 있다.)


## .before()

```js

  // A.insertBefore(B)
  // A -> B
  // A.after(B)
  // A -> B

  // A.before(B)
  // A.after(B)

  // A.insertBefore(B)
  // A.insertAfter(B)

```


```js
  var $h2 = $('<h2 id="demo-test-h2">demo heading 2</h2>');
  var h3  = document.createElement('h3');
  var h3_text = document.createTextNode('New content - heading 3');
  var gnb = document.querySelector('.gnb');
  var $ol = $('ol');

  $ol.prependTo('body');

  window.setTimeout(function(){
    $('ol').before( gnb, [h3, #h2]); 
  }, 3000);

```

>**고민해보기** before의 인자가 2개로 나누어진 이유가 무엇일까?


## Insert! wrap
- .wrap
- .wrapAll() 모든 것을 묶어서 래핑한다.
- .unwrap() 해당요소를 래핑한 요소를 없앤다. 
- .innerWrap


## Todo
- [ ] Counter.js 완성하기
- [ ] jQuery Plugin 만들기 복습
- [ ] jQuery 메소드 키노트 살펴보기
