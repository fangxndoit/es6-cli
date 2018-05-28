/* export default function  foo() {
    console.log('foo...........');
}
// */
function bar() {
    console.log('bar................')
}

export { bar as default };
//export { bar }

export var foo = 'bar';
setTimeout(() => {
    foo = 'baz';
}, 500);

function C() {
    this.sum = 0;
    this.add = function () {
        this.sum += 1;
    };
    this.show = function () {
        console.log(this.sum);
    };
}

export let c = new C();