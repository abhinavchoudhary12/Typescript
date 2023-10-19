"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employe_salary, _Student_id, _Student_name, _Student_course;
Object.defineProperty(exports, "__esModule", { value: true });
class Employe {
    // we can have either parameteried constructor or default constructor
    constructor(id, name, work, salary) {
        // private salary:number;
        // another way to create private variables
        _Employe_salary.set(this, void 0);
        this.stdId = id;
        this.name = name;
        this.work = work;
        __classPrivateFieldSet(this, _Employe_salary, salary, "f");
    }
    // static method
    static getname() {
        return this.name;
    }
    getNameWithWork() {
        return `${this.name} work is ${this.work} `;
    }
}
_Employe_salary = new WeakMap();
let vishal = new Employe(1, "vishal", "team lead", 85000);
let akshay = new Employe(2, "akshay", "unemployed", 0);
console.log(vishal.getNameWithWork());
console.log(akshay.getNameWithWork());
console.log(Employe.getname());
console.log(`----------------`);
console.log(`----------------`);
class Student {
    constructor() {
        _Student_id.set(this, void 0);
        _Student_name.set(this, void 0);
        _Student_course.set(this, void 0);
    }
    set name(name) {
        __classPrivateFieldSet(this, _Student_name, name, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Student_name, "f");
    }
    set id(id) {
        __classPrivateFieldSet(this, _Student_id, id, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _Student_id, "f");
    }
    set course(course) {
        __classPrivateFieldSet(this, _Student_course, course, "f");
    }
    get course() {
        return __classPrivateFieldGet(this, _Student_course, "f");
    }
}
_Student_id = new WeakMap(), _Student_name = new WeakMap(), _Student_course = new WeakMap();
let dagar = new Student();
let shashank = new Student();
let atif = new Student();
dagar.name = "abhishek";
dagar.id = 1;
dagar.course = "mca";
shashank.name = "shashank";
shashank.id = 2;
shashank.course = "mca";
atif.name = "atif";
atif.id = 3;
atif.course = "btech";
console.log(`${dagar.id}. ${dagar.name} is enrolled in ${dagar.course}`);
console.log(`${shashank.id}. ${shashank.name} is enrolled in ${shashank.course}`);
console.log(`${atif.id}. ${atif.name} is enrolled in ${atif.course}`);
