###### eatdesignlove's Front-End Development

# Day38

## 잊지 말기
- 자바스크립트 세상에서 객체가 아닌 것, undefined, null.
- document.firstChild 는 DTD.
- 문서 객체의 이벤트 속성(ex. onclick)에 초기 설정되어 있는 값은 null
- geolocation, validation은 DOM API가 아니다.
- 항상 브라우저단에서 확인해보는 것이 가장 중요하다.
- 함수 내부에서만 지역 변수가 만들어 진다.
- `$0` console창에서만 쓸 수 있는 키워드.
- 자주 사용되는, 자주 사용될만한 것은 반드시 함수화를 고민하기.
- 유사배열이란, 배열과 같아 보이지만 실제 배열은 아닌 것. 노드 리스트를 대상으로 `.shift()`를 수행했을 때 에러가 남으로 실제 배열이 아니라 유사배열이라는 것을 증명할 수 있다.
- aria-label 을 이용하여 목적을 명시적으로 표시할 수 있다. 
- null === "object"는 버그


## undefined, null이 객체가 아닌 이유.
- 크롬 properties
- Object 생성자/함수
- `.toString()` 을 가지고 있다는 것은 object의 능력을 상속받았음을 의미한다.

- Number, String, Boolean, Array, Function, Object, Math, Date ..
- 나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)
- `!!'날이더워요.'.toString`의 결과, - true
- `!!`을 붙이면 Boolean값으로 변환된다.
- `!!(2016).toString` - true
- `!!(function(){}).toString` - true


## Console 값에 스타일링 하기

구글 크롬의 경우, 콘솔의 텍스트 내에 `%c`키워드와 css스타일을 통해서 콘솔 창의 영역을 꾸미기가 가능하다.

```console
console.log('%c 내용을 입력하고 나서, 뒤쪽에 스타일을 작성한다', 'background: #000; color: #fff');
```

## About Traversing DOM Core API

### childNodes vs children
- childNodes가 모든 자식 요소들을 가지고 오는 것에 반해, 모든 **요소 노드**를 가지고 온다.
- children은 크로스브라우징이 된다.
- *Note: The children property is fully supported in IE6 to IE8. However, in these versions, it returns element nodes AND comment nodes. IE9+ returns only element nodes.


### parentElementNode vs parentNode
- HTML단에서 parentNode 와 parentElementNode는 동일하게 요소노드만 반환한다.



### nodeType
- ELEMENT_NODE    = 1
- ATTRIBUTE_NODE  = 2
- TEXT_NODE       = 3
- COMMENT_NODE    = 8



### nodeName
- 요소노드의 노드네임은 대문자로 반환된다. `toLowerCase()` 메서드로 소문자로 전환이 가능하다.
- 텍스트노드의 노드네임은 항상 `#text`를 반환한다.



### textNode vs nodeValue ?
- nodeValue는 textNode를 통해서 접근가능하다.
- Comment의 textNode는 주석 내용만 해당된다.
- ELEMENT_NODE의 경우는 null 반환



### 그 외 (IE8 이하 미지원)
- firstElementChild
- lastElementChild 
- nextElementSibling
- previousElementSibling



## DOM HTML API

아래의 방법은 과거의 방식으로, 새롭게 등장한 속성들에 접근할 수 없다.
- id
- className
- title


대신 `getAttribute()`속성으로 접근가능하다.
- el.getAttribute('role')
- el.getAttribute('data-container')
- el.getAttribute('aria-hidden')



### hasChildNodes()
- hasChildNodes()는 빈 공백 또한 자식 노드로 읽기 때문에 공백이 없을 때만 사용가능하다.
- 반복문을 매번 탐색을 하지 않게, 변수에 담아 활용할 수 있도록 한다.
- Boolean을 반환한다.

```js
var parent_children = parent_el.getElementsByTagName('div');

for (var i = 0; i < parent_children.length; i++ ) {
  if ( !parent_children[i].hasChildNodes() ) {
    console.log( 'children[' + i + '] 은 자식이 없는 요소입니다.' );
  }
}
```

## DOM Method


### 과거, 현재 주로 이용되던 방법

- document.links // HTMLCollection - Legacy DOM
- .getElementById() // 경우에 따라 메서드 없이 바로 아이디 명을 작성하여 접근가능하기도 하지만, 지양해야될 방식
- .getElementsByTagName()
- .getElementsByClassName() // IE 9+



### CSS선택자를 통해 문서 객체를 선택하는 방법
- IE 8+ 지원
- .querySelector('#id .class') === .querySelectorAll('css selector')[0]
- .querySelectorAll('#id .class')



### 생성
- createElementNode(요소이름)
- createTextNode()



### 조작
- appendChild(node)
- insertBefore(insert, target)
- removeChild(node)
- replaceChild(akternate, target)
- cloneNode(boolean)
- innerHTML


## 반복 구문
- do ~ while문
- for ~ in문
- forEach문


## 조건 구문
- if문
- switch case default break
- 3항식


## 참고자료
- http://demo.yamoo9.net/aria-tabs/

## ToDo
- [ ] todolist 오늘 배운 것을 이용해서 만들기 (aria 적용)
- [ ] DOM Lv에 따라서 특정브라우저에서 지원되고 안되고가 아니네? 오늘 다룬 내용이 lv몇인지 확인하기
- [ ] sketch, zeplin 사용법 익히기
- [ ] 반응형 디자인 퀄리티 높이기
- [ ] 자기 전에 FDS/References 읽기
