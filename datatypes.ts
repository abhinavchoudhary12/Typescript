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
let fname:string;
fname='abhinav';
console.log(fname)

let result=fname.toUpperCase()
console.log(result)

// 2.number

let num:number=12
let num1:number=12.4
let num2:number=parseInt("13")
console.log(num)
console.log(`this is fixed to decimal from floating ${num1.toFixed()}`)
console.log(num2)


// 3.boolean

let isValid:boolean=false;
console.log(isValid)

// 4.array

let arr:string[];
arr=["akshay"]
arr.push("abhinav")
arr.push("abhishek")

// generic way of declaration an array

let arr1:Array<number>;

arr1=[1,2,3,2]

arr1.push(12)

console.log(arr)
console.log(arr1)



let resultArr=arr1.filter((num)=>num>=2)

console.log(resultArr)


let fnd=arr1.find((num)=>num===5)
console.log(fnd)


let fnd1=arr1.find((num)=>num===2)
console.log(fnd1)

// 5.enum 

// without constant
enum Color{
    Red,
    Green,
    Blue
}

let c=Color.Green
console.log(`this is enum ${c}`)


// with constant

const enum Color1{
    Red,
    Green,
    Blue
}

let c1=Color1.Green
console.log(`this is enum with const${c1}`)



// 6. any

let a:any;



a=12
console.log(`using any ${a}`)


a="string"
console.log(`using any ${a}`)



// 7. tuple


let Student:[stdId:number,name:string]


let studentDetail=(id:number,name:string):[number,string]=>{return[id,name]}


Student=studentDetail(2,"abhinav")

console.log(`the id of student is ${Student[0]} and the name is ${Student[1]}`)

