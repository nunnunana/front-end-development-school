###### eatdesignlove's Front-End-Development Study

# Day 0726

## Sass 기초 (계속)

### bourbon으로 살펴보는 Sass 관리 구조 

스타일 모듈 관리 Manage Style Modules
각각의 역할을 분리, 필요에 따라 재사용할 수 있도록 모듈 관리
많이 쪼갤 수록 조립하는 형태로 작업이 가능

**module**
- base.sass
- mixins.sass
- normalize.sass

**partials**
>


프로젝트를 모듈화하여 나누는 예)
header
  logo
  search
  banner
@import header

navigation
  gnb
  lnb
  unb
@import navigation

main
  primary
  secondary
  etc
@import main



---

### Sass 복습

#### @import

@import는 해당 파일에 대상 파일을 병합시킨다.

밑줄이 있는 파일은 함께 컴파일되지(아웃품 css에서 보여지지) 않는다. 내부에서만 사용되는 파일에 설정해둘 수 있다.

`_common.sass`

특정 파일에서만 사용하겠다는 가이드 규칙으로 밑줄(_)을 사용할 수 있음.


---

#### 중첩

중첩은 많이 할 수록 선택자가 길어지게 된다.

---

#### 변수

변수는 별도로 분리해서 관리한다.

---


#### 공통모듈의 구현 방식

css에서 주로 속성선택자를 활용하여 작성했던 공통모듈([attribute*="value"])을 Sass에서는 대체선택자(%)를 활용해 작성할 수 있다.

```css
/* 속성선택자를 활용한 col 공통 모듈의 기초적인 구현방식 */
[class*="col-"] 
  float: left
  padding:
    left: 1rem
    right: 1rem
```

```sass
//대체선택자를 활용한 col 공통 모듈의 효율적 구현방식
%col-module
  float: left
  padding:
    left: 1rem
    right: 1rem
```

---

### Sass Function

Sass functions은 별도로 모아서 관리하는 것이 좋다.

```sass
// Sass function
@function percent($target, $content) {
  @return $targe/$content*100%
}


%rwd-media-3-4 {
  @extend %_rwd-media-ratio;
  padding-bottom: percent(3,4)
}
```
---

### Sass @import

@import사용시 scss, sass의 확장자, 밑줄(_)은 생략 가능하다

미디어 타입을 사용가능하다.

```scss
//scss
@import "team-work.scss";
@import "team-work";
@import "_percent";
@import "percent";
```

```scss
$family: unquote("Droid+Sans"); **감싸는 이유가 뭐라고?**
```

@import로 css를 불러올 수 있음. 이때 확장자를 명시해야 한다.

변수를 불러오는 config 파일이 존재한다.
Default Flag를 만든다는 것.
용


#### 네임스페이스 안쪽에 중첩 @import도 사용가능 
[레퍼런스 확인]()

```sass
//example 모듈 파일
.example
  color: red

.box
  margin: 10px auto 20px
  padding: 10px

//example 모듈파일을 불러온다.
#main
  @import example

.demo
  @import _box.sass
  font: 1em Arial,sans-serif

// 다음과 같이 컴파일 된다.
#main .examle
  color: red

.demo {
  font: 1em Arial,sans-serif;
}

.demo .box {
  margin: 10px auto 20px;
  padding: 10px;
}
```

#### @import를 일반적으로 쓰는 것과 중첩으로 쓰는 것의 차이
코드가 생성

중첩으로 썼을 경우, 중첩을 한 부모 선택자 하위의 클래스를 생성


## Sass Script

### Variables ($, !default)
Sass의 변수는 변수 이름 앞에 $ 기호를 붙인다.

------

#### Sass 변수이름 작성 규칙
- 변수 이름 사이에 공백을 사용하지 않는다.
- 변수 이름의 음절 사이에 ` _ , - ` 등을 사용한다. (-,_ 차이에 따른 오류가 발생하지 않지만, 그와 같이 사용하지 않는다. Sass의 Anti Pattern)
- 자바스크립트에서는 하이픈(-) 기호를 쓸 수 없음
- 만약 프로그래밍에 익숙해서 camelCase 방식이 익숙하다면, camelCase 방식의 이름을 사용할 수도 있다. 다만, camelCase표기식은 일반적으로 함수 이름에 사용되기 때문에 권장하지는 않는다.

```
//Sass script의 특징
//하이픈으로 변수 선언
$my-nickname: 'eatdesignlove'
body
  &::before,
  &::after
    content: $my_nickname //밑줄임에도 에러없음

//변수를 전역으로 설정 !global **그럼 어디까지 쓸 수 있는거지?**
#main
  $width: 5em !global
  width: $width

------

#### 글로벌 변수(!global)의 이해
필요한 경우에 따라 사용.

```sass
//아래의 $dark-gray는 전역변수
$dark-gray: #dedede

//아래의 $dark-gray는 .container에 사용되는 지역변수
.container
  $_dark-gray: #dedede

//아래의 $dark-gray는 지역변수를 전역변수화
.container
  $dark-gray: #dedede !global
```

#### RWD, SASS 변수 + MQ활용()
반응형 웹디자인에서 Sass변수와 CSS3 미디어쿼리 조합

.page-footer
  @extend %align-center-margin
  width: 100vh
  @media screen and (min-widht: $bp-md)
    width: 90%
  background: $dark-gray
  color: lighten($dark-gray, 40%)



------

### Sass Functions 
[레퍼런스 확인]()

```sass
  min-height: floor($container-width/2)
  min-height: ceil($container-width/2)
  min-height: round($container-width/2)
  rgba(lignten($dark-gray, 40%), 0.45)
  lighten($dark-gary, 50%)
```



## Inspired.
- [Sass Reference](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [Compass Extension Layout](http://compass-style.org/)
- [Bourbon.io/docs](http://bourbon.io/docs/)
- 타인의 코드를 보고, 왜 그렇게 짰나요?
- 깜지의 중요성
- 스스로 생각을 가지고, 서비스를 구축할 수 있는 능력
- 보랏빛 소가 되라. (사람들이 시도하지 않는 포폴을 만들라. 비주얼x)
- Sass를 제대로 쓴다는 것은, 함수 등의 영역까지 쓸 줄 아는 것.


## About JavaScript
jqeury는 define으로 의존성 모듈을 관리한다. :require.js를 사용한 것

지역에 없으면 거슬러 올라가며 전역으로 거슬러 올라가는 것, 자바스크립트 체이닝


## ToDo
- [ ] RWD의 목표, 방법론 정리하기
- [ ] 중첩 @import, extend 하는 두 가지 방식으로 컴파일 차이점 다시 해보고 정리하기
- [ ] Sass keynote요청
- [ ] bourbon, compass 다운 받아서 구조살펴보기(제작편)
- [ ] 오늘 배운 항목, Sass 레퍼런스 읽기
- [ ] 기존에 분리해 사용하던 모듈들 Sass로 바꿔보기
- [ ] Sass 코딩스타일가이드 읽기(7/26~27)
- [ ] Sass 퀴즈 20문항 만들기 시작(7/26~28)
- [ ] 페이지 ccs 작성 -> Sass 전환 훈련
- [x] @import 스니펫 만들기 


####@import Snippet for sublime
```xml
<snippet>
  <content><![CDATA[@import $0 ]]></content>
  <tabTrigger>import</tabTrigger>
  <scope>source.sass, source.scss</scope>
</snippet>
```

