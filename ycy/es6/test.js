const {log} = console;

function func() { 
    // let a = 1; 
    var a = 2; 
    const MAX = 5;
}
// console.log(a);
// console.log(MAX)

function* hw() { yield 'hello world';};log(hw().next().value);

var a = [2, 1, 3, 8, 6, 1, 2, 3, 9];
var b = new Set(a.filter(x => x>2));
console.log([...b].sort(function(a,b){     return b-a;}));

function strMapToObj(strMap) { 
    let obj = Object.create(null); 
    for (let [k,v] of strMap) { 
        obj[k] = v; 
    } 
    return obj;
}
function strMapToJson(strMap) { 
    return JSON.stringify(strMapToObj(strMap));
}
let myMap = new Map().set('yes', true).set('no', false);console.log(strMapToJson(myMap));






