###### eatdesignlove's Front-End-Development Study

# Day 0726

## Sass 계속

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
$family: unquote("Droid+Sans"); 감싸는 이유가 뭐라고?
```

@import로 css를 불러올 수 있음. 이때 확장자를 명시해야 한다.

변수를 불러오는 config 파일이 존재한다.
Default Flag를 만든다는 것.
용


####@import Snippet for sublime
```xml
<snippet>
  <content><![CDATA[@import $0 ]]></content>
  <tabTrigger>import</tabTrigger>
  <scope>source.sass, source.scss</scope>
</snippet>
```

## Inspired.
- [Sass Reference](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [Bourbon.io/docs](http://bourbon.io/docs/)
- 타인의 코드를 보고, 왜 그렇게 짰나요?
- 깜지의 중요성
- 스스로 생각을 가지고, 서비스를 구축할 수 있는 능력
- 보랏빛 소가 되라. (사람들이 시도하지 않는 포폴을 만들라.)


## ToDo
- sass keynote요청
- 오늘 배운 항목, Sass 레퍼런스 읽기
[v] @import 스니펫 만들기 
- bourbon, compass 다운 받아서 구조살펴보기(제작편)


jqeury는 define으로 의존성 모듈을 관리한다. :require.js를 사용한 것
