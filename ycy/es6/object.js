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












