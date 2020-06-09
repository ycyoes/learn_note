const {log} = console;
// Object.is()用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
log(+0 === -0)
log(Object.is('foo', 'foo'))
log(Object.is({}, {}))
log(NaN === NaN)






















