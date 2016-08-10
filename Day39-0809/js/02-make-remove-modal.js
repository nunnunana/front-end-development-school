/* make-remove-modal.js */


var is_modal = false;
var script = queryAll('script');
var last_script = script[ script.length - 1 ];
var btn__openModal = query('.btn-modal-open'); //모달 버튼


function makeModal() {

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


