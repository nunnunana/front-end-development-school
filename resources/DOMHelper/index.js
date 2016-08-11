/* DOMHelper.js */


// body 변수
var body = query('body');

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
  if (typeof name !== 'string') {
    throw new Error('첫번째 전달인자는 문자 유형이어야 한다.')
  }
  if (!context) { context = document; }
  return context.querySelectorAll(name);
}

function query(name, context) {
  return queryAll(name, context)[0];
}


// 요소에 클래스를 동적으로 부여하는 핼퍼 함수

function addClass(node, name) {
  var className = node.getAttribute('class');
  name = className +' '+ name
  return node.setAttribute('class',name);
} 


// 요소에 클래스를 동적으로 제거하는 핼퍼 함수

function removeClass(node, name) {
  // 배열로 만들고, name을 제거한 뒤 다시 배열로 만들어 class화 한다. 
  var className = node.getAttribute('class');
  // 등록된 클래스를 배열로 변환한다.
  var names = className.split(' ');
  var classValues = [];
  // for문을 통해 삭제할 배열요소를 걸러낸다.
  for (var i=0; i < names.length; i++) {
    if ( names[i] !== name ) {
      classValues.push(names[i])
    }
  }
  // 다시 배열으로 등록된 요소들을 띄어쓰기를 포함하여 문자열화한다.
  names = classValues.join(' ')
  // node의 클래스로 등록한다.
  return node.setAttribute('class', names)
}

// 노드를 생성하는 핼퍼 함수

function createEl(name) {
  return document.createElement(name);
}

function createText(name) {
  return document.createTextNode(name);
}

// 요소, 요소를 포함한 텍스트 노드를 생성하는 핼퍼 함수

function createNode(name, text) {
  var el = createEl(name)
  if ( typeof text !== 'undefined' && typeof text === 'string' ) {
    var el_text = createText(text);
    el.appendChild(el_text);
    return el;
  }
  return createEl(name);
}

// 문서 객체를 제거하는 핼퍼 함수

function removeNode(node) {
   node.parentNode.removeChild(node)
}

// 위치를 변경하는 replaceNode함수
function replaceNode(moving_node, target_node) {
  // 1.moving_node의 이웃을 통해 moving_node의 원래 위치를 저장한다.
  // 2.target_node를 moving_node와 replaceChild()한다.
  // 3.replaceChild()의 반환 값을 moving_node의 원래 위치에 삽입한다.
  var next_node = moving_node.nextSibling;
  console.log(next_node)
  var parent_node = moving_node.parentNode;
  var origin_node = parent_node.replaceChild(moving_node, target_node);
  parent_node.insertBefore(origin_node, next_node);
  if ( !next_node ) {
    parent_node.appendChild(origin_node); 
    console.log(ii);
  }
}


// --------------------
// 스타일을 가져오는 핼퍼 함수
// --------------------

function getStyle(el, property, pseudo) {
  var value;
  // 유효성 검사
  if ( el.nodeType !== 1 ) {
    console.error('첫번째 인자 el은 요소노드여야 합니다.')
  }
  if ( typeof property != 'string') {
    console.error('두번째 인자 property는 문자열이어야 합니다.')
  }
  if ( typeof pseudo !== 'string' && pseudo ) {
    console.error('세번째 인자 pseudo는 문자열이어야 합니다.')
  }

  if (window.getComputedStyle) {
    value = window.getComputedStyle(el,pseudo)[property];
  } else {
    value = el.currentStyle[property];
  }
  return value;ß
}
