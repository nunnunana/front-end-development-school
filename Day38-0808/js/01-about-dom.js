var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

// parent_el 변수에 참조된 객체의 자식 노드들을 수집.
// console.log(parent_el_child_nodes);
// console.log('수집된 parent_el의 자식 노드의 개수: ', parent_el_child_nodes.length);

// 1. 콘솔 패널 화면에서 각 수집된 parent_el_child_nodes의 노드 유형을 출력해보기.
// console.log(parent_el_child_nodes);

// for문
// for (var i = 0; i < parent_el_child_nodes.length ;i++) {
//   var childNodeType = parent_el_child_nodes[i].nodeType;
//   // console.log(i + ' : ' + childNodeType)
//   if (childNodeType === 1) {
//     console.log('%c ['+ i +'] is ELEMENT_NODE.', 'background: #222; color: #56FFC8')
//   } else {
//     console.log('%c ['+ i +'] is TEXT_NODE.', 'background: #222; color: #CF99FF')
//   }
// }ßß

// 2. 콘솔 패널 화면에서 각 수집된 child_el_child_nodes의 유형을 출력해보기.
// var child_el = parent_el.firstChild.nextSibling
// var child_el_child_nodes = child_el.childNodes;

// for (var i = 0; i < child_el_child_nodes.length ; i++) {
//   var childNodeType = child_el_child_nodes[i].nodeType; 
//   if ( childNodeType === 1 ) {
//     console.log(  '%c' + i + ' is ELEMENT_NODE.', 'font-weight: bold; line-height: 1.5;');
//   } else if (childNodeType === 3) {
//     console.log( i + ' is TEXT_NODE.');
//   } else if (childNodeType === 8) {
//     console.log( '%c' + i + ' is COMMNET_NODE.', 'color: #B0AFA5');
//   } else {
//     console.log(child_el_child_nodes[i].nodeType);
//   }
// }

// 2-1. break 활용 예

// if ( parent_el_child_nodes[i].nodeType === 1 ) {
//   parent_el_first_child_el = parent_el_child_nodes[i];
//   break;
// }

// 3. children을 활용한 요소 노드 탐색


// Node Infomation
// 웹의 초창기 때부터 존재하던 속성들
// id, className, title
console.log('parent_el 요소노드의 id 속성', parent_el.id )
console.log('parent_el 요소노드의 class 속성', parent_el.class )
console.log('parent_el 요소노드의 title 속성', parent_el.title )


// 4. 내부 요소 중 자식이 없는 요소를 모두 콘솔에 나타내기
// 주의! hasChildNodes()는 빈 공백 또한 자식 노드로 읽기 때문에 공백이 없을 때만 사용가능하다.

// var parent_children = parent_el.getElementsByTagName('div');

// for (var child, i = 0, l = parent_children.length; i < l ; i++ ) {
//   child = parent_children[i]
//   if ( !child.hasChildNodes() ) {
//     console.log( 'children[' + i + '] 은 자식이 없는 요소입니다.' );
//   }
// }

// 5. class 속성 값으로 문서 객체 대상 선택하기

// document.links HTMLCollection 

var childs = document.getElementsByClassName('child'); //NodeList
console.log(childs, childs.length);
