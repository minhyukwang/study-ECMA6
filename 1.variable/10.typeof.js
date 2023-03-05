let variable = 123;
console.log(typeof variable);

variable = '123';
console.log(typeof variable);

// 할당된 값에 따라 타입이 결정됨
// leakly type . 어떤 값을 할당하느냐에 따라 타입이 달라 짐

variable = function () {};

console.log(typeof variable);
