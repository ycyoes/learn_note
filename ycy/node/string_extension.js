// String.raw()
// 该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法
let raw = String.raw`Hi\n${2+3}!`
console.log('raw: ', raw)
console.log(String.raw`Hi\\n` === "Hi\\\\n")

// 使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束
let s = 'Hello world!';
console.log(s.startsWith('world', 6))
console.log(s.endsWith('Hello', 5))
console.log(s.includes('Hello', 6))



