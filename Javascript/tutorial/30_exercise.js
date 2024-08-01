function Person(name, age){
    this.name = name
    this.age = age
    this.display = function(){
        console.log(`Name is ${name} and age is ${age} years`);
    }
}

let person1 = new Person('Smith', 20)
let person2 = new Person('Smith', 20)
person1.display()
person2.display()
console.log(`person1 == person2 : ${person1 == person2}`);
console.log(`person1 === person2 : ${person1 === person2}`);