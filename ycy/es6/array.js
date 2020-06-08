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

log([1, 4, -5, 10].find((n) => n < 0))

log([1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}))

function f(v){
  return v > this.age;
}

let person = {name: 'John', age: 20};
log([10,12, 26, 15].find(f, person))
// 上面的代码中，find函数接收了第二个参数person对象，回调函数中的this对象指向person对象

// 这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足
log([NaN].indexOf(NaN))
log([NaN].findIndex(y => Object.is(NaN, y)))
// 上面代码中，indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到

log(['a', 'b', 'c'].fill(7))

// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
log(['a', 'b', 'c'].fill(7, 1, 2))

// 注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象
let arr5 = new Array(3).fill({name: "Mike"});
arr5[0].name = "Ben";
log(arr5)

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}

for (let val of ['a', 'b'].values()) {
  console.log(val);
}

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}

// 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历
let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']

log([1, 2, 3].includes(2))
log([1, 2, NaN].includes(NaN) )

const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
)();

log(contains(['foo', 'bar'], 'baz'))

log([1, 2, [3, 4]].flat())

// flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，
// 表示想要拉平的层数，默认为1
log([1, 2, [3, [4, 5]]].flat())
log([1, 2, [3, [4, 5]]].flat(2))

// 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数
log([1, [2, [3]]].flat(Infinity))

// 如果原数组有空位，flat()方法会跳过空位
log([1, 2, , 4, 5].flat())

// flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），
// 然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组
log([2, 3, 4].flatMap((x) => [x, x * 2]))

log([1, 2, 3, 4].flatMap(x => [[x * 2]]))

log(Array(3))
// 注意，空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点
log(0 in [undefined, undefined, undefined] )
log(0 in [, , ,])

// [1].forEach((x,i) => console.log(i));

log([,'a'].some(x => x !== 'a') )
log([1,,2].reduce((x,y) => x+y) )
log([,'a'].every(x => x==='a') )
log([...['a',,'b']])
log([,'a','b',,].copyWithin(2,0))
log([,'a','b',,].length)
