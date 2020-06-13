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



















