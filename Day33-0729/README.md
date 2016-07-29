###### eatdesignlove's Front-End-Development Study

# Sass Script  | 07/29

### 지난 시간 내용 정리

####  1. 변수
  
  - Sass 변수 앞에는 항상 '$'를 붙인다.
  - Sass 문법 내에서는 들여쓰기 내부, SCSS 문법 내부에서는 '{}' 내부에 선언된 변수는 지역 변수이다. 지역 변수는 해당 영역(Scope)에서만 사용이 가능하다. (전역 변수와 구분되는 포인트) 단, `!global` 플래그가 지역 변수 뒤에 붙을 경우에는 전역 변수와 같은 역할을 수행하게 된다.
  
  - `!default` 플래그가 변수 뒤에 붙을 경우는 `null`인 데이터 유형을 제외하고는 가장 마지막에 적용되는 기본 값으로 설정된다.


####  2. 데이터 유형

- 숫자 (`Number`) `ex) 5em, 15px`
- 문자 (`String`) `ex) Times, "Times New Roman"`
- 컬러 (`Color`) `ex) red, #ff0, rgb(255,0,0), hsla(320,100%,50%,0.4)`
- 논리 (`Boolean`) `ex) true, false`
- 리스트 (`List`) `ex) 10px auto 20px`
- 맵 (`Map`) `ex) (h1: 22px 1.24, h2: 18px 1.51, h3: 14px)`
- 비어있다 (`null`) 값이 null이면 컴파일 되지 않는다.

##### 2-1. 보간법(Interpolation)

`특정_문자열에_#{$변수}를_접합`

- font 속기형 작성시, 나눗셈 연산(`/`)으로 처리되지 않게 하기 위함
- 웹폰트를 사용할 경우에 font information을 변수로 처리
- Media Quearies 구문에 변수를 처리
- Selector String 조합에 변수를 처리

####  3. 연산자

- 할당 연산자(콜론) ($variable`:` value)
- 사칙 연산자
  - `+` (문자에 사용할 경우, 문자를 접합)
  - `-`
  - `*`
  - `/`
- 비교 연산자
  - `>`
  - `<`
  - `>=`
  - `<=`
  - `==`
  - `!=`
  - `not`
- 기타 연산자
- `and`
- `or`
- `not`

####  4. 믹스인

- `@mixin` 지시자(Directive)를 사용하여 정의한다. (Sass 문법 사용시 `=`으로 대체할 수 있다.)
- `@include` 지시자를 사용하여 정의된 믹스인을 호출한다. (Sass 문법 사용시 `+`으로 대체할 수 있다.)
- `@`는 규칙을 의미한다. 
- 기본적으로 매개변수(Parameter)가 설정되어 있지 않은 믹스인을 정적 믹스인이라 한다. (확장이 안된 상태)
- 어떤 경우에 정적 믹스인 보다 플레이스홀더 선택자가 좋은 선택인가? (ex) `common.css`
- 전달인자(Arguments)를 설정한 믹스인을 동적 믹스인이라고 한다. (확장이 가능한 상태)
- 전달인자는 Sass의 변수와 유사하기에 변수 전달인자 앞에 `$`를 붙여야 하며, 각 인자는 콤마(`,`)로 구분된다.
- 전달인자의 값을 설정하는 구문이 있다면 해당 인자는 선택사항이다. ex) `$arg: value`
- 전달인자가 다수일 경우에 이를 줄여 표현할 수 있다. ex) `$args...`
- *** 줄여서 전달하는 인자 표현식에서 맵(Map) 데잍 유형을 사용할 경우, `$를 제외한 키(key)`를 전달하여 처리 가능하다. (반복문 없이) ***
- 믹스인 내부에 `@content`를 사용하면 믹스인 호출 과정에서 믹스인 내부에서 처리될 콘텐츠(코드 블록)를 전달하여 코드를 섞을 수 있다. (함수와의 차이점)


```sass
@mixin show($margin: null, $arg: true) {
  body {
    margin: $margin;
      @if $arg {
        font-size: 16px;
      }
  }
}
```


>#####**전달인자와 매개변수의 차이**
- 믹스인을 정의할때는 매개변수 
- 매개변수를 통해 전달하고자하는 인자가 전달인자


#### 5. 함수

- SET함수, GET함수로 나누어 볼 때 GET함수는 @return 을 갖는다.
- Sass 커스텀 컬러 함수


##### **컬러, 각도로 변경 함수**
>- adjust-hue($color, $degrees)

##### **많이 사용되는 컬러 함수**
>- lighten($color, #amount)
- darken($color, #amount)
- saturate($color, #amount)
- desaturate($color, #amount)
- grayscale($color)

##### ***색을 반전시키는 컬러 함수*
>- complement($color)   //보완색(색상만 보색으로 바꾸어 준다.)
- invert($invert)       //반전색(명도까지 밝게 바꾸어준다.)

