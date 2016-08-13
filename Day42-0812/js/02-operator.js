/* operator */

// var fact_check = 100;

// console.log(fact_check);
// console.log(++fact_check);
// console.log(++fact_check);
// console.log(fact_check++);
// console.log(fact_check);
// console.log(fact_check--);
// console.log(fact_check);
// console.log(++fact_check);
// console.log(fact_check);
// console.log(fact_check--);
// console.log(fact_check);

function init() {
  var event_types = 'click dbclick mouseenter mouseover mouseout mouseleave focus blur'
  event_types.split(' ');

  // 지역 변수
  var random_count = Math.floor(Math.random()* evetn_types.length);
  var event_type = evnet_types[ random_count ];
  console.log(event_type);

  var callback;
  var dom_el = query('result');
  dom_el.setAttribute('tabindex',0);

  dom_el.innerHTML = 'This is dom object.';

  switch(event_type) {
    case 'click':
    case 'dbclick':
      callback = function(){
        console.log('clicked object');
      };
    break;
    case 'mouseenter':
    case 'mouseover':
      callback = function() {
        console.log('mouse enterd object');
      };
    break;
    case 'mouseout':
    case 'mouseleave':
      callback = function() {
        console.log('mouse enterd object');
      };
    break;
    case 'focus':
    case 'blur':
      callback = function() {
        console.log('focused ro blured object');
      };
  }
  dom_el['on'+event_type] = callback;
}

window.onload = init;
