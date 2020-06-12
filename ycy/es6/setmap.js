const {log} = console;
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}

const set = new Set([1, 2, 3, 4, 4]);
log([...set])

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
log(items.size)

log([...new Set('ababbc')].join(''))

const set2 = new Set('ababbc');
log([...set2].join(''))

/**
 * 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
 * Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），
 * 主要的区别是向 Set 加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身。
 */
let set3 = new Set();
let a = NaN;
let b = NaN;
set3.add(a);
set3.add(b);
log(set3)

// 两个对象总是不相等的
let set4 = new Set();
set4.add({});
log(set4.size)

set4.add({});
log(set4.size )

const items1 = new Set([1, 2, 3, 4, 5]);
const array1 = Array.from(items1);
log(array1)

function dedupe(array) {
    return Array.from(new Set(array));
  }
  
  log(dedupe([1, 1, 2, 3]))

  let set5 = new Set(['red', 'green', 'blue']);

  for (let item of set5.keys()) {
    console.log(item);
  }

  for (let item of set5.values()) {
    console.log(item);
  }

  for (let item of set5.entries()) {
    console.log(item);
  }

  // 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致

  // Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法
  log(Set.prototype[Symbol.iterator] === Set.prototype.values)
  for (let x of set5) {
    console.log(x);
  }
log(Symbol.iterator)
log(Set.prototype[Symbol.iterator])
log(Set.prototype.values)

set5.forEach((value, key) => console.log(key + ' : ' + value))

log([...set5])

let arr2 = [3, 5, 2, 2, 5, 5, 4];
log([...new Set(arr2)])

let arr3 = [1, 2, 3, 4, 5, 6];
log(arr3.filter(v => v % 2 === 0))

let a1 = new Set([1, 2, 3]);
let b1 = new Set([4, 3, 2]);
// 并集
let union = new Set([...a1, ...b1]);
log(union)

// 交集
let intersect = new Set([...a1].filter(x => b1.has(x)));
log(intersect)

// （a 相对于 b 的）差集
let difference = new Set([...a1].filter(x => !b1.has(x)));
log(difference)

/**
 * 如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。
 * 一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；
 * 另一种是利用Array.from方法。
 */

// 方法一
let set6 = new Set([1, 2, 3]);
set6 = new Set([...set6].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set7 = new Set([1, 2, 3]);
set7 = new Set(Array.from(set7, val => val * 2));
log([...set7])

let a2 = new Set([1, 2, 3]);
let b2 = new Set([4, 3, 2]);
//取交集
let intersect1 = Array.from(a2).filter(x => b2.has(x))
log(intersect1)
//取差集
let difference2 = Array.from(a2).filter(x => !b2.has(x))
log(difference2)
//取并集
let union12 = Array.from(new Set([...a2, ...b2]))
log(union12)

const a3 = [[1, 2], [3, 4]];
const ws = new WeakSet(a3);
log(ws)
// 上面代码中，a是一个数组，它有两个成员，也都是数组。将a作为 WeakSet 构造函数的参数，a的成员会自动成为 WeakSet 的成员。

// 注意，是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象。








