(function(global, XHR){
  'use strict';
  
  var xhr = new XHR();
  console.log('생성자 xhr객체 : ', XHR.prototype);
  console.log('생성된 인스턴스 xhr객체 : ', xhr.__proto__);
  console.log(XHR.prototype === xhr.__proto__);


  // STEP01 CREATE
  // XHR객체를 만드는 핼퍼 함수 
  var createXHR = (function(){
    XHR = XHR || ActiceXObject('Microsoft.XMLHTTP');
    return function() {
      return new XMLHttpRequest();
    }
  })();

  // STEP02 OPEN
  // xhr.open('GET', '../data/data.txt', false); // 동기통신 Deprecated!

  // 동기와 비동기의 차이
  // 동기인 경우, send() 이후에 **데이터를 받을 때까지 대기하고** 그것을 처리한다. 
  // 비동기인 경우, send() 이후 내용을 데이터가 받기 전에 실행하기 때문에, 이벤트(onreadystatechange)로 감싸주지 않으면 데이터를 제때 받지 못한채로 실행하고, 이후에 데이터를 받게 된다.

  // STEP03 SEND

  // 동기 통신일 경우는.. 데이터가 로드될 때가지 기다림.
  // 비동기 통신일 경우는.. 아래의 코드가 바로 해석됨.

  var btn = document.querySelector('.call-ajax-data-btn');
  var result_view = document.querySelector('.ajax-result')
  var gnb_link = document.querySelectorAll('.gnb a');
  // console.log(gnb_link);
  // 버튼에 이벤트 바인딩
  for (var i=0; i< gnb_link.length ; i++) {
    gnb_link[i].onclick = function(ev){
      ev.preventDefault();
      var link_to = this.getAttribute('href');
      global.navigator.hash = link_to;
      console.log(link_to)
      xhr.open('GET', link_to);
      updateViewPlace();
    }
  }

  var call_ajax_btn = document.querySelector('.call-ajax-data-btn');
  // call_ajax_btn.onclick = updateViewPlace;
  // xhr.open('GET', '../data/data.txt', false); // 동기 방식  
  xhr.open('GET', 'http://api.randomuser.me/?results=10&gender=male');  // 비동기 방식

  // 비동기 통신 객체에 이벤트 핸드러 바인딩
  xhr.onreadystatechange = function(){
    console.log(this)
    if ( this.readyState == 4 && this.status == 200 ) {
      console.log('성공  :)  ');

      var random_users = this.response;
      var people = JSON.parse(random_users).results;
      var template = "<table><tr><th>사진</th><th>성별</th><th>번호</th><th>이메일</th></tr>"
      console.log(people)

      var person, gender, phone, email, pic, i = people.length-1;
      for ( ; people[i] ; i--) {
        person  = people[i];
        gender  = person.gender;
        phone   = person.phone;
        email   = person.email;
        pic = person.picture.thumbnail;
        console.log(gender, phone, email, pic)
        
        template += [
        '<tr>',
          '<td class="thumb" style="background-image:url('+ pic +');"></td>',
           '<td class="gender">' + gender +'</td>',
           '<td class="phone">' + phone +'</td>',
           '<td class="email">' + email +'</td>',
         '</tr>'
        ].join('');
      }

      template += '</table>';
      result_view.innerHTML = template



      // result_view.innerHTML = '['+this.statusText+']  '+ this.response;
      // var doc = this.responseXML;     
      // var people = doc.querySelector('people');
      // var person_list = people.querySelectorAll('person');
      // var template = '<ul>';

      // var person, name, tel, mail, i = person_list.length -1;
      // for (; person_list[i]; i--) {
      //   person = person_list[i];
      //   name = person.querySelector('name').firstChild.nodeValue;
      //   tel = person.querySelector('tel').firstChild.nodeValue;
      //   mail = person.querySelector('mail').firstChild.nodeValue;
      //   template += [
      //   '<li>',
      //     '<span class="name">' + name +'</span>',
      //     '<span class="tel">' + tel +'</span>',
      //     '<span class="mail">' + mail +'</span>',
      //   '</li>'
      //   ].join('');
      // }     
      // template += '</ul>';
      // result_view.innerHTML = template;


    } else {
      console.log('실패  :(  ');
      result_view.textContent = '['+this.statusText+']  '+'데이터 로드에 실패했습니다.';
    }
  }
  btn.onclick = updateViewPlace;

  function updateViewPlace() {
    // AJAX 통신 요청 보내기

    xhr.send();
    
    // 비동기 통신을 요쳥했을 경우,
    // 이벤트를 통해 비동기 데이터가 로드된 시점에
    // 아래에 아래 조건문이 수행되어야 한다.

    // if ( xhr.readyState == 4 && xhr.status == 200 ) {
    //   console.log('성공  :)  ');
    //   result_view.textContent = '['+xhr.statusText+']  '+ xhr.response;          
    // } else {
    //   console.log('실패  :(  ');
    //   result_view.textContent = '['+xhr.statusText+']  '+'데이터 로드에 실패했습니다.';
    // }
    // console.log(xhr);
  }
  

  
}(this, this.XMLHttpRequest));


