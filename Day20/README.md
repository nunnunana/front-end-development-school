###### eatdesignlove's Front-End-Development Study

# Day20

## Unit Module
```css
[class*="unit-"] { float: left; margin-right: 30px;}
.grid [class*="unit-"]:last-child { margin-right: 0;}
.grid .unit-1 {width: 130px;}
.grid .unit-2 {width: 290px;}
.grid .unit-3 {width: 450px;}
.grid .unit-4 {width: 610px;}
.grid .unit-5 {width: 770px;}
.grid .unit-6 {width: 930px;}
.grid .unit-7 {width: 1090px;}
.grid .unit-8 {width: 1250px;}
```

## Push, Pull Module
```css
.grid [class*="push-"] {position: relative;}
.push-1 { left: 160px; }
.push-2 { left: 320px; }
.push-3 { left: 480px; }
.push-4 { left: 640px; }
.push-5 { left: 800px; }
.push-6 { left: 960px; }
.push-7 { left: 1120px; }
.push-8 { left: 1280px; }

.grid [class*="pull-"] {position: relative;}
.pull-1 { right: 160px; }
.pull-2 { right: 320px; }
.pull-3 { right: 480px; }
.pull-4 { right: 640px; }
.pull-5 { right: 800px; }
.pull-6 { right: 960px; }
.pull-7 { right: 1120px; }
.pull-8 { right: 1280px; }
```

## Prefix, Suffix Module
```css
.prefix-1 { margin-left: 160px; }
.prefix-2 { margin-left: 320px; }
.prefix-3 { margin-left: 480px; }
.prefix-4 { margin-left: 640px; }
.prefix-5 { margin-left: 800px; }
.prefix-6 { margin-left: 960px; }
.prefix-7 { margin-left: 1120px; }
.prefix-8 { margin-left: 1280px; }

.suffix-1 { margin-right: 160px; }
.suffix-2 { margin-right: 320px; }
.suffix-3 { margin-right: 480px; }
.suffix-4 { margin-right: 640px; }
.suffix-5 { margin-right: 800px; }
.suffix-6 { margin-right: 960px; }
.suffix-7 { margin-right: 1120px; }
.suffix-8 { margin-right: 1280px; }
```

## 하이퍼링크 이펙트 스타일링
```css
.fade-bg {
  display: inline-block;
  vertical-align: bottom;
  padding: 0.0625rem 0.375rem; 
  /* 여기서 em, 글자 크기에 따라 상대적으로 적용시키기 위함함*/
  transition: all 0.25s;
}
.fade-bg.round {
  border-radius: 0.1875rem;
}
.fade-bg:hover,
.fade-bg:focus {
  background: #1D7DFF;
  color: #fff;
  text-decoration: underline;
}

.fade-bg:focus {
  outline: none; 
  /*  시각적으로 focus가 주게되면 제거해도 무방 */
}
```

## ToDo
- em / rem 타이포그래피 적용하는 것 이해
- gradient로 grid guide 그리기 (after/before/split) 
- 오늘 학습한 내용 다시 작성해보기 

