// let 재할당 가능
let a = 1;
a = 2;

// const 재할당 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi; ㅣ렇게 하면 안 됨

// 1. 변수명은 대문자로
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

console.log(apple);
apple.name = 'orange';
console.log(apple);
// const 는 재할당만 불가능, 변경은 가능
