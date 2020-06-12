const {log} = console;
const foo = 'bar';
const baz = {foo};
log(baz)

function f(x, y) {
    return {x, y};
  }
  
  // 等同于
  
  function f1(x, y) {
    return {x: x, y: y};
  }

  log(f(1, 2))

  let birth = '2000/01/01';

const Person = {

  name: '张三',

  //等同于birth: birth
  birth,

  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }

};
function getPoint() {
    const x = 1;
    const y = 10;
    return {x, y};
  }

  log(getPoint())

  let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};

const cart = {
    _wheels: 4,
  
    get wheels () {
      return this._wheels;
    },
  
    set wheels (value) {
      if (value < this._wheels) {
        throw new Error('数值太小了！');
      }
      this._wheels = value;
    }
  }

  let user = {
    name: 'test'
  };
  
  let foo1 = {
    bar: 'baz'
  };

  log(user, foo1)
//   简写的对象方法不能用作构造函数，会报错。
const obj = {
    f() {
      this.foo = 'bar';
    }
  };
  
//   new obj.f() // 报错

let lastWord = 'last word';

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

log(a['first word'])
log(a[lastWord])
log(a['last word' ])

let obj1 = {
    ['h' + 'ello']() {
      return 'hi';
    }
  };
  log(obj1.hello())
//   注意，属性名表达式与简洁表示法，不能同时使用，会报错

// 报错
const foo2 = 'bar';
const bar2 = 'abc';
// const baz = { [foo] };

// 正确
const foo3 = 'bar';
const baz2 = { [foo]: 'abc'};

// 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};
log(myObject)

const person = {
    sayName() {
      console.log('hello!');
    },
  };
log(person.sayName.name)  

// 如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面，
// 而是该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set
const obj3 = {
    get foo() {},
    set foo(x) {}
  };

//   log(obj3.foo.name)
  // TypeError: Cannot read property 'name' of undefined

  const descriptor = Object.getOwnPropertyDescriptor(obj3, 'foo');
log(descriptor.get.name)
log(descriptor.set.name)
// 有两种特殊情况：bind方法创造的函数，name属性返回bound加上原函数的名字；
// Function构造函数创造的函数，name属性返回anonymous
  log((new Function()).name)
  var doSomething = function() {
    // ...
  };
  log(doSomething.bind().name)
//   如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。
const key1 = Symbol('description');
const key2 = Symbol();
let obj5 = {
  [key1]() {},
  [key2]() {},
};
log(obj5[key1].name)

let obj6 = { foo: 123 };
log(Object.getOwnPropertyDescriptor(obj6, 'foo'))

log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable)
log(Object.getOwnPropertyDescriptor([], 'length').enumerable)

// ES6 规定，所有 Class 的原型的方法都是不可枚举的
log(Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable)

log(Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 }))

const proto = {
  foo: 'hello'
};

const obj7 = {
  foo: 'world',
  find() {
    return super.foo;
  }
};
Object.setPrototypeOf(obj7, proto);
log(obj7.find())

// 注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错

log('------super-------this------')
const proto1 = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj8 = {
  x: 'world',
  foo() {
    super.foo();
  }
}

Object.setPrototypeOf(obj8, proto1);
log(obj8.foo())

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
log(x, y, z)

// 由于解构赋值要求等号右边是一个对象，所以如果等号右边是undefined或null，就会报错，因为它们无法转为对象
// let { ...z } = null; // 运行时错误
// let { ...z } = undefined; // 运行时错误

// 解构赋值必须是最后一个参数，否则会报错。
// let { ...x, y, z } = someObject; // 句法错误
// let { x, ...y, ...z } = someObject; // 句法错误

// 注意，解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、
// 那么解构赋值拷贝的是这个值的引用，而不是这个值的副本

let obj9 = { a: { b: 1 } };
let { ...x1 } = obj9;
log(obj9.a.b)
obj9.a.b = 2;
log(x1.a.b)

// 扩展运算符的解构赋值，不能复制继承自原型对象的属性。

let o1 = { a: 1 };
let o2 = { b: 2 };
log(o2.__proto__ = o1)
let { ...o3 } = o2;
log(o3)
log(o3.a)

const o = Object.create({ x2: 1, y2: 2 });
o.z2 = 3;

log('o: ', o)
let { x2, ...newObj } = o;
let { y2, z2 } = newObj;
log(x2, y2, z2)

/**
 * 上面代码中，变量x是单纯的解构赋值，所以可以读取对象o继承的属性；变量y和z是扩展运算符的解构赋值，
 * 只能读取对象o自身的属性，所以变量z可以赋值成功，变量y取不到值。ES6 规定，变量声明语句之中，
 * 如果使用解构赋值，扩展运算符后面必须是一个变量名，而不能是一个解构赋值表达式，
 * 所以上面代码引入了中间变量newObj，如果写成下面这样会报错。
 */

// let { x3, ...{ y3, z3 } } = o;

let z3 = { a: 3, b: 4 };
let n = { ...z3 };
log(n, z3)

log({...{}, a: 1})
log({...'hello'})

// 写法一
const clone1 = {
  __proto__: Object.getPrototypeOf(obj),
  ...obj
};

// 写法二
const clone2 = Object.assign(
  Object.create(Object.getPrototypeOf(obj)),
  obj
);

// 写法三
const clone3 = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)

let a2 = {
  get x() {
    log('扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的')
    // throw new Error('not throw yet');
  }
}

let aWithXGetter = { ...a2 };
log(aWithXGetter)

/**
 * 链判断运算符有三种用法。

obj?.prop // 对象属性
obj?.[expr] // 同上
func?.(...args) // 函数或对象方法的调用
 */

// 下面是判断对象方法是否存在，如果存在就立即执行的例子。
// iterator.return?.()

// log(a?.b)
log(a == null ? undefined : a.b)





