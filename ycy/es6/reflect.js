const {log} = console;
log('assign' in Object)
log(Object)
log(Object())
log(JSON.stringify(Object))

log(Reflect.has(Object, 'assign'))

// 如果name属性部署了读取函数（getter），则读取函数的this绑定receiver
var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
      return this.foo + this.bar;
    },
  };
  
  var myReceiverObject = {
    foo: 4,
    bar: 4,
  };
  
  log(Reflect.get(myObject, 'baz', myReceiverObject))

//   如果第一个参数不是对象，Reflect.get方法会报错
// log(Reflect.get(1, 'foo'))

var myObject1 = {
    foo: 4,
    set bar(value) {
      return this.foo = value;
    },
  };
  
  var myReceiverObject1 = {
    foo: 0,
  };
  
Reflect.set(myObject1, 'bar', 1, myReceiverObject1)
// 如果name属性设置了赋值函数，则赋值函数的this绑定receiver。

//赋值函数this绑定receiver,因此myObject1中属性值不变
log(myReceiverObject1.foo)
log(myReceiverObject1.bar)
log(myObject1.foo)

/**
 * 注意，如果 Proxy对象和 Reflect对象联合使用，前者拦截赋值操作，后者完成赋值的默认行为，
 * 而且传入了receiver，那么Reflect.set会触发Proxy.defineProperty拦截。
 */

 let p = {a: 'a'}
 let handler = {
    set(target, key, value, receiver) {
      console.log('set');
      Reflect.set(target, key, value, receiver)
    },
    defineProperty(target, key, attribute) {
      console.log('defineProperty');
      Reflect.defineProperty(target, key, attribute);
    }
  };
  
  let obj3 = new Proxy(p, handler);
  obj3.a = 'A';
log(obj3)

// 上面代码中，Proxy.set拦截里面使用了Reflect.set，而且传入了receiver，
// 导致触发Proxy.defineProperty拦截。这是因为Proxy.set的receiver参数总是指向当前的 Proxy实例（即上例的obj），
// 而Reflect.set一旦传入receiver，就会将属性赋值到receiver上面（即obj），
// 导致触发defineProperty拦截。如果Reflect.set没有传入receiver，
// 那么就不会触发defineProperty拦截。

let handler2 = {
    set(target, key, value, receiver) {
      console.log('set');
      Reflect.set(target, key, value)
    },
    defineProperty(target, key, attribute) {
      console.log('defineProperty');
      Reflect.defineProperty(target, key, attribute);
    }
  };
  
  let obj4 = new Proxy(p, handler2);
obj4.a = 'a'


const myObj = { foo: 'bar' };

// 旧写法
delete myObj.foo;

// 新写法
log(Reflect.deleteProperty(myObj, 'foo'))

function Greeting(name) {
    this.name = name;
}
// Reflect.construct 的写法
const instance = Reflect.construct(Greeting, ['张三']);
log(instance)
const myObj2 = new Greeting();
log(Reflect.getPrototypeOf(myObj2) === Greeting.prototype)
log(Reflect.getPrototypeOf(myObj2))

const ages = [11, 33, 12, 54, 18, 96];
const youngest = Reflect.apply(Math.min, Math, ages);
const oldest = Reflect.apply(Math.max, Math, ages);
const type = Reflect.apply(Object.prototype.toString, youngest, []);
log(youngest, oldest, type)

function MyDate() {
    /*…*/
  }

  Reflect.defineProperty(MyDate, 'now', {
    value: () => Date.now()
  });

//   log(MyDate().now());
log(Date.now())

const p1 = new Proxy({}, {
    defineProperty(target, prop, descriptor) {
      console.log(descriptor);
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
  
  p1.foo = 'bar';
log(p1.foo)

const myObject5 = {};

// 旧写法
Object.isExtensible(myObject5) // true

// 新写法
Reflect.isExtensible(myObject5) // true
log(Reflect.isExtensible(myObject5))
log(Object.isExtensible(1))
// log(Reflect.isExtensible(1))

// Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。

var myObject = {
  foo: 1,
  bar: 2,
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4,
};

// 旧写法
Object.getOwnPropertyNames(myObject)
// ['foo', 'bar']

Object.getOwnPropertySymbols(myObject)
//[Symbol(baz), Symbol(bing)]

// 新写法
Reflect.ownKeys(myObject)
// ['foo', 'bar', Symbol(baz), Symbol(bing)]
log(Reflect.ownKeys(myObject))

log('-----使用 Proxy 实现观察者模式------')
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

const person = observable({
    name: '张三',
    age: 20
  });
  
  function print() {
    console.log(`${person.name}, ${person.age}`)
  }
  observe(print);
  person.name = '李四';
//   observe(print);
  person.name = 'test';








