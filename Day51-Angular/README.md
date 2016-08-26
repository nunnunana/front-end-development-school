###### eatdesignlove's Front-End Development Study

# Day51

## 잊지말기
- 

## Localstorage
- HTML5에 추가된 가능으로 사용자의 웹 브라우저에 데이터를 저장하는 방법
- [Localstorage 참고자료](http://m.mkexdev.net/111)

```
localStorage.getItem();
localStorage.setItem();
localStorage.removeItem();
localStorage.clear();
localStorage.key();
```

## bower

- Bower로 프레임워크 또는 라이브러리 설치시 bower의 기본설치 경로는 bower-component인데, 아래와 같은 방법으로 커스터마이징을 통해서 원하는 폴더명으로 지정해 줄 수 있다.
- [Bower Documents](https://bower.io/docs/config/)

```console.
sublime ~/.bowerrc
```

```json
{
    "directory":"lib" //원하는 경로이름
}
```

## Angular

### 초기셋팅 작업

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script>
window.angular || document.write('<script src="framework/angular.min.js"><\/script>');

console.log('Angular 버전:', window.angular.version.full); 
</script>
```

## 드는생각


## Todo
- [ ] 랜덤유저 한글판(네이밍) 만들기 (노드서버는 태선형님 지원);
- [ ] **jQuery 핼퍼 객체** 만드는 연습
- [ ] **Tab-UI Plugin** 만드는 연습
- [ ] **todolist + localstorage** 기능 추가 (이벤트 위임 처리)
- [ ] **Infinity Scroll** 완성 (onprogress) -> 추후 Plugin
- [ ] dataManager 핼퍼 객체가 어떻게 더 편리해지는지 잘 와닿지 않는데, 핼퍼 객체를 이용해서 무언가를 만들어보기
