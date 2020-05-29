var {log} = console;


/*var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
i = 'fdsgfjjjj';
a[6](); // 10*/


// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// console.log(i);
// i;
// a[6](); // 6



// var tmp = true;

// if (true) {
//     let tmp;
//   tmp = 'abc'; // ReferenceError
//   console.log(tmp);
// }

// console.log(typeof tmp);


// function func(arg) {
//     return arg+2;
//     {
//       let arg = 'hello';
//       return arg;
//     }
// }
// console.log(func(11));
// func() // 不报错




// var tmp = new Date();

// (function () {
//     var xx =tmp;
// console.log(tmp);
// //var tmp = 'hello world';
// }());
// console.log(tmp);




// function f() { console.log('I am gfhgjdjfdfhjfhghdkhffjgjkkhdhgfgjkghjdfgjgkhjgfdhf!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }
//   console.log(f);
// }());


// var array= [];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// if(true)
// var abc='jj';
// if (true) 
// let x = 1;
// console.log(x)
  


// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x,y,z);


// function move({x , y } = {}) {
//   return [x, y];
// }

// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, 0]
// move({}); // [0, 0]
// log(move()); // [0, 0]


// 返回一个数组

// function example() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example();

// 返回一个对象

// function example() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example();

  // 参数是一组有次序的值
// function f([x, y, z]) { ... }
// f([1, 2, 3]);

// 参数是一组无次序的值
// function f({x, y, z}) { ... }
// f({z: 3, y: 2, x: 1});

// let jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// };
// let { id, status, data: number } = jsonData;
// console.log(id, status, number);


// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }

// 普通字符串
//`In JavaScript '\n' is a line-feed.`

// 多行字符串
// `In JavaScript this is
//  not legal.`

// console.log(`string text line 1
// string text line 2`);

// 字符串中嵌入变量
// let name = "Bob", time = "today";
// `Hello ${name}, how are you ${time}?`

// let greeting = `\`Yo\` World!`;
// log(greeting)

//``英文状态的~

let template = 
`<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>`;

let evalExpr = /<%=(.+?)%>/g;
let expr = /<%([\s\S]+?)%>/g;

template = template
  .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
  .replace(expr, '`); \n $1 \n  echo(`');

log(template)
template = 'echo(`' + template + '`);';
log('\n------------\n')
log(template)
