###### eatdesignlove's Front-End-Development Study

# Day 0726

## Sass 계속

### bourbon으로 살펴보는 Sass 관리 구조 

---

### Sass 복습

#### @import

@import는 해당 파일에 대상 파일을 병합시킨다.

밑줄이 있는 파일은 함께 컴파일되지(아웃품 css에서 보여지지) 않는다. 내부에서만 사용되는 파일에 설정해둘 수 있다.

`_common.sass`

#### 중첩

중첩은 많이 할 수록 선택자가 길어지게 된다.


#### 변수

변수는 별도로 분리해서 관리한다.

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


## Inspired.
- [Bourbon.io/docs](http://bourbon.io/docs/)
- 타인의 코드를 보고, 왜 그렇게 짰나요?
- 깜지의 중요성
- 스스로 생각을 가지고, 서비스를 구축할 수 있는 능력
