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


















