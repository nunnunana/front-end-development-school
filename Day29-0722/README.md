# Day29

## SASS (Syntactically Awesome Style Sheets)
sass는 css3를 보다 멋지게 활용할 수 있도록 도와주는 도구다.
중첩/변수/믹스인/**선택자 상속** 등 주요 기능.

### 기본 개념

### CSS Preprocessor
웹 브라우저는 프로세서로서, 브라우저가 프로세싱을 하기 전에 css를 처리한다고 하여 CSS Preporcessor라고 불린다.

#### frameworks
- compase (루비기반, libSass사용시 대체할 수 있는 방법이 있음)
- susy

#### LibSASS 
- C, C++기반의 sass로 기존 Ruby기반의 Sass의 사용이 광범위하게 사용되게 된 계기가 됨.
- node-sass의 기반이 된다. 

#### less와의 차이
[less/slide share]()

### 환경설정

#### 플랫폼 설치
- Ruby
- Node.js ★

#### 플랫폼 별, Sass
- Ruby Sass (컴파일 속도가 느림...)
- Node Sass ★

#### 설치
속도가 느린 ruby기반 sass대신 nodeJs기반 node-sass를 설치한다.

```cli
$ npm install node-sass --global
```

#### window 사용자인 경우
cmd 또는 powershell, git bash

#### 첫 sass, scss 컴파일

node-sass sass.sass -o compiled-sass.css
node-sass -w sass.sass -o compiled-sass.css


```cli
$ node-sass [변환하고자하는 sass파일] [컴파일될 css파일]
```

```scss
//Sass에서의 Comment 방식은
//컴파일시 반영되지 않는다. 따라서 컴파일 결과에 주석을 남기고자 한다면 기존 CSS주석을 사용해야 함
```

#### 아웃풋 스타일 변경
--output-style nested / expanded / compact / compressed

#### 중첩, 변수

```sass
body
  height: 100vh
  background: #f2f2f2
```


#### 소스맵 (Sourcemap)
Chrome css sourcemap

1. Chrome Settings에서 소스맵 관련 기능 활성화한다.
[v] Enable JavaScript source maps
[v] Enable CSS source maps
[v] Display variable values inline while debugging

2. --source-map css
저장시 `css 폴더` 내에 소스맵을 생성한다.

#### 주석
```sass
// 한줄 주석

/* 여러줄 주석

```

한 줄 주석 사용 시 주의점
sass VS scss
sass 문법과 scss 문법은 한 줄 주석은 동일!

여러 줄 주석 사용 시 주의점!
sass VS scss
scss 문법과 달리 sass 문법은 끝나는 부분 *\/ 앞에 공백이 한 개 존재해야 함.


#### 언제 scss ?
susy의 사용, 믹스인을 사용할 때 scss를 사용해야만 한다.

#### 중첩 규칙(Nested Rules)
중첩을 통한 계층구조가 가능하다.
& 부모 참조 선택자의 활용

```sass
a
  color: #305ACF
  &:hover
    color: #6C4DCF
```

엠퍼샌드의 위치를 활용하여 특정 클래스 상황을 구현할 수 있다.
```sass
.page
  .page-header
    height: 20vh
  .brand
    overflow: hidden
    position: absolute
    left: 100%
    a
      color: #305ACF
      .ho-woo &:hover
        color: #6C4DCF
```

앞에 적은 클래스(.ho-woo) + 연결된 부모 클래스의 조합된 클래스를 만들 수 있다.
```css
.ho-woo .page .brand a:hover {
  color: #6C4DCF;
}
```

기본적으로 중첩된 구조 내에서 &를 사용할 경우,
부모를 참조하는 형태로 사용되나

다음과 같이 & 뒤에 선택자 이름 형태로 붙게 될 경우,
중첩된 요소의 하위가 아닌, 개별적인 모듈로 확장되는 것으로 가늠.
가장 상위 요소의 바로 아래 하위에서만 발생하는 현상으로 보임.

#### Sass 중첩 규칙 + 미디어쿼리
특정 영역 내에서 바로 미디어쿼리를 사용할 수 있음. 

```sass
aside.page-sidebar
  float: left
  width: 100%
  @media (min-width: 600px)
    width: 45%
  @media (min-width: 1100px)
    width: 33.3333%
```

그러나 많은 미디어쿼리문이 생성된다는 점이 단점. 이를 해결하기 위한 것이 combine-media-query. 미디어쿼리문을 한 구역으로 모아주면 됨.

```css
@media (min-width: 600px) {
  aside.page-sidebar {
    width: 45%;
  }
}

@media (min-width: 1100px) {
  aside.page-sidebar {
    width: 33.3333%;
  }
}

```
------

#### @extend (선택자 상속)

@extend를 사용해


선택자 상속을 받을 때, 실제로 존재하지 않는 선택자를 선택하면 오류가 발생. 이를 미리 방지하기 위해 `!optional` 사용가능
!optional

#### % (대체선택자) 
실체화되지 않은 클래스를 활용한다.

### OOCSS + Sass = The Best way to CSS

### @import (호출)

