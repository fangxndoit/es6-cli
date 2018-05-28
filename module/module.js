/* // 写法一
export var m = 1;

// 写法二
var m = 1;
export { m };

// 写法三
var n = 1;
export { n as m }; */

var firsttName = 'Json';
var lastName = 'luxi';
var year = 1958;

export function multiply(x, y) {
    return x * y;
}

export {firsttName, lastName, year};

export function area(radius) {
    return Math.PI * radius *radius;
}

export function circumference(radius) {
     return 2 * Math.PI * radius;
 }

