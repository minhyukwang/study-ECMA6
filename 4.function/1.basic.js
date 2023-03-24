function add(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}

const result = add(1, 2);
console.log(result);

// 사용예제 2
function makeName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = '김';
let firstName = '지수';
const fullName = makeName(firstName, lastName);
console.log(fullName);
