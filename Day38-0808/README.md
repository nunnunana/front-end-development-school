###### eatdesignlove's Front-End Development

# Day38

## 잊지 말기
- 자바스크립트 세상에서 객체가 아닌 것, undefined, null.
- document.firstChild 는 DTD.
- 문서 객체의 이벤트 속성(ex. onclick)에 초기 설정되어 있는 값은 null
- geolocation, validation은 DOM API가 아니다.
- 항상 브라우저단에서 확인해보는 것이 가장 중요하다.
- 함수 내부에서만 지역 변수가 만들어 진다.

## undefined, null이 객체가 아닌 이유.
- 크롬 properties
- Object 생성자/함수
- .toString() 을 가지고 있다는 것은 object의 능력을 상속받았음을 의미한다.

- Number, String, Boolean, Array, Function, Object, Math, Date ..
- 나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)
- `!!'날이더워요.'.toString`의 결과, - true
- `!!`을 붙이면 Boolean값으로 변환된다.
- `!!(2016).toString` - true
- `!!(function(){}).toString` - true

## Console 값에 스타일링 하기

```console
console.log('%c 내용을 입력하고 나서, 뒤쪽에 스타일을 작성한다', 'background: #000; color: #fff');
```

## 반복 구문
- do ~ while문
- for ~ in문
- forEach문

## 조건 구문
- if문
- switch case default break
- 3항식
