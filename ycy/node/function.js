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





















