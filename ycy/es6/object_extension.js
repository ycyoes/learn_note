const {log} = console;
// Object.is()用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
log(+0 === -0)
log(Object.is('foo', 'foo'))
log(Object.is({}, {}))
log(NaN === NaN)

const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
log(target)

// 如果只有一个参数，Object.assign会直接返回该参数
const obj = {a: 1};
log(Object.assign(obj) === obj)

// 如果该参数不是对象，则会先转成对象，然后返回
log(typeof Object.assign(2))

// 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
// Object.assign(undefined) // 报错
// Object.assign(null) // 报错

log(Object.assign(obj, undefined) === obj)
log(Object.assign(obj, null) === obj)

const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj1 = Object.assign({}, v1, v2, v3);
console.log(obj1); 
// 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。
// 但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。

log(Object(true))
log(Object(10))
log(Object('abc'))

// 属性名为 Symbol 值的属性，也会被Object.assign拷贝。
log(Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' }))
const obj2 = {a: {b: 1}};
const obj3 = Object.assign({}, obj2);
obj2.a.b = 2
log(obj3.a.b)

const target3 = { a: { b: 'c', d: 'e' } }
const source3 = { a: { b: 'hello' } }
log(Object.assign(target3, source3))
// target对象的a属性被source对象的a属性整个替换掉了，而不会得到{ a: { b: 'hello', d: 'e' } }的结果。
// 这通常不是开发者想要的，需要特别小心

// Object.assign可以用来处理数组，但是会把数组视为对象。
log(Object.assign([1, 2, 3], [4, 5]))	

const source4 = {
    get foo() { return 1 }
  };
  const target4 = {};
  
log(  Object.assign(target4, source4))

class Point {
    constructor(x, y) {
      Object.assign(this, {x, y});
    }
  }

let cp = new Point();
new constructor(10, 20);
  log(cp)

  function clone(origin) {
    return Object.assign({}, origin);
  }
let cl = clone([2, 4]);
log(cl)
// 上面代码将原始对象拷贝到一个空对象，就得到了原始对象的克隆。

// 不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。

function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}


function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
    console.log(options);
    // ...
  }
  const DEFAULTS = {
    url: {
      host: 'example.com',
      port: 7070
    },
  };
  log(processContent({ url: {port: 8000} }))

  const obj4 = {
    foo: 123,
    get bar() { return 'abc' }
  };
log(Object.getOwnPropertyDescriptors(obj4))

const source = {
    set foo(value) {
      console.log(value);
    }
  };
  
  const target1 = {};
  Object.assign(target1, source);
  
  log(Object.getOwnPropertyDescriptor(target1, 'foo'))

  log(`
    上面代码中，source对象的foo属性的值是一个赋值函数，Object.assign方法将这个属性拷贝给target1对象，
    结果该属性的值变成了undefined。这是因为Object.assign方法总是拷贝一个属性的值，
    而不会拷贝它背后的赋值方法或取值方法。
    这时，Object.getOwnPropertyDescriptors()方法配合Object.defineProperties()方法，就可以实现正确拷贝。
  `)

  const source5 = {
    set foo(value) {
      console.log(value);
    }
  };
  
  const target5 = {};
  Object.defineProperties(target5, Object.getOwnPropertyDescriptors(source5));
log(  Object.getOwnPropertyDescriptor(target5, 'foo'))

// 上面代码中，两个对象合并的逻辑可以写成一个函数。

const shallowMerge = (target, source) => Object.defineProperties(
  target,
  Object.getOwnPropertyDescriptors(source)
);

let mix = (object) => ({
    with: (...mixins) => mixins.reduce(
      (c, mixin) => Object.create(
        c, Object.getOwnPropertyDescriptors(mixin)
      ), object)
  });
  
  // multiple mixins example
  let a = {a: 'a'};
  let b = {b: 'b'};
  let c = {c: 'c'};
  let d = mix(c).with(a, b);
  log(d.c);
  log(d.b);
  log(d.a);

log('__proto__属性（前后各两个下划线），用来读取或设置当前对象的原型对象（prototype）')
log(Object.getPrototypeOf({ __proto__: null }))

let proto = {};
let obj5 = { x: 10 };
Object.setPrototypeOf(obj5, proto);

proto.y = 20;
proto.z = 40;
log(obj5.x)
log(obj5.y)
log(obj5.z)
// 上面代码将proto对象设为obj对象的原型，所以从obj对象可以读取proto对象的属性
// 如果第一个参数不是对象，会自动转为对象。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。

log(Object.setPrototypeOf(1, {}) === 1)
log(Object.setPrototypeOf('foo', {}) === 'foo')
log(Object.setPrototypeOf(true, {}) === true)
// 由于undefined和null无法转为对象，所以如果第一个参数是undefined或null，就会报错

function Rectangle() {
    // ...
  }
  
  const rec = new Rectangle();
  log(Object.getPrototypeOf(rec) === Rectangle.prototype)
log(Object.setPrototypeOf(rec, Object.prototype))
log(Object.getPrototypeOf(rec) === Rectangle.prototype)

log(Object.getPrototypeOf(1))
log(Object.getPrototypeOf('foo'))
log(Object.getPrototypeOf(true))

var obj6 = { foo: 'bar', baz: 42 };
log(Object.keys(obj6))

let {keys, values, entries} = Object;
let obj7 = { a: 1, b: 2, c: 3 };

for (let key of keys(obj7)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj7)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj7)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}

log(values(obj6))

const obj8 = Object.create({}, {p: {value: 42}});
log(obj8)
log(values(obj8))

const obj9 = Object.assign({}, {p: {value: 42}});
log('obj9: ', obj9)
log(values(obj9))
/**
 * 上面代码中，Object.create方法的第二个参数添加的对象属性（属性p），如果不显式声明，默认是不可遍历的，
 * 因为p的属性描述对象的enumerable默认是false，Object.values不会返回这个属性。
 * 只要把enumerable改成true，Object.values就会返回属性p的值
 */

const obj10 = Object.create({}, {p:
    {
      value: 42,
      enumerable: true
    }
  });
  log('obj10: ', obj10)
log(  Object.values(obj10) )

// Object.values会过滤属性名为 Symbol 值的属性。

log(Object.values({ [Symbol()]: 123, foo: 'abc' }))

log(Object.values('foo'))

// 如果参数不是对象，Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。
// 所以，Object.values会返回空数组。
log(Object.values(42) )
log(Object.values(true) )

const obj11 = { foo: 'bar', baz: 42 };
log(Object.entries(obj11))

// 如果原对象的属性名是一个 Symbol 值，该属性会被忽略。

log(Object.entries({ [Symbol()]: 123, foo: 'abc' }))

let obj12 = { one: 1, two: 2 };
for (let [k, v] of Object.entries(obj12)) {
  console.log(
    `${JSON.stringify(k)}: ${JSON.stringify(v)}`
  );
}

const obj13 = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj13));
log(map)

// Generator函数的版本
function* entries1(obj) {
    for(let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

// 非Generator函数的版本
function entries2(obj) {
    let arr = [];
    for(let key of Object.keys(obj)) {
        arr.push([key, obj[key]]);
    }
    return arr;
}

// Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
log(Object.fromEntries([
    ['foo', 'bar11'],
    ['baz', 42]
  ]))

  const entries3 = new Map([
    ['foo', 'barts'],
    ['baz', 42]
  ]);
  
log(  Object.fromEntries(entries3))

const map2 = new Map().set('foo', true).set('bar', false);
log(Object.fromEntries(map2))

// 该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象。

log(Object.fromEntries(new URLSearchParams('foo=bar&baz=qux')))

