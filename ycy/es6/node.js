const {log} = console;
'use strict'
function test(xx, yy) {
    this.x = xx;
    this.y = yy;
}

let a = {};
test.call(a, 10, 20);
log(a)

let b = {};
function test1(xx, yy) {
    b.x = xx;
    b.y = yy;
}

test1(10, 202);
log(b)

let a1 = {};
test.apply(a1, [101, 20]);
log(a1)

let a2 = {}
let b2 = function test2(xx = 10, yy = 20) {
    a2.x = xx;
    a2.y = yy;
}
log(a2)
log(b2())
log(a2)

function func(name, xx, yy) {
    this.name = name;
    this.x = xx;
    this.y = yy;
}

let a3 = {};
let b3 = {};
let d = func.bind(a3, 'a', 10, 20);
d();
let f = d.bind(b3, 'b', 10, 20);
f();
log(a3, b3)








