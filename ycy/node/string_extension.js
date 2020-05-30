// String.raw()
// 该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法
let raw = String.raw`Hi\n${2+3}!`
console.log('raw: ', raw)