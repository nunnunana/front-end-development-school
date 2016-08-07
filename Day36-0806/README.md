###### eatdesignlove's Front-End Development

# Day36

## DOM Lv0

- elements[]
- all / layers

```js
// 사라져야할 코드 
if (document.all) {
  //IE
  console.log('IE 웹 브라우저가 확실합니다.')
} else {
  //NN  
  console.log('NN 웹 브라우저가 확실합니다.')
}
```

## DOM Lv1 (1998)

W3C는 넷스케이프, 마이크로소프트와 함께 표준화 시작

- document.documentElement //<html>
- document.getElemensByTagName()
- document.getElemenById()

```js
var head = document.head;
var body = document.body;
var root_element = document.documentElement; //구버전 IE 비표준 모드에서 <body>를 가리킴
console.log(root_element); //<html>

```

## DOM Lv2 (2000)

DOM Event Model을 최초로 제시

------

## DOM Lv3

------

## DOM Lv4 (현재 2016년)

- 커스텀 이벤트를 만들 수 있게 되다.
- querySelector()

------

## 용어 정리

### DOM Property

- 객체가 변수를 소유했을 때, 그것이 곧 프로퍼티가 된다.
- 객체가 함수를 소유했을 때, 그것이 곧 메소드가 된다.


### 노드 인터페이스

- document 는 BOM 모델 객체 중 하나.
- 작성된 코드에 공백이 있다면, firstChild 프로퍼티를 불렀을 때 빈 텍스트를 찾는다.
- 이 방법은 문제점은 문서 구조가 바뀌면 탐색 방식역시 바뀔 수 있기 때문에, 탐색하기 위한 편리한 방법이 과거에는 id를 설정하여 사용했다.
- IE8 이하?

```console
document.body.firstChild
//#text
document.body.firstChild.nextSibling
//<p>​…​</p>​
```

## 참고자료
- DOM은 xml DOM, HTML DOM으로 나누어져 있다.
- 저 페이지 어떻게 가지? w3c doc인가?
- 이제 자바스크립트에서 커스텀 이벤트를 만들 수 있다. (Promise Pattern)
- 자바스크립트의 요소 접근방식 : 대괄호 표기법/인댁스
- `alt` 누르고 개발자 도구 사용하면, 접혀있는 트리가 모두 열린다.
- 오늘날, name 속성을 쓰는 것은 form 요소.(데이터의 전송 문제)
- [바닐라js 운동]()
- xml
- mdn 번역 번역 번역! 기여하기
- [JSON (Javascript Object Notatio)](http://www.json.org/json-ko.html)

## Todo
- [ ] [다음 네이밍 가이드 읽기](http://darum.daum.net/)
- [ ] zoom 속성? 무엇이고 언제 주로쓰는지 이해하기 
- [ ] transpiler가 무엇인지, 종류가 무엇인지. (바벨) / postCSS
- [ ] 관계도에 따라 node 탐색해보기
