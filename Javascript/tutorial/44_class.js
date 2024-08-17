class Person {
    constructor(fullname, age){
        this.fullname = fullname
        this.age = age
    }

    display(){
        return `Person name is ${this.fullname} and age is ${this.age} years`
    }
}

let person1 = new Person("Smith Peter", 25)
console.log(person1.display());
