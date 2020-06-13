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


