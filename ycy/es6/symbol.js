const {log} = console;
let s = Symbol();
log(s);
log(typeof s)

/**
 * Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
 * 也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型
 */

let s1 = Symbol('foo');
let s2 = Symbol('bar');
log(s1, s2)
log(s1.toString(), s2.toString())

// 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
const obj = {
    toString() {
      return 'abc';
    }
  };
  const sym = Symbol(obj);
  log(sym)

/**
 * 注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的
 */

let s3 = Symbol();
let s4 = Symbol();
log(s3 === s4);

let s5 =  Symbol('foo');
let s6 =  Symbol('foo');
log(s5 === s6);

// Symbol 值不能与其他类型的值进行运算，会报错
let sym1 = Symbol('My symbol');
// "your symbol is " + sym1
// TypeError: can't convert symbol to string

log(String(sym1))
log(sym1.toString())

log(Boolean(sym))

























