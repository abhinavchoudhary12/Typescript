"use strict";
// types of function
// named function
function add(num1, num2) {
    return num1 + num2;
}
// arrow function
let sub = (num1, num2) => num1 - num2;
// functional expression
let mul = function (num1, num2) {
    return num1 * num2;
};
console.log(`addition ${add(2, 2)}`);
console.log(`subtration ${sub(2, 2)}`);
console.log(`multiplication ${add(2, 2)}`);
// optional parameters
let sum = (num1, num2, num3) => num3 ? num1 + num2 + num3 : num1 + num2;
console.log(`optional parameter with less parameter sum(2,2)=> ${sum(2, 2)}`);
console.log(`optional parameter with all parameter sum(2,2,2)=> ${sum(2, 2, 2)}`);
// required parameters
let mul3 = function (num1, num2, num3 = 5) {
    return num1 * num2 * num3;
};
console.log(`without third value mul3(12,2) -- 5 is in parameter defined----=> ${mul3(12, 2)}`);
console.log(`with third value mul3(12,2,2)-- 5 is in parameter defined----=> ${mul3(12, 2, 2)}`);
console.log(`with third value mul3(12,2,2)-- 5 is in parameter defined----=> ${mul3(12, 2, 2)}`);
// rest parameter
function addRest(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
console.log(`rest parameters=> ${addRest(1, 2, ...[3, 4, 5])}`);
