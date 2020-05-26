//let声明变量，变量只在代码块内有效
{
    let a = 10;
    var b = 1;
}

// console.log(a);  ReferenceError: a is not defined.
console.log(b);

var a = [];
for(var i = 0; i <10; i++) {
    a[i] = function(){
        console.log(i);
    }
}

console.log(a[6]())

/**
 * 上面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。
 * 每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，
 * 里面的i指向的就是全局的i。也就是说，所有数组a的成员里面的i，指向的都是同一个i，
 * 导致运行时输出的是最后一轮的i的值，也就是 10。如果使用let，声明的变量仅在块级作用域内有效，
 * 最后输出的是 6。
 */

var a = [];
for(let i = 0; i <10; i++) {
    a[i] = function(){
        console.log(i);
    }
}

console.log(a[6]())

//for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}

// var 变量提升
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;

console.log('先试用后声明变量，使用typeof会报错')
typeof x; // ReferenceError
// let x;

// 上面代码中，变量x使用let命令声明，所以在声明之前，都属于x的“死区”，只要用到该变量就会报错。因此，typeof运行时就会抛出一个ReferenceError。
// 作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。
typeof undeclared_variable // "undefined"

var tmp = new Date();
function f() {
    console.log(tmp);
    if(false) {
        var tmp = 'hello world';
    }
}

f();
// 上面代码的原意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。但是，函数f执行后，输出结果为undefined，原因在于变量提升，
// 导致内层的tmp变量覆盖了外层的tmp变量。

// 用来计数的循环变量泄露为全局变量
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
// 变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量




















