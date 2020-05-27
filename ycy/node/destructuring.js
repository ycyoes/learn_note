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
log('-----------test--------')

let {foo1: baz1} = {foo1: 'aaa', bar: 'bbb'};
console.log(foo);
console.log(baz1);

let obj = {
    p: [
        'Hello',
        {y1: 'World'}
    ]
};

let { p: [x1, {y1}]} = obj;
console.log(x1);
console.log(y1);

// 嵌套赋值
let obj1 = {};
let arr1 = [];
({foo: obj1.prop, bar: arr1[0]} = { foo: 123, bar: true});
console.log(obj1);
console.log(arr1);

console.log('----------解构赋值时，如果等号右边是数值和布尔值，则会先转为对象-----------')
let {toString: s} = 123;
console.log(toString)
console.log(s)
console.log(s === Number.prototype.toString)
console.log(Number.prototype.toString)

// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
// let { prop: x2 } = undefined; // TypeError
// let { prop: y2 } = null; // TypeError
// console.log(x2);
// console.log(y2)

function move({x = 0, y = 0} = {}) {
    return [x, y];
  }
  
  let moveResult = move({x: 3, y: 8});
  console.log(moveResult)
  let moveResult1 = move({x: 3});
  console.log(moveResult1)
  let moveResult2 = move({});
  console.log(moveResult2)
  let moveResult3 = move();
  console.log(moveResult3)

//   undefined就会触发函数参数的默认值
let arr3 = [1, undefined, 3];
arr3.map((x = 'yes') => x);
console.log(arr3.map((x = 'yes') => x));

let x3 = 1;
let y3 = 2;
[x3, y3] = [y3, x3];
console.log(x3 + ' ' + y3)

let jsonData = {
    id: 42,
    status: "ok",
    data: [867, 5309]
};

// 提取 JSON 数据
let {id, status, data: number} = jsonData;
console.log(id, status, number);






