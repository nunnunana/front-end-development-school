(function(global, XHR){
  'use strict';

  var xhr = new XHR;

  // 통신 상태 관찰 이벤트 핸들링
  xhr.onreadystatechange = function(){
    if (this.status === 200 && this.readyState === 4) {
      view.innerHTML = this.responseText;
    }
  };

  // 문서객체 참조
  var view = document.querySelector('main');
  var nav_links = document.querySelector('nav a');

  // nodelist 순환하여 이벤트 바인딩 <-> 핸들러(함수)
  // 선감소하여 코드를 더욱 빠르게 수행시키자. (변수 두개만드는 것보다 빠름)
  for (var link, i= --nav_links.length; nav_links[i]; i--) {
    // 1. 클로저 사용
    // link.onclick = (function(index){
    //   return viewUpdate.bind(link, index)
    // }(i));

    // 2. 객체.속성 사용
    link = nav_links[i];
    link.idx = i;
    link.onclick = viewUpdate;
  }  

  var views= 'home about works contact'.split(' ');
  console.log(views);
  // 페이지 뷰를 업데이트 하는 함수
  function viewUpdate(){
    // 비동기 통신 설정 / 요청
    // 클릭한 <a> 요소의 인덱스를 통해 데이터를 가져와야 한다.
    // 집합 데이터 Array
    // 각 a 요소를 클릭했을 때, 인덱스 전달은 어떻게 할 것인가?
    var index = 0;
    var page = 'includes/' +  + '.html'; 
    xhr.open('GET', page);
    xhr.send();

    global.location.href = page;

    // 기본동작 차단(과거의 방법)
    return false;
  }
  
}(this, this.XMLHttRequest));
