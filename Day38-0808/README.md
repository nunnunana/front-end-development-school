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

## About DOM API

#### childNodes vs children
childNodes가 모든 자식 요소들을 가지고 오는 것에 반해, 모든 **요소 노드**를 가지고 온다.



#### parentElementNode vs parentNode
HTML단에서 parentNode 와 parentElementNode는 동일하게 요소노드만 반환한다.



#### nodeType
- ELEMENT_NODE = 1
- TEXT_NODE = 3
- COMMENT_NODE = 8



#### nodeName
- 요소노드의 노드네임은 대문자로 반환된다. `toLowerCase()` 메서드로 소문자로 전환이 가능하다.
- 텍스트노드의 노드네임은 항상 `#text`를 반환한다.



#### textNode vs nodeValue ?
- nodeValue는 textNode를 통해서 접근가능하다.
- Comment의 textNode는 주석 내용만 해당된다.
- ELEMENT_NODE의 경우는 null 반환



#### 더 나은 방법들
- firstElementChild
- lastElementChild 
(IE8 이하 미지원)


#### 

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
- [ ] 자기 전에 FDS/References 읽기
- [ ] 
