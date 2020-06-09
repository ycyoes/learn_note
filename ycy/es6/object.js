const {log} = console;
const foo = 'bar';
const baz = {foo};
log(baz)

function f(x, y) {
    return {x, y};
  }
  
  // 等同于
  
  function f1(x, y) {
    return {x: x, y: y};
  }

  log(f(1, 2))









