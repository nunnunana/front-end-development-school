###### eatdesignlove's Front-End Development Study

# Day50

## 잊지말기
- Ajax을 사용하면서 발생하는 접근성 문제를 해결하기 위해 나타난 것이 바로 aria
- XML은 무겁고, 어렵다. 그래서 각광받는 JSON.
- JavaScript에는 JSON 객체가 존재한다.
- 내장객체를 사용할 때,  prototype 을 통해 가지고 있는 능력을 확인하자

## Ajax (Asynchronouse Javascript And XML)
- XMLHttpResquest 생성자 객체를 통해서 만들어진 인스턴스 객체를 통해서 활용할 수 있다.
- [MDN 관련 문서](https://developer.mozilla.org/ko/docs/XMLHttpRequest)


```js
var req = new XMLHttpRequest();
req.open('GET', 'http://www.mozilla.org/', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200)
      dump(req.responseText);
     else
      dump("Error loading page\n");
  }
};
req.send(null);

```


```
State  Description

0      The request is not initialized
1      The request has been set up
2      The request has been sent
3      The request is in process
4      The request is complete
```

>[What do the different readystates in XMLHttpRequest](http://stackoverflow.com/questions/632774/what-do-the-different-readystates-in-xmlhttprequest-mean-and-how-can-i-use-them)

## http-server 구동

```console
  http-server -o -a localhost -p 8081

```

>[http-server](https://www.npmjs.com/package/http-server) 관련 문서


## XHR 핼퍼함수

```js
// XHR객체를 만드는 핼퍼 함수 
function createXHR(){
  return new XMLHttpRequest();
}

```

## length - 1 하지 않고 처리하는 방법

```js
  for (var i= --nav_links.length; nav_links[i]; i--) {
    nav_links[i].onclick = viewUpdate;
  }  
```

## onreadystatechange

## jQuery AJAX
- $.ajax
- $.get();
- $.post();
- $.getJSON();
- $.getScript();

```js
// Javascript Promise 개념 사용
// ECMAScript 2015 Promise 기본 지원

// jQuery AJAX 단축 유틸리티 메소드
$.getJSON('http://api.randomuser.me/?results=5')
  .then(function(data, status, XHR){
    console.log(data.results);
  })

// jquery AJAX Low-Level Interface 메소드
$.ajax({
  'url':'http://api.randomuser.me/?results=5',
  'dataType':'json',
  'success': function(data, status, XHR){
    console.log(data.results)
  }
});
```


## AngularJS
- SPA : Single Page Application
- Angular팀이 제공하는 예제는 비표준인 것이 많으니 주의
-



## Q
- [SPA의 경우, 검색엔진 최적화는 어떻게 할 수 있는지 궁금.](http://funnygangstar.tistory.com/entry/%EC%8B%B1%EA%B8%80-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%EC%97%90%EC%84%9C%EC%9D%98-%EA%B2%80%EC%83%89-%EC%97%94%EC%A7%84-%EC%B5%9C%EC%A0%81%ED%99%94-SEO)
- services 데이터와 관련된 getter, setter를 설정하곤 했는데 그 이유가 뭘까? 


## Todo
- [x] Ajax 연습하기 (배운 것을 이용해 무언가 만들기[Tab-ui](https://github.com/yamoo9/NIA_A11y_UI_Components/tree/01-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%A0%9C%EC%9E%91-%EC%A4%80%EB%B9%84/UI/Tabs))
- [x] Ajax 무한스크롤 페이지 만들기 (질문거리)
- [ ] radioClass:[yamoo9 예제](http://yamoo9.net/demo/aria-tabs/) 참고하여 리팩토링하기
- [ ] 우회메소드 이해하기[.bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [ ] [HTTP 상태코드](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C) 주요 코드 숙지하기
- [ ]  Keynote 보고, 배운 내용 정리하기
- [ ] [DOM을 깨우치다.](http://www.javascriptenlightenment.com/JavaScript_Enlightenment.pdf)
