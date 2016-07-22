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

#### 설치
속도가 느린 ruby기반 sass대신 nodeJs기반 node-sass를 설치한다.

```cli
$ npm install node-sass --global
```
