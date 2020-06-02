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






