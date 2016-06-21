##Day04

## 웹 디자인의 역사
>1.웹의 시작 (1989) : 모노스페이스, 특수문자, 탭키
1. 테이블 (1997) : 데이빗 시겔
1. 자바스크립트 (1995) : 자바스크립트는 cpu, css는 gpu를 사용한다.
1. 플래시 (1996)
1. CSS (1998)
1. 그리드 & 프레임워크의 도래 (2007)
1. 반응형 웹 디자인 (2010)

구조의 선형화란, 컨텐츠의 논리적인 구조를 만드는 것. 프론트엔드 개발자가 HTML을 이용해서 해야하는 것이 바로 구조의 선형화이다.

웹의 본질, 접근성을 지킨 색다른 표현을 하기, 유니버셜 디자인의 구현. 데이터를 활용하기. 

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

##### label 요소
암묵적 label 작성이 잘못된 것이 아니다. 단지, 국내환경에서 일부 스크린 리더가 label값을 제대로 읽어주지 못하는 경우가 있긴 하므로 경우에 맞게 적합한 선택을 할 필요가 있다.

##### button
a 요소로 버튼을 만들더라도 role 변경을 통해 이용가능. 


##### input:submit

과거 이미지 버튼을 만들 수 없을 때, 컨텐츠를 넣을 수 있는 Button 요소를 활용했었음. 버튼은 버튼다운 모양을 지녀야하며, 서비스는 어포던스를 제공할 수 있어야 한다.

input:submit을 사용했을 경우, value값을 지정해서 브라우저에 관계없이 동일한 내용을 전달하도록 조치해야 한다.


##### input:radio
name이 같아야 하나만 선택되게 된다.
checked를 넣어 기본값을 제공할 수 있음.

전송한 데이터는 "string"으로 전송됨.
split('&')으로 쪼개어 활용가능.

##### input 그 외
input:hidden

###### 속성
maxlength :
checked :
selected :
disabled :
placeholder : 


##### textarea
contenteditable 속성을 통해 내용을 수정해서, 전송도 가능함(표준)


##### select
```
<div>
	<h3>Your Job</h3>
		<select name="register=job">
			<option value="">Select your job</option>
			<option value="instructor">Instructor</option>
			<option value="student">Student</option>
			<option value="doctor">Doctor</option>
			<optgroup label="web">
				<option value="developer">Developer</option>
				<option value="developer">Desiger</option>
				<option value="developer">Planner</option>
			</optgroup>
		</select>
</div>
```

##### fieldset & legend
```
<fieldset>
	<legend>필수 입력사항</legend>
	<input type="text">
	<input type="text">
	<input type="text">
</fieldset>
```


form의 name이 'regiset-form'인 경우, `document['register-form']`로 찾을 수 있음.

`chrome://flag > 개발자도구 설정`를 통해 접근성 검사기를 콘솔에 활성화 가능

`<meta http-equiv="X-UA-Compatible" content="IE=Edge" />`
코드 끝에 존재하는 `/>`는 xhtml 시절의 유물. `/`전에 한 칸을 띄운 이유는 하위 브라우저 호환때문이라고 함? 확인이 필요





##### 따로 공부해볼 것
//input 속성 둘러보기
//이미지슬라이싱
//이미지스프라이트기법
//flexbox
//contenteditable로 form만드는 것 찾아보기