###### eatdesignlove's Front-End Development Study

# Day51

## 잊지말기
- angular의 모든 것은 모듈로 이루어져 있다.
- 라우트는 주소와 관련, 
- MVVM + MVC

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

### data-ng-app
- angular사용시 표준을 지킬 수 있도록 해야한다.
- [커스텀 속성 관련 참고 자료](http://www.w3schools.com/tags/att_global_data.asp)

```html
<!-- 비표준 커스텀 속성 -->
<html lang="ko-KR" ng-app>

<!-- 표준 커스텀 속성 -->
<html lang="ko-KR" data-ng-app>
```

- data-ng-init
- data-ng-model
- data-ng-bind

### Two-way Binding

### factory, service
- Ajax를 구현하기 위해 만들었던 부분이 service부분과 같다.
- 싱글톤 객체
- RESTful 서비스
- Controller사이 데이터 공유에 사용

>싱글톤 객체란 하나만 존재하는 객체. (dataManager)

### Controller
- view를 제어하는 두뇌역할
- view와 상호작용하는 $scope와 연결

### View
- HTML/CSS를 포함
- 컨트롤러에 연결된 $scope 객체를 통해 연결된 데이터를 처리
- 디렉티브를 사용해 HTML을 확장

## Route
- 연결 주소에 컨트롤러와 뷰를 각각 연결
- 라우트 파라미터를 포함시킬 수 있음
- 라우트는 #를 보고 

## Angular Big Picture.
- Module
- Config
- Route
- directive < **view** - **$scope** - **controller** > factory


## 드는생각
- 동영상 배경있는 사이트인 경우, 동영상 최적화는 어떻게 하는지? 인코딩하면 화질이 너무 떨어지는 경우가 많던데, 스트리밍 방식으로 배경화면을 가져오는 방법도 있을 것 같은데.
- 왜 데이터를 받고, 보내는 과정을 service에서 처리했느냐면 **$http 객체**가 있음. 때문에 ajax처리를 service 안에 있다.


## Todo
- [x] 랜덤유저 한글판(네이밍) 만들기 (노드서버는 태선형님 지원);
- [x] **jQuery 핼퍼 객체** 만드는 연습
- [x] **Tab-UI Plugin** 만드는 연습
- [ ] **todolist + localstorage** 기능 추가 (이벤트 위임 처리)
- [ ] **Infinity Scroll** 완성 (onprogress) -> 추후 Plugin
- [x] dataManager 핼퍼 객체가 어떻게 더 편리해지는지 잘 와닿지 않는데, 핼퍼 객체를 이용해서 무언가를 만들어보기
- [ ] projectKit 살펴보고 도입할 방법 고민해보기
- [ ] gulp, webpack 설치하고 사용해보기
- [x] angular keynote.
