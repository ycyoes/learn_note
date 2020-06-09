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
    a.x = xx;
    a.y = yy;
}

test(10, 20);
log(a)












