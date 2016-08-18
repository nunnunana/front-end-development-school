/* DOMHelper.js */
(function($){

  // --------------------
  // Selection 
  // --------------------
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
  function prependChild(parent_node, child_node) {
    parent_node.insertBefore(child_node, parent_node.firstChild);
  }
  function insertAfter(insert_node, target_node) {
    var next_node = target_node.nextSibling; 
    var parent_node = target_node.parentNode;

    if ( next_node ) { parent_node.insertBefore(insert_node, next_node); }
    else { parent_node.appendChild(insert_node); }
  }
  function prevEl(node){
    if ( node.nodeType !== 1 ) {
      errorMsg('전달된 인자는 요소노드여야 합니다.');
    }
   do {
     node = node.previousSibling;
   } while( node && node.nodeType !== 1 );
   return node;

    if (node.previousElementSibling) {
      return node.previousElementSibling;
    } 
    else {
      do {
       node = node.previousSibling;
     } while( node && node.nodeType !== 1 );
     return node;
    }
  }
  function nextEl(node) {
    if ( node.nodeType !== 1 ) {
      errorMsg('전달된 인자는 요소노드여야 합니다.');
    }
    if ( node.nextElementSibling ) {
      return node.nextElementSibling;
    } else {
      do {
        node = node.nextSibling;
      } while( node && node.nodeType !== 1 );
      return node;
    }
  }
  function lastEl(node){
    if ( isntElNode(node) )
    return node.lastChild;
  }

  // --------------------
  // Class 
  // --------------------
  function addClass(node, name) {
    if ( isntElNode(node) ) {
      errorMsg('addClass의 인자는 요소노드여야 합니다.')
    }
    if ( isType(name) !== 'string' ) {
      errorMsg('addClass의 두번째 인자는 텍스트여야 합니다.')
    }
    return node.classList.add(name);
  } 
  function removeClass(node, name) {
    if ( isntElNode(node) ) {
      errorMsg('addClass의 인자는 요소노드여야 합니다.')
    }
    if ( isType !== 'string' ) {
      errorMsg('addClass의 두번째 인자는 텍스트여야 합니다.')
    }
    var className = node.getAttribute('class');
    var names = className.split(' ');
    var classValues = [];
    for (var i=0; i < names.length; i++) {
      if ( names[i] !== name ) {
        classValues.push(names[i])
      }
    }
    names = classValues.join(' ')
    return node.setAttribute('class', names)
  }

  // --------------------
  // Node Manipulating
  // --------------------
  function createNode(name, text) {
    var el = createEl(name)
    if ( typeof text !== 'undefined' && typeof text === 'string' ) {
      var el_text = createText(text);
      el.appendChild(el_text);
      return el;
    }
    return createEl(name);
  }
  function createEl(name) {
    return document.createElement(name);
  }
  function createText(name) {
    return document.createTextNode(name);
  }
  function removeNode(node) {
     node.parentNode.removeChild(node)
  }
  function replaceNode(moving_node, target_node) {
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
  // function makeArray(data) {
  //   var choeck_data = isType(data), 
  //       result_arr = [], len = data.length;
  //   if (check_data === 'array') { 
  //     return data;
  //   }
  //   if (len && check_data !=='sting') {
  //     while (len--) {
  //       result_arr.psuh(data[len]);
  //     }
  //   return result_arr.reverse();
  //   }
  // }

  // Array.from을 한 번만 물어보는 방식으로 코드 개선
  // 클로저를 활용하여 매번 구버전/최신브라우저를 조건으로 분기하는 과정을 줄일 수 있다. 반드시 사라지는 변수나 파라미터를 기억하게 하기 위해서 이용되는 것이 아니라는 것을 알 수 있음.

  // 1. 클로저를 사용하는 방법으로 문제해결
  // function convertArray_wrapper(){
  //   var closureFn;
  //   if (Array.from) {
  //     closureFn = function(data) {
  //       return Array.from(data);
  //     };
  //   } else {
  //     colsureFn = function(data){
  //       return Array.prototype.slice.call(data);
  //     }
  //   }
  // }
  // var convertArray = convertArray_wrapper();

  // 2. 약식(IIFE)을 사용하여 클로저 처리방법
  var convertArray = (function(){
    if (Array.from) {
      return function(data){
        return Array.from(data);
      }
    } else {
      return function(data) {
        return Array.prototype.slice.call(data);
      }
    }
  }());

  // --------------------
  // Style 
  // --------------------
  function getStyle(el, property, pseudo) {
    var value;
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
    return value;
  }
  function setStyle(el, property) {
    if ( isntElNode(el) ) {
      errorMsg('첫번째 인자는 요소노드여야 합니다.');
    }
    if ( isType(property) !== 'string' ) {
      errorMsg('두번째 인자는 텍스트여야 합니다.')
    }
    return el.setAttribute('style', property);
  }

  function camelCase(css_prop) {
      return text.replace(/-./g, function($1){
          return $1.replace('-', '').toUpperCase();
      });
  }
  var units = 'px rem em % vw vh vmin vmax'.split(' ');
  function getUnit(value) {
   if ( value.nodeType !== 3 ) {
     errorMsg('인자는 텍스트여야 합니다.')
   }
    getUnit.units = units;
    var i=0, l=getUnit.units.length, unit;
    for ( ; i < l ; i++) {
      unit = getUnit.units[i];
      if (value.indexOf(unit) > -1 ) {
       break;
        return unit
      }
    }
    return null;
  }

  function removeUnit(value){
    var this_unit = getUnit(value);
    return parseInt(value.replace(this_unit,''));
  }

  function hasUnit(value){
    console.log(getUnit(value))
    return (getUnit(value) !== null)
  }

  // --------------------
  // Validation 
  // --------------------
  function isType(data){
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  }
  function isElNode(node) {
    return node.nodeType === 1;
  }
  function isntElNode(node) {
    return !isElNode(node);
   return node.nodeType !== 1;
  }
  function isElName(node, name) {
    if ( isntElNode(node) ) { errorMsg('첫 번째 전달된 인자는 요소노드여야 합니다.') }
    if ( isType(name) !== 'string' ) { errorMsg('두 번째 인자로 텍스트 데이터 유형이 전달되어야 합니다.s') };
   return node.localName === name
    return (node.localName  || node.nodeName.toLowerCase()) === name;
  }
  function isTextNode(node) {
    if ( node.nodeType !== 3 ) {
      errorMsg('전달된 인자는 텍스노드여야 합니다.');
    }
    return (node.nodeType === 3)
  }
  function errorMsg(message) {
    if (isType(message) !== 'string') {
      errorMsg('오류 메시지는 문자 데이터 유형이어야 합니다.')
    }
    throw new Error(message)
  }
  
  // 외부에 공개하고자 하는 내용 (Open API)
  $.helper = {
    'query'       : query,
    'queryAll'    : queryAll,
    'isType'      : isType,
    'isElNode'    : isElNode,
    'isElName'    : isElName,
    'isTextNode'  : isTextNode,
    'prevEl'      : prevEl,
    'nextEl'      : nextEl,
    'lastEl'      : lastEl,
    'prependChild': prependChild,
    'insertAfter' : insertAfter,
    'addClass'    : addClass,
    'removeClass' : removeClass,
    'getStyle'    : getStyle,
    'setStyle'    : setStyle,
    'hasUnit'     : hasUnit,
    'getUnit'     : getUnit,
    'removeUnit'  : removeUnit,
  }

}(this))
