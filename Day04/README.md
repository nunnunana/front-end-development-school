#Day04

###복습
###### Vender Prefix
>제조사 접두사
-`-webkit`, `-ms`, `-os`, `-moz`

###### CSS1Compat
특별한 의미가 있다기보단 CSS에 등장한 시기에 썼던 이름이라는 정도로 이해하면 된다.

###### X-UA-Compatible의 의미
이 코드가 없으면 최신 IE브라우저일지라도 IE 7로 동작한다.
또는 서버 세팅값을 통해 서버단에서 처리할 수 있다.

###### MIME TYPE
서버 간 통신에 있어서 파일이 어떤 형식이 무엇인지 할 수 있게 구분지은 것.

###### 언제나 코드의 효용성을 높여 성능을 최적화하자.
예) ie조건부 주석 처리 

###### link의 rel은 '관계'를 설정.

###### 잘쓰이지 않는 HTML 요소가 있다.
- `<dfn>`, `<var>`, `<code>`, `<ruby>`, `<abbr>`

###### Snippet 관리, 코딩 스타일 가이드,


## 문서 구조화(Markup)

###`IMG`
>필수속성
- source: src
- alternate text: alt
- image long description: longdesc (표준이 됨)

>width , height
- img 요소에 크기가 지정되어 있으면 렌더링 과정에서 해당 크기만큼의 영역을 미리 자리를 잡아 로딩 중 UI의 변화가 적게되어 사용자 경험을 위해 넣어주는 것이 좋다는 의견. (권장)
- control + shift + i : img 코드에 width&height를 입력
- px값을 넣지 않고 작성.
- 코드에 둘다 넣어주도록 한다.

>alt
chrome developer 도구를 이용해 간편하게 확인가능.
alt의 길이는 정해져있다. 200자 가량.
longdesc="관련 정보 링크 등을 제공" #image long description.

>title
툴팁을 제공한다. 
그러나 GUI의 산물.


>Image map

```html
<img src="https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiH3oKigq7NAhWEGaYKHctWAzkQjRwIBw&url=http%3A%2F%2Fwww.lahistoriaconmapas.com%2Fatlas%2Fspain-map%2Fworld-map-large.htm&psig=AFQjCNHtOWWewzR7S_Qtiw5qSaktfB2qBQ&ust=1466217027149844" alt="세계지도 링크 서비스" usemap="#world-map">

<map name="world-map" id="world-map">
  <area target="_blank" shape="rect" coords="x1, y1, x2, y2" href="" alt="유럽">
  <area shape="cir" coords="center-x, center-y, radius" href="" alt="">
  <area shape="poly" coords="x1, y1, x2, y2, x3, y3" href="" alt="">
</map>

```
최근에는 css map으로 대체
id를 지원하는 브라우저가 적기 때문에 map에서는 name을 써야한다.
rect : 사각형 / cirlce:원형 / polygon : 다각형
target="_blank"로 새 탭에서 열기.
[summer image map](http://summerstyle.github.io/summer/)
map의 area에도 alt 속성을 반드시 넣어주어야 한다.
css map은 사각형이기때문에 다각형의 링크를 만들어야 하는 경우 사용하기 좋다.
반응형 웹의 경우, Responsive Image maps JQuery Plugin으로 활용가능.

### Sublime Tip, 
- autoFileName : 폴더에 위치한 파일 주소를 간편히 넣을 수 있는 기능 제공.
- `control + w` : wrapping 하여 코드를 빠르게 작성할 수 있는 emmet 기능.
- `control + k + u / l` : uppercase, lowercase

### svg
Photoshop CC에서 svg를 열었을 때 깨져보이는 현상은 단지 현상일 뿐, 실제로 깨어지는 것은 아님.
svg는 xml코드.


### List
- 순차목록 ol (Ordered List)
- 비순차목록 ul (Unordered List)
- 리스트 아이템 li (List Item)
- 정의목록 dl (Definition List)

- `<dfn>`단일한 정의요소를 표현할 때 사용하거나, `<div>`

스크린리더는 순차목록을 읽어주지는 않는다.
NVDA
목록 안에는 항상 li만 허용한다.
jscs
google javascript style guide
chrome computed 에 기록된 내용은 브라우저가 어떻게 인식했는지를 나타낸다.

`<q>` : quotation 요소가 있으나 실제로 쓰이지는 않음

`<blockqoute cite="">` : cite 속성값에 URL을 넣는데, & 는 &amp;로 처리해줘야 한다. 

validator 에러 확인하기

