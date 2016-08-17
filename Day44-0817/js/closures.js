//.demo-navigation선택
// 내부에서 a 요소 수집
// 수집된 a 요소 사용자가 클릭시
// 클릭된 a 요소의 수집될 당시의 인덱스 넘버를 콘솔에 기록합니다.

var nav = query('.demo-navigation');
var nav_links = queryAll('a', nav);
console.log(nav_links)

function showMeIndexWrapper(index){
  function showMeIndex() {
    console.log('my index num is', index);
  }  
  return showMeIndex;
}

var i=0, l=nav_links.length;
for ( ; i < l; i++) {
  nav_links[i].onclick = showMeIndexWrapper(i);

}
