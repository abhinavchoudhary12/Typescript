"use strict";
// types in typescript
// 1.string
// 2.number
// 3.boolean -------------->it needs to be assigned 
// 4.array
// 5.enum 
// 6. any
// 7. tuple
// 8. void
// 1.string
let fname;
fname = 'abhinav';
console.log(fname);
let result = fname.toUpperCase();
console.log(result);
// 2.number
let num = 12;
let num1 = 12.4;
let num2 = parseInt("13");
console.log(num);
console.log(`this is fixed to decimal from floating ${num1.toFixed()}`);
console.log(num2);
// 3.boolean
let isValid = false;
console.log(isValid);
// 4.array
let arr;
arr = ["akshay"];
arr.push("abhinav");
arr.push("abhishek");
// generic way of declaration an array
let arr1;
arr1 = [1, 2, 3, 2];
arr1.push(12);
console.log(arr);
console.log(arr1);
let resultArr = arr1.filter((num) => num >= 2);
console.log(resultArr);
let fnd = arr1.find((num) => num === 5);
console.log(fnd);
let fnd1 = arr1.find((num) => num === 2);
console.log(fnd1);
// 5.enum 
// without constant
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(`this is enum ${c}`);
let c1 = 1 /* Color1.Green */;
console.log(`this is enum with const${c1}`);
// 6. any
let a;
a = 12;
console.log(`using any ${a}`);
a = "string";
console.log(`using any ${a}`);
// 7. tuple
let Student;
let studentDetail = (id, name) => { return [id, name]; };
Student = studentDetail(2, "abhinav");
console.log(`the id of student is ${Student[0]} and the name is ${Student[1]}`);
