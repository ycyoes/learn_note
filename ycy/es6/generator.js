const {log, error} = console;

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

function* gen() {
    yield 123 + 456;
    yield 'test';

    return 'gen';
}

let gen1 = gen();
console.log(gen().next());
console.log(gen().next());
console.log(gen().next);

console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())

function* f() {
    console.log('执行了！')
  }
  
  var generator = f();
  
//   setTimeout(function () {
//     generator.next()
//   }, 2000);

log(generator.next())

/**
 * 上面代码中，函数f如果是普通函数，在为变量generator赋值时就会执行。但是，函数f是一个 Generator 函数，就变成只有调用next方法时，函数f才会执行。
 * 另外需要注意，yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
 */

var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}

// yield表达式如果用在另一个表达式之中，必须放在圆括号里面。

function* demo() {
//   console.log('Hello' + yield); // SyntaxError
//   console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}

function* demo() {
    foo(yield 'a', yield 'b'); // OK
    let input = yield; // OK
  }

  var myIterable = {};
  myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  };
  
  log([...myIterable] )


//   Generator 函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。

  function* gen(){
    // some code
  }
  
  var g = gen();
  log(g[Symbol.iterator]() === g)

//   上面代码中，gen是一个 Generator 函数，调用它会生成一个遍历器对象g。它的Symbol.iterator属性，也是一个遍历器对象生成函数，执行后返回它自己。

function* test() {
    return yield 1;
}
let test1 = test();
log(test1.next());
log(test1.next());

// ext方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
function* f1() {
    for(var i = 0; true; i++) {
      var reset = yield i;
      if(reset) { i = -1; }
    }
  }
  
  var g = f1();
log(g.next())  
log(g.next())  
log(g.next())  
log(g.next(true))  

function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
  }

  let a = foo(5);
  log(a.next())
  log(a.next())
  log(a.next())

  let b = foo(5);
  log(b.next())
  log(b.next(12))
  log(b.next(13))
/**
 * 如果向next方法提供参数，返回结果就完全不一样了。上面代码第一次调用b的next方法时，返回x+1的值6；第二次调用next方法，将上一次yield表达式的值设为12，因此y等于24，返回y / 3的值8；第三次调用next方法，将上一次yield表达式的值设为13，因此z等于13，这时x等于5，y等于24，所以return语句的值等于42。

注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。
 */

function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
  }
  
  let genObj = dataConsumer();
  genObj.next()
  // Started
  genObj.next('a')
  // 1. a
  genObj.next('b')

//   如果想要第一次调用next方法时，就能够输入值，可以在 Generator 函数外面再包一层。
  function wrapper(generatorFunction) {
    return function (...args) {
      let generatorObject = generatorFunction(...args);
      generatorObject.next();
      return generatorObject;
    };
  }
  //...args可不加
  const wrapped = wrapper(function* () {
    console.log(`First input: ${yield}`);
    return 'DONE';
  });
  
  wrapped().next('hello!')
  wrapped().next('world!')
  wrapped().next('test!')
  wrapped().next('1!')
  log(wrapped())
//   上面代码中，Generator 函数如果不用wrapper先包一层，是无法第一次调用next方法，就输入参数的。

function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
  }
  
  for (let v of foo()) {
    console.log(v);
  }

  function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }
  
  for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
  }

//   利用for...of循环，可以写出遍历任意对象（object）的方法。原生的 JavaScript 对象没有遍历接口，无法使用for...of循环，通过 Generator 函数为它加上这个接口，就可以用了。

  function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);
  
    for (let propKey of propKeys) {
      yield [propKey, obj[propKey]];
    }
  }
  
  let jane = { first: 'Jane', last: 'Doe' };
  
  for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
  }

//   加上遍历器接口的另一种写法是，将 Generator 函数加到对象的Symbol.iterator属性上面。

function* objectEntries1() {
  let propKeys = Object.keys(this);

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

jane[Symbol.iterator] = objectEntries1;

for (let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}

function* numbers () {
    yield 1
    yield 2
    return 3
    yield 4
  }
  
  // 扩展运算符
  log([...numbers()] )
  log(Array.from(numbers()))
  let [x, y] = numbers();
  log(x, y)

  var g = function* () {
    try {
      yield;
    } catch (e) {
      console.log('内部捕获', e);
    }
  };
  
  var i = g();
  i.next();
  
  try {
    i.throw('a');
    i.throw('b');
  } catch (e) {
    console.log('外部捕获', e);
  }

//   上面代码中，遍历器对象i连续抛出两个错误。第一个错误被 Generator 函数体内的catch语句捕获。i第二次抛出错误，由于 Generator 函数内部的catch语句已经执行过了，不会再捕捉到这个错误了，所以这个错误就被抛出了 Generator 函数体，被函数体外的catch语句捕获。

// i.throw(new Error('出错了！'));

var gen2 = function* gen(){
    yield console.log('hello');
    yield console.log('world');
  }
  
  var g = gen2();
  g.next();
//   g.throw();

function* foo2() {
    var x = yield 3;
    var y = x.toUpperCase();
    yield y;
  }
  
  var it = foo2();
  
  it.next(); // { value:3, done:false }
  
  try {
    it.next('a')
    it.next(42);
  } catch (err) {
    console.log(err);
  }

  function* g1() {
    yield 1;
    console.log('throwing an exception');
    throw new Error('generator broke!');
    yield 2;
    yield 3;
  }
  
  function log1(generator) {
    var v;
    console.log('starting generator');
    try {
      v = generator.next();
      console.log('第一次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    try {
      v = generator.next();
      console.log('第二次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    try {
      v = generator.next();
      console.log('第三次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    console.log('caller done');
  }
  
  log1(g1());






