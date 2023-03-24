// 함수 선언문 function name(){}
// 함수 표현식 const name = function (){}
// 표현식으로 작성된 함수는 함수명을 써줘도 되지만, 외부에서 접근 불가
// 화살표 함수 const name = () => {}
let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

add = (a, b) => {
  return a + b;
};

add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE(Immediatedly-Invoked Function Expressions)
(function run() {
  console.log();
})();

// 일급함수 first class function
// 함수가 일반 객체처럼 모든 연산이 간으한 것
// 함수의 매개변수로 전달
// 함수의 반환값
// 할당 명령문
// 동일 비교 대상

// 고차함수 Higher-order function
// 인자로 함수를 받거나(콜백함수)
// 함수를 반환하는 함수를 고차함수
