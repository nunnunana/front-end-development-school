var fruits = ['바나나', true, '딸기', true, '포도', false, '수박'];
var real_fruits = [],
    k = 0, 
    o = fruits.length;

for (; k < o; k++) {
  fruit = fruits[k];
  if ( isType(fruit) !== 'string' ) {
    continue;
  }
  real_fruits.push(fruit);
}
// console.log(real_fruits)


var collection = document.body.childNodes;

for ( var el_collection=[], i = collection.length - 1; collection[i]; i-- ) {
 let node = collection[i];
 if (node.nodeType === 3 || isElName(node, 'script')) {
  continue;
 }
 el_collection.push(node)
}
console.log(el_collection);


// break 예제를 위한 for문
// var units = 'em rem % px vw vh vmin vmax'.split(' ');
// var unit;
// var i  = 0;
// var l = units.length;

// for ( ; i<l; i++) {
//   unit = units[i];
//   console.log(unit)
// }

// ECMAScript 2015 - <for ~ of>
// let units = 'em rem % px vw vh vmin vmax'.split(' '), unit, i  = 0, l = units.length;

// for (let unit of units) {
//   console.log(unit)
// }

