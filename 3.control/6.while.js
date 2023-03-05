// while (조건) {}
// 조건이 fasle 가 될 때까지 {} 코드를 반복 실행
let num = 1;
while (num > 0) {
  console.log(num);
  num++;
  if (num === 5) break;
}

let isActive = false;
do {
  console.log('test');
} while (isActive);
