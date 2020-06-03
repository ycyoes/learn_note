const {log} = console;
log(...[1, 2, 3])

function f(v, w, x, y, z) {
    log(v, w, x, y, z)
}

const args = [0, 1, 4];
f(-1, ...args, 2, ...[3]);



