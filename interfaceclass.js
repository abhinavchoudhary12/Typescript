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
var _admmision_user, _admmision_course;
Object.defineProperty(exports, "__esModule", { value: true });
class admmision {
    constructor() {
        _admmision_user.set(this, void 0);
        _admmision_course.set(this, void 0);
    }
    set user(user) {
        __classPrivateFieldSet(this, _admmision_user, user, "f");
    }
    get user() {
        return `name is ${__classPrivateFieldGet(this, _admmision_user, "f").name} dep is ${__classPrivateFieldGet(this, _admmision_user, "f").dep} age is ${__classPrivateFieldGet(this, _admmision_user, "f").age} lives in ${__classPrivateFieldGet(this, _admmision_user, "f").address.city}/${__classPrivateFieldGet(this, _admmision_user, "f").address.state}/${__classPrivateFieldGet(this, _admmision_user, "f").address.country}`;
    }
    set course(course) {
        __classPrivateFieldSet(this, _admmision_course, course, "f");
    }
    get course() {
        return `course enrolled is ${__classPrivateFieldGet(this, _admmision_course, "f")}`;
    }
}
_admmision_user = new WeakMap(), _admmision_course = new WeakMap();
let kiet = new admmision();
kiet.user = { name: "abhinav", age: 25, address: { city: "ghaziabad", country: "india", state: "UP" }, dep: "computer application" };
kiet.course = "MCA";
console.log(`${kiet.course} ${kiet.user} `);
