const {log} = console;
log(...[1, 2, 3])

function f(v, w, x, y, z) {
    log(v, w, x, y, z)
}

const args = [0, 1, 4];
f(-1, ...args, 2, ...[3]);

let x = 1;
x = -2;
log(...(x > 0 ? ['a'] : []))

// 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
// (...[1, 2])
// log((...[1, 2]))
log(...[1, 2])

log(Math.max(...[14, 3, 77]))
log(Math.max(14, 3, 77))

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2)
log(arr1)

let date = new Date(...[2015, 1, 1])
log(date)

log(new Date())

const a1 = [1, 2];
const a2 = a1;
a2[0] = 2;
log(a1)
// 上面代码中，a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化

const a3 = a1.concat();
a3[0] = 3;
log(a1, a3)

//合并数组
log([...a1, ...a3])

const b1 = [{foo: 1}]
const b2 = [{bar: 2}]
const b3 = b1.concat(b2);
const b4 = [...b1, ...b2];
log(b3[0] === b1[0])
log(b4[0] === b1[0])

const [first, ...rest] = [1, 2, 3, 4, 5];
log(first, rest)

const [first1, ...rest1] = [];
log(first1, rest1)

const [first2, ...rest2] = ["foo"];
log(first2, rest2)

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
// const [...butLast, last] = [1, 2, 3, 4, 5];
// log(butLast)

log([...'hello'])

log('x\uD83D\uDE80y'.length)
log([...'x\uD83D\uDE80y'].length)

// 正确返回字符串长度的函数，可以像下面这样写
function length(str) {
    return [...str].length;
  }
log(length('x\uD83D\uDE80y'))

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);

let arr3 = [...map.keys()]
log(arr3)

const go = function*(){
    yield 1;
    yield 2;
    yield 3;
  };

log([...go()])

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

log(Array.from(arrayLike))

log(Array.from('hello'))

let namesSet = new Set(['a', 'b'])
log(Array.from(namesSet))

log(Array.from({length: 3}))

// 上面代码中，Array.from返回了一个具有三个成员的数组，每个位置的值都是undefined。扩展运算符转换不了这个对象
// 对于还没有部署该方法的浏览器，可以用Array.prototype.slice方法替代。
const toArray = (() =>
  Array.from ? Array.from : obj => [].slice.call(obj)
)();
log(toArray('test'))

Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);
let arr = Array.from([1, 2, 3], (x) => x * x);
log(arr)

// 下面的例子将数组中布尔值为false的成员转为0
let arr4 = Array.from([1, , 2, , 3], (x) => x || 0)
log(arr4)

// 返回各种数据的类型
function typesOf() {
  return Array.from(arguments, values => typeof values);
}

log(typesOf(null, 'test', NaN))

// Array.of()
log(Array.of(3, 11, 8))
log(Array.of(3).length)
// 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异
log(Array())
log(Array(3))
log(Array(3, 11, 8))
// Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。
log(Array.of())
log(Array.of(undefined))
log(Array.of(1))
log(Array.of(1, 2))

// 数组实例的copyWithin()
log([1, 2, 3, 4, 5].copyWithin(0, 3))
log([].copyWithin.call({length: 5, 3: 1}, 0, 3))

// 将2号位到数组结束，复制到0号位
let i32a = new Int32Array([1, 2, 3, 4, 5]);
log(i32a.copyWithin(0, 2))
log([1, 2, 3, 4, 5].copyWithin(0, 2))

// 对于没有部署 TypedArray 的 copyWithin 方法的平台
// 需要采用下面的写法
log([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4))


