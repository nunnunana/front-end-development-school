/* make-remove-modal.js */

var is_modal = false;
var script = queryAll('script');
var last_script = script[ script.length - 1 ];
var btn__openModal = query('.btn-modal-open'); //모달 버튼


function makeModal() {

  // Create El & Text

  var modal_container = createNode('div');
  var modal_heading   = createNode('h2', 'Modal Window');
  var modal_desc      = createNode('p', 'Modal Window Content....');
  var modal_btn_cta   = createNode('button','send message');
  var modal_btn_close = createNode('button','x');

  // Set Attr

  modal_container.setAttribute('class', 'modal');
  modal_heading.setAttribute('class', 'modal-title');
  modal_desc.setAttribute('class', 'modal-desc');
  modal_btn_cta.setAttribute('class', 'modal-cta');
  modal_btn_close.setAttribute('class', 'modal-close');
  modal_btn_close.setAttribute('aria-label','close modal window');

  // append Els
  modal_container.appendChild(modal_heading);
  modal_container.appendChild(modal_desc);
  modal_container.appendChild(modal_btn_cta);
  modal_container.appendChild(modal_btn_close);

  is_modal = !is_modal;
  insertAfter(modal_container, last_script);
  btn__openModal.setAttribute('disabled','true');
  var btn__closeModal = query('.modal-close');
  btn__closeModal.onclick = removeModal;
}

function removeModal() {
  var modal = query('.modal');
  this.parentNode.parentNode.removeChild(modal);
  btn__openModal.removeAttribute('disabled');
  is_modal = !is_modal;
}
btn__openModal.onclick = makeModal;



// 코드 설계
// 이 함수는 어떤 일을 하나?
// 전달된 2개의 노드 위치를 교체한다. replaceChild의 한계를 극복.
// 매개 변수 1: 이동시키고자 하는 노드 
// 매개 변수 2: 이동시키고자 하는 목표가 되는 노드

var p_1 = query('.para-1');
var p_2 = query('.para-2');

function chagePositionNodes(moving_node, target_node) {
  // var nodes_parent = moving_node.parentNode;
  // var replaced_node = nodes_parent.replaceChild(moving_node, target_node);
  // nodes_parent.insertBefore(replaced_node, moving_node);
}
