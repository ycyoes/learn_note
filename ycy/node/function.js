let log = console.log;

// 一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的
let x = 99;
function foo(p = x + 1) {
    log(p)
}

foo()

x = 100;
foo();
// 上面代码中，参数p的默认值是x + 1。这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100

// 如果没有提供参数，函数foo的参数默认为一个空对象
function foo1({x, y = 5} = {}) {
    console.log(x, y);
}
foo1()

function fetch(url, {body = '', method = 'GET', headers = {} }) {
    console.log(method);
}
fetch('http://example.com', {})
// fetch('http://example.com') //报错

function fetch1(url, {body = '', method = 'GET', headers = {} } = {}) {
    console.log(method);
}
fetch1('http://example.com')

function m1({x = 0, y = 0 } = {}) {
    return [x, y];
}

function m2({x, y} = {x: 0, y: 0}) {
    return [x, y];
}

console.log(m1())
console.log(m2())

// x 和 y 都有值的情况
console.log(m1({x: 3, y: 8}))
console.log(m2({x: 3, y: 8}))

// x 有值，y 无值的情况
console.log(m1({x: 3}))
console.log(m2({x: 3}))

// x 和 y 都无值的情况
console.log(m1({}))
console.log(m2({}))

console.log(m1({z: 3}))
console.log(m2({z: 3}))


// 通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。
// 如果非尾部的参数设置默认值，实际上这个参数是没法省略的
function f1(x = 1, y) {
    return [x, y];
}

console.log(f1())
console.log(f1(2))
console.log(f1(undefined, 2))
// console.log(f1(, 2)) //报错

function f2(x, y = 5, z) {
    return [x, y, z];
}

console.log(f2())
console.log(f2(1))
console.log(f2(1, undefined, 2))
// console.log(f2(1, , 2)) //报错

// 有默认值的参数都不是尾参数。这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined。

// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果
function f3(x = 5, y = 6) {
    console.log(x, y);
}
f3(undefined, null)

// 函数的 length 属性
log((function (a) {}).length)
log((function (a = 5) {}).length)
log((function (a, b, c = 5) {}).length)

// length属性的含义是，该函数预期传入的参数个数。
// 某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。同理，后文的 rest 参数也不会计入length属性
log((function(...args) {}).length)

// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
log((function (a = 0, b, c) {}).length)
log((function (a, b = 1, c) {}).length)

//作用域
var z = 1;
function f4(z, y = z) {
    console.log(y);
}
f4(2)
// 上面代码中，参数y的默认值等于变量x。
// 调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。

let foo2 = 'outer';
function bar(func = () => foo2) {
    let foo2 = 'inner';
    log(func())
}
bar();

var x1 = 1;
function foo3(x1, y = function() { x1 = 2; }) {
    var x1 = 3;
    y();
    log(x1);
}
foo3()
log(x1)

// 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误
function throwIfMissing() {
    throw new Error('Missing parameter');
  }

  function foo4(mustBeProvided = throwIfMissing()) {
    log(mustBeProvided)
    return mustBeProvided;
  }
  
  foo4('test')

//   另外，可以将参数默认值设为undefined，表明这个参数是可以省略的
function foo5(optional = undefined) { 
    log(optional)
 }

foo5(1)

// rest 参数
function add(...values) {
    let sum = 0;
    for(var val of values) {
        sum += val;
    }
    return sum;
}
log(add(2, 5, 3))

const doSomething = (function() {
    'use strict'
    return function(value = 42) {
        return value;
    };
}());
log(doSomething())

//name属性
function foo6() {

}
log(foo6.name)


log((new Function).name)

// bind返回的函数，name属性值会加上bound前缀
log(foo6.bind({}).name)
log((function(){}).bind({}).name)

//箭头函数
let arr = [1,2,3].map(x => x * x)
log(arr)

// this对象的指向是可变的，但是在箭头函数中，它是固定的
function foo7() {
    setTimeout(() => {
        log('id: ', this.id);
    }, 100);
}
var id = 21;
// foo7.call({id: 42})

// 上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。
// 如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。
// 但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。

function Timer(){
    this.s1 = 0;
    this.s2 = 0;
    //箭头函数
    setInterval(() => this.s1++, 1000);
    //普通函数
    setInterval(function() {
        this.s2++;
    }, 1000);
}
// var timer = new Timer();
// setTimeout(() => log('s1: ', timer.s1), 3100);
// setTimeout(() => log('s2: ', timer.s2), 3100);

// 上面代码中，Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。
// 前者的this绑定定义时所在的作用域（即Timer函数），后者的this指向运行时所在的作用域（即全局对象）。
// 所以，3100 毫秒之后，timer.s1被更新了 3 次，而timer.s2一次都没更新。

log('箭头函数嵌套')
function foo8() {
    return () => {
      return () => {
        return () => {
          console.log('循环嵌套id:', this.id);
        };
      };
    };
  }
  
  var f = foo8.call({id: 1});
  
  var t1 = f.call({id: 2})()(); // id: 1
  var t2 = f().call({id: 3})(); // id: 1
  var t3 = f()().call({id: 4}); 

  log(Array.prototype.shift === [].shift)

  function foo9() {
    setTimeout(() => {
      console.log('args:', arguments);
    }, 100);
  }
  
//   foo9(2, 4, 6, 8)

  function foo10() {
      log('args of arguments: ', arguments);
  }
  foo10()
  foo10(1)

  function foo11(){
      log('-----instanceof--------')
    console.log([] instanceof Array)
    console.log(arguments instanceof Array)
    if(arguments.push) arguments.push('test')
    log('after push: ', arguments)
}
foo11()

//不适用箭头函数的场合
//1. 定义对象的方法，且该方法内部包括this
//2. 需要动态this的时候，也不应使用箭头函数

function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
  }
  
  function factorial(n) {
    return tailFactorial(n, 1);
  }
  
  log( factorial(5) )
 // 120

//  柯里化（currying），意思是将多参数的函数转换成单参数的形式

function factorial(n, total = 1) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
  }
  
  factorial(5) // 120


// 严格模式
/**
 * ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。

这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。

func.arguments：返回调用时函数的参数。
func.caller：返回调用当前函数的那个函数。
尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。
 */

function restricted() {
    // 'use strict';
    restricted.caller;    // 报错
    log(restricted.caller)
    restricted.arguments; // 报错
    log(restricted.arguments)
  }
  restricted();

  function sum(x, y) {
    if (y > 0) {
      return sum(x + 1, y - 1);
    } else {
      return x;
    }
  }
  
//   log(sum(1, 100000))

function trampoline(f) {
    while (f && f instanceof Function) {
      f = f();
    }
    return f;
  }
  /**
   * 上面就是蹦床函数的一个实现，它接受一个函数f作为参数。只要f执行后返回一个函数，就继续执行。
   * 注意，这里是返回一个函数，然后执行该函数，而不是函数里面调用函数，这样就避免了递归执行，从而就消除了调用栈过大的问题
   */





