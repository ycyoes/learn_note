// 字符的 Unicode 表示法
console.log("\u0061");
console.log("\uD842\uDFB7");
console.log("\u20BB7");
console.log("\u{20BB7}")
console.log("\u{41}\u{42}\u{43}")
console.log('\u{1F680}' === '\uD83D\uDE80')

console.log('\u{7A}' === 'z')

// 字符串的遍历器接口
for (let codePoint of 'foo') {
    console.log(codePoint)
}

let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
console.log('text: ', text)

for (let i of text) {
    console.log(i);
}

// 直接输入 U+2028 和 U+2029
console.log('中' === '\u4e2d')

function fn() {
    return "Hello World";
}
console.log(`foo ${fn()} bar`);

let a = 5;
let b = 10;
function tag(s, v1, v2) {
    console.log(s[0])
    console.log(s[1])
    console.log(s[2])
    console.log(v1)
    console.log(v2)

    return "ok";
}

tag`Hello ${a+b} world ${a*b}`

let total = 30;
let msg = passthru1`The total is ${total} (${total*1.05} with tax)`

function passthru(literals) {
    console.log('literals: ', literals)
    let result = '';
    let i = 0;
    while(i < literals.length) {
        result += literals[i++];
        console.log('arguments: ', arguments)
        if(i < arguments[i]) {
            result += arguments[i];
        }
    }
    return result;
}

function passthru1(literals, ...values) {
    let output = "";
    let index;
    for(index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
    }
    output += literals[index]
    return output;
}

console.log(msg)

// 模板处理函数的第一个参数（模板字符串数组），还有一个raw属性。
console.log`123`

// strings.raw[0] 为 "First line\\nSecond line"
  // 打印输出 "First line\nSecond line"
function tag(strings) {
    console.log(strings.raw[0]);
}
tag`First line\nSecond line`