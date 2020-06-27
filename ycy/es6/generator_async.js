const {log, error} = console;

let a = [1, 2, 8]
let b = [1, 3, 4, 6]
let l = a.length >= b.length ? a.length : b.length;
let c = [];
log(c, 'l: ', l)
for(let i = 0; i < l; i++) {
    if(a[i] && b[i]) {
        if(a[i] > b[i]) {
            c.push(b[i])
            if(a[i] < b[i+1]) {
                c.push(a[i])
            }
        } else if(a[i] === b[i]) {
            c.push(a[i]);
            c.push(b[i])
        } else {
            c.push(a[i])
            if(b[i] < a[i+1]) {
                c.push(b[i])
            }
        }
    } else {
        if(a.length === l) {
            c.push(a[i])
        } else {
            c.push(b[i])
        }
    }
}
log(c)

function merge (a, b) {
    if( a || b) return [];
    let d = [];
    let i = 0;
    while(true) {
        
        if(a[i] && b[i]) {
            if(a[i] > b[i]) {
                d.push(b[i]);
                merge(a[i], b[i + 1]);
            } else if(a[i] === b[i]){
                d.push(a[i])
                d.push(b[i])
            } else {
                d.push(a[i])
                merge(a[i + 1], b[i])
            }
        } else {
            return d;
        }
        i++;
    }
}

log(merge(a, b))


let e = [];
let i = 0, j = 0;
log('while: ', a, b)
while(true) {
    log('e: ', e, ' i:', i, ' j: ', j)
    if(a[i] && b[j]) {
        if(a[i] > b[j]) {
            e.push(b[j]);
            j++;
        } else if(a[i] === b[j]) {
            e.push(a[i], b[j]);
            i++;
            j++;
        } else {
            e.push(a[i]);
            i++;
        }
    } else if(a[i] || b[j]){
        let m = a[i] ? a.slice(i) : b.slice(j);
        e.push(...m)
        break;
    } else {
        break;
    }
}
log(e)