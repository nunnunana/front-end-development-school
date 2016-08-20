/* javascript-core */

// --------------------
// - Hoist
// - closure
// - callback pattern
// - loop + closure
// - IIFE => Module Pattern (Front-End) 
// --------------------

// (function(global){
//   'use strict';
//   // var eatdesignlove; // 지역변수(전역과 충돌하지 않는다.)
//   // console.log(eatdesinglove); // undefined;

//   // 외부에 노출
//   // global.edl = eatdesinglove;

//   // 오늘이 무슨 요일?
//   // 임의로 요일을 조정할 수 있다.
//   // 주중? 주말? 구분하여 콘솔에 출력
//   // 아...출근이여 - 았싸! 주말이다. 놀자!
//   var today = (new Date).getDay()
//   console.log(today)
//     switch(today) {
//       case 0:
//       case 6:
//         console.log("았싸! 주말이다. 놀자!");
//         break;
//       default:
//         console.log("아.. 출근이여")
//     }

// })(this)
(function(global){
  'use strict';
  // .button-set을 선택
  // .button-set 내부에서 .button을 모두 수집
  // 수집된 노드리스트를 순환하여(코드의 흐름제어) 클릭 이벤트에 함수(이벤트 핸들러)를 연결한다.
  // 각 버튼을 사용자가 클릭하 ㄹ경우, 자신의 순환 익덱스 숫자를 콘솔에 출력한다.
  // var button_set = helper.queryAll('.button-set');
  // var buttons = helper.queryAll('.button-set .button');
  // console.log(buttons);
  // 1. forEach 예시 (매개변수가 존재함)
  // buttons.forEach(function(button, idx, buttons){
  //   console.log(arguments)
  // })

  // 2. for 예시 (클로저를 사용한 문제 해결)
  // for (var i =0, l=buttons.length; i<l; i++ ) {
  //   buttons[i].onclick = (function(i){
  //     return function(){
  //       console.log(i);
  //     };
  //   })(i);
  // }

  // 3. for와 객체개념 활용 예시
  // for (var button, i=0,l=buttons.length; i<l;i++){
  //   button = buttons[i];
  //   //객체.속성을 추가하는 방법
  //   // 버튼은 곧 객체, 객체에 속성을 추가한다.
  //   button.index = i;
  //   button.onclick = function(){
  //     // this 키워드를 참조하는 변수
  //     // this를 사용하여 각 버튼 객체의 index 속성값에 접근
  //     console.log(this.index);
  //   }
  // }
  


  // 생성자 함수

  // 숫자 객체 생성자를 사용하여 숫자 1부터 10까지를 변수 num1~num10에 생성하라
  // 단, num1~ num10에는 숫자 값이 담겨야 한다.

  // var i = 1, l = 10 
  // for (;i<l+1;i++) {

  //   var num = 'num' + i
  //   var num = parseInt(new Number(i));
  // }

  // 불리언 객체 생성자를 사용해 불리언, true, false로 연속된느 변수 boo1, boo10에 생성하라
  // 단 boo1 ~ boo10에는 불리언 값이 담겨야 한다.

  global.boo1   = (new Boolean(1)).valueOf();
  global.boo2   = (new Boolean(0)).valueOf();
  global.boo3   = (new Boolean(1)).valueOf();
  global.boo4   = (new Boolean(0)).valueOf();
  global.boo5   = (new Boolean(1)).valueOf();
  global.boo6   = (new Boolean(0)).valueOf();
  global.boo7   = (new Boolean(1)).valueOf();
  global.boo8   = (new Boolean(0)).valueOf();
  global.boo9   = (new Boolean(1)).valueOf();
  global.boo10  = (new Boolean(0)).valueOf();

  // for (var i = 1; i <= 10; i++ ) {
  //   if ( i%2 === i ) {
  //     var global['boo'+i] = (new Boolean(1)).valueOf();
  //   } else {
  //     var global['boo'+i] = (new Boolean(0)).valueOf();
  //   }
  // }

})(this)
