###### eatdesignlove's Front-End-Development Study

# Day02

## HTML 요소 (계속)

### 1. Heading
Heading는 문서의 제목을 구조화할 때 쓰이는 요소로 총 6단계로 구성된다. 
```
h1, h2, h3, h4, h5, h6
```

### 2. P, 그리고 단락에서 사용되는 요소들

```
<p> #단락을 의미
<strong> # 아주 중요함을 의미
<em> # 중요함을 의미 Emphasize
<mark> # 동적으로 처리되는 코드
<br> # 단락을 나누지 않고, 다음 행으로 내림
<hr> # 가로줄
```

- MIME TYPE은 html5에서는 생략가능, 기본값으로 제공하기 때문.
- 브라우저 핵대신 **필터링 방식(조건부 주석)을 사용**한다 : 특정조건에서 주석이 아닌, 코드로 해석시킨다.	

### 3. 조건부 주석문
조건부 주석문은 HTML을 이용해 웹 사이트를 마크업할 때에 크로스 브라우징을 할 경우에 HTML의 주석 태그를 이용하여서 인터넷 익스플로러에 대해 적용하기 위한 특수한 형식의 주석으로 IE6부터 9까지만 적용된다.[위키피디아](https://ko.wikipedia.org/wiki/%EC%A1%B0%EA%B1%B4%EB%B6%80_%EC%A3%BC%EC%84%9D)

```html
<!-- [if IE] -->
	인터넷 익스플로러에서만 보입니다.
<!-- ![endif] -->

<!-- [if lt IE 9] --> # less than 9보다 작으면
<!-- [if gt IE 9] --> # greater than 9보다 크면
<!-- [if lte IE 9] --> # less than or equal 9보다 작거나 같으면
<!-- [if gte IE 6] --> # greater than or equal 9보다 크거나 같으면
```

```html
<!-- [if IE 6]<html lang="ko" class="lt-ie10 lt-ie9 lt-ie8 lt-ie7 ie6"><![endif]-->
<!-- [if IE 7]<html lang="ko" class="lt-ie10 lt-ie9 lt-ie8 ie7"><![endif]-->
<!-- [if IE 8]<html lang="ko" class="lt-ie10 lt-ie9 ie8"><![endif]-->
<!-- [if IE 9]<html lang="ko" class="lt-ie10 ie9 "><![endif]-->
<!-- [if !IE]<!--><html lang="ko-KR"><!--<![endif]-->
```

IE가 아닌 경우도 처리해주어, html요소가 적절하게 자리잡도록 한다.
자주 쓰는 코드는 snippet으로 만들어 놓으면 나중에 편하게 처리할 수 있다. *.sublime-snippet. 특수 기호는 Html Entity Code를 활용할 수 있다.

위의 예는 멀티클래스를 활용하여 ie버전에 따라 스타일의 적용을 효율적으로 관리한다. 각 버전에 추가로 필요한 스타일을 모듈화해 관리함으로써 유지보수 및 코드의 최적화를 달성할 수 있다.

### 4. 기타 요소들
```
<big></big> #과거 표현을 위해 사용된 요소로 HTML5에서 폐기됨.
<small></small> #귀속의 명시와 저작권 표기 (HTML5에서 사용가능)
<sup></sup> #윗첨자 
<sub></sub> #아래첨자
```
### 5. 파비콘
파비콘이란 문서의 제목 앞에 붙은 작은 아이콘을 의미한다. 사용자들에게 브랜드 정체성을 표현하고 사용자 경험을 높이는 방법이다. 

```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```
기존의 favicon은 `16px * 16px`이었으나 최근 `32px * 32px` png파일로 생성한다. 아이패드 등과 같은 디바이스에서는 favicon이 앱아이콘으로 쓰이는 관계로 더 큰 사이즈의 파일이 필요하기도 하다.

IE에서 favicon의 확장자는 ico로 사용가능하고, IE에서 파비콘을 확인하려면 서버 상에서 테스트해봐야 한다.

>##### 참고자료
- [koreahtml5.kr](koreahtml5.kr/) : 브라우저 사용량 등에 대한 통계 확인가능.
- [entitycode.com](entitycode.com/) : Html Entity code가 잘 정리된 사이트.
- [resourcecards.com](resourcecards.com/) : 다양한 리소스를 구할 수 있는 사이트.
- [YUI Yahoo User Interface](http://yuilibrary.com/) : Yahoo 팀이 개발한 UI 프레임워크