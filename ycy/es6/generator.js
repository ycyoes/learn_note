function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

function* gen() {
    yield 123 + 456;
    yield 'test';

    return 'gen';
}

let gen1 = gen();
console.log(gen().next());
console.log(gen().next());
console.log(gen().next);

console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())