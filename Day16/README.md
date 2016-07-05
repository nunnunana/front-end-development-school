
# Day16
## Practice 1 : Review.
#### 웹폰트
구글 웹폰트는 여러개의 폰트를 하나의 파일로 받아올 수 있다. 요청을 줄이는 것은 성능을 높이는 방법이 된다. 이때 엔티티 코드를 사용하여 웹폰트 스타일시트가 잘 적용될 수 있도록 처리해준다.

```html
<link rel="stylesheet" href="">
```

#### 구조화
`<h1>`, `<main>` 은 페이지에 꼭 하나만 사용.
`<section>` 아래는 제목이 필요하다.
`.clearfix`의 적용. float을 감싸고 있는 부모에 clearfix를 주면 높이를 갖게 됨.
명시적인 클래스의 사용. 네이밍 규칙을 만들기.
이름을 두번씩 읽어주지 않도록 처리하기.
경우에 따라 list요소, article요소. 어떻게 적용하는게 좋을지 나름의 기준 갖기.
SVG도 img 또는 이미지 스프라이트 기법 활용가능.
box-sizing: border-box. box의 width를 Content에서 Border까지.
html { overflow-y:scroll } 브라우저 스크롤바의 변화를 줄여 유저 인터페이스 경험을 개선.
rem 단위의 활용과 효율적인 적용.
member-info 의 높이는 flexbox로 쉽게 채울 수 있다.
작업에 들어가기 전, 작업의 범위와 목표를 세우고 그에 맞게 진행한다.


## CSS Vertical Rythm
#### Vertical Rythm

#### CSS Gradient 
background-images: linear-gradient(180deg, transparent 50%, #00D6FF 100%;)

## CSS Position
모든 요소는 float의 기본값으로 none, position의 기본값으로 static을 갖는다.
fixed는 IE6이하에서 작동하지 않음.

### relative 
자기 자신의 원래 위치로부터 상대적인 위치를 갖게 되고, 주는 속성에 따라 기준점이 달라지게 된다. relative는 **일반 흐름(normal flow)에 영향을 미치지 않는다.** 

### absolute
자신의 부모 위치로부터 상대적인 거리로 이동하며, **일반 흐름(normal flow)을 깬다.** 나와 가장 가까운 부모를 찾아서 부모에 대한 위치를 잡는다. 상황에 따라서 absolute, fixed 역시 부모로 사용할 수 있다.

## CSS Triangle
css로 그리는 삼각형은 border의 특징을 이용한다. 사각형 box의 border는 각 변이 만나는 지점에서 대각선으로 형태로 만나게 되는데, 색상(solid)이 있는 한 변과, 투명(transparent)한 두 변을 맞닿게 하여 구성할 수 있다.

```css
border-right: 2em solid #FFD231;      /* 색상이 있는 border */
border-top: 2em solid transparent;    /* 투명한 border */
border-bottom: 2em solid transparent; /* 투명한 border */
border-left: none;
```

## 참고자료
[demo.yamoo9.net/FDS/conference-speakers/](http://demo.yamoo9.net/FDS/conference-speakers/)
[Type-scale](http://type-scale.com/)
