const {log} = console;
log(...[1, 2, 3])

function f(v, w, x, y, z) {
    log(v, w, x, y, z)
}

const args = [0, 1, 4];
f(-1, ...args, 2, ...[3]);

let x = 1;
x = -2;
log(...(x > 0 ? ['a'] : []))

// 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
// (...[1, 2])
// log((...[1, 2]))
log(...[1, 2])

