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



