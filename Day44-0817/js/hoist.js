// var hello = 'bello';
// var activities = ['축구','줄넘기','댄스','파티','수영'];

var minions = function (){
  // console.log(this)

  if (hello) {

    let hello = ':-0'
    console.log('if 내부:', hello);
  }
  var hello = 'bellooo'
  console.log('함수 내부:', hello);
}
minions ()
console.log('if 외부:', hello);
