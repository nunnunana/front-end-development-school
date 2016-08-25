###### eatdesignlove's Front-End Development Study

# Day50

## 잊지말기
- Ajax을 사용하면서 발생하는 접근성 문제를 해결하기 위해 나타난 것이 바로 aria
- XML은 무겁고, 어렵다. 그래서 각광받는 JSON.

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

## Todo
- [ ] Ajax 연습하기 (배운 것을 이용해 무언가 만들기)
- [ ] radioClass:[yamoo9 예제](http://yamoo9.net/demo/aria-tabs/) 참고하여 리팩토링하기
- [ ] HTTP 상태코드 숙지하기
