// var fn = function(cb) {
//   if (typeof cb === 'function'){
//     cb();
//     window.setTimeout(cb, 2000);
//   } else {
//     throw new Error('전달인자는 함수 데이터 유형이어야 합니다.')
//   }
// };

// fn(function(){
//   console.log()
// })

// --------------------
// ToDoList 
// --------------------

// 1. 문서에서 요소 선택
// 2. 요소를 사용자가 클릭
// 3. 움직이는 함수 호출
// 4. 애니메이션 종료 시 콜백 함수 실행

// 1. 문서에서 요소 선택

var demo_box = query('.demo-box');

// 2. 요소를 사용자가 클릭
// demo_box.onclick = function (evnt){
//   console.log(evnt, 'Clicked!')
// }

body.onclick = function(evnt){
  movingBox(demo_box, {
      'x': evnt.clientX,
      'y': evnt.clientY,
    }, myCallback)
}

function movingBox(box, position, callback) {
  if ( isntElNode(box)){
    errorMsg('요소노드여야 합니다.');
  }
  
  //초기값 설정
  position = position || {'x':0, 'y':0};
  callback = typeof callback === 'function' ? callback : function(){};

  //애니메이션 사용!!
  var next_top =  position.y;
  var next_left = position.x;
  var next_position = 'top:' + next_top + 'px;' + 'left:' + next_left + 'px';
  console.log(next_position);
  box.setAttribute('style', next_position);

  // 애니메이션 종료!!
  if ( callback && typeof callback === 'function' ) {
    setTimeout(callback, 500);
  }
}

function myCallback(){
  console.log('애니메이션 끝!')
}
