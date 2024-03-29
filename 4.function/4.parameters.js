// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장 됨
// 매개변수 기본 값 Default Parameters a=1, b=1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[0]);
  return a + b;
}
add(1, 2, 3);

// Rest 매개변수 Rest Parameters
// 몇 개의 인자를 받을 지 모를 때 사용
function sum(a, b, ...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
