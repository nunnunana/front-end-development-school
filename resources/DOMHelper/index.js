/* DOMHelper.js */


// prependChild(부모노드, 자식노드)
// 부모노드의 첫번째 자식노드로 삽입한다.
// ------------------------------------------
// @작성자   eatdesinglove
// @버전    0.0.1
// @param  {ELEMENT_NODE}  parent_node 부모노드
// @param  {ELEMENT_NODE}  child_node  자식노드
// @return {undefined}

function prependChild(parent_node, child_node) {
  parent_node.insertBefore(child_node, parent_node.firstChild);
}

// insertAfter(목표노드, 삽입노드)
// 목표노드 뒤에 삽입노드를 추가한다.
// ------------------------------------------
// @작성자   eatdesinglove
// @버전    0.0.1
// @param  {ELEMENT_NODE}  target_node 목표노드
// @param  {ELEMENT_NODE}  insert_node 삽입노드
// @return {undefined}

function insertAfter(insert_node, target_node) {
  var next_node = target_node.nextSibling; 
  var parent_node = target_node.parentNode;

  if ( next_node ) { parent_node.insertBefore(insert_node, next_node); }
  else { parent_node.appendChild(insert_node); }
}

// .querySelectorAll() 메소드를 단축하여 사용할 수 있는 헬퍼함수



function queryAll(name, context) {
  // 유효성 검사
  // 문자 데이터인지 확인

  // 사용자가 올바른 데이터를 전달하였는가? 검증
  if (typeof name !== 'string') {
    // 조건이 참이 되면 오류 발생
    throw new Error('첫번째 전달인자는 문자 유형이어야 한다.')
  } 

  // context 인자 값을 사용자가 전달하였는가?
  // 사용자가 context 값을 전달하지 않았을 경우는 undefined이다.
  // if (typeof context === 'undefinde');

  if (!context) { context = document; }
  return context.querySelectorAll(name);
}

function query(name, context) {
  return queryAll(name, context)[0];
}

function createEl(name) {
  return document.createElement(name);
}

function createText(name) {
  return document.createTextNode(name);
}

var body = query('body');
