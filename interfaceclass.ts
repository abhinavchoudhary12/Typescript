import { User, Address } from './interfaces';

class admmision {
    #user!: User
    #course!: string

    set user(user: User) {
        this.#user = user

    }
    get user(): string {
        return `name is ${this.#user.name} dep is ${this.#user.dep} age is ${this.#user.age} lives in ${this.#user.address.city}/${this.#user.address.state}/${this.#user.address.country}`
    }
    set course(course: string) {
        this.#course = course
    }

    get course(): string {
        return `course enrolled is ${this.#course}`
    }
}

let kiet = new admmision()
kiet.user = { name: "abhinav", age: 25, address: { city: "ghaziabad", country: "india", state: "UP" }, dep: "computer application" }
kiet.course = "MCA"

console.log(`${kiet.course} ${kiet.user} `)