#2016 6 14 Day 1
======

월드와이드웹 | 접근성 | UI디자인 | 
인터랙션 : ES6(2015), BEM과 SMACSS로 만드는 스타일가이드 
jQuery : AJAX
angular : angular 2.0

------

###1.월드와이드웹에 관하여

####URL / URI 의 차이?
- Uniform Resource Locator 통합 자원 위치표시
- Uniform Resource Identifier 통합 자원 식별자

####연결은 '관계'
- 무언가가 연결되면 관계가 형성되는데, 그것이 바로 데이터가 될 수 있다. (팀 버너스리, TED강연 참고)

###HTML5의 역사, WEB application 1.0 -> HTML5
####HTTP 무슨 뜻?
- HyperText Transport Protocol : 웹서버와 클라이언트간의 문서를 교환하기 위한 통신규약
- Tim Berners Lee, 1989
- 웹에서만 사용하는 Protocol로 TCP/IP기반으로 한 지점에서 다른 지점으로 요청과 응답을 전송한다.
- http://wiki.gurubee.net/pages/viewpage.action?pageId=26739929

####닷컴버블을 극복하고 살아남은 기업의 특징 
- 참여, 공유, 개방(Web 2.0)

####그래서 나오게 된 것 Open API, 그리고 그러한 발전 속에서 AJAX
####canvas와 svg의 차이

####플래시가 없어진 가장 큰 이유는 모바일 환경에서 플래시가 잡아먹는 큰 리소스
<!-- ####Wired. 기술이 문화, 경제, 정치에 미친 영향을 다루는 잡지 -->

###2.웹기술의 등장
- Key노트 참조

####3.웹표준
- 제프리 젤드만의 웹표준 운동으로 확산
- 어떤 경우에서도 표준을 준수하자.

####4.index.html
- octotree : github 파일관리자?
- dir="ltr" left to right / rtl는 right to left (기본값은 ltr)
- lang="ko-KR" KR을 통해 위치를 알려줌, 남한 한글이라는 뜻 ex) en-US 미국 / en-GB 영국

###meta:utf
- <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
- MIME TYPE를 통해 응답을 받을 때, 어떠한 컨텐츠를 가지고 있는지 파악.
- 서버에서 셋팅되지 못한 값을 처리하는 것이므로 <title> 위에 작성한다.

- <meta charset="UTF-8"> 로 줄여서 표현 가능

- html5부터 content="text/html"이 기본값으로 포함
- doctype은 대소문자 구분하지 않는다.
- doctype 위에 문자가 있을 경우, IE에서 문제가 발생한다. 
  (비표준으로 인식) doctype위에는 아무것도 존재하지 않도록. 주석조차.

- meta http-equiv로 시작되는 meta태그는 title 위쪽에 작성해준다. 
  전처리 구문 지시자로 페이지 로딩 전 정의한 사항을 먼저 수행한다.

- meta name으로 시작되는 태그의 경우는 title 아래에 작성.
- meta 요소는 title 요소나 base 요소, link 요소, style 요소, script
	요소로 표현할 수 없는 다양한 메타데이터를 표시한다.
- meta 요소는 head 또는 head의 자식요소인 noscript요소 아래 작성할 수 있다.
- inflearn.com


###meta:compat
- <meta http-equive="X-UA-Compatible" content="IE=Edge">를
	사용함으로써 IE최신 버전에 맞추어 렌더링 된다. (IE의 호환성보기 모드를 Edge모드로 렌더링)

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />  # chrome=1 이 포함된 부분은 문제.
```

###meta:vp
- <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
- meta정보 값은 페이지별로 다르게 제공해주는 것이 좋다.

```html
<meta name="description" content="프론트엔드 개발을 위한 html 마크업을 다루고 있습니다."> # 2-300자 내외에서 작성
<meta name="keywords" content="프론트엔드,개발,스쿨,디자인,패스트캠퍼스"> # 10개 내외로 작성한다.
<meta name="author" content="eatdesignlove"> 
```

- angular에서 ui-router를 이용할 경우, 페이지별로 정보를 어떻게 바꿔줄 수 있을까? (궁금)
- Open Graph와 SEO의 상관관계 (궁금) http://ogp.me/ 참고. 없다.

- 현재 페이지(하위) | 홈페이지 제목(상위)로 표시하는 것이 ux적으로 더 나은 표현.

###절대경로와 상대경로의 차이에 대해
```
/  (절대경로, root 경로로부터, 서버환경에서 구동할때 사용가능) 
./ (현재경로부터)
../ (상대경로, 상위 경로를 의미)
```