const {log} = console;
// const fetch = require('fetch')

function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }
  
  asyncPrint('hello world', 50);

//   async函数内部return语句返回的值，会成为then方法回调函数的参数。

  async function f() {
    return 'hello world f';
  }
  
  f().then(v => console.log(v))

  async function f1() {
    throw new Error('出错了');
  }
  
  f1().then(
    v => console.log(v),
    e => console.log(e)
  )

//   async function getTitle(url) {
//     let response = await fetch(url);
//     let html = await response.text();
//     return html.match(/<title>([\s\S]+)<\/title>/i)[1];
//   }
//   getTitle('https://tc39.github.io/ecma262/').then(console.log)

  async function f2() {
    // 等同于
    // return 123;
    return await 123;
  }
  
  log(f2().then(v => console.log(v)))

  class Sleep {
    constructor(timeout) {
      this.timeout = timeout;
    }
    then(resolve, reject) {
      const startTime = Date.now();
      setTimeout(
        () => resolve(Date.now() - startTime),
        this.timeout
      );
    }
  }
  
  (async () => {
    const sleepTime = await new Sleep(1000);
    console.log('sleepTime: ', sleepTime);
  })();












