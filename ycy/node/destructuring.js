let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);

let [x, y, ...z] = ['a'];
console.log(x);
console.log(y);
console.log(z);

let [...foo1] = [];
console.log(foo1);

// 不完全解构
let [a, [b], d] = [1, [2, 3], 4];

// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
let {sin, cos} = Math;
console.log(sin(30))

const {log} = console;
log('test')









