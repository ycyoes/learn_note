const {log} = console;
log('exam - test')

function f() {
    console.log('aaa');
  }
  
  let [x = f()] = [1];
log(x)

async function fa() {
    return 'hello world';
  }

// fa().then(v => log(v))

let a = [2, 1, 3, 8, 6, 1, 2, 3, 9]

let b = new Set(a.filter(v => v > 2).sort().reverse())
log(...b)

async function f2() {
    log('hello world')
    return 'test'
}

f2()

const m2 = new Map([['baz', 3]]);
log(m2.get('baz'))
const m3 = new Map(m2);
log(m3.get('baz'))

const map = new Map();

const k1 = ['a'];
const k2 = ['a'];
const k3 = 'k';
const k4 = 'k';

map
.set(k1, 111)
.set(k2, 222)
.set(k3, 333)
.set(k4, 444);

log(map.get(k1))
log(map.get(k2))
log(map.get(k3))
log(map.get(k4))

const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = undefined;
const v5 = [1, 2]


const obj = Object.assign({}, v1, v2, v3, v4, v5);
console.log(obj);

function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
  }

  function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }
  
  log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'))
  
  function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
  }
  
  log(jsonToStrMap('{"yes": true, "no": false}'))
  log(JSON.parse('{"yes": true, "no": false}'))
log(NaN == NaN)
log(+0 == -0)
log(+1 == -1)
log(NaN === NaN)
log(+0 === -0)
log(+1 === -1)

log(Object.is(NaN, NaN))
log(Object.is(+0, -0))







