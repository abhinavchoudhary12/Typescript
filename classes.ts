export {}

class Employe {
    stdId!:number;
    name!:string;
    work!:string;
    
    // private salary:number;
    // another way to create private variables
    #salary:number;


    // we can have either parameteried constructor or default constructor
    constructor(id:number,name:string,work:string,salary:number){
        this.stdId=id;
        this.name=name;
        this.work=work;
        this.#salary=salary;
    }
    // static method
    static getname():string{
        return this.name;
    }
    getNameWithWork():string{
        return `${this.name} work is ${this.work} `;
    }

}

let vishal=new Employe(1,"vishal","team lead",85000);
let akshay=new Employe(2,"akshay","unemployed",0);

console.log(vishal.getNameWithWork())
console.log(akshay.getNameWithWork())
console.log(Employe.getname())
console.log(`----------------`)
console.log(`----------------`)


class Student {
    #id!:number;
    #name!:string;
    #course!:string;
    constructor(){

    }
   set name(name:string){
        this.#name=name;
    }
    get name():string{
        return this.#name
    }
    set id(id:number){
        this.#id=id;
    }
    get id():number{
        return this.#id
    }
    set course(course:string){
        this.#course=course;
    }
    get course():string{
        return this.#course
    }
    
    
}

let dagar=new Student()
let shashank=new Student()
let atif=new Student()

dagar.name="abhishek"
dagar.id=1
dagar.course="mca"
shashank.name="shashank"
shashank.id=2
shashank.course="mca"
atif.name="atif"
atif.id=3
atif.course="btech"

console.log(`${dagar.id}. ${dagar.name} is enrolled in ${dagar.course}`)
console.log(`${shashank.id}. ${shashank.name} is enrolled in ${shashank.course}`)
console.log(`${atif.id}. ${atif.name} is enrolled in ${atif.course}`)
