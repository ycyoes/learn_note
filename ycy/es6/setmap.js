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




