const {log} = console;
var obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    }
  });

  obj.count = 1
  //  setting count!
  ++obj.count
//  getting count!
//  setting count!
//  2
  log(obj)

  var proxy = new Proxy({}, {
    get: function(target, propKey) {
      return 35;
    }
  });

  log(proxy.time)
  log(proxy.name)
  log(proxy.title)

// new Object() 方式创建
var a = {  rep : 'apple' }
var b = new Object(a)
console.log(b) // {rep: "apple"}
console.log(b.__proto__) // {}
console.log(b.rep) // {rep: "apple"}

// Object.create() 方式创建
var a = { rep: 'apple' }
var b = Object.create(a)
console.log(b)  // {}
console.log(b.__proto__) // {rep: "apple"}
console.log(b.rep) // {rep: "apple"}

let o = Object.create({}, {p: {value: 42}})
o.p = 24;
log(o.p)

let o1 = Object.create({})
o1.p = 23;
log(o1.p)
log(Object.getOwnPropertyDescriptors(o1))
log(Object.getOwnPropertyDescriptors(o))

let o2 = Object.create(null);
o2.p = 22;
log(o2.p)
log(Object.getOwnPropertyDescriptors(o2))

log(new Object())
log(Object.create({}))
log(Object.create(null))
console.dir(new Object())
console.dir(Object.create(null))

var handler = {
    get: function(target, name) {
      if (name === 'prototype') {
        return Object.prototype;
      }
      return 'Hello, ' + name;
    },
  
    apply: function(target, thisBinding, args) {
      return args[0];
    },
  
    construct: function(target, args) {
      return {value: args[1]};
    }
  };
  
  var fproxy = new Proxy(function(x, y) {
    return x + y;
  }, handler);
  
  log(fproxy(1, 2) )
  log(new fproxy(1, 2))
  log(fproxy.prototype === Object.prototype)
  log(fproxy.foo === "Hello, foo")
log(Object.prototype)
log(fproxy.prototype)

var person = {
    name: "张三"
};

var proxy1 = new Proxy(person, {
    get: function(target, propKey) {
        if(propKey in target) {
            return target[propKey];
        } else {
            throw new ReferenceError("Prop name \"" + propKey + "\" does not exist")
        }
    }
});
log(proxy1.name)
// log(proxy1.age)

let proto = new Proxy({}, {
    get(target, propertyKey, receiver) {
      console.log('GET ' + propertyKey);
      return target[propertyKey];
    }
  });

let obj2 = Object.create(proto);
log(obj2.foo)
obj2.foo

log(String(1))
















