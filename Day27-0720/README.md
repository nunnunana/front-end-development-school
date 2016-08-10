###### eatdesignlove's Front-End-Development Study

# Day 27

## 반응형 웹 디자인

### 모바일 최적화


### CSS Device Adapt

------

### 기타 설정
Normalize 등을 사용하지 않을 때, 아이폰, iOS에서 글씨가 커지는 버그가 있는데 이것을 해결하는데 사용됨.

```css
html {
    /* 박스 크기 설정 */
    box-sizing: border-box;
    /* 텍스트 크기 조정 설정 */
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
}
```


## Sub Pixel Problems In CSS
### 현상 
##### 1. Opera 9, Safari 3

전체 50px에서 48px만 채우는 것을 볼 수 있다. 오른쪽을 보면 2px(초록색으로 표시된부분)이 부족한 걸 알 수 있다.
네비게이션 작업 할 때 이렇게 작업할 경우 다 채우지 못하는 걸 알아야 한다.

##### 2. IE 6,7

IE의 경우는 2px이 넘치는 경우가 발생하고 위와 같이 레이아웃이 깨지는 것을 볼 수 있다.

##### 3. FF 2, FF 3

FF의 경우는 각 <div>가 12px과 13px의 사이의 값을 보여주고 있다.


>100px 너비인 박스의 경우는 문제가 생기지 않으나, 50px일 때 Sub Pixel Problems이 발생하게 된다. (나누었을 때, 소수점으로 떨어지기 때문에)


## isolate floating

### 개념 
Sub Pixel Problems을 해결하기 위한 floating방식으로, 

### 장점
1. Sub Pixel Problems
2. order의 편의성


## Flexbox
