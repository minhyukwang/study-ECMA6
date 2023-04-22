const obj = {
  name: '엘리',
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 가능함
obj.name;
obj.age;

function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, 'job', 'engineer');
console.log(obj);
