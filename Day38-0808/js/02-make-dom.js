/* 02-make-dom */

// DOM API를 사용하여 문서 객체를 동적으로 생성해보자.

// 1. 요소를 생성하다 <div>this is division.</div>
// var maked_division = document.createElement('div');
// var maked_unordered_list = document.createElement('ul');
// var maked_division_text = document.createTextNode('This is Division.');

// <ul><li></li></ul>
// var maked_unordered_list = document.createElement('ul');
// var maked_unorderd_list_item = document.createElement('li');
// var maked_unordered_list_item_text = document.createTextNode('list item');

// console.log('div:', maked_division);
// console.log('div:', maked_unordered_list);

// console.log('ul:',maked_unordered_list)
// console.log('ul > li:',maked_unorderd_list_item)
// console.log('ul > li_text:', maked_unordered_list_item_text)

// DOM API를 사용하여 문서 객체를 조작해보자.
// --------------------
// 부모_노드.appendChild( 자식_노드 )
// --------------------

// maked_unorderd_list_item.appendChild(maked_unordered_list_item_text);
// maked_unordered_list.appendChild(maked_unorderd_list_item);
// console.log(maked_unordered_list)


// var target_place = document.querySelector('#parent');
// target_place.appendChild(maked_division)
// target_place.appendChild(maked_unordered_list)

// target_place.setAttribute('id', 'list-container');


// --------------------
// insertBefore() 
// --------------------
var unordered_list = document.createElement('ul');
var list_item = document.createElement('li');
var list_item_text = document.createTextNode('This is unordered list item.');

list_item.appendChild(list_item_text)
unordered_list.appendChild(list_item)
console.log(unordered_list)

// var target = document.body.firstChild;
// var target = document.body;
// var elel = document.querySelector('.child-1');
// target.parentNode.insertBefore(unorederd_list, target)
// target.insertBefore(unorederd_list, target);
// prependChild(unorederd_list, 'body')

// --------------------
// function prependChild 
// --------------------
function prependChild(el, parent) {
  // target요소의 
  // 첫번째 자식 앞에 el을 추가한다.
  // console.log(typeof parent);
  var parent_el = parent
  console.log(parent_el)
  var parent_el = document.querySelectorAll(parent);
  // var target = parent_el.firstElementChild;
  // target.insertBefore(el, target);
}

