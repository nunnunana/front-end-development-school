/* control-text-size.js */

var page_header = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');


// 검증
console.log(page_header, increase_btn, decrease_btn)

// page_header 요소 객ㅊ의 글자 크기 초기화
page_header.style.fontSize = '16px';

// 버튼에 이벤트 핸들링(핸들러 - 바인딩)
// increase_btn.onclick = function(){
//   // page_header의 글자 크기를 키운다
//   var current_size = parseInt(page_header.style.fontSize);
//   if ( current_size < 32 ) {
//     // 글자 크기를 변경하여 해당 요소에 설정
//     page_header.style.fontSize = current_size + 5 + 'px';
//     increase_btn.removeAttribute('disabled');
//     decrease_btn.removeAttribute('disabled');
//     console.log( page_header.style.fontSize );
//   } else {
//     increase_btn.setAttribute('disabled','true');
//   }

// };


var litmit_up = 72;
var litmit_down = 10;
var change_text = 12;

function changeTextButton () {
  var current_size = parseInt(page_header.style.fontSize);
  var operator = this.firstChild.nodeValue;
  var _change_text = change_text;

  if ( operator === '-' ) {
    _change_text = change_text * - 1;
    if ( current_size > litmit_down ) {
      page_header.style.fontSize = current_size + _change_text + 'px';
    }
  } 
  if ( operator === '+') {
    if ( current_size < litmit_up ) {
      page_header.style.fontSize = current_size + _change_text + 'px';
    }  
  }
  
  console.log(current_size)

}

increase_btn.onclick = 
decrease_btn.onclick = changeTextButton;


// var litmit_up = 1040;
// var litmit_down = 10;
// var change_text = 12;
// function chageTextButton(){
//   var operator = this.firstChild.nodeValue;
//   var _change_text = change_text;
//   var current_size = parseInt( page_header.style.fontSize );

//   if ( operator === '-') {
//     _change_text = change_text * -1;
//   }
//   if ( current_size < litmit_up ) {
//     page_header.style.fontSize = current_size + _change_text + 'px';
//   }
//   if ( current_size > litmit_up) {

//   }

//   console.log(page_header.style.fontSize);
// }
