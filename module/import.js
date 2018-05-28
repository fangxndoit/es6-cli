
//逐一指定要加载的方法1.1


/* import * as exp from './module.js';

console.log('  ' + exp.multiply(2, 6));

console.log(exp.firsttName + '' + exp.lastName);

console.log('圆面积：' + exp.area(4));

console.log('圆周长：' + exp.circumference(14)); */

//加载某个模块

import { area, circumference, multiply, firsttName, lastName } from './module'

console.log('  ' + multiply(2, 11));

console.log(firsttName + '' + lastName);



console.log('圆周长：' + circumference(14));


//import customName from './import-default';
/* import { default as customName } from './import-default'
customName(); */
console.log('----------------------');
var btn = document.getElementById('btn');
btn.addEventListener('click', event => {
    console.log('如果你没看错的话');
})
console.log('-==--------------------');

//测试动态改变的模块
import {foo} from './import-default';
console.log(foo);
setTimeout(() => {
    console.log(foo);
}, 500);

console.log('---------我是分割线----------------')
import { c } from './import-default';
c.add();
c.show();


//异步处理  @
/* function fn1() {
    console.log('Function 1')
}

function fn2(f) {
    setTimeout(() => {
        console.log('Function 2')
        f();
    }, 500)
}

function fn3() {
    console.log('Function 3')
}
fn1();
fn2(fn3); */




//事件发布/订阅
class AsyncFunArr {
    constructor (...arr){
        this.funcArr = [...arr];
    }

    next () {
        const fn = this.funcArr.shift()
        if(typeof fn === 'function') fn()
    }

    run () {
        this.next();
    }
}

//const asynFunArr = new AsyncFunArr(fn2, fn1, fn3);
//asynFunArr.run();

function fn1() {
    console.log('Funtion 1');
    asynFunArr.next();
}
function fn2() {
    setTimeout(() => {
        console.log('Funtion 2');
        asynFunArr.next();
    }, 500);
}
function fn3() {
    console.log('funtion 3');
    asynFunArr.next();
}

//Promise

function fn1_1(params) {
    console.log('funtion_1');
}
function fn1_2(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('funtion_2');
            resolve();
        }, 500);
    })
}
function fn1_3() {
    console.log('funtion_3');
}
fn1_1();
fn1_2().then(() => { fn1_3()});

//generator 执行错误
//async/await
function fn3_1() {
    console.log('funtion_3_1');
}
function fn3_2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('funtion_3_2');
            resolve();
        }, 500);
    })
}
function fn3_3() {
    console.log('funtion_3_3');
}

async function asynFunArrT(params) {
    fn3_1();
    await fn3_2();
    fn3_3(); 
}

asynFunArrT();

//es6测试
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms ,'done');
    });
}
timeout(100).then((value)=>{
    console.log(value);
})
                                                                                                                                                                                                                                                                                                                            
let pormise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});
pormise.then(function () {
    console.log('resolved');
});
console.log('Hi');
//个人理解： 在pormise实例执行成功后调用resolve()方法，这个方法是绑定pormise.then()，即执行pormise.then(a,b) => a方法；


//异步加载图片
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}

//下面是一个用Promise对象实现的 Ajax 操作的例子
const getJson = function (url) {
    const promise = new Promise(function (resolve, reject) {
        const handler = function () {
            if(this.readyState !== 4){
                return;
            }
            if (this.statue === 200) {
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept','application/json');
        client.send();
    });

    return pormise;
}

// getJson('/post.json').then(function (json) {
//     console.log('Contents: '+json);
// },function (error) {
//     console.log('出错了', error);
// })


//iterator
console.log('-----------iterator----------');
var it = makeIterator(['a','b']);
console.log(it.next()) // { value: "a", done: false }
console.log(it.next()) // { value: "b", done: false }
console.log(it.next()) // { value: undefined, done: true }

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ? 
                {value: array[nextIndex++]} :
                {value: undefined}
        }
    };
}

var it_a = idMaker();
for(var i=0;i<10;i++){
    console.log(it_a.next().value);
}

function idMaker() {
    var index = 0;
    return {
        next: function () {
            return {value: index++, done: false};
        }
    };
}

let arr = ['a','b','c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next().value);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

//欢迎来到 class  的阶段
console.log('----------class-------------')
/* function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
    return '('+this.x+', '+this.y+')';
};
var p = new Point(2, 3); */

class Point {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }

    toValue(){
        // ...
    }
}
Point.prototype = {
    constructor(){},
    toString(){},
    toValue(){},
};

typeof Point // "function"
Point === Point.prototype.constructor // true

class Bar {
    doStuff(){
        console.log('stuff');
    }
}

var b = new Bar();
b.doStuff();

const MyClass = class Me {
    getClassName(){
        return Me.name
    }
}

let inst = new MyClass();
console.log(inst.getClassName());

let person = new class {
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}('张三');
person.sayName();


