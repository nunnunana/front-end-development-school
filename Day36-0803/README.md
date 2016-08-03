###### eatdesignlove's Front-End-Development Study

# JavaScript

## DOM (Document Object Model)

### Dom Legacy (Lv.0)
#### DOM Lv 0 (1994)

초기 모델이기때문에 크로스브라우징이 됨, 하이퍼링크/이미지/폼필드 요소에 국한

- Anchors
- Links
- Images
- Form

#### DOM Lv 1
#### DOM Lv 2 
#### DOM Lv 3 
#### DOM Lv 4 

### 자바스크립트를 이용해 DOM을 제어한다.

자바스크립트는 문서객체모델을 핸들링할 수 있는 클라이언트 사이드 언어다.

DOM을 이용해 탐색하고, 접근하고, 제어한다.

- Document  //문서
- Object    //문서의 요소
- Model     //관계도

### 문서는 모두 노드로 이루어져있다.

```
루트노드(HTML)  //노드트리의 시작
노드           //연결망의 특정 지점

- document.body.nodeType
- document.ELEMENT_NODE
- document.COMMENT_NODE
```

##### 노드의 종류
- 요소노드(1) - document.ELEMENT_NODE
- 속성노드(2) - document.ATTRIBUTE_NODE
- 텍스트노드(3) - document.TEXT_NODE

##### Event, Event Handler

DOM의 Event 속성의 초기상태는 비어있다.

id를 쓴 이유는 전체그룹을 쉽게 찾기 위해서

this는 함수의 context를 가리킨다. context는 함수를 **누가 실행시켰나.**

Javascript는 오른쪽부터 연산한다.

[DOM Event](http://www.w3schools.com/jsref/dom_obj_event.asp)

## Todo
- [ ] flexbox 연습
- [ ] button-group 만들어서, 배경색상 변화 주기
- [ ] 폼유효성 검사 만드는 법?
- [ ] 피치를 올리자!
