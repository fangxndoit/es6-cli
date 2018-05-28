
//let a = 10;
const name = 'Xyi';

function time(params) {
    let time = new Date().getTime();
    console.log(time);
}
time();
//es6 测试
//数组的结构(完全解构)
(function () {
    console.log('完全解构');
    
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo);// 1
    console.log(bar);// 2

    let [x, , y] = ['x', 2, 'y'];
    console.log(x); // x
    console.log(y); // y

    let [head, ...tail] = [1, 2, 3, 4];
    console.log(head); // 1
    console.log(tail); // [2, 3, 4]

    let [a, b, ...c] = ['a'];
    console.log(a); // "a" 
    console.log(b); // undefined
    console.log(c); // []
})();

//不完全解构
(function () {
    console.log('不完全解构');
    let [x, y] = [1, 2, 3];
    console.log(x); // 1
    console.log(y); // 2

    let [a, [b], d] = [1, [2, 3], 4];
    console.log(a);  // 1
    console.log(b);  // 2
    console.log(d);  // 4
})();

(function () {
    let [x,y,z] = new Set (['aaa','b','c']);
    console.log(x);
})();

(function () {
    console.log('解构赋值允许指定默认值');
    let [foo = true] = [];
    console.log(foo);// true
    
    //let [x, y = 'b'] = ['a'];// x='a', y='b'

    let [x = 1] = [undefined];
    console.log(x);//x = 1;
    let [y = 1] = [null];
    console.log(y); //y = null;

    function f() {
        console.log('aaa');
    }

    let [z = f()] = [1];
    
})();
(function () {
    console.log('对象的解构赋值');
    let { foo: baz } = { foo: "aaa", bar: "bbb" };
    console.log(baz); // "aaa"
   // console.log(foo); // error: foo is not defined
    
    let obj = {};
    let arr = [];

    ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

    console.log(obj); // {prop:123}
    console.log(arr);// [true]

    console.log('对象的解构也可以指定默认值');
    var { message: msg = 'Something went wrong' } = {};
    console.log(msg); // "Something went wrong"
    
})();

(function () {
    const name = 'lux'
    console.log(`hello ${name}`);
})();



