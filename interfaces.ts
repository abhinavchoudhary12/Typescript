export interface User {
    name: string;
    age: number;
    dep: string;
    address: Address
}

let abhinav: User = { name: "abhinav", age: 25, dep: "mca", address: { country: "india", state: "UP", city: "ghaziabad" } };

console.log(abhinav)

export interface Address {
    country: string;
    state: string;
    city: string
}

