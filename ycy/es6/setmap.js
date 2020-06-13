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

const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);
log(map.size)
log(map.has('name'))
log(map.get('name'))
log(map.get('title'))

// 只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
const map1 = new Map();
map1.set(['a'], 555);
log(map1.get(['a']) )

// 上面代码的set和get方法，表面是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的，因此get方法无法读取该键，返回undefined。
// Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。


// 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，
// 比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，
// 但 Map 将其视为同一个键。

map.set(-0, 123);
log(map.get(+0))

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123

map.set(undefined, 'nah');
log(map.get(undefined))

let map2 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');
  log(map2.get(1))
log('-----遍历-------')
for(let key of map2.keys()) {
  log(key)
}

for(let val of map2.values()) {
  log(val)
}

for(let [k, v] of map2.entries()) {
  log(k, v)
}

log('-----entries----')
for(let item of map2.entries()) {
  log(item[0], item[1])
}

log('-----for...of map-----')
for(let [k, v] of map2) {
  log(k, v)
}

log([...map2])
log([...map2.keys()])
log([...map2.values()])
log([...map2.entries()])

let map3 = new Map(
  [...map2].filter(([k, v]) => k < 3)
);
log(map3)

let map4 = new Map(Array.from([...map2]).filter(k => k < 3));
log(map4)
// log([1, 2, 3].filter(x => x < 3))
let map5 = Array.from([...map2.keys()]).filter(k => k < 3)
log(map5)

map2.forEach(function(val, key, map) {
  log("key: %s, value: %s", key, val)
})

const reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

// forEach方法还可以接受第二个参数，用来绑定this。
map.forEach(function(value, key, map) {
  this.report(key, value);
}, reporter);
// 上面代码中，forEach方法的回调函数的this，就指向reporter。

function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)

let obj6 = {"a":1, "b":2};
let map6 = new Map(Object.entries(obj6));
log(map6)
log(Object.entries(obj6))

function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

log(objToStrMap({yes: true, no: false}))
log(Object.keys(obj6), Object.values(obj6))

function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'))

function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

log(jsonToStrMap('{"yes": true, "no": false}'))
log(JSON.parse('{"yes": true, "no": false}'))

const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }
  dec() {
    let counter = _counter.get(this);
    if (counter < 1) return;
    counter--;
    _counter.set(this, counter);
    if (counter === 0) {
      _action.get(this)();
    }
  }
}

const c = new Countdown(2, () => console.log('DONE'));

c.dec()
c.dec()



