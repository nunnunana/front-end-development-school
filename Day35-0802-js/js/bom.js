/// --------------------
// BOM JS 
// --------------------
// 자바스크립트 변수는 변수 이름 앞에 var 키워드를 붙인다.

// var device_pixel_density
// 카멜케이스 표기식
// 음절+음절 맡다을 때 뒷음절의 철 글자가 대문자가 되는 것을 말한다

var dp = window.devicePixelRatio;

// 웹브라우저의 콘솔(console) 패널에 기록을 남긴다.
console.log('기기의 픽셀 농도:', dp);

// Sass 조건문
// @if dp == 1 {
//   @debug "일반 디스플레이의 농도를 픽셀 가집니다."
// }

// JavaScript 조건문
if (dp > 1) {
  console.log("고해상도 디스플레이의 픽셀 농도를 가집니다.");
} else {
  console.log("일반 디스플레이의 픽셀 농도를 가집니다.");
}


// --------------------
// window의 화면 가로 폭 
// --------------------
var window_w = window.innerWidth;
var window_h = window.innerHeight;

console.log('window_w:', window_w); //브라우저에서 보이는 화면의 가로
console.log('window_h:', window_h); //브라우저에서 보이는 화면의 세로(개발자 도구 제외)

// --------------------
// window.scrollX
// window.pageXOffset 
// window.scrollY
// window.pageYOffset
//
// 페이지의 좌측 상단을 기준으로 좌표를 찾아가는 방법
// 동일한 기능, 다른 이름
// --------------------
var window_scrollX = window.scrollX; 
var window_scrollY = window.scrollY;

console.log("scrollX:", window_scrollX );
console.log("scrollY:", window_scrollY );

// 기능을 감지해서 브라우저를 구분하는 방법, Modernizr

// 변수 선언만 하는 경우. 즉, 값이 대입되지 않은 경우
// undefined 값이 기본으로 할당되어 있다.
// = 연산자는 할당(대입)연산자라고 한다.
var scroll_Y; //undefined

// 이미 객체의 속성이 정해진 값을 사용자가 덮어쓰게 된다면,
// 덮어쓴 값이 출력된다. (자바스크립트의 약점. 태생적 한계)
// 초창기 자바스크립트 환경에서는 문법이 엄격할 수가 없었다.
// 'use strict';



// 1. window 전역 객체의 속성 중에 scrollTop이 있는가 확인?
// scrollTop을 지원한다는 것은 구형 IE를 감지하는 것이다.
if (window.scrollTop) {
  // scrollTop 속성이 window 전역 객체에 존재한다면 조건이 참(true)
  // scroll_Y 변수에 window.scrollTop이 가리키는 값을 할당한다.
  scroll_Y = window.scrollTop;
} 
  // 그렇지 않다면.
else {
  // scroll_Y 변수에 window.scroll_Y이 가리키는 값을 할당한다.
  scroll_Y = window.scrollY;
}

// window도 객체. 객체지향
// BOM도 일종의 빌트인

// --------------------
// window 객체의 메소드(함수)
// 메소드 : 객체가 소유하고 있는 함수. 
// --------------------

window.alert('다이얼로그 창을 띄움으로서 사용자에게 메시지를 보여준다.');

var is_jedi = window.confirm('당신은 제다이입니까?');
console.log('is_jedi', is_jedi)

if (is_jedi) {
  // 사용자의 입력값을 받아왔다면, 이를 기억해둑 위해서 변수가 필요하다.
  var name = window.prompt('오, 제다이여. 이름이 무엇입니까?');
  console.log("어서오십시오." + name +"님. 요다 스승께서 기다리고 계십니다.")
} else {
  console.log("다음 인연에 만나도록 하지요.")
}

// --------------------
// 시간을 제어하는 window 객체의 메소드
// window.setInterval()
// window.setTimeout() 
// --------------------

//Sass 함수
// $count: 10;
// @function countDown(){
//   $count: $count - 1;
//   @return $count;
// }

// 자바스크립트 함수
var count = 10;
function countDown(){
  count = count - 1;
  console.log(count)
}

setInterval(countDown, 1000)

// 컴퓨터에게 일을 반복적으로 수행하도록 시켰으

// 오늘 다룬 내용
// devicePixelRatio
// innerHeight
// innerWidth
// pageXOffset
// pageYOffset

// alert
// console
// confirm
// prompt

// resizeTo
// resizeBy
// scrollTo
// ScrollBy


