let a = 2;
let b = 3;
let result = a + b * 4; // 괄호를 사용해 우선순위 변경 가능 (a+b) *4
console.log(result);

result = a++ + b * 4;
console.log(result);
