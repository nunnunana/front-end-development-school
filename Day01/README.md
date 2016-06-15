#Day 01

##1.HTML(HyperText Markup Language) 기초 
###웹표준의 출발, DOCTYPE.
```html
#!!!4t HTML4 관용 모드 표준 DTD
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 

#!!!4s HTML4 엄격 모드 표준 DTD
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 

#!!!xt XHTML1 관용 모드 표준 DTD
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 

#!!!xs XHTML1 엄격 모드 표준 DTD
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

#!!!  HTML5 표준 DTD
<!DOCTYPE html>
```

#### 1. 표준문서의 첫 단추.
DOCTYPE(DTD, Document Type Definition)은 웹표준의 시작과도 같다. 왜냐하면 DTD의 명시여부에 따라 해당 문서는 브라우저에서 [표준모드(Standard Mode)나 비표준모드(Quirk Mode)](http://naradesign.net/wp/2007/03/27/118/)로 인식되기 때문이다.


#### 2. DTD 위에 아무것도 없다.
IE 브라우저에 있어서 DTD 위에 `<!-- 주석 -->`이나 `<?php require'core/init.php';?>` 등 과 같은 코드가 있을 경우, 올바르지 않은 DTD로 인식하여 비표준으로 인식된다. 따라서 DTD위에는 아무것도 기입되지 않는 것이 좋다. 한편, DTD는 대소문자를 구분하지는 않는다.

```php
<?php require'core/init.php';?>
<?php include_once 'include/IE8Etc.php';?>
<!doctype html> #<!DOCTYPE html>로 작성도 가능
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<html>
<head>
<meta charset="UTF-8">
<title>Title</title>
```

>
######관련링크
- [DTD 위에 주석이 올 경우 발생하는 문제](http://f10024.tistory.com/1)
- [IE renders my page in Quirks mode](http://stackoverflow.com/questions/18517290/ie-renders-my-page-in-quirks-mode?rq=1)
>


#### 3. 표준모드로 렌더링되는지 확인하는 방법

작성한 문서가 표준모드로 렌더링되는지는 Console창을 통해 확인가능하다.
```javascript
document.compatMode 
```
- 표준문서인 경우, `CSS1Compat`
- 비표준문서인 경우, `BackCompat`


------


###HTML문서의 기본 구조

#### 1. 기본 구조

```html
<!DOCTYPE html>
<html>
	<head>	
		<title>Document Title</title>
	</head>
	<body>
		content.
	</body>
</html>
```

- HTML문서는 `<html>`을 Root 요소로 가지는데, 자식 요소로 `<head>`와 `<body>`만을 갖는다.
- `<head>`요소에는 반드시 `<title>` 요소가 포함되어야 하고, 이것은 브라우저 탭의 제목으로 표시된다.


#### 2. 문서에 관한 메타데이터를 담고 있는 `<Meta>` 요소 
메타데이터란 데이터 관리상 필요한 작성자·목적 등 속성에 관한 데이터다.
`<meta>` 요소는 title, base, link, style, script요소로 표현할 수 없는 다양한 메타데이터를 표시하며, head 또는 head의 자식요소인 noscript요소 아래 작성할 수 있다.

```html
<!DOCTYPE html>
<html lang="ko" dir="ltr"> #5
<head>	
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> #1
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" /> #2
	<title>Document</title>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" /> #3

	<meta name="description" content="프론트엔드 개발을 위한 html 마크업을 다루고 있습니다.">
	<meta name="keywords" content="프론트엔드,개발,스쿨,디자인,패스트캠퍼스">
	<meta name="author" content="eatdesignlove"> #4

</head>
<body>
	
</body>
</html>
```

##### #1. meta:utf

`meta http-equiv`로 시작되는 meta태그는 페이지 로딩 전 정의한 사항을 먼저 수행하는 전처리 구문 지시자 프라그마 디렉티브(Pragma Directive)라고 한다. (equiv는 equivalent의 약자). 서버에서 셋팅되지 못한 값을 처리하는 것이므로 `<title>` 위에 작성한다. HTML5부터 `content="text/html"`이 기본값으로 포함

텍스트 언어 인코딩을 UFT-8로 설정하여, 한글이 깨지는 문제를 해결할 수 있다.

```html
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> #meta:utf
	<meta charset="UTF-8"> #HTML5에서는 이와 같이 줄여서 표현 가능
	<title>문서의 제목</title>
</head>
```

>###### UTF-8

>*장점*

>
- UTF-8은 모든 유니코드 문자를 표현할 수 있다.
- 바이트 표현의 첫 바이트만 사용하여 해당 바이트 표현의 길이를 결정할 수 있다. 따라서 부분 문자열을 얻는 과정이 매우 쉽다.
- 인코딩에 간단한 비트 연산만 사용되므로 효과적이다. UTF-8은 곱셈이나 나눗셈과 같은 느린 연산들을 사용하지 않는다.

>*단점*

>
- 대부분의 UTF-8 문자열은 일반적으로 적당한 기존 인코딩으로 표현한 문자열보다 더 크다. 판독 기호를 사용하는 대부분의 라틴 알파벳 문자는 적어도 2바이트를 사용하며, 한중일 문자들과 표의 문자들은 적어도 3바이트를 사용한다.
- 한중일 문자들과 표의 문자를 제외한 거의 모든 기존 인코딩들은 한 문자에 1바이트를 사용하므로 문자열 처리가 간편한 반면, UTF-8은 그렇지 않다.


##### #2. meta:compat
아래의 비표준 코드단락을 기입함으로써 IE의 호환성 보기 모드를 변경할 수 있다.Edge의 경우는 최신버전으로 렌더링하는 방식. 만약, 이 코드가 없다면 최신브라우저임에도 IE 7로 인식하는 문제가 발생할 수 있다.

```html
<head>
	<meta http-equive="X-UA-Compatible" content="IE=Edge">	
	<meta http-equive="X-UA-Compatible" content="IE=9">	
	<meta http-equive="X-UA-Compatible" content="IE=8">	
	<meta http-equive="X-UA-Compatible" content="IE=Emulate7">	

	# chrome=1 이 포함된 아래의 코드는 더 이상 쓰면 안된다.
	# 이 코드를 통해 IE브라우저에서 chrome의 렌더링 방식을 강제로 변경할 수 있었으나, 이것은 Chrome팀의 잘못된 해법.
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" /> 
		
</head>
```

##### #3. meta:vp

애플에서 safari를 위해 만든 비표준 코드이나 현재 많은 브라우저에서 제공하여, 모바일 브라우저에서 

>###### MDN Viewport 참고자료
[viewport meta 태그를 이용해 모바일 브라우저상에서 레이아웃 조종하는 법](https://developer.mozilla.org/ko/docs/Mozilla/Mobile/Viewport_meta_tag)
[A tale of two viewports — part two](http://www.quirksmode.org/mobile/viewports2.html)

```html

<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

```


##### #4. 검색엔진최적화 SEO

해당 문서를 검색엔진에 최적화하여 검색 결과 상단에 노출시키기 위한 최적화 작업의 일환으로 meta 요소의 `description`, `keywords`, `author`를 작성한다.

```html

<meta name="description" content="프론트엔드 개발을 위한 html 마크업을 다루고 있습니다."> # 2-300자 내외에서 작성
<meta name="keywords" content="프론트엔드,개발,스쿨,디자인,패스트캠퍼스"> # 10개 내외로 작성한다.
<meta name="author" content="eatdesignlove"> 

```


##### #5. lang 과 dir

`lang`속성은 요소 내 주 언어를 명시하는 역할을 한다. ko-KR처럼 '언어-국가코드'형태로 명시하여 더욱 정확히 표현가능하다.
- `en-US` 미국, 영어
- `en-GB` 영국, 영어

`dir`속성은 요소 내 텍스트 방향을 명시한다. 
- `ltr` 왼쪽에서 오른쪽 left to right
- `rtl` 오른쪽에서 왼쪽 right to left

```html

<!DOCTYPE html>
<html lang="ko-KR" dir="ltr">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
	<h1>안녕, 세상아</h1>
	<p lang="en-US">Hello, World</p>
</body>
</html>

```


#### 3. 절대경로와 상대경로의 차이
외부에 존재하는 파일을 연결할 때 아래와 같이 절대경로 혹은 상대경로를 이용해 연결가능한데, 상대경로인 경우 파일 간 위치에 따라 경로값이 달라지는데 반해 절대경로는 `/`를 기준으로 단일하게 적용가능하여 관리가 더 용이하다. 

```html
/  (절대경로, root 경로로부터, 서버환경에서 구동할때 사용가능) 
./ (현재경로부터)
../ (상대경로, 상위 경로를 의미)
```


## 더 궁금한 것.
- url, uri, urn
- http


<!-- ####URL, URI의 차이 ?
- Uniform Resource Locator 통합 자원 위치표시
- Uniform Resource Identifier 통합 자원 식별자
- 

#### HTTP ?
- HyperText Transport Protocol : 웹서버와 클라이언트간의 문서를 교환하기 위한 통신규약
- Tim Berners Lee, 1989
- 웹에서만 사용하는 Protocol로 TCP/IP기반으로 한 지점에서 다른 지점으로 요청과 응답을 전송한다.
- http://wiki.gurubee.net/pages/viewpage.action?pageId=26739929
- http://sunychoi.github.io/java/2015/04/27/uri-url.html

#### 닷컴버블을 극복하고 살아남은 기업의 특징 
- 참여, 공유, 개방(Web 2.0)

#### 그래서 나오게 된 것 Open API, 그리고 그러한 발전 속에서 AJAX
#### canvas와 svg의 차이

#### 플래시가 없어진 가장 큰 이유는 모바일 환경에서 플래시가 잡아먹는 큰 리소스 -->
 