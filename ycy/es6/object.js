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

  let birth = '2000/01/01';

const Person = {

  name: '张三',

  //等同于birth: birth
  birth,

  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }

};
function getPoint() {
    const x = 1;
    const y = 10;
    return {x, y};
  }

  log(getPoint())

  let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};

const cart = {
    _wheels: 4,
  
    get wheels () {
      return this._wheels;
    },
  
    set wheels (value) {
      if (value < this._wheels) {
        throw new Error('数值太小了！');
      }
      this._wheels = value;
    }
  }

  let user = {
    name: 'test'
  };
  
  let foo1 = {
    bar: 'baz'
  };

  log(user, foo1)
//   简写的对象方法不能用作构造函数，会报错。
const obj = {
    f() {
      this.foo = 'bar';
    }
  };
  
//   new obj.f() // 报错







