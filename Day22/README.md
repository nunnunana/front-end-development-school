###### eatdesignlove's Front-End-Development Study 

# Day 22

## CSS Text-align Justify
CSS3의 text-align 속성 값 중 하나인 justify 속성은 단락을 양쪽 정렬 형태로 만들어준다.

justify는 현재(2016년 7월 기준) 대부분의 브라우저에서 공식적으로 지원하고 있지 않다. 그러나 웹 타이포그래피가 진정 타이포그래피로서의 역할을 다하고자 한다면 없어서는 안되는 속성 중 하나라고 할 수 있다.

text-align-last는 단락의 가장 마지막 줄을 정렬하는데 사용된다. 예를들어, justify가 적용된 단락일때 단락을 가득채우지 못하는 마지막 줄은 왼쪽 또는 오른쪽으로 붙어정렬되게 되는 것이다.

```css 
.align-last-justify {
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 6rem;
  text-align: justify;
  -moz-text-align-last: justify;
  text-align-last: justify;
  font-weight: 900;
}
```

**브라우저 지원 현황**
[Caniuse "text-align:justify"](http://caniuse.com/#search=justify)
[Caniuse "text-align-last"](http://caniuse.com/#search=text-align-last)

## CSS Animation Steps
CSS3 Animation, @Keyframes 속성을 사용하여 sprite 이미지를 애니메이션으로 구현해낼 수 있다. 

animation의 하위 속성에 대해 간략히 정리하면 다음과 같다.

>-*animation-delay*
엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다.
-*animation-direction*
애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다.
-*animation-duration*
한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.
-*animation-iteration-count*
애니메이션이 몇 번 반복될지 지정합니다. infinite로 지정하여 무한히 반복할 수 있습니다.
-*animation-name*
이 애니메이션의 중간 상태를 지정합니다. 중간 상태는  @keyframes 규칙을 이용하여 기술합니다.
-*animation-play-state*
애니메이션을 멈추거나 다시 시작할 수 있습니다.
-*animation-timing-function*
중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다.
-*animation-fill-mode*
애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.

```css
.anim-demo {
  animattion: 애니메이션이름 실행시간 반복횟수 실행유형 필모드 지연시간;
}
```

```css
.sprite-anim-demo {
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  width: 75px;
  background: url(images/songoku.png) no-repeat;
  animation: songoku steps(8) 1s infinite;
}

@keyframes songoku {
  0% { background-position-x: 0; }
  100% { background-position-x: -600px; }
}
```


## Fluid Grid System
유연한 그리드 시스템은 기존의 정적 그리드 시스템이 가지는 고정값 (px, em, rem)을 %로 변환하여 브라우저 크기에 유연하게 반응하도록 하는 것이 특징이다. 

유연한 그리드 시스템을 구현하기 위해 기억해야할 부분은 기존 컬럼 그리드의 거터를 구현할 때처럼 마진을 사용하는 것이 아니라, **Box-sizing:border-box** 속성과 **Padding**, 그리고 **background-origin** 혹은 **background-clip**에 **content-box** 값을 활용하여 구현한다.

```css


```

px값을 %로 바꾸어주는 것은 손이 많이 가는 작업이 필요한데, 추후 이것을 sass를 통하여 간편하게 변환하는 법을 공부할 예정이다.

```css
/* 유닛모듈 */


/* 거터모듈 */
.gutter,
.gutter-group [class*="unit-"] {
  padding-left: 1rem;
  padding-right: 1rem;
}

.grid .no-gutter {
  padding-left: 0;
  padding-right: 0;
}

```



## Multi Column System
멀티 컬럼 그리드 시스템의 핵심은 CSS3의 **Multi-Column** 속성에 있다. 이 속성은 구형 IE브라우저(6,7,8,9,10)에서는 지원되지 않으나, 다른 모던 브라우저서 Prefix를 붙여 사용이 가능하다. 

Multi-Column은 기존의 다양한 방법으로 구현하던 컬럼 레이아웃을 이 속성으로 간단하게 구현할 수 있게 한다.

>-column-count 컬럼의 개수를 정의한다.
-column-gap 컬럼 사이의 간격을 정의한다.
-column-rule-style 컬럼 사이에 들어가는 선의 모양을 구체화한다.
-column-rule-width 컬럼 사이에 들어가는 선의 두께를 구체화한다.
-column-rule-color 컬럼 사이에 들어가는 선의 색을 구체화한다.
-column-rule 컬럼 사이에 들어가는 선에 관해 속기형으로 구체화한다.
-column-span 컬럼의 span이 몇 개의 컬럼을 통과하게 할 것인지를 구체화한다. 
-column-width 컬럼의 너비를 구체화한다.


**Multi-Column 속성을 활용한 Masonry 레이아웃 구현**
```css
.masonry {
      width: 100%;
      max-width: 1200px;
      margin-right: auto;
      margin-left: auto;
      
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;

      -webkit-column-gap: 1.5rem;
      -moz-column-gap: 1.5rem;
      column-gap: 1.5rem;      

      -webkit-column-rule: 1px solid #dedede;
      -moz-column-rule: 1px solid #dedede;
      column-rule: 1px solid #dedede;
    }

```

##ToDo
- Fluid Grid System 다시 구현해보기
