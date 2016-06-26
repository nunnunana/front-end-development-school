#Day04

## 잘 쓰이지 않는 HTML 요소
`<dfn>`, `<var>`, `<code>`, `<ruby>`, `<abbr>`, `<q>`, `<blockqoute>` 등

```html
<p><abbr title="abbreviation">&lt;abbr&gt;</abbr>은 약어 혹은 두문자어를 나타내는 요소입니다.
</p>

<p><dfn>&lt;dfn&gt;</dfn>은 개념의 정의를 타나내는 요소입니다.</p>
<p><dfn><abbr  title="HyperText Markup Language">&lt;dfn&gt;</abbr></dfn>은 title이 있을 경우, title이 정의됩니다.</p>
<p><dfn title="HyperText Markup Language">&lt;dfn&gt;</dfn>은 title이 있을 경우, title이 정의됩니다.</p>
# <abbr>또는 <dfn>의 title 속성 유무에 따라 정의대상이 달라진다.

<var>x</var> + <var>y</var> = 10
# 수학적 표현이나 프로그래밍 문백의 변수를 나타냄

<code class="language-pascal">code</code> 
#컴퓨터 코드의 일부를 나타내는 요소입니다. 코드에 'language-전치사' 클래스를 부여하면 구문이 강조된다.

<ruby>
  明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
</ruby>
# 동아시아 문자들의 발음을 표기하기 위해 사용

<base href="http://your-domian.com/" target="_blank">
# 문서의 기본 URL을 명시할 때 사용.
# 문서 하나에 한 번만 사용가능.
# head안에 위치 

<q cite="http://en.wikipedia.org/wiki/Kenny_McCormick#Cultural_impact">Oh my God, you/they killed Kenny!</q>
# 단락 구분이 필요없는 짧은 인라인 인용문을 의미
# quotation 요소가 있으나 실제로 잘 쓰이지는 않음

<blockqoute cite="http://en.wikipedia.org/wiki/Kenny_McCormick#Cultural_impact">Oh my God, you/they killed Kenny!</blockqoute>
# 감싸진 텍스트가 긴 인용문의 의미
# cite 속성값에 인용된 정보의 원본 문서나 메세지를 가리키는 URL을 넣는데, & 는 &amp;로 처리해줘야 한다. 
```

## 문서 구조화(Markup)

### 1. img
#### 필수속성
- `src` : source 이미지 소스 주소
- `alt` : alternate text 대체 텍스트
- `longdesc` : image long description (표준이 됨)

#### width , height
- img 요소에 크기가 지정되어 있으면 렌더링 과정에서 해당 크기만큼의 영역을 미리 자리를 잡아 로딩 중 UI의 변화가 적게되어 사용자 경험을 위해 넣어주는 것이 좋다는 의견. (권장)
- px값을 넣지 않고 작성.
- 코드에 둘다 넣어주도록 한다.

#### alt
chrome developer 도구를 이용해 간편하게 확인가능.
alt의 길이는 정해져있다. 200자 가량.
longdesc="관련 정보 링크 등을 제공" #image long description.

#### title
마우스 오버시 툴팁을 제공한다. 그러나 GUI의 산물.


>포토샵에서 설정하는 dpi 96 / 72 의 차이는 웹타이포그래피 pt의 크기와 관련된 것! 이미지는 영향을 받지 않는다.


### 2. Image Map
img요소의 속성으로 usemap을 작성하고, map요소의 name혹은 id값과 연결한 뒤, area요소를 통해 이미지 맵을 정의할 수 있다.

```html
<img src="https://www.google.co.kr/url?sa=i&amp;rct=j&amp;q=&amp;esrc=s&amp;source=images&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwiH3oKigq7NAhWEGaYKHctWAzkQjRwIBw&amp;url=http%3A%2F%2Fwww.lahistoriaconmapas.com%2Fatlas%2Fspain-map%2Fworld-map-large.htm&amp;psig=AFQjCNHtOWWewzR7S_Qtiw5qSaktfB2qBQ&amp;ust=1466217027149844" alt="세계지도 링크 서비스" usemap="#world-map">

<map name="world-map" id="world-map">
  <area shape="rect" coords="x1, y1, x2, y2" href="" alt="유럽" target="_blank" >
  <area shape="cir" coords="center-x, center-y, radius" href="" alt="">
  <area shape="poly" coords="x1, y1, x2, y2, x3, y3" href="" alt="">
</map>

```

- rect : 사각형 / cirlce:원형 / polygon : 다각형
최근에는 css map으로 대체(그러나 css map은 사각형 링크만 가능)
*id를 지원하는 브라우저가 적기 때문에* map에서는 name을 써야한다.
map의 area에도 alt 속성을 반드시 넣어주어야 한다.
css map은 사각형이기때문에 다각형의 링크를 만들어야 하는 경우 사용하기 좋다.
반응형 웹의 경우, *Responsive Image maps JQuery Plugin*을 활용가능.
[summer image map](http://summerstyle.github.io/summer/)

### 3. svg
SVG(Scalable Vector Graphics, SVG)는 2차원 벡터 그래픽을 표현하기 위한 XML 기반의 파일 형식으로, 1999년 W3C(World Wide Web Consortium)의 주도하에 개발된 오픈 표준의 벡터 그래픽 파일 형식이다. SVG 형식의 이미지와 그 작동은 XML 텍스트 파일들로 정의 되어 검색화·목록화·스크립트화가 가능하며 필요하다면 압축도 가능하다.
[위키백과](https://ko.wikipedia.org/wiki/%EC%8A%A4%EC%BC%80%EC%9D%BC%EB%9F%AC%EB%B8%94_%EB%B2%A1%ED%84%B0_%EA%B7%B8%EB%9E%98%ED%94%BD%EC%8A%A4)

Photoshop CC에서 svg를 열었을 때 깨져보이는 현상은 단지 현상일 뿐, 실제로 깨어지는 것은 아님. svg는 xml코드.

### 4. List
List 요소는 목록을 구조화할 때 사용하는 요소이다. 

- 순차목록 ol (Ordered List)
- 비순차목록 ul (Unordered List)
- 리스트 아이템 li (List Item)
- 정의목록 dl (Definition List)

```html
<ol>
  <li>순차 목록 리스트 1</li>
  <li>순차목록 리스트 2</li>
</ol>

<ul>
  <li>비순차목록 리스트 1</li>
  <li>비순차목록 리스트 2</li>
</ul>

<dl>
  <dt>정의 대상</dt>
  <dd>정의 내용 1</dd>
  <dd>정의 내용 2</dd>
</dl>

```
스크린리더는 순차목록을 읽어주지는 않는다.
목록 안에는 항상 li만 허용한다.


### 5. Table
`<th>` : Table cell Header 
`<tr>` : Table cell Row
`<td>` : Table cell Data

```html
<table summary="본 표는 2행 2열로 구성된 표이며..입니다.">
  <tr>
    <th>Element</th>
    <th>Description</th>
  </tr>
  <tr>
    <th>
      <code>&lt;base&gt;</code>
    </th>
    <td>
      <!-- 축약 abbreviation -->
      HTML Base요소 (<code>&lt;base&gt;</code>)는 문서에 포함된 모든 상태 <abbr title="Uniform Resource Locator">URL</abbr>들의 기준 <abbr>URL</abbr>을 나타냅니다.
      한문서에 하나의 <code>&lt;base&gt;</code> 요소만이 올수 있습니다.
    </td>
  </tr>
</table>
```

- `border`,`cellpadding`,`cellspacing`, `bgColor`, 속성 대신 css로 표현을 다룬다.
- `<thead></thead>` : 제목 (`thead`와 `tfoot`은 필수가 아님.)
- `<tfoot></tfoot>` : 하단 (코드 구조상은 `<thead>`밑에 작성하지만 디자인 상으로 하단에 위치함.)
- `<tbody></tbody>` : 내용 (아무런 설정이 없을시 자동생성)

- `colspan` : table에서 컬럼을 합치는 역할
- `rowspan` : table에서 행을 합치는 역할
- `<caption></caption>` : *접근성을 위해* table에는 반드시 제목이 필요하다. caption을 통해 제목.

- `colgroup`,`col` : 컬럼의 스타일을 다룰때 사용할 수 있다. 

```html
<table>
  <colgroup >
    <col span="1" style="background:cyan">
    <col span="1" style="background:#acacac">
    <col span="1" style="background:#fff">
  </colgroup>
  <thead>
    <tr>
      <th>HTML5</th>
      <th>하이퍼텍스트 마크업 언어</th>
      <th>colgroup과 col의 사용법</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th>1</th>
    <td>2</td>
    <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>3</td>
    </tr>
  </tbody>
  
</table>
```

```html
<p id="metadata-table-summary">본 표는 4행 3열로 구성된..</p>
<table aria-describedby="metadata-table-summary"></table>
```

- `summary` : HTML5에서는 문법 오류. 왜? summary가 표준으로 제공될 때 사람들이 caption과 거의 동일하게 사용하여 요소의 필요성에 대해 의문이 제기되었고 결국 비표준화됨. WAI-ARIA를 사용한다. 접근성 측면에서 사용되어 왔음.
- `aria-describedby` : id와 연결하지만, #을 넣지 않는다. ARIA-labelledby보다 더 상세한 설명이 필요할 때 사용하며, 모든 요소에 사용가능
- `aria-labelledby` : 여러 개의 폼 요소를 그룹화하여 동일한 'Label'값으로 묶어서 제공하고 싶을 때 사용
- `scope` : 접근성을 위해서, th가 `thead`, 그리고 `tbody`에 포함되어 있을때, 스크린리더 사용자가 정보습득의 어려움을 겪지 않도록 scope를 지정해줘야 한다.
- `<select>`를 쓰지 않고 `<span>`,`<ul><li></li></ul>` 등을 이용해 만드는 Custom Select Box를 만들 때, WAI-ARIA를 통해 의미를 부여할 수 있다.

### 6. Form
#### input
`enctype="multipart/form-data"`는 텍스트가 아닌 데이터를 활용할 때 넣어준다.
서버에 전송하기 위해서는 *name값이 필요*하다. 동시에 *접근성을 위해서는 id값이 필요*하다.

```html
<form
  name="register_form"
  action="#"
  method="GET">
  <p>
    <!-- input요소에 암묵적 레이블 연결 : 일부스크린리더는 제대로 인식하지 못함 -->
    <label>ID1: <input type="text"></label>
    <!-- input요소에 명시적 레이블 연결 -->
    <label for="user_id">ID2:</label>
    <input id="user_id" type="text"> <!-- id은 label과 연결시키기 위해 존재 -->
  </p>
  <p>
    <label for="user_password">PASS:</label> 
    <input name="user_password" id="user_password" type="password" >
  </p>
  <p>
    <label for="user_email">E-MAIL:</label>
    <input name="user_email" id="user_email" type="email">
  <p>
    <button type="submit">전송</button> 
    <button >리셋</button>
  </p>
</form>
```

#### GET vs POST 차이
GET 또는 POST는 HTTP프로토콜을 이용해서 서버에 무언가를 전달할 때 사용하는 방식


##### GET
- URL에 정보가 담겨서 전송된다.
- 전송할 수 있는 정보의 길이가 제한되어 있다.
- 퍼머링크로 사용될 수 있다. #고유한 주소
- 정보를 가져오고자 할 때 주로 사용

##### POST
- header의 body에 담겨서 전송된다.
- URL 상에 전달한 정보가 표시되지 않는다.
- GET에 비해서 보안상 약간의 우위에 있다. (사실상 동일하다)
- 전송할 수 있는 데이터의 길이 제한이 없다.
- 퍼머링크로 사용할 수 없다. 
- 서버 쪽에 어떤 작업을 명령할 때 사용한다. (데이터의 기록, 삭제, 수정 등)

>- [GET과 POST의 차이, Outsider](https://blog.outsider.ne.kr/312)
- [GET과 POST의 차이, 생활코딩](https://blog.outsider.ne.kr/312)

### 참고자료
>- [야무님, 웹표준화 카페](http://cafe.naver.com/webstandardproject/603)
- [webdesign.tutsplus.com](http://webdesign.tutsplus.com/)
- GridLove
- Javascript Style guide
- NVDA : 오픈소스 스크린리더로서 무료로 사용 가능하며 다국어를 지원합니다.

### * Sublime Tip
- autoFileName : 폴더에 위치한 파일 주소를 간편히 넣을 수 있는 기능 제공.
- `control + w` : wrapping 하여 코드를 빠르게 작성할 수 있는 emmet 기능.
- `control + k + u / l` : uppercase, lowercase
- `control + shift + i` : img 코드에 width&height를 빠르게 입력
- Emmet에서 `input:password` 는 input 의 type="password"

###### Vender Prefix
>제조사 접두사
-`-webkit`, `-ms`, `-os`, `-moz`

###### link의 rel은 '관계'를 설정.


