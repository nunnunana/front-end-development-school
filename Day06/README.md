###### eatdesignlove's Front-End-Development Study

#Day04

## 웹 디자인의 역사
>- 웹의 시작 (1989) : 모노스페이스, 특수문자, 탭키
- 테이블 (1997) : 데이빗 시겔
- 자바스크립트 (1995) : 자바스크립트는 cpu, css는 gpu를 사용한다.
- 플래시 (1996)
- CSS (1998)
- 그리드 & 프레임워크의 도래 (2007)
- 반응형 웹 디자인 (2010)

##### 구조의 선형화
컨텐츠의 논리적인 구조를 만드는 것. 프론트엔드 개발자가 HTML을 이용해서 해야하는 것이 바로 구조의 선형화이다.

#####  앞으로의 방향성
웹의 본질, 접근성을 지킨 색다른 표현을 하기, 
유니버셜 디자인의 구현. 데이터를 활용하기. 


## HTML 폼 디자인

```html
<form action="" name="register-form" method="POST" enctype="multipart/form-data">
		<div>
			<label for="register-id">ID</label>
			<input id="register-id" type="text">
		</div>
		<div>
			<label for="register-password">PASSWORD</label>
			<input id="register-password" type="password">
		</div>		
		<input type="submit" value="버튼 내용을 바꿉니다.">
		<!-- 어느것을 써도 상관은 없음 -->
		<button type="submit">버튼</button>
		<!-- 과거 이미지 버튼을 만들 수 없을 때, 컨텐츠를 넣을 수 있는 Button 요소를 활용했었음. -->
</form>
<!-- button:button인 경우, form밖에서 쓸 수 있음 -->
<!-- button에는 submit, reset, button 의 종류가 있음 -->
<button type="button">버튼</button>

```

### 1. label 요소
암묵적 label 작성이 잘못된 것이 아니다. 단지, 국내환경에서 일부 스크린 리더가 label값을 제대로 읽어주지 못하는 경우가 있긴 하므로 경우에 맞게 적합한 선택을 할 필요가 있다.

### 2. button
a 요소로 버튼을 만들더라도 role 변경을 통해 이용가능. 


### 3. input:submit
과거 이미지 버튼을 만들 수 없을 때, 컨텐츠를 넣을 수 있는 Button 요소를 활용했었음. 버튼은 버튼다운 모양을 지녀야하며, 서비스는 어포던스를 제공할 수 있어야 한다.

input:submit을 사용했을 경우, value값을 지정해서 브라우저에 관계없이 동일한 내용을 전달하도록 조치해야 한다.


### 4. input:radio
name이 같아야 하나만 선택되게 된다.
checked를 넣어 기본값을 제공할 수 있음.

전송한 데이터는 "string"으로 전송됨.
split('&')으로 쪼개어 활용가능.

### 5. input 그 외
- input:hidden

#### 속성
- maxlength : 폼 콘트롤의 최대 길이를 지정하는 속성
- checked : input요소가 체크되었는지 나타냄
- selected : 선택 여부에 대한 기본 값을 나타냄
- disabled : 이 속성을 지정하면 요소가 화면에 표시되기는 하지만 사용자가 입력하거나 수정할 수 없습니다.
- placeholder : placeholder 속성은 '짧은'힌트(한 단어나 짧은 구)를 나타냄

#### textarea
여러 줄의 텍스트를 편집할 수 있는 컨트롤

- **autofocus** : 	페이지가 로드될 때 요소가 자동으로 포커스를 받습니다.
- **cols** : 	한 줄당 입력할 수 있는 글자수를 제한합니다.
- **disabled** : 	사용자가 입력하거나 수정할 수 없도록 설정합니다.
- **dirname** : 	textarea 요소의 방향성을 제출합니다.
- **form** : 	연관된 form 요소를 명시적으로 연결합니다.
- **maxlength** : 	포함할 수 있는 문자열의 최대 값을 정의합니다.
- ** name** : 	폼 제출 시에 사용되는 폼 컨트롤의 이름을 나타냅니다.
- **placeholder** : 	사용자의 입력을 돕는 힌트 메시지를 입력합니다.
- **readonly** : 	편집 여부를 정의합니다.
- **required** : 	폼을 제출할 때 반드시 값을 입력하도록 강제합니다.
- **rows** : 	textarea 요소가 몇 줄로 보일지를 결정합니다.
- **wrap** : 	텍스트의 줄바꿈 여부를 결정합니다.


>#####contenteditable 
요소를 편집 모드로 변경함. 속성을 통해 내용을 수정해서, 전송도 가능함 (표준)

### select
폼에서 사용자가 선택할 수 있는 옵션의 목록을 나타냄. 자식 요소로 option 요소 또는 optgroup 요소를 포함할 수 있다.

```html
<div>
	<h3>Your Job</h3>
		<select name="register=job">
			<option value="">Select your job</option>
			<option value="instructor">Instructor</option>
			<option value="student">Student</option>
			<option value="doctor">Doctor</option>
			<!-- select option의 그룹을 묶어준다. -->
			<optgroup label="web">
				<option value="developer">Developer</option>
				<option value="developer">Desiger</option>
				<option value="developer">Planner</option>
			</optgroup>
		</select>
</div>
```

#### fieldset & legend
공통 이름으로 그룹화 된(이 그룹화는 선택적입니다) 폼 컨트롤 집합을 나타냄.  legend 요소는 그룹의 이름으로 사용되며 나머지 자식 요소로 그룹을 형성한다. 섹션 루트인 fieldset 요소는 독립된 개요(아웃라인)를 생성하며 fieldset 요소안에 사용된 섹션과 제목은 개요(아웃라인) 생성에 관여하지 않는다.

```html
<fieldset>
	<legend>필수 입력사항</legend>
	<input type="text">
	<input type="text">
	<input type="text">
</fieldset>
```

## HTML Script
`<script>` 또는 `<noscript>` 요소는 head와 body 안쪽에 위치한다.
오늘날 대체가능한 방법들이 존재하는 이유로 `<noscript>`는 잘 쓰이지 않는다. ex) Modernizer 라이브러리 활용 코드 


## 참고자료
>- `chrome://flag > 개발자도구 설정`를 통해 접근성 검사기를 콘솔에 활성화 가능
- `<meta http-equiv="X-UA-Compatible" content="IE=Edge" />` 코드 끝에 존재하는 `/>`는 xhtml 시절의 유물. `/`전에 한 칸을 띄운 이유는 하위 브라우저 호환때문이라고 한다.