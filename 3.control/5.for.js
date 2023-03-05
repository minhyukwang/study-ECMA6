// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식){}
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 {} 코드벌럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때 까지 2번과 3번을 수행

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}

console.clear();
// 무한 루프
// for (;;) {
//   console.log('😀');
// }

// 반복문 제어 continue, break;
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
