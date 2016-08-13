// --------------------
// 자바스크립트 데이터 유형 체크
// 1.
// --------------------

// 데이터 유형별 변수 선언 및 값(리터럴) 할당
// var num, str, boo, fnc, arr, obj;

// 선언된 변수에 각각 데이터를 리터럴 표현식으로 복사/참조

// num = 1203;
// str = 'Hey, Jude';
// boo = !0;

// 자료형 데이터
// fnc = function(){};
// arr = [];
// obj = {};

// var키워드를 한 번만 사용하는 패턴 (var singleton pattern)
// var num = 9,
//     str = 'Hey, Jude',
//     boo = !0;

// --------------------
// 자바스크립트 데이터 유형 체크
// 2. instanceof 키워드를 사용하는 방법 
// --------------------

// 역할 : 생성자 함수를 통해 생산된 객체(인스턴스)인가?

// arr instanceof Array; // tru : typeof의 설계 오류 문제점을 해결할 수 있다.

// 약점 : 원시 데이터 유형(리터럴 방식)의 경우는 올바른 대답을 해주지 않는다.
// ```
// 'primitive' instanceof String; // false
// new String('primitive') instanceof String; // trueß
// ```

// --------------------
// 자바스크립트 데이터 유형 체크
// 3. constructor 프로퍼티 활용 
// --------------------

// 객체인 것에 대한 유형체크에서는 완벽
// null, undefined인 경우, 에러를

// 객체 유형의 데이터에서는 완벽한 결과를 반환한다.
// 단, 객체가 아닌 유형에서는 오류를 발생시킨다.
// 이유는 constructor속성은 객체만이 가지는 속성이기 때문이다.

// ```
// 'primitive.constructor === String';
// (new String('primitive')).constructor === string;
// ```

// (null).constructor;


// --------------------
// 자바스크립트 데이터 유형 체크 
// 4. 프로토타입을 활용 (타 객체의 메소드를 빌려쓰는 패턴)
// --------------------

// ```
// Object.prototype.toString(undefined) // "[object Object]"
// Object.prototype.toString.call(undefined) // "[object Undefined]"
// Object.prototype.toString.call(null) // "[object Null]"
// Object.prototype.toString.call({}) // "[object Object]"
// Object.prototype.toString.call(9) // "[object Number]"
// Object.prototype.toString.call(/^^/) // "[object RegExp]"
// Object.prototype.toString.call(Date) // "[object Function]"
// Object.prototype.toString.call(new Date) // "[object Date]"

// Object.prototype.toString.call(new Date).slice(8,-1)
// "Date"

// ```

