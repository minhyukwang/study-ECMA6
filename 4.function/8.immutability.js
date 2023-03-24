// 함수내부에서 외부로부터 주어진 인자의 값으 변경하는 것은 지양
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값)을 만들어서 반환해야 함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 의한 복사(메모리주소)
function display(num) {
  num = 5;
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = 'Bob'; // ❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  // ellie의 메모리주소와 같은 값을 가지고 있기 때문에
  // ellie 값 을 참조하는 모든 자원이 영향을 받음
  console.log(obj);
}
const ellie = { name: 'Ellie' };
displayObj(ellie);

function chanegeName(obj) {
  // 이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'BOB' }; // 반환할 때는 새로운 오브젝트 만들기
}
