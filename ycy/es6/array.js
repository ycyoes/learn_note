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



