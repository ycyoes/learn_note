const {log,error} = console;
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(10).then((val) => {
    log(val)
})

let promise1 = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
  });
  
  promise1.then(function() {
    console.log('resolved.');
  });
  
  console.log('Hi!');
  
  // Promise
  // Hi!
  // resolved

//   上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。
// 然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。

// 用Promise对象实现 Ajax 操作
const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject) {
        const handler = function() {
            if(this.readyState !== 4) {
                return;
            }
            if(this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });
    return promise;
}

// getJSON("/posts.json").then(function(json) {
//     log('Contents: ' + json);
// }, function(err) {
//     error('wrong', err)
// });

error('error')

const p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        // reject(new Error('fail'))
    log('error---')
    }, 2000);
});
const p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(p1)
    }, 1000);
})
// p2.then(result => log(result))
//     .catch(err => error(err))

    // 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
 let p3 = new Promise((resolve, reject) => {
        resolve(1);
        console.log(2);
      }).then(r => {
        console.log(r);
      });

      p3.then((val) => console.log('fulfilled:', val))
      .then(null, (err) => console.log("----rejected:", err));

    //   如果 Promise 状态已经变成resolved，再抛出错误是无效的。

      const promise3 = new Promise(function(resolve, reject) {
        resolve('ok');
        throw new Error('test');
      });
      promise3
        .then(function(value) { console.log(value) })
        .catch(function(error) { console.log(error) });
      // ok

    //   一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。

      // bad
      promise1
        .then(function(data) {
          // success
        }, function(err) {
          // error
        });
      
      // good
      promise1
        .then(function(data) { //cb
          // success
        })
        .catch(function(err) {
          // error
        });

        // 一般总是建议，Promise 对象后面要跟catch()方法，这样可以处理 Promise 内部发生的错误。catch()方法返回的还是一个 Promise 对象，因此后面还可以接着调用then()方法。

        const someAsyncThing = function() {
          return new Promise(function(resolve, reject) {
            // 下面一行会报错，因为x没有声明
            resolve(x + 2);
          });
        };
        
        // someAsyncThing()
        // .catch(function(error) {
        //   console.log('oh no', error);
        // })
        // .then(function() {
        //   console.log('carry on');
        // });
log('---finally----')
        Promise.resolve(2).then(() => {}, () => {})
// resolve 的值是 2
Promise.resolve(2).finally(() => {})

// const p5 = Promise.race([
//     fetch('/resource-that-may-take-a-while'),
//     new Promise(function (resolve, reject) {
//       setTimeout(() => reject(new Error('request timeout')), 5000)
//     })
//   ]);
  
//   p5
//   .then(console.log)
//   .catch(console.error);

const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
  console.log(results);
});

let thenable = {
    then: function(resolve, reject) {
      resolve(42);
    }
  };
  
  let p6 = Promise.resolve(thenable);
  p6.then(function(value) {
    console.log(value);  // 42
  });

log('----', Promise.resolve())

setTimeout(function () {
    console.log('three');
  }, 0);
  
  Promise.resolve().then(function () {
    console.log('two');
  });
  
  console.log('one');
//   上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
// Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出。

// 注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。

const thenable1 = {
  then(resolve, reject) {
    reject('出错了');
  }
};

Promise.reject(thenable1)
.catch(e => {
  console.log(e === thenable1)
})

const f = () => console.log('now');
(async () => f())();
console.log('next');

// Promise.try(f);













