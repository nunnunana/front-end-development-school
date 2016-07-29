###### eatdesignlove's Front-End-Development Study

# Day32 - 0727 

## 데이터 형 (Sass Data)

- [Null]
- [Number]
- [String]
- Color
- [Boolean]
- list [Array]
- Map [Object]


## 연산 (Operations)

+, -, *, /, %, ==, !=, >, <, >=, <=

키워드를 사용해 비교를 하는 css와 달리 연산자를 사용해 비교를 표현하는 Sass

곱셉 연산시 코드에 따라 의도하지 않은 결과를 얻을 수 있는데, 인터폴레이션(Interpolation) 보간법으로 해결할 수 있다.

``` 
10px * 10px = 100px*px
10px * 10 = 100px
```
[Sass 레퍼런스]()
[sass-script.sass]()

### 인터폴레이션 보간법 Interpolation 
문자를 접합 (용접과 비슷)하는 방법. url함수 내부에 텍스트("")형태로 입력해야지 정상적으로 작동한다.

인터폴레이션 보간법은 믹스인에 활용된다.

```sass

/* 변수 */ 
$base-font-size: 16px
$base-line-height: $base-font-size * 1.5

$spoqa-language: ko
$spoqa-font-family: "Spoqa Han Sans"


/* 웹폰트 */
@import url("http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-#{$spoqa-language}.css")

/* 본문 설계 */
body
  font-size: $base-font-size
  font-family: "Spoqa Han Sans Ko"
  line-height: $base-line-height

  font: #{$base-font-size}/#{$base-line-height} $spoqa-font-family
  폰트 속기형을 사용할 때는 인터폴레이션 보간법을 사용한다.

```
### @debug 지시자
@debug 디렉티브(지시자)를 사용하면 명령 창에 디버그 결과를 출력한다. 결과는 terminal에서 확인 가능

```
@debug red != #ff0
@debug type-of(red) //color
```


#### RWD에 보간법을 활용한 예
```
$media-md: "screen and (min-width: 760px)"
$media-lg: "screen and (min-width: 1220px)"
$media-print: "not screen and (min-width: 21cm)"

@media #{$media-md}
  .#{$selector}
    display: flex
    flex-flow: row-reverse wrap 
```

### @debug 지시자
@debug 디렉티브(지시자)를 사용하면 명령 창에 디버그 결과를 출력한다. 결과는 terminal에서 확인 가능

```
@debug red != #ff0
@debug type-of(red) //color
```

---

```
.#{$selector}
  @media #{$media-md}
    display: flex
    flex-flow: row-reverse wrap 
  @media #{$media-lg}
    display: block
    padding: 1rem
  @media #{$media-print}
    background: #fff !important
    color: #000 !important
    // 프린트 환경에서 완전한 검정색으로 출력할 수 있도록.
```

---

### 비교 연산

```
1 < 4   //true
1 <= 4  //true
1 > 4   //false

red == #ff0 #true  
```

---

### 문자 연산
문자와 문자를 결합하고자 할 때, `+`를 사용하여 결합이 가능하다.

```
li
  cursor: n + -resize; //n-resize
```

---

### 컬러 연산

```
color: #dedede + #232323
color: rgb(0,0,0) + rgb(255,255,255)
```

---

### 기타 연산
불린 데이터 연산 사용 가능
- 불린 연산 지원 and, or, not 
- 리스트 연산 미지원

---

## 리스트 list
자바스크립트의 배열과 같은 역할을 한다.
[레퍼런스]()

length($list) //$list의 개수를 반환 받는다.
nth($list, $n)  //$list의 $n번째 값을 반환 받는다.
set-nth($list, $n, )
join($list1, $list2, [$separator]) //
append($list1, $va1, [$separator]) //무언가를 추가하는 것
list-separator //
index($list, ) //

> **알아두기:** Sass의 리스트 인덱스는 1부터 시작한다. 


## Mixins @mixin, @include, =, +
외부에서 전달받은 인자 또는 콘텐츠를 병합해서 코드 덩어리를 출력한다.

믹스인 정의
직관적으로 정의 가능

정적 믹스인 호출
@inclue 믹스인이름

정적 믹스인
@mixin 믹스인이름 {}

동적 믹스인
@mixin 믹스인이름(매개변수1, 매개변수2) {}

동적 믹스인 호출
@include 믹스인이름(전달인자1, 전달인자2) {}

매개변수의 기본 값 설정
@mixin 믹스인이름(매개변수1: 기본값1, 매개변수2: 기본값2) {}

매개변수 확장
@mixin 믹스인이름(매개변수1, 매개변수2, 매개변수3, 매개변수4) {}

가변 매개변수
@mixin 믹스인이름(매개변수...) {}

콘텐츠 블록 @content
@mixin 믹스인이름(매개변수...) {
  @content
}

외부 믹스인 호출 시 콘텐츠 블록 코드 전달
@include 믹스인 이름 {
  믹스인 내부로 전달할 콘텐츠 블록(코드덩어리) 
}


```scss
@mixin 믹스인이름($매개변수) {
 섞고자 하는 코드
 섞고자 하는 코드
 섞고자 하는 코드
}

``` 


### 대체선택자와 믹스인의 차이점
1. 대체 선택자(%)로 @extend한 경우 그룹핑된 하나의 코드가 만들어지고, 믹스인을 이용해 @include한 경우 코드가 반복되어 만들어진다.

2. 코드량이 많아지는 믹스인의 특성때문에 코드의 성능면에서 이슈가 있을 수 있지만, **확장성**이라는 장점을 갖는다. 믹스인은 전달인자를 활용할 수 있다.

3. 정적 믹스인은 활용성이 떨어지기 때문에 오히려 대체선택자를 사용하는 것이 좋다. 


---

### 전달 인자
@mixin으로 정의된 모듈에 인자를 전달하여 확장성있게 활용할 수 있다. 

기본값을 지정해둘 수 있다.
>@mixin border-radius($radius: 4px)



### 키워드 전달 인자 (Keyword argument)
?

---

#### 멀티 전달 인자, 유지보수 문제
믹스인에 전달한 인자의 개수가 고정된 경우, 응용하여 활용하기 불편하다.

---


#### 가변 전달 인자

@mixin transition($props...) {
  -webkit-transition: $props;
  -o-transition:      $props;
  -moz-transition:    $props;
  -o-transition:      $props;
  transition:         $props;
}

---

@mixin

@content



## Todo
- [X] Sass Keynote 요청
- [X] 시험문제 10문항
- [ ] Sass 사용해보며 사용 중 시행착오, 주석, 로그 
- [ ] 일요일 자정까지 Pizza Site 완성
- [ ] Compass, susy 열어보고 구조 살펴보기

>변수는 변수에 담긴 것이 곧 타입이다.
