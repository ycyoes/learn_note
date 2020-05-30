(function() {
    console.log(0o11 === 011);
})()

// 严格模式下报错
// (function() {
//     'use strict';
//     console.log(0o11 === 011);
// })()

// 如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法
console.log(Number('0b111'))
console.log(Number('0o10'))

// ES5写法
console.log(parseInt('12.34'))
console.log(parseFloat('123.45#'))

// ES6写法
console.log(Number.parseInt('12.34'))
console.log(Number.parseFloat('123.45#'))

// ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差
console.log(Number.EPSILON === Math.pow(2, -52))

console.log(0.1 + 0.2 === 0.3)
console.log(0.1 + 0.2 - 0.3)

// Number.EPSILON可以用来设置“能够接受的误差范围”。
// 比如，误差范围设为 2 的-50 次方（即Number.EPSILON * Math.pow(2, 2)），即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等
console.log(5.551115123125783e-17 < Number.EPSILON * Math.pow(2, 2))

// 安全整数
// JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
console.log(Math.pow(2, 53))
console.log(9007199254740992)   //9007199254740992
console.log(9007199254740993)   //9007199254740992

// 验证运算结果是否落在安全整数的范围内，不要只验证运算结果，而要同时验证参与运算的每个值
console.log(Number.isSafeInteger(9007199254740993))
console.log(Number.isSafeInteger(990))
console.log(Number.isSafeInteger(9007199254740993 - 990))
console.log(9007199254740993 - 990)
// 上面代码中，9007199254740993不是一个安全整数，但是Number.isSafeInteger会返回结果，显示计算结果是安全的。
// 这是因为，这个数超出了精度范围，导致在计算机内部，以9007199254740992的形式储存














