#Day 01
------

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
#### 1.표준문서의 첫 단추.
DOCTYPE(DTD, Document Type Definition)은 웹표준의 시작과도 같다. 왜냐하면 DTD의 명시여부에 따라 해당 문서는 브라우저에서 [표준모드(Standard Mode)나 비표준모드(Quirk Mode)](http://naradesign.net/wp/2007/03/27/118/)로 인식되기 때문이다.

#### 2.DTD 위에 아무것도 없다.
IE 브라우저에 있어서 DTD 위에 `<!-- 주석 -->`이나 `<?php require'core/init.php';?>` 등 과 같은 코드가 있을 경우, 올바르지 않은 DTD로 인식하여 비표준으로 인식된다. 따라서 DTD위에는 아무것도 기입되지 않는 것이 좋다. 한편, DTD는 대소문자를 구분하지는 않는다.

```php
<?php require'core/init.php';?>
<?php include_once 'include/IE8Etc.php';?>
<!doctype html>
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<html>
<head>
<meta charset="UTF-8">
<title>Title</title>
```

>
관련링크
- [DTD 위에 주석이 올 경우 발생하는 문제](http://f10024.tistory.com/1)
- [IE renders my page in Quirks mode](http://stackoverflow.com/questions/18517290/ie-renders-my-page-in-quirks-mode?rq=1)
>

#### 3.표준모드로 렌더링되는지 확인하는 방법

작성한 문서가 표준모드로 렌더링되는지는 Console창을 통해 확인가능하다.
```javascript
document.compatMode 
```
- 표준문서인 경우, `CSS1Compat`
- 비표준문서인 경우, `BackCompat`


------

###HTML문서의 기본 구조
#### 1.기본 구조
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
HTML문서는 `<html>`을 Root요소로 가지는데, 이것은 `<head>`와 `<body>`만을 자식요소로 갖는다.
`<head>`요소에는 반드시 `<title>` 요소가 포함되어야 하고, 이것은 브라우저 탭의 제목으로 표시된다.


#### 문서에 관한 메타데이터를 담고 있는 `<Meta>` 요소 
메타데이터란 데이터 관리상 필요한 작성자·목적·저장 장소 등 속성에 관한 데이터다.
`<meta>` 요소는 title, base, link, style, script요소로 표현할 수 없는 다양한 메타데이터를 표시하며, head 또는 head의 자식요소인 noscript요소 아래 작성할 수 있다.

```html
<!DOCTYPE html>
<html lang="ko" dir="ltr"> #1
<head>	
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> #2
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
	<title>Document</title>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
</head>
<body>
	
</body>
</html>
```
##### meta:utf
네트워트 상에서 MIME TYPE을 통해 응답을 받을 때, 어떠한 컨텐츠를 가지고 있는지 파악.
서버에서 셋팅되지 못한 값을 처리하는 것이므로 `<title>` 위에 작성한다.
html5부터 `content="text/html"`이 기본값으로 포함

```html
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> #meta:utf
<meta charset="UTF-8"> #HTML5에서는 이와 같이 줄여서 표현 가능
```



- meta http-equiv로 시작되는 meta태그는 title 위쪽에 작성해준다. 
  전처리 구문 지시자로 페이지 로딩 전 정의한 사항을 먼저 수행한다.
- meta name으로 시작되는 태그의 경우는 title 아래에 작성.
- meta 요소는 title 요소나 base 요소, link 요소, style 요소, script
	요소로 표현할 수 없는 다양한 메타데이터를 표시한다.
- meta 요소는 head 또는 head의 자식요소인 noscript요소 아래 작성할 수 있다.
- inflearn.com

#####meta:compat
`<meta http-equive="X-UA-Compatible" content="IE=Edge">`를 사용함으로써 IE최신 버전에 맞추어 렌더링 된다. (IE의 호환성보기 모드를 Edge모드로 렌더링) 이 코드가 없을 때는 최신브라우저임에도 IE 7로 인식한다.

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" /> # chrome=1 이 포함된 부분은 문제.
```

#####meta:vp
- <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
- meta정보 값은 페이지별로 다르게 제공해주는 것이 좋다.

```html
<meta name="description" content="프론트엔드 개발을 위한 html 마크업을 다루고 있습니다."> # 2-300자 내외에서 작성
<meta name="keywords" content="프론트엔드,개발,스쿨,디자인,패스트캠퍼스"> # 10개 내외로 작성한다.
<meta name="author" content="eatdesignlove"> 
```


####절대경로와 상대경로의 차이

```
/  (절대경로, root 경로로부터, 서버환경에서 구동할때 사용가능) 
./ (현재경로부터)
../ (상대경로, 상위 경로를 의미)
```



## 더 알아보기
####URL, URI의 차이 ?
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

#### 플래시가 없어진 가장 큰 이유는 모바일 환경에서 플래시가 잡아먹는 큰 리소스
 