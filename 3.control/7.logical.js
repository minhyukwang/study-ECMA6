// 논리연산자 Logical operator
// && 그리고
// || 또는
// !부정 (단항연산자 )
// !! 불리언값으로 변환 (단항연산자 응용버전);

let num = 21;
if (!(num >= 0 && num < 9)) {
  console.log('👍');
}

if (num != 8) {
  console.log('👍');
}

console.log(true && true); // true;
console.log(true && false); // false;
console.log(false && true); // false

console.log(true || true); // true;
console.log(true || false); // true;
console.log(false || false); // false;

console.log(!'text'); // 문자열은 true , true 를 부정하면 false
console.log(!!'text');
