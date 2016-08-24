###### eatdesignlove's Front-End Development Study

# Day49

## 잊지말기

- arguments를 활용하면 어떤 인자를 넣어야 할지를 알 수 있다.
- filter(수집된 내용 중 걸러낸다.) vs find(수집된 내용 안에 있는 요소를 찾아온다.)
- 인스턴스 메소드의 확장 vs 유틸리티 메소드의 확장

## 인스턴스 메서드 vs 유틸리티 메서드

- 인스턴스 메서드 : 
- 유틸리티 메서드 : 


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

## Toggle

- 이벤트 바인딩 시에 이벤트 객체에 사용자가 정의한 객체를 합성 [객체 합성] 
- 외부에 변수를 만들지 않고, 이벤트 객체를 통해 조건 처리하는 토글 구문

```js
$target.on('click', {'clicked':false}, function(ev){
  var clicked = ev.data.clicke;
  if (!clicked) {
    console.log('toggle1');
  } else {
    console.log('toggle2');
  }
  ev.data.clicked = !ev.data.clicked;
})
```

## return this
- `return this`는  메서드 체이닝의 원리

```js
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
```

## 더 효율적인 코드를 위한 접근

- jQuery를 사용할 때, 객체가 반복적으로 생성되지 않도록 신경쓴다면 더 효율적인 코드로 접근할 수 있다.
- [Memory Plugin](https://github.com/yamoo9/FDS/blob/master/Lecture/DAY40/plugins/memory/jquery.memory.js)을 통해서 가능.


```js
if (!$.memory) {
$.memory = function(dom_el) {
  if ( dom_el.nodeType !== 1 ) {
    throw new Error('DOM 객체를 전달해야 합니다.');
    }
    // 전달 받은 dom_el는 $this라고 하는 데이터가 메모리 되어 있는가?
    if ( !$.data(dom_el, '$this') ) {
      $.data(dom_el, '$this', $(dom_el));
    }
    return $.data(dom_el, '$this');
  };
  // 별칭
  $.$ = $.memory;
}

```


## Todo
- [ ] Counter.js 완성하기
- [ ] jQuery Plugin 만들기 복습(radioClass)
- [ ] jQuery 메소드 키노트 살펴보기
