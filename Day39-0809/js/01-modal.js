// --------------------
// Modal.js 
// --------------------

// Create El & Text

var modal_container = createEl('div');
var modal_heading   = createEl('h2');
var modal_desc      = createEl('p');
var modal_btn_cta   = createEl('button');
var modal_btn_close = createEl('button');

var heading_text    = createText('Modal Window');
var desc_text       = createText('Modal Window Content....');
var btn_cta_text    = createText('send message');
var btn_close_text  = createText('x');


// Set Attr

modal_container.setAttribute('class', 'modal');
modal_heading.setAttribute('class', 'modal-title');
modal_desc.setAttribute('class', 'modal-desc');
modal_btn_cta.setAttribute('class', 'modal-cta');
modal_btn_close.setAttribute('class', 'modal-close');
modal_btn_close.setAttribute('aria-label','close modal window');


// append Els

// Text -
modal_heading.appendChild(heading_text);
modal_desc.appendChild(desc_text);
modal_btn_cta.appendChild(btn_cta_text);
modal_btn_close.appendChild(btn_close_text);

// Elements -
modal_container.appendChild(modal_heading);
modal_container.appendChild(modal_desc);
modal_container.appendChild(modal_btn_cta);
modal_container.appendChild(modal_btn_close);

// Body에 추가하기
// body.appendChild(modal_container);

// <body> 요소 맨 앞에 삽입 (각각의 경우 3번 이상 반복해보기)
// 방법 1. 표준 inserBefore() 메소드를 활용
// var script_in_body = body.querySelector('script');
// var script_parent  = script_in_body.parentNode;
// script_parent.insertBefore(modal_container, script_in_body);

// 방법 2. 사용자 정의 헬퍼 함수 prependchild()를 활용
// prependChild(부모노드, 자식노드)
// 부모노드.insertBefore(자식노드, 부모노드의 내부요소)
// function prependChlid() {

// }
// prependChild(body, modal)

// insertAfter() 만들기
// function insertAfter(insert_node, target_node) {
//   var next_node = target_node.nextSibling;  // 대상 뒤에 있는 노드
//   var parent_node = target_node.parentNode; // 대상 노드의 부모 노드

//   // 대상 뒤에 노드가 있을 때,
//   if ( next_node ) {
//     // 대상 노드의 부모노드.구문(넣고자하는 노드, 대상 뒤의 노드);
//     parent_node.insertBefore(insert_node, next_node);
//   }
//   // insertBefore의 구조가 이해가 잘 안됨.
//   // 대상 뒤에 노드가 없을 때,
//   else {
//     // 대상 노드의 부모노드.구문(넣고자 하는 노드)
//     parent_node.appendChild(insert_node);
//   }
// }

var script = queryAll('script');
var last_script = script[ script.length - 1 ];
var btn__openModal = query('.btn-modal-open');

btn__openModal.onclick = function(){

  insertAfter(modal_container, last_script);
  btn__openModal.setAttribute('disabled','true');
  var btn__closeModal = query('.modal-close');
  var modal = query('.modal');

  btn__closeModal.onclick = function(){
    // console.log(this.parentNode.parentNode)
    // 지워야할 항목이 여러개 있을 경우, this를 활용해볼 수 있을듯!
    this.parentNode.parentNode.removeChild(modal);
    btn__openModal.removeAttribute('disabled');
    // body.removeChild(modal);
  }
}


// 1. .modal 찾아와서 제거할 것
// 2. 함수 실행 전에 컨텍스트를 변경해서 제거하는 방법


