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
console.log(bar); // 报错ReferenceError
let bar = 2;

















