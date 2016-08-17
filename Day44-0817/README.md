###### eatdesignlove's Front-End Development Study

# Day42

## 잊지말기
- '문자도 길이를 가집니다.'.length
- 문자에서 특정 부분은 빼올 수 있다. .charAt(1)
- for ~ in - 자신의 속성인지 필히 확인해야 한다. 
- for ~ of - ECMA2015
- forEach와 map의 차이

## 자바스크립트 반복문
- 1.1. while
- 1.2. do ~ while
- 2.1. for
- 2.2. for ~ in [Object] 
- 2.3. forEach [array] : ECMASCript 5 Edition
- 2.4. for ~ of [array] : ECMAScript 2015
- 2.5. map 

### forEach예제
```js
var movielist = [];
movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('서울역');
movielist.push('부산행');

console.log(movielist)

//for문
for (var i =0; l=movielist.length; i < l; i++) {
  console..log(movielist[i]);
}

//for - in문
for (var index in movielist){
  if (movielist.hasOwnProperty(index)) {
    console.log('')
  }
}

//for - of문
for (var movie of movielist){
  console.log('for- of 문의 결과:', moive);
}


// forEach();
// - 배열 요소 마다 함수를 실행할 수 있게 제공
// - 반환 값(return)이 없다( undifined )
// 매개변수 순서 : 원소, 순서, 배열

movielist.forEach(function(itme,index,arr){
  console.log('itme:',itme);
  console.log('index:',index);
  console.log('arr:',arr);
  return 'itme '+ idx +': ' + item;
})

// 배열 객체의 메소드 .map() 
// - ECMAScript 2015에 추가된 부분
// - 반환 값을 가진다.

movielist = movielist.map(function(item, index, arr){
  //return item + '은 ' + index + '번째원소입니다.'
  console.log('item'+index+':', item);
  if (index === movielist.length -1){
    console.log('arr:', arr);
  }
})

```

#### forEach와 map의 차이
`return`에 의해 배열이 바뀌는지가 차이다.

## 자바스크립트 함수

