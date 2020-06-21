const {log} = console;
process.nextTick(function() {
    log('延迟执行')
})
log('正常执行')

setImmediate(function() {
    log('setImmediate - 延迟执行')
})
log('setImmediate - 正常执行')

/**
 * process.nextTick()中的回调函数执行的优先级要高于setImmediate()。
 * 这里的原因在于事件循环对观察者的检查是有先后顺序的，process.nextTick()属于idle观察者，
 * setImmediate()属于check观察者。在每一个轮循环检查中，idle观察者先于I/O观察者，
 * I/O观察者先于check观察者。
 */





