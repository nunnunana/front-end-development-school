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
  addClass(modal_container, 'modal');
  addClass(modal_heading, 'modal-title');
  addClass(modal_desc, 'modal-desc');
  addClass(modal_btn_cta, 'modal-cta');
  addClass(modal_btn_close, 'modal-close');
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
