const {log} = console;
// var obj1 = {a:1};
// var obj2= {};
// var obj = {obj1:obj1,b:1,c:true,d:'asd'}
// var constantize = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach( (key, i) => {
//     if ( typeof obj[key] === 'object' ) {
//       constantize( obj[key] );
//     }
//   });
// };
// constantize.obj1 = obj2;
// constantize.b = 2;
// constantize.c = false;
// constantize.d = 'qqq';

// console.log(constantize);




// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth 



//  let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

// console.log(foo,bar);

// foo // "aaa"
// bar // "bbb"

// let { log, sin, cos } = Math;

// console.log(log,sin,cos);

// 例二
// const { log } = console;
// log('hello') // hello



// let obj = {};
// let arr = [];

// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

// console.log(obj,arr);

// let {foo: {bar}} = {foo: {bar :'baz'}};
// log(bar);

// let {toString: s} = 1223;
// log(s === Number.prototype.toString)

// log([[1, 2], [3, 4]].map(([a, b]) => a + b));

// function move({x = 0, y = 0} = {}) {
//   return [x, y];
// }
// log(
// move({x: 3, y: 8}),
// move({x: 3})
// ,move({})
// , move()
//  );


// let [a] = [1];

// let {x: (c)} = {};
// let ({x: c}) = {};
// let {(x: c)} = {};
// let {(x): c} = {};

// let { o: ({ p: p }) } = { o: { p: 2 } };


// ({ p: a } = { p: 42 })

// ([{ p: a }, { x: c }] = [{}, {}]);

// log(a);


// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }

// let f = 'foo'

// for (let codePoint of f) {
//   console.log(codePoint)
// }

// let template = `
// <ul>
//   <% for(let i=0; i < data.supplies.length; i++) { %>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
// </ul>
// `;

// let evalExpr = /<%=(.+?)%>/g;
// let expr = /<%([\s\S]+?)%>/g;

// template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`');
// log(template+'1'); 

// template = template.replace(expr, '`); \n $1 \n  echo(`');
// log(template+'2'); 

// template = 'echo(`' + template + '`);';
// log(template+'3');

// let a = 5;
// let b = 10;

// function tag(s, v1, v2) {
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);

//   return "OK";
// }

// log(tag`Hello ${ a + b } world ${ a * b}`);

// let total = 30;
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

// function passthru(literals) {
//   let result = '';
//   let i = 0;

//   while (i < literals.length) {
//     result += literals[i++];
//     if (i < arguments.length) {
//       result += arguments[i];
//     }
//   }

//   return result;
// }

// log(msg) // "The total is 30 (31.5 with tax)"

// let arry = [1,2,3];

// for (let i = 0 ; i < arry.length;) {
//   let a = arry[i++]
//   log(a);
// }
let a = 10
let b = 20
let n = function nnn(params) {
    log(params);
}
let params = n`haaaaaaa ${a} caaaaaaaa${a*b} sdasd ${b}`


 