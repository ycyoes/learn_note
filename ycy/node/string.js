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




