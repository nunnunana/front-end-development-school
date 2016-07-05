###### eatdesignlove's Front-End-Development Study

# Day15
## CSS Float
### Float속성
`<img>` 요소를 좌/우로 부유시켜 텍스트가 이미지를 둘러싸도록 설정하기 위해 고안된 기술. 하지만 오늘날 그리드 시스템(멀티 컬럼 레이아웃)에 활용된다.

HTML 모든 요소는 `float` 속성 기본 값이 none으로 설정되어 있습니다. 이를 사용자가 필요에 따라 `float` 방향을 왼쪽(left), 오른쪽(right)으로 설정할 수 있습니다. 이에따라 `float`이 적용된 요소의 뒤에 마크업(구조화)된 요소는 `float`의 영향을 받습니다.

#### Float DEMO
##### 1.하나의 단락 <p>을 이미지 오른쪽에 길게 늘어뜨릴 때 해결할 수 있는 방법

```css
body {
  margin: 2rem 20%;   
  line-height: 1.45;
}
.image-container {
  width: 600px;
  border: 4px solid #34c0ff;
  padding: 1rem;
}
.image-container p {
  margin-bottom: 1.5em;
  color: #13315b;
  font-size: 0.875rem;
  overflow: hidden;
}
.image-container img {
  float: left;
  margin-right: 0.625rem;
}
```
`padding-left` 속성을 주어서 해결할 수 있는 방법도 있지만, 이것은 유지보수 측면에서 좋은 방법은 아님. 논리적으로 설명하기 어렵지만, `overflow: hidden` 속성으로 해결 가능

방법은 여러가지가 있을 수 있다. 다만 효율적으로 코드를 구성할 수 있도록 고민하는 것이 중요! **해결하는 방법 코드보고, 고민해보기**

### clear 속성
Clear 속성은 대상 요소의 부유(float)형태를 해제한다.

```css 
p {clear: both}
```

clear 속성은 `left, right, both, none`값을 사용할 수 있다.


### CSS Floating Image 
css float 속성을 활용하여 이미지를 둘러싸는 형태의 디자인이 가능하다.

#### 방법 1. 부모에게 똑같이 float을 부여 (x)
자식 요소에 float을 주게 되면, 부모 요소의 높이는 0이 된다. (높이를 갖게하던 자식요소가 공중에 뜨기 때문) 이때 부모 요소에 margin-bottom이 있으면 계단처럼 배치되게 됨. 이 문제를 해결하기 위해 부모 요소에도 float을 부여하여 같은 영 **높이를 가지게 된다.**

하지만 좋지않은 방식. 무한히 상위 요소에 float을 주어야 하는 상황에 빠지기 때문. 또 부모 요소의 배치에 어려움이 생겨 근본적인 해역결책이 될 수 없음.

#### 방법 2. 부모 요소 마지막에 html요소로 clear:both를! (x)
부모의 마지막 자식요소에 `clear:both`를 주어 부유된 자식들의 높이값을 인식하게 한다. 무의미한 요소를 추가했기 때문이다.

부모 안에 마지막 요소가 float이 적용되지 않은 상태라면 부모는 자식의 높이값을 인식한다.

#### 방법 3. 부모 요소에 overflow:hidden 또는 overflow:auto! (x)
왜 이렇게 해결되는지 뚜렷한 설명이 어려움. overflow의 원래 사용 용도와 다르게 사용하는 방식으로 또다른 문제가 있을 수 있음.

#### 방법 4. Clearfix (o)!
```css
/* 초기 Legacy Method v1 */
.clearfix::after {
  content: "가상요소";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden; 
}
/* 개량 Legacy Method v1.1 */
.micro-clearfix::after {
  content: '';
  display: block;
  clear: both;
}
/* 오페라의 버그까지 고려한 
 * micro clearfix New Method 
 */
.micro-clearfix::before,
.micro-clearfix::after {
  content: '';
  display: table;
}
.micro-clearfix::after {
  content: '';
  clear: both;
}
```
`clear:both`는 block 요소에만 적용된다.
`height`를 0으로 주어서 뜨는 공간을 잡아준다.
`micro-clearfix`로 줄여서 쓸 수 있다.
`common.css`에 옮겨두고 재사용하도록 한다.


### .class:nth-last-of-type(2)
```html
<!DOCTYPE html>
<html>
<head>
<style>

*.hello:nth-last-of-type(2) {
    background: #ff0000;
}
</style>
</head>
<body>

<h1>This is a heading</h1>

<p>The first paragraph.</p>
<p>The second paragraph.</p>
<p class="hello">here!</p>
<span class="hello">-----</span>
<span class="hello">The fourth paragraph.</span>
<p class="bye">The third paragraph.</p>
<p class="hello">The third paragraph.</p>

</body>
</html>
```
`nth-first-last-of-type(n)`과 같은 선택자를 사용할 때 유의할 점은 선택자가 해당 요소와 해당 요소가 가지는 클래스 모두를 지니는 교집합인 경우에 적용된다는 점이다.

## Practice 1
[CSS Floating Layout](http://eatdesignlove.github.io/shared/homework/css-styling/04-practice1.html)

## Practice 2
[CSS Grid Module]()
###### eatdesignlove's Front-End-Development Study
